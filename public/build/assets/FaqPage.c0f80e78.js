import{Z as b,o as i,c as s,b as r,w as p,a as n,q as g,t as S,f as k,g as l,F as P,r as e,b6 as c}from"./app.d57d51e9.js";import v from"./PsContentContainer.07e1a234.js";import y from"./PsLabelTitle.6c83e503.js";import x from"./PsLabel.b794d5bb.js";import U from"./PrivacySkeletor.97831506.js";import{u as V}from"./AboutUsStore.94eb9030.js";import q from"./PsFrontendLayout.296a569b.js";import{P as L}from"./PsValueStore.97ab20f6.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-skeletor.esm.fceae8e3.js";/* empty css                     */import"./PsApiService.1464e9d5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.a4d00124.js";import"./FooterLinkSection.df20daea.js";import"./PsLink.9f60ebb7.js";import"./PsRouteLink.0b0ba539.js";import"./PsLabelCaption.1fabc18a.js";import"./PsIcon.9f1bf232.js";import"./ProductParameterHolder.e481cecf.js";import"./ps_constants.115f3686.js";import"./AppInfoStore.9a878473.js";import"./PsNavTabBar.51c56524.js";import"./PsDropdown.7e09801f.js";import"./PsDropdownSelect.a17b6ef7.js";import"./PsIconToggle.a1ed1abf.js";import"./PsInputWithLeftIcon.098c7e47.js";import"./LocationModal.bd35d2f7.js";import"./PsModal.15d0cd4c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";import"./PsButton.38caef2b.js";import"./LocationParameterHolder.654c399d.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.0ddf7240.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.7b51b9e1.js";import"./UserStore.cdfd4a60.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.7f49d04a.js";import"./PsConfirmDialog.ca5a3fee.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.9d7f028f.js";import"./ProductStore.8e90df71.js";import"./Product.8b62d5d3.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./Vendor.fb84ea36.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.d8e86611.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const C={name:"PrivacyView",components:{PsContentContainer:v,PsLabelTitle:y,PsLabel:x,PrivacySkeletor:U,Head:b},layout:q,setup(m){const t=V(),o=L().getLoginUserId();return t.loadAboutUs(o),{aboutUsStore:t}}},H={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},T={key:1};function F(m,t,u,o,N,w){const _=e("Head"),a=e("ps-label"),d=e("privacy-skeletor"),f=e("ps-content-container");return i(),s(P,null,[r(_,{title:m.$t("faq_page__faq_page")},null,8,["title"]),r(f,null,{content:p(()=>[n("div",H,[r(a,{class:"text-center font-semibold text-2xl sm:text-3xl"},{default:p(()=>[g(S(m.$t("faq_page__faq_page")),1)]),_:1}),o.aboutUsStore.aboutus.data!=null?(i(),k(a,{key:0,class:"mt-4"},{default:p(()=>[t[0]||(c(-1),t[0]=n("span",{innerHTML:o.aboutUsStore.aboutus.data.faqPage},null,8,["innerHTML"]),c(1),t[0])]),_:1})):l("",!0),o.aboutUsStore.loading.value==!0?(i(),s("div",T,[r(d)])):l("",!0)])]),_:1})],64)}var Zt=B(C,[["render",F]]);export{Zt as default};
