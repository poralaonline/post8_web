import{d as g,H as B,o as a,c as o,b as r,w as p,q as d,t as m,F as f,s as c,a as P,r as u}from"./app.d57d51e9.js";import{P as $}from"./PsLabel.06b4363b.js";import{P as w}from"./PsInput.b3485f1e.js";import{P as S}from"./PsDropdown.0c78da9b.js";import{P as y}from"./PsDropdownSelect.13d0e05f.js";import{P as k}from"./PsTextarea.2d2fbd18.js";import{D}from"./DatePicker.2eba1133.js";import V from"./CheckBox.2843d0e8.js";import{P as C}from"./PsImageUpload.e74e4503.js";import{P as U}from"./PsRadioValue.d4f130b1.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.1e42bf4c.js";import"./Icons.ebbb778b.js";import"./main.f21f1fe5.js";import"./index.edd1d404.js";import"./PsButton.c9fc3d7e.js";import"./PsLabelTitle3.78de00b9.js";import"./PsIcon1.c6e725b1.js";import"./PsDraggable.aca5d6c1.js";const O=g({name:"VendorDetailStoreBranches",components:{PsLabel:$,PsInput:w,PsDropdown:S,PsDropdownSelect:y,PsTextarea:k,DatePicker:D,CheckBox:V,PsImageUpload:C,PsRadioValue:U},props:{storeBranches:Object,coreFieldFilterSettings:Object,customizeHeaders:Object,customizeDetails:Object},setup(t){return console.log(t.coreFieldFilterSettings),{form:B({product_relation:{}})}}}),N={class:"grid grid-cols-4"};function T(t,l,z,H,I,L){const i=u("ps-label"),b=u("ps-input"),_=u("ps-dropdown-select"),v=u("ps-dropdown"),h=u("ps-textarea");return a(),o("div",null,[r(i,null,{default:p(()=>[d(m(t.$t("core_be__vendor_branches")),1)]),_:1}),(a(!0),o(f,null,c(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="name"&&e.enable===1&&e.is_delete===0),(e,n)=>(a(),o("div",{class:"mt-4",key:n},[r(i,{class:"text-base font-medium mb-2"},{default:p(()=>[d(m(t.$t(e.label_name)),1)]),_:2},1024),r(b,{disabled:!0,type:"text",ref_for:!0,ref:"symbol",value:t.storeBranches.name,"onUpdate:value":l[0]||(l[0]=s=>t.storeBranches.name=s),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),(a(!0),o(f,null,c(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="phone"&&e.enable===1&&e.is_delete===0),(e,n)=>(a(),o("div",{class:"mt-4",key:n},[r(i,{class:"text-base font-medium mb-2"},{default:p(()=>[d(m(t.$t(e.label_name)),1)]),_:2},1024),P("div",N,[r(v,{disabled:"",align:"left",class:"col-span-1 w-full"},{select:p(()=>{var s;return[r(_,{ref_for:!0,ref:"status",disabled:"",placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:(s=t.storeBranches)!=null&&s.phone.split("-")[0]?t.storeBranches.phone.split("-")[0]:"+93"},null,8,["placeholder","selectedValue"])]}),_:2},1024),r(b,{class:"col-span-3",disabled:!0,type:"text",ref_for:!0,ref:"symbol",value:t.storeBranches.phone.split("-")[1],"onUpdate:value":l[1]||(l[1]=s=>t.storeBranches.phone.split("-")[1]=s),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])])]))),128)),(a(!0),o(f,null,c(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="address"&&e.enable===1&&e.is_delete===0),(e,n)=>(a(),o("div",{class:"mt-4",key:n},[r(i,{class:"text-base font-medium mb-2"},{default:p(()=>[d(m(t.$t(e.label_name)),1)]),_:2},1024),r(h,{disabled:!0,rows:"4",value:t.storeBranches.address,"onUpdate:value":l[2]||(l[2]=s=>t.storeBranches.address=s),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),(a(!0),o(f,null,c(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="description"&&e.enable===1&&e.is_delete===0),(e,n)=>(a(),o("div",{class:"mt-4",key:n},[r(i,{class:"text-base font-medium mb-2"},{default:p(()=>[d(m(t.$t(e.label_name)),1)]),_:2},1024),r(h,{disabled:!0,rows:"4",value:t.storeBranches.description,"onUpdate:value":l[3]||(l[3]=s=>t.storeBranches.description=s),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128))])}var le=j(O,[["render",T]]);export{le as default};