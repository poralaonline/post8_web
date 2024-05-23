import{aJ as M,bC as U,d as z,Z as A,i as g,H as O,B as T,o as p,c as _,b as r,w as s,a as l,q as i,t as a,h as V,F,s as W,n as N,f as H,g as k,r as d}from"./app.d57d51e9.js";import{P as R}from"./PsLayout.bc5965d6.js";import{u as j}from"./Validators.cb85894a.js";import{P as q}from"./PsInput.b3485f1e.js";import{P as G}from"./PsLabel.06b4363b.js";import{P as J}from"./PsButton.c9fc3d7e.js";import{P as Z,d as Q}from"./PsDangerDialog.1643aeb7.js";import{P as X}from"./PsCard.e47b5f14.js";import{P as Y}from"./PsIcon.1e42bf4c.js";import{P as x}from"./PsTextarea.2d2fbd18.js";import{P as ee}from"./PsLoading.1f212adc.js";import{P as oe}from"./PsCheckboxValue.373287f4.js";import{a as te,P as ne}from"./PsActionModal.7978c60e.js";import{P as re}from"./PsDropdown.0c78da9b.js";import{P as se}from"./PsDropdownSelect.13d0e05f.js";import{P as ae}from"./PsBreadcrumb2.761286c6.js";import{P as le}from"./PsLabelCaption.b0af0e56.js";import{_ as ie}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsLabelHeader4.ad69cbcb.js";import"./PsDraggable.aca5d6c1.js";const de=M(()=>U(()=>import("./GoogleMapPinPicker.32913044.js"),["assets/GoogleMapPinPicker.32913044.js","assets/index.0d7f04f4.js","assets/app.d57d51e9.js","assets/app.9e35e0da.css","assets/plugin-vue_export-helper.21dcd24c.js"])),pe=M(()=>U(()=>import("./OpenStreetMapPinPicker.221feb40.js"),["assets/OpenStreetMapPinPicker.221feb40.js","assets/OpenStreetMapPinPicker.d9c69d29.css","assets/Control.Geocoder.bdf28440.js","assets/Control.Geocoder.80a0276c.css","assets/app.d57d51e9.js","assets/app.9e35e0da.css","assets/plugin-vue_export-helper.21dcd24c.js"])),me=z({name:"Edit",components:{Head:A,GoogleMapPinPicker:de,OpenStreetMapPinPicker:pe,PsInput:q,PsLabel:G,PsButton:J,PsLabelHeader6:Z,PsCard:X,PsTextarea:x,PsIcon:Y,PsLoading:ee,PsCheckboxValue:oe,PsActionModal:te,PsImageIconModal:ne,PsDangerDialog:Q,PsDropdown:re,PsDropdownSelect:se,PsBreadcrumb2:ae,PsLabelCaption:le},layout:R,props:["errors","township","cities","backendSettings"],data(){return{}},setup(e){const n=g(!1),C=g(!1),y=g(),h=g(),w=g(),v=g(),{isEmpty:f,minLength:P,isLatitude:m,isLongitude:$}=j(),B=(t,o)=>{e.errors[t]=o?P(t,o,3):f(t,o),t=="name"&&(y.value.isError=!!Boolean(e.errors.name))},c=(t,o)=>{e.errors[t]=o?"":f(t,o),t=="location_city_id"&&(h.value.isError=!!Boolean(e.errors.location_city_id))},b=(t,o)=>{e.errors[t]=o?m(t,o):f(t,o),t=="lat"&&(w.value.isError=!!Boolean(e.errors.lat))},E=(t,o)=>{e.errors[t]=o?$(t,o):f(t,o),t=="lng"&&(v.value.isError=!!Boolean(e.errors.lng))},I=t=>{let o=t.keyCode?t.keyCode:t.which;(o<48||o>57)&&t.preventDefault()},L=t=>{let o=t.keyCode?t.keyCode:t.which;(o<48||o>57)&&o!==46&&o!==45&&t.preventDefault()};let u=O({name:e.township.name,location_city_id:e.cities.find(t=>t.id==e.township.location_city_id)?e.township.location_city_id:"",ordering:e.township.ordering,lat:e.township.lat,lng:e.township.lng,description:e.township.description,ordering:e.township.ordering,_method:"put"});function K(t){this.$inertia.post(route("township.update",t),u,{forceFormData:!0,onBefore:()=>{n.value=!0},onSuccess:()=>{n.value=!1,C.value=!0,setTimeout(()=>{this.$inertia.get(route("township.index"))},500)},onError:()=>{n.value=!1,y.value.isError=!!Boolean(e.errors.name),h.value.isError=!!Boolean(e.errors.location_city_id),w.value.isError=!!Boolean(e.errors.lat),v.value.isError=!!Boolean(e.errors.lng)}})}function D(t){u.lat=t.latLng.lat(),u.lng=t.latLng.lng()}function S(t){u.lat=t.lat,u.lng=t.lng}return{validateTownshipNameInput:B,setCoordinates:S,validateCityNameInput:c,validateLatitudeInput:b,validateLongitudeInput:E,onlyNumber:I,onlyNumberWithCustom:L,form:u,handleSubmit:K,updateCoordinates:D,loading:n,success:C,name:y,location_city_id:h,lat:w,lng:v}},computed:{breadcrumb(){return[{label:T("core__be_dashboard_label"),url:route("admin.index")},{label:T("township_module"),url:route("township.index")},{label:T("core__be_edit_township"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("township.index"))}}}),ue={class:"rounded-xl"},_e={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ce={class:"px-4 pt-6 dark:bg-backgroundDark"},fe={class:"grid w-full sm:w-1/2 gap-6"},be=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ge={class:"rounded-md shadow-xs w-56"},ve={class:"pt-2 z-30"},ye={key:0},he={key:1},we=["onClick"],ke=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Ce={key:0,class:"mb-6"},Pe={key:1,class:"mb-6"},$e=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Be=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Ee={class:"mb-2.5 flex flex-row justify-end"},Ie={key:2,class:"transition-all duration-300"},Le={key:3,class:""};function Ke(e,n,C,y,h,w){const v=d("Head"),f=d("ps-breadcrumb-2"),P=d("ps-label-header-6"),m=d("ps-label"),$=d("ps-dropdown-select"),B=d("ps-dropdown"),c=d("ps-label-caption"),b=d("ps-input"),E=d("ps-textarea"),I=d("google-map-pin-picker"),L=d("open-street-map-pin-picker"),u=d("ps-button"),K=d("ps-loading"),D=d("ps-icon"),S=d("ps-card"),t=d("ps-layout");return p(),_(F,null,[r(v,{title:e.$t("core__be_edit_township")},null,8,["title"]),r(t,null,{default:s(()=>[r(f,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(S,{class:"w-full h-auto"},{default:s(()=>[l("div",ue,[l("div",_e,[r(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[i(a(e.$t("core__be_township_info")),1)]),_:1})]),l("div",ce,[l("form",{onSubmit:n[15]||(n[15]=V(o=>e.handleSubmit(this.township.id),["prevent"]))},[l("div",fe,[l("div",null,[r(m,{class:"text-base mb-2"},{default:s(()=>[i(a(e.$t("core__be_select_city")),1),be]),_:1}),r(B,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:s(()=>[r($,{placeholder:e.$t("core__be_select_city"),selectedValue:e.form.location_city_id==""?"":e.cities.filter(o=>o.id==e.form.location_city_id)[0].name,onChange:n[0]||(n[0]=o=>e.validateEmptyInput("city_id",e.form.city_id)),onBlur:n[1]||(n[1]=o=>e.validateEmptyInput("city_id",e.form.city_id))},null,8,["placeholder","selectedValue"])]),list:s(()=>[l("div",ge,[l("div",ve,[e.cities.length==null?(p(),_("div",ye,[r(m,{class:"p-2 flex",onClick:n[2]||(n[2]=o=>e.route("city.index"))},{default:s(()=>[i(a(e.$t("core__be_create_new_city")),1)]),_:1})])):(p(),_("div",he,[(p(!0),_(F,null,W(e.cities,o=>(p(),_("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:De=>[e.form.location_city_id=o.id,e.validateEmptyInput("city_id",e.form.location_city_id)]},[r(m,{class:N(["ms-2",o.id==e.form.location_city_id?" font-bold":""])},{default:s(()=>[i(a(o.name),1)]),_:2},1032,["class"])],8,we))),128))]))])])]),_:1}),r(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(a(e.errors.location_city_id),1)]),_:1})]),l("div",null,[r(m,{class:"text-base mb-2"},{default:s(()=>[i(a(e.$t("core__be_township_name_label")),1),ke]),_:1}),r(b,{type:"text",value:e.form.name,"onUpdate:value":n[3]||(n[3]=o=>e.form.name=o),placeholder:e.$t("core__be_township_name_placeholder"),onKeyup:n[4]||(n[4]=o=>e.validateTownshipNameInput("name",e.form.name)),onBlur:n[5]||(n[5]=o=>e.validateTownshipNameInput("name",e.form.name))},null,8,["value","placeholder"]),r(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(a(e.errors.name),1)]),_:1})]),l("div",null,[r(m,{class:"text-base mb-2"},{default:s(()=>[i(a(e.$t("core__be_ordering_label")),1)]),_:1}),r(b,{type:"text",value:e.form.ordering,"onUpdate:value":n[6]||(n[6]=o=>e.form.ordering=o),placeholder:e.$t("core__be_ordering_placeholder"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"]),r(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(a(e.errors.ordering),1)]),_:1})]),l("div",null,[r(m,{class:"text-base mb-2"},{default:s(()=>[i(a(e.$t("core__be_description_label")),1)]),_:1}),r(E,{rows:"3",value:e.form.description,"onUpdate:value":n[7]||(n[7]=o=>e.form.description=o),placeholder:e.$t("core__be_description_placeholder")},null,8,["value","placeholder"]),r(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(a(e.errors.description),1)]),_:1})]),e.backendSettings.is_google_map==1?(p(),_("div",Ce,[r(I,{mapKey:e.$page.props.mapKey,lat:parseFloat(e.form.lat),lng:parseFloat(e.form.lng),widthHeight:"width: 458px; height: 500px",onChange:e.updateCoordinates},null,8,["mapKey","lat","lng","onChange"])])):(p(),_("div",Pe,[r(L,{dir:e.$page.props.dir,onChange:e.setCoordinates,lat:parseFloat(e.form.lat),lng:parseFloat(e.form.lng),class:"h-[500px]"},null,8,["dir","onChange","lat","lng"])])),l("div",null,[r(m,{class:"text-base mb-2"},{default:s(()=>[i(a(e.$t("core__be_latitude_label")),1),$e]),_:1}),r(b,{type:"text",value:e.form.lat,"onUpdate:value":n[8]||(n[8]=o=>e.form.lat=o),placeholder:e.$t("core__be_latitude_placeholder"),onKeypress:e.onlyNumberWithCustom,onKeyup:n[9]||(n[9]=o=>e.validateLatitudeInput("lat",e.form.lat)),onBlur:n[10]||(n[10]=o=>e.validateLatitudeInput("lat",e.form.lat))},null,8,["value","placeholder","onKeypress"]),r(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(a(e.errors.lat),1)]),_:1})]),l("div",null,[r(m,null,{default:s(()=>[i(a(e.$t("core__be_longitude_label")),1),Be]),_:1}),r(b,{type:"text",value:e.form.lng,"onUpdate:value":n[11]||(n[11]=o=>e.form.lng=o),placeholder:e.$t("core__be_longitude_placeholder"),onKeypress:e.onlyNumberWithCustom,onKeyup:n[12]||(n[12]=o=>e.validateLongitudeInput("lng",e.form.lng)),onBlur:n[13]||(n[13]=o=>e.validateLongitudeInput("lng",e.form.lng))},null,8,["value","placeholder","onKeypress"]),r(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(a(e.errors.lng),1)]),_:1})]),l("div",Ee,[r(u,{onClick:n[14]||(n[14]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[i(a(e.$t("core__be_btn_cancel")),1)]),_:1}),r(u,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(p(),H(K,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):k("",!0),e.success?(p(),H(D,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):k("",!0),e.success?(p(),_("span",Ie,a(e.$t("core__be_btn_saved")),1)):k("",!0),!e.loading&&!e.success?(p(),_("span",Le,a(e.$t("core__be_btn_save")),1)):k("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var fo=ie(me,[["render",Ke]]);export{fo as default};