import{d as V,Z as H,i as p,H as T,B as P,o as u,c as w,b as s,w as a,a as o,q as l,t as i,h as z,F as I,s as F,n as M,f as v,g as k,r as n}from"./app.d57d51e9.js";import{P as j}from"./PsLayout.bc5965d6.js";import{P as A}from"./PsBreadcrumb2.761286c6.js";import{u as N}from"./Validators.cb85894a.js";import{P as U}from"./PsInput.b3485f1e.js";import{P as q}from"./PsLabel.06b4363b.js";import{P as R}from"./PsButton.c9fc3d7e.js";import{P as Z,d as G}from"./PsDangerDialog.1643aeb7.js";import{P as J}from"./PsCard.e47b5f14.js";import{P as K}from"./PsIcon.1e42bf4c.js";import{P as O}from"./PsLoading.1f212adc.js";import{P as Q}from"./PsCheckboxValue.373287f4.js";import{a as W,P as X}from"./PsActionModal.7978c60e.js";import{P as Y}from"./PsImageUpload.e74e4503.js";import{P as ee}from"./PsLabelCaption.b0af0e56.js";import{P as te}from"./PsLabelTitle3.78de00b9.js";import{P as se}from"./PsTextarea.2d2fbd18.js";import{P as ae}from"./PsDropdown.0c78da9b.js";import{P as oe}from"./PsDropdownSelect.13d0e05f.js";import{D as re}from"./DatePicker.2eba1133.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsLabelHeader4.ad69cbcb.js";import"./PsDraggable.aca5d6c1.js";import"./main.f21f1fe5.js";import"./index.edd1d404.js";const le=V({name:"Edit",components:{Head:H,PsBreadcrumb2:A,PsImageUpload:Y,PsInput:U,PsLabel:q,PsButton:R,PsLabelHeader6:Z,PsCard:J,PsIcon:K,PsLoading:O,PsCheckboxValue:Q,PsActionModal:W,PsImageIconModal:X,PsDangerDialog:G,PsLabelCaption:ee,PsLabelTitle3:te,PsTextarea:se,PsDropdown:ae,PsDropdownSelect:oe,DatePicker:re},layout:j,props:["errors","transaction","packages"],setup(e){const t=p(!1),f=p(!1),$=p(),C=p(),E=p(),b=p(),c=p(),{isEmpty:h}=N(),m=(d,_)=>{e.errors[d]=_?"":h(d,_),d=="payment_status"&&(c.value.isError=e.errors.payment_status!="")};let g=T({package_id:e.transaction.package_id,user_id:e.transaction.user_id,status:e.transaction.status=="0"?"":String(e.transaction.status),payment_method:"offline",_method:"put"});function y(d){this.$inertia.post(route("offline_package.update",d),g,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,f.value=!0,setTimeout(()=>{f.value=!1},2e3)},onError:()=>{b.value.isError=e.errors.date_range!="",c.value.isError=e.errors.payment_status!="",t.value=!1}})}return{types:[{id:"1",name:"Approved"},{id:"2",name:"Rejected"}],date_range:b,payment_status:c,validateEmptyInput:m,handleSubmit:y,ps_action_modal:$,form:g,loading:t,success:f,ps_danger_dialog:E,ps_image_icon_modal:C}},computed:{breadcrumb(){return[{label:P("core__be_dashboard_label"),url:route("admin.index")},{label:P("offline_package_module"),url:route("offline_package.index")},{label:P("core__be_edit_offline_package"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("offline_package.index"))}}}),ie={class:"rounded-xl"},me={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},de={class:"px-4 pt-6 dark:bg-backgroundDark"},pe={class:"grid w-full sm:w-1/2 gap-6"},ue=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ce=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),_e=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),fe={class:"rounded-md shadow-xs w-56"},be={class:"pt-2 z-30"},ge=["onClick"],ye={class:"flex flex-row justify-end mb-2.5"};function ve(e,t,f,$,C,E){const b=n("Head"),c=n("ps-breadcrumb-2"),h=n("ps-label-header-6"),m=n("ps-label"),g=n("ps-input"),y=n("ps-label-caption"),D=n("ps-dropdown-select"),d=n("ps-dropdown"),_=n("ps-button"),B=n("ps-loading"),S=n("ps-icon"),x=n("ps-card"),L=n("ps-layout");return u(),w(I,null,[s(b,{title:e.$t("core__be_edit_offline_package")},null,8,["title"]),s(L,null,{default:a(()=>[s(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s(x,{class:"w-full h-auto mb-20"},{default:a(()=>[o("div",ie,[o("div",me,[s(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[l(i(e.$t("core__be_package_bought_information")),1)]),_:1})]),o("div",de,[o("form",{onSubmit:t[5]||(t[5]=z(r=>e.handleSubmit(e.transaction.id),["prevent"]))},[o("div",pe,[o("div",null,[s(m,{class:"text-base"},{default:a(()=>[l(i(e.$t("core__be_bought_user_label")),1),ue]),_:1}),s(g,{type:"text",value:this.transaction.user.name,"onUpdate:value":t[0]||(t[0]=r=>this.transaction.user.name=r),placeholder:e.$t("core__be_bought_user_placeholder")},null,8,["value","placeholder"])]),o("div",null,[s(m,{class:"text-base"},{default:a(()=>[l(i(e.$t("core__be_select_package")),1),ce]),_:1}),l(i(e.transaction.package.value),1),s(y,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[l(i(e.errors.package_id),1)]),_:1})]),o("div",null,[s(m,{class:"text-base"},{default:a(()=>[l(i(e.$t("core__be_payment_status")),1),_e]),_:1}),s(d,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[s(D,{placeholder:e.$t("core__be_select_payment_status"),selectedValue:e.form.status==""?"":e.types.filter(r=>r.id==e.form.status)[0].name,onChange:t[1]||(t[1]=r=>e.validateEmptyInput("payment_status",e.form.status)),onBlur:t[2]||(t[2]=r=>e.validateEmptyInput("payment_status",e.form.status))},null,8,["placeholder","selectedValue"])]),list:a(()=>[o("div",fe,[o("div",be,[o("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:t[3]||(t[3]=r=>[e.form.status="",e.validateEmptyInput("payment_status",e.form.status)])},[s(m,{class:"text-secondary-200"},{default:a(()=>[l(i(e.$t("core__be_select_payment_status")),1)]),_:1})]),(u(!0),w(I,null,F(e.types,r=>(u(),w("div",{key:r.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:ke=>[e.form.status=r.id,e.validateEmptyInput("payment_status",e.form.status)]},[s(m,{class:M(["ms-2",r.id==e.form.status?" font-bold":""])},{default:a(()=>[l(i(r.name),1)]),_:2},1032,["class"])],8,ge))),128))])])]),_:1}),s(y,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[l(i(e.errors.payment_status),1)]),_:1})]),o("div",ye,[s(_,{onClick:t[4]||(t[4]=r=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:a(()=>[l(i(e.$t("core__be_btn_cancel")),1)]),_:1}),s(_,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(u(),v(B,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):k("",!0),e.success?(u(),v(S,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):k("",!0),e.success?(u(),v(m,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[l(i(e.$t("core__be_btn_saved")),1)]),_:1})):k("",!0),!e.loading&&!e.success?(u(),v(m,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[l(i(e.$t("core__be_btn_save")),1)]),_:1})):k("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var it=ne(le,[["render",ve]]);export{it as default};
