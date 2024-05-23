import{P as y}from"./PsLayout.bc5965d6.js";import{d as v,Z as w,H as x,B as c,o as $,c as k,b as o,w as a,a as e,q as n,t as s,m as C,F as I,r,E as B}from"./app.d57d51e9.js";import{P as D}from"./PsBreadcrumb2.761286c6.js";import{P as L}from"./PsInput.b3485f1e.js";import{P as E}from"./PsLabel.06b4363b.js";import{P as H}from"./PsButton.c9fc3d7e.js";import{P as T,d as V,a as j}from"./PsDangerDialog.1643aeb7.js";import{P as F}from"./PsCard.e47b5f14.js";import{P as N}from"./PsIcon.1e42bf4c.js";import{P as U}from"./PsLoading.1f212adc.js";import{P as z}from"./PsCheckboxValue.373287f4.js";import{a as M,P as q}from"./PsActionModal.7978c60e.js";import{P as A}from"./PsLabelTitle3.78de00b9.js";import{P as S}from"./PsTextarea.2d2fbd18.js";import{h as Z}from"./moment.9709ab41.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsLabelCaption.b0af0e56.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsLabelHeader4.ad69cbcb.js";import"./PsDraggable.aca5d6c1.js";const J=v({name:"Edit",components:{Head:w,PsBreadcrumb2:D,PsInput:L,PsLabel:E,PsButton:H,PsLabelHeader6:T,PsCard:F,PsIcon:N,PsLoading:U,PsCheckboxValue:z,PsActionModal:M,PsImageIconModal:q,PsDangerDialog:V,PsLabelCaption3:j,PsLabelTitle3:A,PsTextarea:S},layout:y,props:["errors","contact","defaultProfileImg"],data(){return{moment:Z}},setup(t){return{form:x({contact_name:t.contact.contact_name,contact_email:t.contact.contact_email,contact_phone:t.contact.contact_phone,contact_message:t.contact.contact_message,added_date:t.contact.added_date,owner:t.contact.owner})}},computed:{breadcrumb(){return[{label:c("core__be_dashboard_label"),url:route("admin.index")},{label:c("contact_us_message_module"),url:route("contact.index")},{label:c("core__contact_us_message_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("contact.index"))}}}),K={class:"rounded-xl"},O={class:"bg-primary-50 dark:bg-primary-900 rounded-t-xl py-2.5 ps-4"},Q={class:"px-4 pt-6 dark:bg-backgroundDark"},R={class:"bg-secondary-50 dark:bg-secondary-900 rounded py-3 px-4 mb-2 text-base w-full shadow-sm"},W={class:"flex w-full justify-between"},X={class:"text-sm flex flex-row"},Y={class:"text-sm"},tt={class:"ms-12 mt-4"},ot={class:"mb-2.5 flex flex-row justify-end"};function et(t,m,at,st,rt,nt){const p=r("Head"),_=r("ps-breadcrumb-2"),u=r("ps-label-header6"),l=r("ps-label"),f=r("ps-label-caption-3"),b=r("ps-button"),g=r("ps-card"),P=r("ps-layout"),h=B("lazy");return $(),k(I,null,[o(p,{title:t.$t("core__contact_us_message_detail")},null,8,["title"]),o(P,null,{default:a(()=>[o(_,{items:t.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(g,{class:"w-full h-auto"},{default:a(()=>{var i;return[e("div",K,[e("div",O,[o(u,null,{default:a(()=>[n(s(t.$t("core__contact_us_message_detail")),1)]),_:1})]),e("div",Q,[e("div",R,[e("div",W,[e("span",X,[C(e("img",{width:"20",height:"20",class:"mx-2 inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover",alt:"Profile photo",onError:m[0]||(m[0]=(...d)=>t.defaultProfileImg&&t.defaultProfileImg(...d))},null,544),[[h,{src:t.$page.props.uploadUrl+"/"+((i=t.form.owner)==null?void 0:i.user_cover_photo),loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_profile.png"}]]),o(l,{class:"font-semibold"},{default:a(()=>[n(s(t.form.contact_name),1)]),_:1})]),o(l,{class:"text-xxs sm:text-xs font-semibold"},{default:a(()=>[n(s(t.moment(t.contact.added_date).format(t.$page.props.dateFormat)),1)]),_:1})]),e("span",Y,[o(f,{class:"ms-12"},{default:a(()=>[n("by : "+s(t.form.contact_email),1)]),_:1}),o(l,{class:"ms-12 mt-0.5"},{default:a(()=>[n(s(t.$t("core__be_contact_number"))+" : "+s(t.form.contact_phone),1)]),_:1})]),e("div",tt,[o(l,{class:"text-xs sm:text-sm lg:text-lg"},{default:a(()=>[n(s(t.form.contact_message),1)]),_:1})]),e("div",ot,[o(b,{type:"button",onClick:m[1]||(m[1]=d=>t.handleCancel())},{default:a(()=>[n(s(t.$t("core__be_btn_back")),1)]),_:1})])])])])]}),_:1})]),_:1})],64)}var Zt=G(J,[["render",et]]);export{Zt as default};
