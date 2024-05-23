import{P as S}from"./PsLayout.bc5965d6.js";import{d as D,Z as H,p as T,i as m,H as z,B as j,o as p,c as w,b as r,w as l,a as s,q as n,t as a,g as f,f as C,F as L,s as F,n as V,r as d}from"./app.d57d51e9.js";import{u as q}from"./Validators.cb85894a.js";import{P as K}from"./PsBreadcrumb2.761286c6.js";import{P as N}from"./PsLabelHeader4.ad69cbcb.js";import{P as R}from"./PsTooltip.2ee6eee2.js";import{P as U}from"./PsIcon.1e42bf4c.js";import{P as W}from"./PsInput.b3485f1e.js";import{P as Z}from"./PsInputWithRightIcon.8c9e6c80.js";import{P as A}from"./PsLabel.06b4363b.js";import{P as G}from"./PsLabelCaption.b0af0e56.js";import{P as J}from"./PsButton.c9fc3d7e.js";import{P as M}from"./PsLoading.1f212adc.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsDangerDialog.1643aeb7.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";const Q=D({name:"Edit",components:{Head:H,Link:T,PsBreadcrumb2:K,PsLabelHeader6:N,PsTooltip:R,PsIcon:U,PsInput:W,PsInputWithRightIcon:Z,PsLabel:A,PsLabelCaption:G,PsButton:J,PsLoading:M},layout:S,props:["builder_setting","errors"],setup(e){const t=m(!1),y=m(!1),P=m(!0),v=m(!0);let x=z({project_url:e.builder_setting.project_url,token:e.builder_setting.token,builder_url:e.builder_setting.builder_url});const c=[{label:"builder_setting_module",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-167764/af19f3c3f0ff989"}],k=m(c[0].label),g=m(c[0].docu),{isEmpty:b}=q(),I=(i,$,B="")=>{e.errors[i]=$?"":b(i,$,B)};async function u(i){v.value=!1,await navigator.clipboard.writeText(i),setInterval(()=>{v.value=!0},1e3)}function h(i){k.value=i.label,g.value=i.docu}function _(){this.$inertia.get(route("builder_setting.index"))}function E(i){this.$inertia.post(route("builder_setting.update",i),x,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,y.value=!0,setTimeout(()=>{y.value=!1,P.value=!1,setTimeout(()=>{P.value=!0},200)},1e3)},onError:()=>{t.value=!1}})}return{title:k,docu:g,loading:t,success:y,copied:v,form:x,settingColumn:c,copy:u,changeSection:h,validateEmptyInput:I,handleCancel:_,handleSubmit:E}},computed:{breadcrumb(){return[{label:j("core__be_dashboard_label"),url:route("admin.index")},{label:j("builder_setting_module"),color:"text-primary-500"}]}}}),X={class:"w-full h-auto"},Y={class:"bg-background dark:bg-secondaryDark-black rounded-lg mb-20"},ee={class:"bg-primary-50 flex items-center dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},te={class:"h-8 flex items-center"},oe=n(" For more details: "),re=["href"],le={class:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"},se={key:0},ae={class:"px-4 py-3"},ne={class:"px-4 py-3"},ie={class:"px-4 py-3"},de={href:"https://www.docs.panacea-soft.com/psx-mpc/setup/setup-admin-panel/setup-your-own-api-token",target:"_blank",class:"underline underline-offset-2 text-primary-500 mt-2 inline-block cursor-pointer"},ue={class:"px-4 py-3"},pe={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"},me={class:"px-4"},ce=["onClick"];function be(e,t,y,P,v,x){const c=d("Head"),k=d("ps-breadcrumb-2"),g=d("ps-label-header-6"),b=d("ps-icon"),I=d("ps-tooltip"),u=d("ps-label"),h=d("ps-input"),_=d("ps-label-caption"),E=d("ps-input-with-right-icon"),i=d("ps-button"),$=d("ps-loading"),B=d("ps-layout");return p(),w(L,null,[r(c,{title:e.$t("builder_setting_module")},null,8,["title"]),r(B,null,{default:l(()=>[s("div",null,[r(k,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s("div",X,[s("div",Y,[s("div",ee,[r(g,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[n(a(e.$t(e.title)),1)]),_:1}),r(I,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:l(()=>[s("div",te,[r(b,{name:"info",w:"20",h:"20",class:"ms-2.5 transition-all duration-300 text-primary-500"})])]),tooltips:l(()=>[oe,s("a",{target:"_blank",href:e.docu,class:"underline"},"Refer to this doc",8,re)]),_:1})]),s("div",null,[s("div",le,[s("div",null,[e.title==e.settingColumn[0].label?(p(),w("div",se,[s("div",ae,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[n(a(e.$t("core_be__domain")),1)]),_:1}),r(h,{type:"text",disabled:"",value:e.form.project_url,"onUpdate:value":t[0]||(t[0]=o=>e.form.project_url=o),placeholder:e.$t("core_be__domain"),onKeyup:t[1]||(t[1]=o=>e.validateEmptyInput("project_url",e.form.project_url)),onBlur:t[2]||(t[2]=o=>e.validateEmptyInput("project_url",e.form.project_url))},null,8,["value","placeholder"]),r(_,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[n(a(e.errors.project_url),1)]),_:1})]),s("div",ne,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[n(a(e.$t("core_be__api_token")),1)]),_:1}),r(E,{type:"text",value:e.form.token,"onUpdate:value":t[4]||(t[4]=o=>e.form.token=o),placeholder:e.$t("core_be__api_token"),theme:"pe-12 dark:bg-secondaryDark-black text-secondary-700 dark:text-secondary-700 dark:border-secondary-800",rounded:"rounded",onKeyup:t[5]||(t[5]=o=>e.validateEmptyInput("token",e.form.token)),onBlur:t[6]||(t[6]=o=>e.validateEmptyInput("token",e.form.token))},{icon:l(()=>[r(b,{class:"dark:text-secondary-700",name:e.copied?"clipboard-icon":"check",w:"24",h:"24",onClick:t[3]||(t[3]=o=>e.copy(e.form.token))},null,8,["name"])]),_:1},8,["value","placeholder"]),r(_,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[n(a(e.errors.token),1)]),_:1})]),s("div",ie,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[n(a(e.$t("core_be__guide_link")),1)]),_:1}),s("a",de,a(e.$t("core_be__create_and_update_api_token")),1)]),s("div",ue,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[n(a(e.$t("core_be__builder_url")),1)]),_:1}),r(h,{type:"text",value:e.form.builder_url,"onUpdate:value":t[7]||(t[7]=o=>e.form.builder_url=o),placeholder:e.$t("core_be__builder_url"),onKeyup:t[8]||(t[8]=o=>e.validateEmptyInput("builder_url",e.form.builder_url)),onBlur:t[9]||(t[9]=o=>e.validateEmptyInput("builder_url",e.form.builder_url))},null,8,["value","placeholder"]),r(_,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[n(a(e.errors.builder_url),1)]),_:1})])])):f("",!0),s("div",pe,[r(i,{onClick:t[10]||(t[10]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[n(a(e.$t("core__be_btn_cancel")),1)]),_:1}),r(i,{onClick:t[11]||(t[11]=o=>e.handleSubmit(e.$page.props.builder_setting.id)),class:"transition-all duration-300 min-w-3xs",padding:"px-8 py-0",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(p(),C($,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(p(),C(b,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(p(),C(u,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:l(()=>[n(a(e.$t("core__be_btn_saved")),1)]),_:1})):f("",!0),!e.loading&&!e.success?(p(),C(u,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:l(()=>[n(a(e.$t("core__be_btn_save")),1)]),_:1})):f("",!0)]),_:1})])]),s("div",me,[(p(!0),w(L,null,F(e.settingColumn,o=>(p(),w("div",{key:o.id},[s("div",{onClick:_e=>e.changeSection(o),class:V([e.title==o.label?"border-l border-s-primary-500":"border-l border-s-secondary-300","px-2 py-3 cursor-pointer"])},[r(u,{textColor:e.title==o.label?"text-primary-500 dark:text-primary-500":"text-secondary-800 dark:text-white"},{default:l(()=>[n(a(e.$t(o.label)),1)]),_:2},1032,["textColor"])],10,ce)]))),128))])])])])])])]),_:1})],64)}var Je=O(Q,[["render",be]]);export{Je as default};