import{Z as S,B as x,o as t,c as i,b as s,w as _,a as e,q as g,t as b,F as v,s as L,f as w,g as z,n as B,r}from"./app.d57d51e9.js";import H from"./PsContentContainer.07e1a234.js";import V from"./PsLabelHeader4.c908098e.js";import N from"./PsLabel.b794d5bb.js";import M from"./PsButton.38caef2b.js";import R from"./PsIcon.9f1bf232.js";import j from"./PsRouteLink.0b0ba539.js";import O from"./PsNoResult.7646aa20.js";import T from"./ItemHorizontalItem.25da7a1e.js";import U from"./ItemHorizontalSkeletorItem.5e056ac2.js";import{u as q,F as D}from"./FollowItemParameterHolder.9e957dbd.js";import{P as E}from"./PsValueStore.97ab20f6.js";import Z from"./PsFrontendLayout.296a569b.js";import A from"./PsBreadcrumb2.b82160b3.js";/* empty css                     */import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsLabelTitle4.b5f977c0.js";import"./PsCard.bad5d4b2.js";import"./ps_constants.115f3686.js";import"./PsAdSense.3ddcfd76.js";import"./AppInfoStore.9a878473.js";import"./PsApiService.1464e9d5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLoadingDialog.eb65b887.js";import"./PsModal.15d0cd4c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";import"./PsLabelTitle.6c83e503.js";import"./format.min.0ec31140.js";import"./Product.8b62d5d3.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.fb84ea36.js";import"./PsValueHolder.31da39a6.js";import"./ProductStore.8e90df71.js";import"./ProductParameterHolder.e481cecf.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./FavouriteItemStore.14479989.js";import"./moment.9709ab41.js";/* empty css                                                                       */import"./PsUtils.eb7a8002.js";import"./vue-skeletor.esm.fceae8e3.js";import"./FooterView.a4d00124.js";import"./FooterLinkSection.df20daea.js";import"./PsLink.9f60ebb7.js";import"./PsLabelCaption.1fabc18a.js";import"./PsNavTabBar.51c56524.js";import"./PsDropdown.7e09801f.js";import"./PsDropdownSelect.a17b6ef7.js";import"./PsIconToggle.a1ed1abf.js";import"./PsInputWithLeftIcon.098c7e47.js";import"./LocationModal.bd35d2f7.js";import"./LocationParameterHolder.654c399d.js";import"./ItemLocationTownshipStore.0ddf7240.js";import"./PsNavBar.7b51b9e1.js";import"./UserStore.cdfd4a60.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.7f49d04a.js";import"./PsConfirmDialog.ca5a3fee.js";import"./PsNotificationBox.9d7f028f.js";import"./NotificationStore.d8e86611.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const J={name:"FollowerItemListView",components:{PsContentContainer:H,PsLabelHeader4:V,PsLabel:N,PsNoResult:O,ItemHorizontalItem:T,PsButton:M,PsIcon:R,PsBreadcrumb2:A,ItemHorizontalSkeletorItem:U,PsRouteLink:j,Head:S},props:["mobileSetting"],layout:Z,setup(l){var c,p;const n=E(),a=n.getLoginUserId(),o=new D,m=q();o.itemLocationId=n.locationId,o.itemLocationTownship=n.subLocationId,m.limit=(p=(c=l.mobileSetting)==null?void 0:c.default_loading_limit)!=null?p:12,m.loadItemList(a,o);function f(){m.loadItemList(a,o)}function u(){m.resetProductList(a,o)}return{itemFollowerProvider:m,loadMore:f,handleRefresh:u}},computed:{breadcrumb(){return[{label:x("ps_nav_bar__profile"),url:route("fe_profile")},{label:x("follower_item_list__follower_item_list"),color:"text-fePrimary-500"}]}}},K={class:"sm:mt-32 lg:mt-36 mt-28"},Q={class:"flex items-center mt-24"},W={class:"pt-1 lg:flex md:flex lg:justify-between md:justify-between mb-2"},X={class:"flex flex-col"},Y={class:"flex flex-col mb-8"},$={class:"w-full flex flex-col"},oo={key:0},to={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 md:gap-6 gap-4"},eo={key:1},ro={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 md:gap-6 gap-4"},io={key:2,class:"flex text-center content-center flex-col"};function lo(l,n,a,o,m,f){const u=r("Head"),c=r("ps-breadcrumb-2"),p=r("ps-label-header-4"),F=r("item-horizontal-item"),I=r("item-horizontal-skeletor-item"),y=r("ps-no-result"),h=r("ps-button"),C=r("ps-content-container");return t(),i(v,null,[s(u,{title:l.$t("follower_item_list__follower_item_list")},null,8,["title"]),s(C,null,{content:_(()=>{var P,k;return[e("div",K,[e("div",Q,[s(c,{items:f.breadcrumb,class:"mb-4 sm:mb-6"},null,8,["items"])]),e("div",W,[s(p,{class:"mb-4 font-medium"},{default:_(()=>[g(b(l.$t("follower_item_list__follower_item_list")),1)]),_:1})]),e("div",X,[e("div",Y,[e("div",$,[((P=o.itemFollowerProvider.itemList)==null?void 0:P.data)!=null?(t(),i("div",oo,[e("div",to,[(t(!0),i(v,null,L(o.itemFollowerProvider.itemList.data,d=>(t(),i("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:d.id},[s(F,{item:d},null,8,["item"])]))),128))])])):o.itemFollowerProvider.loading.value==!0?(t(),i("div",eo,[e("div",ro,[(t(),i(v,null,L(3,d=>e("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:d},[s(I)])),64))])])):(t(),i("div",io,[o.itemFollowerProvider.loading.value==!1&&((k=o.itemFollowerProvider.itemList)==null?void 0:k.data)==null?(t(),w(y,{key:0,onOnClick:o.loadMore},null,8,["onOnClick"])):z("",!0)]))]),o.itemFollowerProvider.loading.value==!1?(t(),w(h,{key:0,class:B(["mx-auto mt-8",o.itemFollowerProvider.isNoMoreRecord.value?"hidden":""]),onClick:o.loadMore},{default:_(()=>[g(b(l.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(t(),w(h,{key:1,class:"mx-auto mt-8",onClick:o.loadMore,disabled:!0},{default:_(()=>[g(b(l.$t("list__loading")),1)]),_:1},8,["onClick"]))])])])]}),_:1})],64)}var yt=G(J,[["render",lo]]);export{yt as default};
