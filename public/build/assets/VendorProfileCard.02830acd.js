import b from"./PsCard.bad5d4b2.js";import y from"./PsLabel.b794d5bb.js";import w from"./PsButton.38caef2b.js";import k from"./PsIcon.9f1bf232.js";import C from"./PsLabelCaption.1fabc18a.js";import S from"./PsRouteLink.0b0ba539.js";import{P}from"./ps_constants.115f3686.js";import{V}from"./Vendor.fb84ea36.js";import{h as j}from"./moment.9709ab41.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import{o as _,f as B,w as t,a as e,m as I,c as z,b as s,q as a,t as l,g as E,n as N,r as n,E as $}from"./app.d57d51e9.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ProductRelation.0b376978.js";const D={name:"VendorProfileCard",components:{PsCard:b,PsLabel:y,PsButton:w,PsIcon:k,PsLabelCaption:C,PsRouteLink:S},props:{vendor:{type:V},itemId:{type:String,default:""},color:{type:String,default:"bg-feSecondary-50 dark:bg-feSecondary-800 mt-6"}},setup(o){return{moment:j,PsConst:P}}},L={class:"shadow-sm relative border border-feSecondary-50 dark:border-feSecondary-800 rounded-lg flex flex-col gap-4 p-4"},U={class:"flex flex-row space-x-4"},q={class:"w-20 h-20 flex-shrink-0 relative"},H={alt:"Placeholder",width:"15px",height:"10px",class:"w-20 h-20 rounded-full object-cover"},R={key:0,class:"w-20 h-20 flex items-center justify-center absolute top-0 left-0"},T=e("div",{class:"w-20 h-20 absolute rounded-full top-0 left-0 bg-feAchromatic-900 opacity-60"},null,-1),W={class:"w-20 h-20 flex items-center justify-center absolute"},F={class:"flex flex-col items-center justify-center"},G={class:"w-full flex flex-col items-start justify-start"};function J(o,K,r,u,M,O){const d=n("ps-label"),h=n("ps-button"),x=n("ps-route-link"),v=n("ps-card"),g=$("lazy");return _(),B(v,{class:N(["flex w-full flex-col lg:rounded-lg shadow-sm",r.color]),enabledHover:!0},{default:t(()=>{var c,i,f,m;return[e("div",L,[e("div",U,[e("div",q,[I(e("img",H,null,512),[[g,{src:o.$page.props.thumb1xUrl+"/"+((i=(c=r.vendor)==null?void 0:c.logo)==null?void 0:i.imgPath),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_vendor_shop.png"}]]),((f=r.vendor)==null?void 0:f.expireStatus)==u.PsConst.VendorExpiryExpiredStatus?(_(),z("div",R,[T,e("div",W,[s(d,{textColor:"text-feAchromatic-50 text-sm font-semibold"},{default:t(()=>[a(l(o.$t("Closed")),1)]),_:1})])])):E("",!0)]),e("div",F,[s(d,{class:"text-lg font-semibold",textColor:"text-feSecondary-800 dark:text-feSecondary-300"},{default:t(()=>{var p;return[a(l((p=r.vendor)==null?void 0:p.name),1)]}),_:1}),e("p",G,[s(d,{class:"mt-1 p-1 text-xxs rounded-sm bg-feWarning-500",textColor:"text-feAchromatic-50"},{default:t(()=>[a(l(o.$t("core_fe__vendor_indicator")),1)]),_:1})])])]),s(x,{to:{name:"fe_vendor_info",params:{vendorId:(m=r.vendor)==null?void 0:m.id}}},{default:t(()=>[s(h,{textSize:"text-sm",colors:"bg-transparent text-feSecondary-800 dark:text-feSecondary-200 ",border:"border border-feAchrometic-200 dark:border-feAchrometic-500",class:"mt-2 w-full",active:"",hover:"",focus:""},{default:t(()=>[a(l(o.$t("core_fe__vendor_profile_card_visit_vendor")),1)]),_:1})]),_:1},8,["to"])])]}),_:1},8,["class"])}var ie=A(D,[["render",J]]);export{ie as default};