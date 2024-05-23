import{Z as U,B as k,o as t,c as n,b as p,w as u,a as l,F as L,s as h,f as _,q as S,t as v,n as x,g as P,r as e}from"./app.d57d51e9.js";import B from"./PsContentContainer.07e1a234.js";import H from"./PsLabelHeader4.c908098e.js";import I from"./PsLabel.b794d5bb.js";import N from"./PsButton.38caef2b.js";import V from"./PsIcon.9f1bf232.js";import F from"./PsRouteLink.0b0ba539.js";import M from"./PsBreadcrumb2.b82160b3.js";import q from"./PsNoResult.7646aa20.js";import{u as z}from"./UserListStore.2c153009.js";import{u as R,U as O}from"./UserStore.cdfd4a60.js";import D from"./UserListHorizontal.92b25072.js";import{P as E}from"./PsValueStore.97ab20f6.js";import T from"./PsFrontendLayout.296a569b.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.1464e9d5.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./PsSepetetedStore.9a31ac47.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";import"./ApiStatus.5720ba0b.js";import"./PsCard.bad5d4b2.js";import"./RatingShow.e18d61ac.js";import"./PsLabelCaption.1fabc18a.js";import"./PsLoadingDialog.eb65b887.js";import"./PsModal.15d0cd4c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";import"./PsLabelTitle.6c83e503.js";import"./UserFollowHolder.8b598f9e.js";import"./ProductStore.8e90df71.js";import"./ProductParameterHolder.e481cecf.js";import"./Product.8b62d5d3.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./Vendor.fb84ea36.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./FooterView.a4d00124.js";import"./FooterLinkSection.df20daea.js";import"./PsLink.9f60ebb7.js";import"./AppInfoStore.9a878473.js";import"./PsNavTabBar.51c56524.js";import"./PsDropdown.7e09801f.js";import"./PsDropdownSelect.a17b6ef7.js";import"./PsIconToggle.a1ed1abf.js";import"./PsInputWithLeftIcon.098c7e47.js";import"./LocationModal.bd35d2f7.js";import"./LocationParameterHolder.654c399d.js";import"./ItemLocationTownshipStore.0ddf7240.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.7b51b9e1.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.7f49d04a.js";import"./PsConfirmDialog.ca5a3fee.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.9d7f028f.js";import"./NotificationStore.d8e86611.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const j={name:"FollowerListView",components:{PsContentContainer:B,PsLabelHeader4:H,UserListHorizontal:D,PsLabel:I,PsButton:N,PsIcon:V,PsRouteLink:F,PsBreadcrumb2:M,PsNoResult:q,Head:U},layout:T,props:["query","mobileSetting"],setup(r){var m,a;const f=E(),s=z("profile-follower"),o=R(),c=f.getLoginUserId(),i=new O().getFollowerUsers();s.limit=(a=(m=r.mobileSetting)==null?void 0:m.default_loading_limit)!=null?a:12,i.loginUserId=r.query.userId,s.resetUserList(c,i),o.loadUser(r.query.userId);function d(){s.loadUserList(c,i)}return{userStore:s,loadMore:d,breadcrumbuserProvider:o}},computed:{breadcrumb(){return[{label:k("ps_nav_bar__profile"),url:route("fe_profile")},{label:k("follower_list__follower_list"),color:"text-fePrimary-500"}]}}},A={class:"mt-32 mb-10"},G={class:"mb-6"},J={class:"mt-4"},K={key:0,class:"w-full"},Q={class:"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"},W={class:"flex flex-col items-center"};function X(r,f,s,o,c,i){const d=e("Head"),m=e("ps-breadcrumb-2"),a=e("user-list-horizontal"),b=e("ps-button"),y=e("ps-no-result"),C=e("ps-content-container");return t(),n(L,null,[p(d,{title:r.$t("follower_list__follower_list")},null,8,["title"]),p(C,null,{content:u(()=>{var g;return[l("div",A,[l("div",G,[p(m,{items:i.breadcrumb,class:""},null,8,["items"])]),l("div",J,[o.userStore.userList.data!=null?(t(),n("div",K,[l("div",Q,[(t(!0),n(L,null,h(o.userStore.userList.data,w=>(t(),n("div",{class:"w-full",key:w.userId},[p(a,{user:w,storeName:"profile-follower"},null,8,["user"])]))),128))]),l("div",W,[o.userStore.loading.value==!1?(t(),_(b,{key:0,class:x(["font-medium mx-auto mt-6",o.userStore.isNoMoreRecord.value?"hidden":""]),onClick:o.loadMore},{default:u(()=>[S(v(r.$t("follower_list__load_more")),1)]),_:1},8,["onClick","class"])):(t(),_(b,{key:1,class:"font-medium mx-auto mt-6",onClick:o.loadMore,disabled:!0},{default:u(()=>[S(v(r.$t("follower_list__loading")),1)]),_:1},8,["onClick"]))])])):P("",!0),o.userStore.loading.value==!1&&((g=o.userStore.userList)==null?void 0:g.data)==null?(t(),_(y,{key:1,onOnClick:o.loadMore},null,8,["onOnClick"])):P("",!0)])])]}),_:1})],64)}var cr=Z(j,[["render",X]]);export{cr as default};