import{d as D,p as F,Z as H,i as a,B as s,o as y,c as v,b as n,w as c,a as S,q as k,t as w,n as $,g as O,F as B,O as C,r as l}from"./app.d57d51e9.js";import{P as R}from"./PsLayout.bc5965d6.js";import{P as j}from"./PsLabel.06b4363b.js";import{P as I}from"./PsButton.c9fc3d7e.js";import{P as L}from"./PsTable2.1a00358d.js";import{P as N}from"./PsAlert.0ab579ab.js";import{P as T}from"./PsBreadcrumb2.761286c6.js";import{P as V}from"./PsIcon.1e42bf4c.js";import{P as A}from"./PsRating.47d364e7.js";import{c as U}from"./PsDangerDialog.1643aeb7.js";import{P as q}from"./PsIconButton.4f6354e0.js";import{D as x}from"./DatePicker.2eba1133.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsLoading.1f212adc.js";import"./PsInput.b3485f1e.js";import"./PsLabelCaption.b0af0e56.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsTableSearch.3fb07b86.js";import"./moment.9709ab41.js";import"./main.f21f1fe5.js";import"./index.edd1d404.js";const E=D({name:"Index",components:{Link:F,Head:H,PsLabel:j,PsButton:I,PsTable2:L,PsAlert:N,PsBreadcrumb2:T,PsIcon:V,PsRating:A,PsTextButton:U,DatePicker:x,PsIconButton:q},layout:R,props:{can:Object,status:Object,categories:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let i=e.search?a(e.search):a(""),m=e.sort_field?a(e.sort_field):a(""),p=e.sort_order?a(e.sort_order):a("desc"),d=e.selectedDate?a(e.selectedDate):a("");const P=[{placeholder:s("select_date"),field:"added_date",filterType:"date_range"}],u=[{label:s("core__be_categories_label"),field:"name",type:"String"},{label:s("core__be_engagement_label"),field:"category_touch_count",type:"Integer"},{label:s("core__be_date_label"),field:"added_date",type:"Date"},{label:s("core__be_detail_label"),field:"detail",type:"Action",sort:!1}];function _(t){m.value=t.field,p.value=t.sort_order,r()}function f(t){i.value=t,r(1)}function b(t){r(1,t)}function g(t){d.value=t;let o=e.users.meta.current_page;r(o)}function r(t=null,o=null){C.get(route("category_report.index"),{sort_field:m.value,sort_order:p.value,page:t!=null?t:e.categories.meta.current_page,row:o!=null?o:e.categories.meta.per_page,date_filter:d.value,search:i.value},{preserveScroll:!0,preserveState:!0})}function h(t){d.value=t,r(1)}return{dateFilter:h,handleRow:b,handleSearchingSorting:r,handleSearching:f,handleSorting:_,columns:u,searchOptions:P,selected_date:d,handleDatefilter:g}},methods:{handleDetail(e){this.$inertia.get(route("category_report.show",e))}},computed:{breadcrumb(){return[{label:s("core__be_dashboard_label"),url:route("admin.index")},{label:s("category_report_module"),color:"text-primary-500"}]}}}),Z=["href"],G={key:0,class:"flex flex-row mb-2"},J={key:1,class:"flex flex-row mb-2"};function K(e,i,m,p,d,P){const u=l("Head"),_=l("ps-breadcrumb-2"),f=l("ps-icon"),b=l("date-picker"),g=l("ps-rating"),r=l("ps-text-button"),h=l("ps-table2"),t=l("ps-layout");return y(),v(B,null,[n(u,{title:e.$t("category_report_module")},null,8,["title"]),n(t,null,{default:c(()=>[n(_,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),n(h,{row:e.row,search:e.search,object:this.categories,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,eye_filter:!1,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow},{searchLeft:c(()=>[S("div",null,[S("a",{href:e.route("category_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-4 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[n(f,{name:"fileUpload",class:"me-2 font-semibold"}),k(w(e.$t("core__be_export_btn")),1)],8,Z)])]),searchRight:c(()=>[n(b,{class:$(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",e.selected_date==null||e.selected_date==""?"w-48":"w-64"]),value:e.selected_date,"onUpdate:value":i[0]||(i[0]=o=>e.selected_date=o),onDatepick:e.dateFilter,range:!0,inline:!1,autoApply:!1},null,8,["class","value","onDatepick"])]),tableRow:c(o=>[o.field=="overall_rating"?(y(),v("div",G,[n(g,{grade:o.row.overall_rating,hasCounter:!0},null,8,["grade"])])):O("",!0),o.field=="detail"?(y(),v("div",J,[n(r,{onClick:M=>e.handleDetail(o.row.id)},{default:c(()=>[k(w(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):O("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow"])]),_:1})],64)}var Ie=z(E,[["render",K]]);export{Ie as default};
