import{d as H,Z as T,p as U,i as h,H as V,B as E,o as r,c as p,b as a,w as n,a as b,q as s,t as u,h as z,F as C,s as I,g as i,f as g,r as d}from"./app.d57d51e9.js";import{P as N}from"./PsLayout.bc5965d6.js";import{u as j}from"./Validators.cb85894a.js";import{P as q}from"./PsInput.b3485f1e.js";import{P as G}from"./PsLabel.06b4363b.js";import{P as M}from"./PsButton.c9fc3d7e.js";import{P as Z}from"./PsTextarea.2d2fbd18.js";import{P as A}from"./PsLabelHeader4.ad69cbcb.js";import{P as J}from"./PsIcon.1e42bf4c.js";import{P as O}from"./PsLoading.1f212adc.js";import{c as Q}from"./PsDangerDialog.1643aeb7.js";import{P as R}from"./PsBreadcrumb2.761286c6.js";import{P as W}from"./PsCheckboxValue.373287f4.js";import{P as X}from"./PsLabelCaption.b0af0e56.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";const x=H({name:"Create",components:{Head:T,PsInput:q,PsLabel:G,PsButton:M,PsTextarea:Z,PsLabelHeader4:A,PsIcon:J,PsLoading:O,PsTextButton:Q,Link:U,PsBreadcrumb2:R,PsCheckboxValue:W,PsLabelCaption:X},layout:N,props:["errors","coreFieldFilterSettings"],setup(e){const{isEmpty:o,minLength:L}=j(),y=h(!1),$=h(!1),K=h(!1),w=h(!1),B=h(!1);let l=V({group_name:"",group_lang_key:"",is_show_on_menu:1,is_invisible_group_name:0});const v=(_,f)=>{e.errors[_]=f?L(_,f,3):o(_,f)},c=(_,f,S="")=>{e.errors[_]=f?"":o(_,f,S)};function P(){this.$inertia.post(route("menu_group.store"),l,{forceFormData:!0,onBefore:()=>{y.value=!0},onSuccess:()=>{y.value=!1,$.value=!0,setTimeout(()=>{$.value=!1},2e3)},onError:()=>{y.value=!1}})}return{validateGroupNameInput:v,validateEmptyInput:c,route,form:l,handleSubmit:P,loading:y,success:$,input_name:B,input_icon:K,input_lang:w}},computed:{breadcrumb(){return[{label:E("core__be_dashboard_label"),url:route("admin.index")},{label:E("menu_group_module"),url:route("menu_group.index")},{label:E("add_menu_group"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("menu_group.index"))}}}),F={class:""},ee={class:"max-w-lg"},te={class:"mt-8 rounded-lg bg-white dark:bg-secondaryDark-black shadow-sm"},oe={key:0,class:"text-red-800 font-medium ms-1"},re={key:0,class:"text-red-800 font-medium ms-1"},ae={key:0,class:"text-red-800 font-medium ms-1"},ne={class:"mb-6"},se=s("Status"),le={class:"mb-6"},me={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function ue(e,o,L,y,$,K){const w=d("Head"),B=d("ps-breadcrumb-2"),l=d("ps-label"),v=d("ps-input"),c=d("ps-label-caption"),P=d("ps-checkbox-value"),_=d("ps-button"),f=d("ps-loading"),S=d("ps-icon"),D=d("ps-layout");return r(),p(C,null,[a(w,{title:e.$t("create_menu_group")},null,8,["title"]),a(D,null,{default:n(()=>[b("div",F,[a(B,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),b("div",ee,[b("div",te,[a(l,{class:"text-lg px-4 py-2.5 bg-primary-50 dark:bg-primary-900"},{default:n(()=>[s(u(e.$t("add_menu_group")),1)]),_:1}),b("form",{onSubmit:o[6]||(o[6]=z((...t)=>e.handleSubmit&&e.handleSubmit(...t),["prevent"]))},[(r(!0),p(C,null,I(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="group_name"&&t.enable===1&&t.is_delete===0),(t,k)=>(r(),p("div",{class:"mb-6 mt-4",key:k},[a(l,{class:"text-base mb-2"},{default:n(()=>[s(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(r(),p("span",oe,"*")):i("",!0)]),_:2},1024),a(v,{ref_for:!0,ref:"group_name",type:"text",value:e.form.group_name,"onUpdate:value":o[0]||(o[0]=m=>e.form.group_name=m),placeholder:e.$t(t.placeholder),onKeyup:m=>t.mandatory==1?e.validateEmptyInput("group_name",e.form.group_name):"",onBlur:m=>t.mandatory==1?e.validateEmptyInput("group_name",e.form.group_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(r(),g(c,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[s(u(e.errors.group_name),1)]),_:1})):i("",!0)]))),128)),(r(!0),p(C,null,I(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="group_lang_key"&&t.enable===1&&t.is_delete===0),(t,k)=>(r(),p("div",{class:"mb-6",key:k},[a(l,{class:"text-base mb-2"},{default:n(()=>[s(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(r(),p("span",re,"*")):i("",!0)]),_:2},1024),a(v,{ref_for:!0,ref:"group_lang_key",type:"text",value:e.form.group_lang_key,"onUpdate:value":o[1]||(o[1]=m=>e.form.group_lang_key=m),placeholder:e.$t(t.placeholder),onKeyup:m=>t.mandatory==1?e.validateEmptyInput("group_lang_key",e.form.group_lang_key):"",onBlur:m=>t.mandatory==1?e.validateEmptyInput("group_lang_key",e.form.group_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(r(),g(c,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[s(u(e.errors.group_lang_key),1)]),_:1})):i("",!0)]))),128)),(r(!0),p(C,null,I(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="ordering"&&t.enable===1&&t.is_delete===0),(t,k)=>(r(),p("div",{class:"mb-6",key:k},[a(l,{class:"text-base mb-2"},{default:n(()=>[s(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(r(),p("span",ae,"*")):i("",!0)]),_:2},1024),a(v,{ref_for:!0,ref:"ordering",type:"text",value:e.form.ordering,"onUpdate:value":o[2]||(o[2]=m=>e.form.ordering=m),placeholder:e.$t(t.placeholder),onKeyup:m=>t.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):"",onBlur:m=>t.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(r(),g(c,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[s(u(e.errors.ordering),1)]),_:1})):i("",!0)]))),128)),b("div",ne,[a(l,{class:"text-base mb-2"},{default:n(()=>[se]),_:1}),a(P,{value:e.form.is_show_on_menu,"onUpdate:value":o[3]||(o[3]=t=>e.form.is_show_on_menu=t),class:"font-normal",title:"Publish"},null,8,["value"])]),b("div",le,[a(l,{class:"text-base mb-2"},{default:n(()=>[s(u(e.$t("hide_menu_group_name")),1)]),_:1}),a(P,{value:e.form.is_invisible_group_name,"onUpdate:value":o[4]||(o[4]=t=>e.form.is_invisible_group_name=t),class:"font-normal",title:e.$t("hide")},null,8,["value","title"])]),b("div",me,[a(_,{onClick:o[5]||(o[5]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:n(()=>[s(u(e.$t("core__be_btn_cancel")),1)]),_:1}),a(_,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(r(),g(f,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):i("",!0),e.success?(r(),g(S,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):i("",!0),e.success?(r(),g(l,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[s(u(e.$t("core__be_btn_saved")),1)]),_:1})):i("",!0),!e.loading&&!e.success?(r(),g(l,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[s(u(e.$t("core__be_btn_save")),1)]),_:1})):i("",!0)]),_:1})])],32)])])])]),_:1})],64)}var Ze=Y(x,[["render",ue]]);export{Ze as default};