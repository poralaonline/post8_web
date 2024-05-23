import{d as j,p as N,Z as O,i as a,B as r,o as c,c as m,b as n,w as l,q as p,t as f,f as D,g,m as R,a as T,F,s as z,x as E,O as I,r as i,E as V}from"./app.d57d51e9.js";import L from"./PsVendorLayout.91533ecb.js";import{P as q}from"./PsLabel.06b4363b.js";import{P as U}from"./PsButton.c9fc3d7e.js";import{P as x}from"./PsTable2.1a00358d.js";import{P as M}from"./PsAlert.0ab579ab.js";import{P as Z}from"./PsBreadcrumb2.761286c6.js";import{d as G}from"./PsDangerDialog.1643aeb7.js";import{P as J}from"./PsToggle.fddd5498.js";import{P as K}from"./PsIcon.1e42bf4c.js";import{P as Q}from"./PsBannerIcon.0cb3925c.js";import{P as W}from"./PsIconButton.4f6354e0.js";import{P as X}from"./PsBadge.03793e3e.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./TitleBar.ce0e8418.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./Icons.ebbb778b.js";import"./toggle.6b621a64.js";import"./SidebarMenu.51fb1869.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsTableSearch.3fb07b86.js";import"./moment.9709ab41.js";import"./PsIcon1.c6e725b1.js";const ee=j({name:"Index",components:{Link:N,Head:O,PsLabel:q,PsButton:U,PsTable2:x,PsAlert:M,PsBreadcrumb2:Z,PsDangerDialog:G,PsToggle:J,PsIcon:K,PsBannerIcon:Q,PsIconButton:W,PsBadge:X},layout:L,props:{status:Object,orders:Object,vendorPaymentStatuses:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let d=a(!1);console.log(e.orders);const h=a(),B=a(),A=[{field:"action"},{label:r("core_vendor__order_id"),field:"order_code",type:"String",action:"Action"},{label:r("core_vendor__customer_info"),field:"owner_id@@name",type:"String",action:"Action"},{label:r("core_vendor__item_qty"),field:"quantity",type:"String",action:"Action"},{label:r("core_vendor__total_amount"),field:"total_price",type:"String",action:"Action"},{label:r("core_vendor__payment_status"),field:"vendor_payment_status_id@@name",type:"String",action:"Action"},{label:r("core_vendor__order_status"),field:"order_status_id@@name",type:"String",action:"Action"},{label:r("core_vendor__order_date"),field:"order_date",type:"Timestamp",action:"Action"}],H=a(!1),C=a(!1);let b=e.search?a(e.search):a(""),_=e.sort_field?a(e.sort_field):a(""),v=e.sort_order?a(e.sort_order):a("desc");function y(t){_.value=t.field,v.value=t.sort_order,u()}function w(){selected_cat.value="all",selected_sub_cat.value="all",selected_city.value="all",selected_township.value="all",u()}function k(t){b.value=t,u(1)}function $(t){u(1,t)}function u(t=null,o=null){I.get(route("vendor_order_list.index"),{sort_field:_.value,sort_order:v.value,page:t!=null?t:e.orders.meta.current_page,row:o!=null?o:e.orders.meta.per_page,search:b.value},{preserveScroll:!0,preserveState:!0})}function P(t){h.value.openModal(r("core_vendor__delete"),r("core_vendor__delete_order_info"),r("core__be_btn_confirm"),r("core__be_btn_cancel"),()=>{I.delete(route("vendor_order_list.destroy",t),{onSuccess:()=>{d.value=!0,setTimeout(()=>{d.value=!1},3e3)},onError:()=>{d.value=!0,setTimeout(()=>{d.value=!1},3e3)}})},()=>{})}return{visible:d,columns:A,colFilterOptions:B,showFilter:H,clearFilter:C,visible:d,handleSorting:y,handleSearchingSorting:u,handleClearFilter:w,handleRow:$,handleSearching:k,ps_danger_dialog:h,confirmDeleteClicked:P}},computed:{breadcrumb(){return[{label:r("core__vendor_my_store_module"),url:route("vendor_info.index")},{label:r("core__vendor_order_list_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("vendor_order_status.create"))},handleEdit(e){this.$inertia.get(route("vendor_order_list.edit",e))},handlePublish(e,d,h){h&&this.$inertia.put(route("vendor_order_status.statusChange",[e,d]))}}}),oe={key:0,class:"flex flex-row"},te={key:0,class:"flex items-center gap-2"},re={class:"w-6 h-6 rounded-full object-cover",width:"24px",height:"24px"},ne={key:1,class:""},ae={key:2,class:""},le={key:3,class:""};function se(e,d,h,B,A,H){const C=i("Head"),b=i("ps-breadcrumb-2"),_=i("ps-label"),v=i("ps-banner-icon"),y=i("ps-icon"),w=i("ps-button"),k=i("ps-danger-dialog"),$=i("ps-badge"),u=i("ps-table2"),P=i("ps-layout"),t=V("lazy");return c(),m(F,null,[n(C,{title:e.$t("core__vendor_order_list_module")},null,8,["title"]),n(P,null,{default:l(()=>[n(b,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),n(_,{class:"text-xl font-semibold"},{default:l(()=>[p(f(e.$t("core__vendor_order_list_module")),1)]),_:1}),e.visible?(c(),D(v,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:l(()=>[p(f(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):g("",!0),n(u,{row:e.row,search:e.search,object:this.orders,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search_payment"),onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{tableActionRow:l(o=>[o.field=="action"?(c(),m("div",oe,[n(w,{disabled:!o.row.authorizations.update,onClick:s=>e.handleEdit(o.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:l(()=>[n(y,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(w,{disabled:!o.row.authorizations.delete,onClick:s=>e.confirmDeleteClicked(o.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:l(()=>[n(y,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(k,{ref:"ps_danger_dialog"},null,512)])):g("",!0)]),tableRow:l(o=>[o.field=="owner_id@@name"?(c(),m("div",te,[R(T("img",re,null,512),[[t,{src:e.$page.props.thumb2xUrl+"/"+o.row.owner.user_cover_photo,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]),n(_,null,{default:l(()=>[p(f(o.row.owner.name),1)]),_:2},1024)])):g("",!0),o.field=="total_price"?(c(),m("div",ne,[n(_,null,{default:l(()=>{var s,S;return[p(f((S=(s=o.row.vendor_transaction)==null?void 0:s.currency)==null?void 0:S.currency_symbol)+f(o.row.total_price),1)]}),_:2},1024)])):g("",!0),o.field=="vendor_payment_status_id@@name"?(c(),m("div",ae,[(c(!0),m(F,null,z(e.vendorPaymentStatuses.filter(s=>s.id==o.row.vendor_payment_status_id),(s,S)=>(c(),D($,{key:S,bgColorCode:s.colour+"20",textColorCode:s.colour,theme:"",class:"m-2"},{default:l(()=>[p(f(s.name),1)]),_:2},1032,["bgColorCode","textColorCode"]))),128))])):g("",!0),o.field=="order_status_id@@name"?(c(),m("div",le,[n(_,{style:E("color:"+o.row.order_status.colour)},{default:l(()=>[p(f(o.row.order_status.name),1)]),_:2},1032,["style"])])):g("",!0)]),_:1},8,["row","search","object","columns","sort_field","sort_order","globalSearchPlaceholder","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Ve=Y(ee,[["render",se]]);export{Ve as default};
