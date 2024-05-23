import{i as Q,o as c,c as m,a as r,b as t,w as e,q as l,t as n,m as _,g as x,O as g,r as u,E as T}from"./app.d57d51e9.js";import F from"./PsLabel.b794d5bb.js";import G from"./PsLink.9f60ebb7.js";import J from"./PsRouteLink.0b0ba539.js";import K from"./PsLabelCaption.1fabc18a.js";import M from"./PsIcon.9f1bf232.js";import{P as O}from"./ProductParameterHolder.e481cecf.js";import{P as W}from"./PsValueStore.97ab20f6.js";import{u as X}from"./AppInfoStore.9a878473.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./ps_constants.115f3686.js";import"./PsApiService.1464e9d5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";const Z={components:{PsLabel:F,PsIcon:M,PsLink:G,PsRouteLink:J,PsLabelCaption:K},setup(){const o=W();Q(o.locationId);const h="1.0.1";o.getLoginUserId();const b=X();function i(){g.get(route("dashboard"))}function C(){const a=new O().getLatestParameterHolder().getUrlParamsAndQuery();g.get(route("fe_item_list",a.query))}function w(){const a=new O().getPopularParameterHolder().getUrlParamsAndQuery();g.get(route("fe_item_list",a.query))}return{gotToHome:i,viewAllPopularItemList:w,viewAllRecentItemList:C,versionNo:h,appInfoStore:b}}},tt={class:"h-auto text-100 bg-feSecondary-900 flex flex-col justify-between"},et={class:"lg:w-large xl:w-feLarge flex flex-col lg:justify-between xl:justify-center xl:gap-20 sm:flex-row md:flex-col lg:flex-row mx-auto mt-6"},ot={class:"flex sm:flex-col md:flex-row gap-10"},at={class:"flex flex-col sm:grid sm:grid-cols-3 gap-10 sm:hidden md:grid md:grid-cols-2"},st={class:"flex flex-col gap-6"},rt={class:"flex flex-col gap-2 sm:gap-4"},lt={class:"flex flex-col gap-6"},nt={class:"flex flex-col gap-2 sm:gap-4 cursor-pointer"},it={class:"grid sm:grid-cols-3 md:grid-cols-1 gap-8 md:mx-auto"},ft={class:"flex flex-col hidden sm:block md:hidden"},ct={class:"flex flex-col gap-2 sm:gap-4 mt-6"},mt={class:"flex flex-col col-span-2 hidden sm:block md:hidden"},dt={class:"flex flex-col gap-2 sm:gap-4 mt-6"},pt={class:"flex flex-col gap-6"},_t={class:"flex flex-col gap-2 sm:gap-4"},xt={class:"col-span-2 hidden sm:block md:hidden"},ut={class:"flex flex-col items-center sm:items-start mt-8 sm:mt-0"},gt={class:"flex items-center gap-6 mt-2.5"},ht={class:"flex justify-center sm:justify-start gap-6 h-8 sm:h-10 mt-8 sm:mt-6"},bt={key:0,class:"w-40 h-15"},Ct={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},wt={key:1,class:"w-40 h-15"},vt={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},yt={class:"flex flex-col items-center sm:items-start mt-8 sm:mt-0 md:mt-8 block sm:hidden md:flex md:flex-row md:gap-8 lg:flex-col lg:mt-0 lg:gap-10"},St={class:""},At={class:"flex items-center gap-6 mt-2.5 lg:mt-4"},It={class:"flex justify-center sm:justify-start gap-6 h-8 sm:h-10 mt-8 sm:mt-6 lg:mt-0"},kt={key:0,class:"w-40 h-15.5"},$t={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},zt={key:1,class:"w-40 h-15.5"},Pt={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},Ut={class:"mb-6 flex justify-center items-center mt-8 sm:mt-6"};function Bt(o,h,b,i,C,w){var v,y,S,A,I,k,$,z,P,U,B,L,j,q,V,N;const s=u("ps-label"),a=u("ps-route-link"),f=u("ps-icon"),d=u("ps-link"),p=T("lazy");return c(),m("div",tt,[r("div",et,[r("div",ot,[r("div",at,[r("div",st,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:e(()=>[l(n(o.$t("footer__shop")),1)]),_:1}),r("div",rt,[t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_category.index"},textColor:"text-feAchromatic-50",textSize:"text-base font-normal"},{default:e(()=>[l(n(o.$t("footer__categories")),1)]),_:1},8,["to"])]),_:1}),t(s,{class:"font-normal text-base cursor-pointer",onClick:i.viewAllRecentItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__latest_posts")),1)]),_:1},8,["onClick"]),t(s,{class:"font-normal text-base cursor-pointer",onClick:i.viewAllPopularItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__popular_posts")),1)]),_:1},8,["onClick"]),t(a,{to:{name:"fe_user_list"}},{default:e(()=>[t(s,{class:"font-normal text-base cursor-pointer",textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__user_list")),1)]),_:1})]),_:1})])]),r("div",lt,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:e(()=>[l(n(o.$t("footer__support")),1)]),_:1}),r("div",nt,[t(s,{class:"font-normal text-base"},{default:e(()=>[t(a,{to:{name:"fe_contact_us"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__contact_us")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_safety_tips"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__safety_tips")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_privacy"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__privacy_policy")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer hyphens-none ..."},{default:e(()=>[t(a,{to:{name:"fe_terms_and_conditions"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("term_and_condition__term_and_condition")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_faq"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("faq_page__faq_page")),1)]),_:1})]),_:1})])])]),r("div",it,[r("div",ft,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:e(()=>[l(n(o.$t("footer__shop")),1)]),_:1}),r("div",ct,[t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_category.index"},textColor:"text-feAchromatic-50",textSize:"text-base font-normal"},{default:e(()=>[l(n(o.$t("footer__categories")),1)]),_:1},8,["to"])]),_:1}),t(s,{class:"font-normal text-base cursor-pointer",onClick:i.viewAllRecentItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__latest_posts")),1)]),_:1},8,["onClick"]),t(s,{class:"font-normal text-base cursor-pointer",onClick:i.viewAllPopularItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__popular_posts")),1)]),_:1},8,["onClick"])])]),r("div",mt,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:e(()=>[l(n(o.$t("footer__support")),1)]),_:1}),r("div",dt,[t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_contact_us"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__contact_us")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_safety_tips"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__safety_tips")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_privacy"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__privacy_policy")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer hyphens-none ..."},{default:e(()=>[t(a,{to:{name:"fe_terms_and_conditions"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("term_and_condition__term_and_condition")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_faq"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("faq_page__faq_page")),1)]),_:1})]),_:1})])]),r("div",pt,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:e(()=>[l(n(o.$t("footer__company")),1)]),_:1}),r("div",_t,[t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_about_us"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__about_us")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:e(()=>[t(a,{to:{name:"fe_blog"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:e(()=>[l(n(o.$t("footer__blogs")),1)]),_:1})]),_:1})])]),r("div",xt,[r("div",ut,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:e(()=>[l(n(o.$t("footer__follow_us")),1)]),_:1}),r("div",gt,[t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"facebook",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"linkedIn",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"twitter",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"instagram",h:"20",w:"20",viewBox:"0 0 18 18"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"pinterest",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"youtube",h:"20",w:"20",viewBox:"0 -3 20 20"})]),_:1})]),r("div",ht,[((A=(S=(y=(v=i.appInfoStore)==null?void 0:v.appInfo)==null?void 0:y.data)==null?void 0:S.frontendConfigSetting)==null?void 0:A.googleSetting)=="1"?(c(),m("div",bt,[t(d,{class:"h-10",textColor:"text-feAchromatic-50",url:i.appInfoStore.appInfo.data.frontendConfigSetting.googlePlayUrl},{default:e(()=>[_(r("img",Ct,null,512),[[p,{src:o.$page.props.sysImageUrl+"/get_on_google_play_white.png",loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):x("",!0),((z=($=(k=(I=i.appInfoStore)==null?void 0:I.appInfo)==null?void 0:k.data)==null?void 0:$.frontendConfigSetting)==null?void 0:z.appStoreSetting)=="1"?(c(),m("div",wt,[t(d,{class:"h-10",textColor:"text-feAchromatic-50",url:i.appInfoStore.appInfo.data.frontendConfigSetting.appStoreUrl},{default:e(()=>[_(r("img",vt,null,512),[[p,{src:o.$page.props.sysImageUrl+"/get_on_apple_store_white.png",loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):x("",!0)])])])])]),r("div",yt,[r("div",St,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:e(()=>[l(n(o.$t("footer__follow_us")),1)]),_:1}),r("div",At,[t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"facebook",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"linkedIn",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"twitter",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"instagram",h:"20",w:"20",viewBox:"0 0 18 18"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"pinterest",h:"20",w:"20",viewBox:"0 0 20 20"})]),_:1}),t(a,{to:{name:"dashboard"}},{default:e(()=>[t(f,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"youtube",h:"20",w:"20",viewBox:"0 -3 20 20"})]),_:1})])]),r("div",It,[((L=(B=(U=(P=i.appInfoStore)==null?void 0:P.appInfo)==null?void 0:U.data)==null?void 0:B.frontendConfigSetting)==null?void 0:L.googleSetting)=="1"?(c(),m("div",kt,[t(d,{class:"h-10",textColor:"text-feAchromatic-50",url:i.appInfoStore.appInfo.data.frontendConfigSetting.googlePlayUrl},{default:e(()=>[_(r("img",$t,null,512),[[p,{src:o.$page.props.sysImageUrl+"/get_on_google_play_white.png",loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):x("",!0),((N=(V=(q=(j=i.appInfoStore)==null?void 0:j.appInfo)==null?void 0:q.data)==null?void 0:V.frontendConfigSetting)==null?void 0:N.appStoreSetting)=="1"?(c(),m("div",zt,[t(d,{class:"h-10",textColor:"text-feAchromatic-50",url:i.appInfoStore.appInfo.data.frontendConfigSetting.appStoreUrl},{default:e(()=>[_(r("img",Pt,null,512),[[p,{src:o.$page.props.sysImageUrl+"/get_on_apple_store_white.png",loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):x("",!0)])])]),r("div",Ut,[t(s,{textColor:"text-feAchromatic-50",class:"font-medium text-sm"},{default:e(()=>{var R,H,D,E;return[l(n((E=(D=(H=(R=i.appInfoStore)==null?void 0:R.appInfo)==null?void 0:H.data)==null?void 0:D.frontendConfigSetting)==null?void 0:E.copyRight),1)]}),_:1})])])}var Jt=Y(Z,[["render",Bt]]);export{Jt as default};
