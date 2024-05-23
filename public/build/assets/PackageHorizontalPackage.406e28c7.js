import{f as x}from"./format.min.0ec31140.js";import{o as _,c as u,a as n,b as e,w as c,q as m,t as a,n as y,B as g,r as f}from"./app.d57d51e9.js";import{u as k}from"./AppInfoStore.9a878473.js";import b from"./PsLabel.b794d5bb.js";import S from"./PsIcon.9f1bf232.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.1464e9d5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsValueStore.97ab20f6.js";import"./ps_constants.115f3686.js";const P={name:"PackageHorizontalPackage",components:{PsLabel:b,PsIcon:S},props:{packageList:Object},setup(){const o=k();function l(t){var r,i,d;return t.toString()=="0"?g("item_price__free"):x((d=(i=(r=o==null?void 0:o.appInfo)==null?void 0:r.data)==null?void 0:i.mobileSetting)==null?void 0:d.price_format,t)}return{formatPrice:l}}},v={class:"flex gap-1 mt-1"},C={class:"mt-1 lg:mt-2"},L={class:"flex justify-end mt-1 md:mt-3 lg:mt-4"};function w(o,l,t,r,i,d){const s=f("ps-label"),p=f("ps-icon");return _(),u("div",{class:y(["border-feSecondary-400","bg-feAchromatic-50 dark:bg-feSecondary-800 border-2 rounded-lg shadow-sm px-4 sm:px-4 lg:px-5 xl:px-6 py-4 sm:py-1 md:py-2 lg:py-2"])},[n("div",null,[e(s,{textColor:"text-xl md:text-2xl font-semibold text-feSecondary-800 dark:text-feSecondary-200"},{default:c(()=>[m(a(t.packageList.paymentInfo.value),1)]),_:1})]),n("div",v,[e(p,{class:"text-feSecondary-800 dark:text-feSecondary-200",name:"user-fill",w:"20",h:"20",viewBox:"0 0 20 20"}),e(s,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-200"},{default:c(()=>[m(a(t.packageList.purchasedCount),1)]),_:1})]),n("div",C,[e(s,{textColor:"text-sm md:text-base font-medium text-feSecondary-800 dark:text-feSecondary-200"},{default:c(()=>[m(a(t.packageList.paymentAttributes.count)+" posts",1)]),_:1})]),n("div",L,[e(s,{textColor:"text-lg sm:text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-200"},{default:c(()=>[m(a(t.packageList.paymentAttributes.currencySymbol)+" "+a(r.formatPrice(t.packageList.paymentAttributes.price)),1)]),_:1})])])}var O=h(P,[["render",w]]);export{O as default};
