import{P as N}from"./PsLayout.bc5965d6.js";import{d as T,Z as R,i as a,B as i,O as A,o as c,c as S,b as r,w as s,a as B,f as P,q as F,t as $,g as p,F as V,r as l}from"./app.d57d51e9.js";import{P as D}from"./PsInput.b3485f1e.js";import{P as I}from"./PsLabel.06b4363b.js";import{P as z}from"./PsButton.c9fc3d7e.js";import{P as E}from"./PsTextarea.2d2fbd18.js";import{P as M}from"./PsLabelHeader4.ad69cbcb.js";import{P as L}from"./PsIcon.1e42bf4c.js";import{P as q}from"./PsAlert.0ab579ab.js";import{N as G}from"./NewPsDataTable.f7e398fb.js";import{d as U}from"./PsDangerDialog.1643aeb7.js";import{P as Z}from"./PsToggle.fddd5498.js";import{P as J}from"./PsBreadcrumb2.761286c6.js";import{P as K}from"./PsTable2.1a00358d.js";import{P as Q}from"./PsBannerIcon.0cb3925c.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsLoading.1f212adc.js";import"./PsLabelCaption.b0af0e56.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./Icons.ebbb778b.js";import"./PsTableSearch.3fb07b86.js";import"./moment.9709ab41.js";import"./toggle.6b621a64.js";import"./PsIcon1.c6e725b1.js";const X=T({name:"Index",components:{Head:R,PsInput:D,PsLabel:I,PsButton:z,PsTextarea:E,PsLabelHeader4:M,PsIcon:L,PsAlert:q,NewPsDataTable:G,PsDangerDialog:U,PsToggle:Z,PsBreadcrumb2:J,PsTable2:K,PsBannerIcon:Q},layout:N,props:{status:Object,language:Object,menu_groups:Object,checkPermission:Object,showMenuGroupCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const d=["group_name"],O="Search",v=a(),j=a(),H=a();let _=e.search?a(e.search):a(""),h=e.sort_field?a(e.sort_field):a(""),g=e.sort_order?a(e.sort_order):a("desc"),n=a(!1);function u(o){v.value.openModal(i("core__be_delete_menugroup"),i("core__be_delete_menugroup_info"),i("core__be_btn_confirm"),i("core__be_btn_cancel"),()=>{this.$inertia.delete(route("menu_group.destroy",o),{onSuccess:()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)},onError:()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)}})},()=>{})}function f(o){this.$inertia.get(route("menu_group.edit",o))}function w(o,m){m&&this.$inertia.put(route("menu_group.statusChange",o))}function y(){this.$inertia.get(route("menu_group.create"))}function C(o){h.value=o.field,g.value=o.sort_order,k()}function t(o){_.value=o,k(1)}function b(o){k(1,o)}function k(o=null,m=null){A.get(route("menu_group.index"),{sort_field:h.value,sort_order:g.value,page:o!=null?o:e.menu_groups.meta.current_page,row:m!=null?m:e.menu_groups.meta.per_page,search:_.value},{preserveScroll:!0,preserveState:!0})}return{handleEdit:f,ps_danger_dialog:v,confirmClicked:u,handleEdit:f,globalSearchFields:d,globalSearchPlaceholder:O,columns:H,handlePublish:w,handleCreate:y,colFilterOptions:j,handleSorting:C,handleSearching:t,handleRow:b,visible:n}},computed:{breadcrumb(){return[{label:i("core__be_dashboard_label"),url:route("admin.index")},{label:i("menu_group_module"),color:"text-primary-500"}]}},methods:{FilterOptionshandle(e){A.post(route("menu_group.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.menu_groups.per_page,search:this.search.value,current_page:this.menu_groups.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:i(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:i(e.key),key_id:e.key_id,label:i(e.label),module_name:e.module_name}))}}),Y={class:""},x={key:0},ee={class:"flex"},oe={key:0};function te(e,d,O,v,j,H){const _=l("Head"),h=l("ps-breadcrumb-2"),g=l("ps-banner-icon"),n=l("ps-icon"),u=l("ps-button"),f=l("ps-toggle"),w=l("ps-table2"),y=l("ps-danger-dialog"),C=l("ps-layout");return c(),S(V,null,[r(_,{title:e.$t("menu_group_module")},null,8,["title"]),r(C,null,{default:s(()=>[B("div",Y,[r(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(c(),P(g,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:s(()=>[F($(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),r(w,{row:e.row,search:e.search,object:e.menu_groups,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:s(()=>[e.can.createCoreMenu?(c(),P(u,{key:0,onClick:d[0]||(d[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:s(()=>[r(n,{name:"plus",class:"me-1 font-semibold"}),F($(e.$t("core_add_menu_group_module")),1)]),_:1})):p("",!0)]),responsive_button:s(()=>[e.can.createCoreMenu?(c(),P(u,{key:0,onClick:d[1]||(d[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:s(()=>[r(n,{name:"plus",class:"me-1 font-semibold"}),F($(e.$t("core_add_menu_group_module")),1)]),_:1})):p("",!0)]),tableActionRow:s(t=>[t.field=="action"?(c(),S("span",x,[B("div",ee,[r(u,{disabled:!t.row.authorizations.update,onClick:b=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:s(()=>[r(n,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(u,{disabled:!t.row.authorizations.delete,onClick:b=>e.confirmClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:s(()=>[r(n,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])])])):p("",!0)]),tableRow:s(t=>[t.field=="is_show_on_menu"?(c(),S("span",oe,[r(f,{disabled:!t.row.authorizations.update,selectedValue:t.row.is_show_on_menu==1,onClick:b=>e.handlePublish(t.row.id,t.row.authorizations.update)},null,8,["disabled","selectedValue","onClick"])])):p("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"]),r(y,{ref:"ps_danger_dialog"},null,512)])]),_:1})],64)}var ze=W(X,[["render",te]]);export{ze as default};
