<?php

namespace Modules\Core\Http\Services;

use App\Http\Services\PsService;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\Item;
use Modules\Core\Entities\Permission;
use Modules\Core\Entities\VendorRole;
use Modules\Core\Entities\VendorRolePermission;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Transformers\Backend\Model\VendorRole\VendorRoleWithKeyResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class VendorRoleService extends PsService
{
    protected $roleTableName, $moduleService, $show, $hide, $delete, $unDelete, $viewAnyAbility, $createAbility, $editAbility, $deleteAbility, $code, $screenDisplayUiKeyCol, $screenDisplayUiIdCol, $screenDisplayUiIsShowCol, $coreFieldFilterModuleNameCol, $customUiIsDelCol;

    public function __construct(VendorModuleService $moduleService)
    {
        $this->moduleService = $moduleService;
        $this->show = Constants::show;
        $this->hide = Constants::hide;
        $this->delete = Constants::delete;
        $this->unDelete = Constants::unDelete;

        $this->viewAnyAbility = Constants::viewAnyAbility;
        $this->createAbility = Constants::createAbility;
        $this->editAbility = Constants::editAbility;
        $this->deleteAbility = Constants::deleteAbility;
        $this->code = Constants::vendorRole;

        $this->screenDisplayUiKeyCol = ScreenDisplayUiSetting::key;
        $this->screenDisplayUiIdCol = ScreenDisplayUiSetting::id;
        $this->screenDisplayUiIsShowCol = ScreenDisplayUiSetting::isShow;

        $this->coreFieldFilterModuleNameCol = CoreFieldFilterSetting::moduleName;

        $this->customUiIsDelCol = CustomizeUi::isDelete;
        $this->roleTableName = VendorRole::tableName;
        $this->roleIdCol = VendorRole::id;
        $this->roleNameCol = VendorRole::name;
        $this->roleDescriptionCol = VendorRole::description;
        $this->roleStatusCol = VendorRole::status;

        $this->rolePermissionRoleIdCol = VendorRolePermission::vendorRoleId;
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $role = new VendorRole();
            $role->name = $request->name;
            $role->description = $request->description;
            // $role->can_access_admin_panel = $request->can_access_admin_panel;
            $role->status = $request->status?$request->status: 1;
            $role->added_user_id = Auth::user()->id;
            $role->save();

            
            $module_and_permission = new \stdClass();
            
            foreach ($request->permissionObj as $permission) {
                if ($permission['value'] != null || $permission['value'] != ''){
                    $module_and_permission->{$permission['key']} = explode(',', $permission['value']);
                }
            }

            $rolePermissions = new VendorRolePermission();
            $rolePermissions->vendor_role_id = $role->id;
            $rolePermissions->module_and_permission = json_encode($module_and_permission);
            $rolePermissions->added_user_id = Auth::user()->id;
            $rolePermissions->save();

            DB::commit();

        }catch (\Throwable $e){
            DB::rollBack();
            dd($e);
            return ['error' => $e->getMessage()];
        }
    }

    public function update($request, $id)
    {
        try{
            //update role name
            $role = VendorRole::find($id);
            $role->name = $request->name;
            $role->description = $request->description;
            // $role->can_access_admin_panel = $request->can_access_admin_panel;
            $role->status = $request->status?$request->status: 1;
            $role->updated_user_id = Auth::user()->id;
            $role->update();

            //delete all old permission
            $roleOldPermissionIds = VendorRolePermission::where('vendor_role_id',$role->id)->get()->pluck('id');
            VendorRolePermission::destroy($roleOldPermissionIds);

            $module_and_permission = new \stdClass();
            
            foreach ($request->permissionObj as $permission) {
                if ($permission['value'] != null || $permission['value'] != ''){
                    $module_and_permission->{$permission['key']} = explode(',', $permission['value']);
                }
            }

            $rolePermissions = new VendorRolePermission();
            $rolePermissions->vendor_role_id = $role->id;
            $rolePermissions->module_and_permission = json_encode($module_and_permission);
            $rolePermissions->added_user_id = Auth::user()->id;
            $rolePermissions->save();

        }catch (\Throwable $e){
            return ['error' => $e->getMessage()];

        }
    }

    public function getVendorRole($id){
        return VendorRole::find($id);
    }

    public function destroy($id){
        $role = $this->getVendorRole($id);
        $name = $role->name;
        $role->delete();

         //delete all old permission
         $roleOldPermissionIds = VendorRolePermission::where('vendor_role_id',$role->id)->get()->pluck('id');
         VendorRolePermission::destroy($roleOldPermissionIds);

         return $name;
    }

    public function searching($query, $conds){
        if (isset($conds['keyword']) && $conds['keyword']) {
            $conds['searchterm'] = $conds['keyword'];
        }
        // searchterm
        if (isset($conds['searchterm']) && $conds['searchterm']) {
            $search = $conds['searchterm'];
            $query->where(function ($query) use ($search) {
                $query->where($this->roleNameCol, 'like', '%' . $search . '%');
                $query->orWhere($this->roleDescriptionCol, 'like', '%' . $search . '%');
            });
        }

        if(isset($conds['status'])){
            $query->where('status', $conds['status']);
        }

        // order by
        if (isset($conds['order_by']) && isset($conds['order_type']) && $conds['order_by'] && $conds['order_type']){
            if($conds['order_by'] == 'id'){
                $query->orderBy($this->roleTableName.'.'.$this->roleIdCol, $conds['order_type']);
            }else{
                $query->orderBy($conds['order_by'], $conds['order_type']);
            }
        }else{
            $query->orderBy($this->roleTableName.'.'.$this->roleNameCol, 'asc')->orderBy($this->roleTableName.'.'.$this->roleStatusCol, 'asc');
        }

        return $query;
    }

    public function getVendorRoles($relations = null, $conds = null, $noPagination = null, $pagPerPage = null, $sort = null ){
        $roles = VendorRole::when($relations, function ($q, $relations){
                        $q->with($relations);
                    })
                    ->when($conds, function ($query, $conds) {
                        $query = $this->searching($query, $conds);
                    })
                    ->latest();
        if ($pagPerPage){
            $roles = $roles->paginate($pagPerPage)->onEachSide(1)->withQueryString();
        } elseif ($noPagination){
            $roles = $roles->get();
        }else{
            $roles = $roles->get();
        }
        return $roles;
    }

    public function getModules(){
        $modules = $this->moduleService->getModules(null, null, null, 1);
        return $modules;
    }

    public function getPermissions(){
        $permissions = Permission::all();
        return $permissions;
    }

	public function index($request){

        $code = $this->code;

        // check permission
        $checkPermission = $this->checkPermission($this->viewAnyAbility, VendorRole::class, "admin.index");

        // Search and filter
        $conds['searchterm'] = $request->input('search') ?? '';

        $conds['order_by']= null;
        $conds['order_type'] = null;
        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field)
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;
        }

        $relations = ['editor', 'owner'];
        $roles = VendorRoleWithKeyResource::collection($this->getVendorRoles($relations, $conds, false, $row));

        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption();
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        if($conds['order_by'])
        {
            $dataArr = [
                "checkPermission" => $checkPermission,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                'roles' => $roles,
                'sort_field' =>$conds['order_by'],
                'sort_order'=>$request->sort_order,
                'search'=>$conds['searchterm'] ,
            ];
        }
        else
        {
            $dataArr = [
                "checkPermission" => $checkPermission,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                'roles' => $roles,
                'search'=>$conds['searchterm'] ,
            ];
        }
        return $dataArr;
    }

    public function create(){

        // check permission start
        $checkPermission = $this->checkPermission($this->createAbility, VendorRole::class, "admin.index");
        // check permission end

        $code = $this->code;

        $modules = $this->getModules();
        $permissions = Permission::latest()->get();

        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);

        $dataArr = [
            "checkPermission" => $checkPermission,
            "modules" => $modules,
            "permissions" => $permissions,
            'coreFieldFilterSettings' => $coreFieldFilterSettings,
        ];

        return $dataArr;

        $dataArr = [
            'modules' => $modules,
            'permissions' => $permissions,
        ];
        return $dataArr;
    }

    public function edit($id){

        $role = VendorRole::find($id);

        $code = $this->code;

        // check permission start
        $checkPermission = $this->checkPermission($this->editAbility, $role, "admin.index");
        // check permission end

        $rolePermissions = VendorRolePermission::where($this->rolePermissionRoleIdCol, $id)->get();
        $modules = $this->getModules();
        $permissions = Permission::latest()->get();

        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);

        $dataArr = [
            'checkPermission' => $checkPermission,
            'role'   => $role,
            'rolePermissions' => $rolePermissions,
            'modules' => $modules,
            "permissions" => $permissions,
            'coreFieldFilterSettings' => $coreFieldFilterSettings
        ];

        return $dataArr;
    }

    public function getCoreFieldFilteredLists($code){
        return CoreFieldFilterSetting::where($this->coreFieldFilterModuleNameCol, $code)->get();
    }

    public function takingForColumnProps($label, $field, $type, $isShowSorting, $ordering){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->field = $field;
        $hideShowCoreAndCustomFieldObj->type = $type;
        $hideShowCoreAndCustomFieldObj->sort = $isShowSorting;
        $hideShowCoreAndCustomFieldObj->ordering = $ordering;
        if ($type !== "Image" && $type !== "MultiSelect" && $type !== "Action"){
        $hideShowCoreAndCustomFieldObj->action = 'Action';
        }

        return $hideShowCoreAndCustomFieldObj;
    }

    public function takingForColumnAndFilterOption(){

        // for table
        $hideShowCoreFieldForColumnArr = [];
        $hideShowCustomFieldForColumnArr = [];

        $showProductCols = [];

        // for eye
        $hideShowFieldForColumnFilterArr = [];

        // for control
        $controlFieldArr = [];
        $controlFieldObj = $this->takingForColumnProps(__('core__be_action'), "action", "Action", false, 0);
        array_push($controlFieldArr, $controlFieldObj);

        $code = $this->code;
        $hiddenForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->hide, $code);
        $shownForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->show, $code);
        $hideShowForCoreAndCustomFields = $shownForCoreAndCustomField->merge($hiddenForCoreAndCustomField);

        foreach ($hideShowForCoreAndCustomFields as $showFields){
        if ($showFields->coreField !== null) {

            $label = $showFields->coreField->label_name;
            $field = $showFields->coreField->field_name;
            $colName = $showFields->coreField->field_name;
            $type = $showFields->coreField->data_type;
            $isShowSorting = $showFields->coreField->is_show_sorting;
            $ordering = $showFields->coreField->ordering;

            $cols = $colName;
            $id = $showFields->id;
            $hidden = $showFields->is_show ? false : true;
            $moduleName = $showFields->coreField->module_name;
            $keyId = $showFields->coreField->id;

            $coreFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type, $isShowSorting, $ordering);
            $coreFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

            array_push($hideShowFieldForColumnFilterArr, $coreFieldObjForColumnFilter);
            array_push($hideShowCoreFieldForColumnArr, $coreFieldObjForColumnsProps);
            array_push($showProductCols, $cols);

        }if ($showFields->customizeField !== null) {

            $label = $showFields->customizeField->name;
            $uiHaveAttribute = [$this->dropDownUi, $this->radioUi];
            if (in_array($showFields->customizeField->ui_type_id, $uiHaveAttribute)){
            $field = $showFields->customizeField->core_keys_id."@@name";
            } else {
            $field = $showFields->customizeField->core_keys_id;
            }
            $type = $showFields->customizeField->data_type;
            $isShowSorting = $showFields->customizeField->is_show_sorting;
            $ordering = $showFields->customizeField->ordering;

            $id = $showFields->id;
            $hidden = $showFields->is_show ? false : true;
            $moduleName = $showFields->customizeField->module_name;
            $keyId = $showFields->customizeField->core_keys_id;

            $customFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type, $isShowSorting, $ordering);
            $customFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

            array_push($hideShowFieldForColumnFilterArr, $customFieldObjForColumnFilter);
            array_push($hideShowCustomFieldForColumnArr, $customFieldObjForColumnsProps);

        }
        }

        // for columns props
        $showCoreAndCustomFieldArr = array_merge($hideShowCoreFieldForColumnArr, $controlFieldArr, $hideShowCustomFieldForColumnArr);
        $sortedColumnArr = columnOrdering("ordering", $showCoreAndCustomFieldArr);

        // for eye
        $hideShowCoreAndCustomFieldArr = array_merge($hideShowFieldForColumnFilterArr);

        $dataArr = [
        "arrForColumnProps" => $sortedColumnArr,
        "arrForColumnFilterProps" => $hideShowCoreAndCustomFieldArr,
        "showCoreField" => $showProductCols,
        ];
        return $dataArr;

    }

    public function hiddenShownForCoreAndCustomField($isShown, $code){
        $hiddenShownForFields = ScreenDisplayUiSetting::with(['customizeField' => function ($q){
        $q->where($this->customUiIsDelCol, $this->unDelete);
        }, 'coreField' => function($q){
            $q->where($this->coreFieldFilterModuleNameCol, $this->code);
        }])
        ->where($this->coreFieldFilterModuleNameCol, $code)
        ->where($this->screenDisplayUiIsShowCol, $isShown)
        ->get();
        return $hiddenShownForFields;
    }

    public function takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->id = $id;
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->key = $field;
        $hideShowCoreAndCustomFieldObj->hidden = $hidden;
        $hideShowCoreAndCustomFieldObj->module_name = $moduleName;
        $hideShowCoreAndCustomFieldObj->key_id = $keyId;

        return $hideShowCoreAndCustomFieldObj;
    }

    public function makeColumnHideShown($request){
        $hideShowFields = $request->value;
//        foreach ($hideShowFields as $hideShowField){
//            $ScreenDisplayUiSetting = ScreenDisplayUiSetting::find($hideShowField[$this->screenDisplayUiIdCol]);
//            $ScreenDisplayUiSetting->is_show = $hideShowField['hidden'] ? $this->hide : $this->show;
//            $ScreenDisplayUiSetting->update();
//        }
        foreach ($hideShowFields as $hideShowField){
            $hideShowFieldData[] = [
                $this->screenDisplayUiIdCol => $hideShowField['id'],
                $this->screenDisplayUiIsShowCol => $hideShowField['hidden'] ? $this->hide : $this->show,
            ];
        }
        ScreenDisplayUiSetting::upsert(
            $hideShowFieldData,
            [$this->screenDisplayUiIdCol], [$this->screenDisplayUiIsShowCol]
        );
    }
}
