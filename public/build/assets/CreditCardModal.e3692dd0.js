import q from"./PsModal.15d0cd4c.js";import j from"./PsLabelHeader4.c908098e.js";import z from"./PsLabel.b794d5bb.js";import V from"./PsInput.a60e3eb2.js";import A from"./PsButton.38caef2b.js";import{U as M}from"./UpdateCreditCardParameterHolder.09921c01.js";import{P as B}from"./ProfileUpdateViewHolder.3e643083.js";import L from"./PsLoadingDialog.eb65b887.js";import{u as R}from"./UserProvider.3c5114ad.js";import{P as F}from"./PsValueStore.97ab20f6.js";import T from"./PsErrorDialog.01320524.js";import{U as E}from"./User.0c3ba1a8.js";import{u as Y}from"./ProductStore.8e90df71.js";import G from"./PsLine.257bf9fc.js";import{b as I}from"./PsApiService.1464e9d5.js";import{d as J,i as x,y as N,o as K,c as Q,b as t,w as i,a as s,q as p,t as m,F as W,B as _,r as f}from"./app.d57d51e9.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLabelTitle.6c83e503.js";import"./UserListParameterHolder.d110b747.js";import"./DefaultPhoto.cc755f93.js";import"./PsObject.a17ef38f.js";import"./ps_constants.115f3686.js";import"./UserRegisterParameterHolder.c0325365.js";import"./PhoneLoginParameterHolder.e6dad0ed.js";import"./ApiStatus.5720ba0b.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./ProductParameterHolder.e481cecf.js";import"./Product.8b62d5d3.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./Vendor.fb84ea36.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";const Z=J({name:"CreditCardModal",components:{PsModal:q,PsLabel:z,PsInput:V,PsButton:A,PsLabelHeader4:j,PsLoadingDialog:L,PsErrorDialog:T,PsLine:G},setup(){let r=!0;const l=F(),S=l.getLoginUserId(),g=x(),v=x(),e=N(new M),h=N(new M),c=N(new B),u=x(),n=x(),y=R(),D=Y();let w=new E,C;async function d(){var o,a;v.value.openModal(),await y.getUser(S),w=(a=new E().fromMap((o=y.user)==null?void 0:o.data))!=null?a:new E,v.value.closeModal()}async function H(o,a){r=o,g.value.toggle(!0),await d(),C=a}function P(){var a;e.oldCardNo=e.oldCardNo.replace(" ","");const o=e.oldCardNo.match(/.{1,4}/g);e.oldCardNo=(a=o==null?void 0:o.join(" "))!=null?a:""}function $(){var a;e.newCardNo=e.newCardNo.replace(" ","");const o=e.newCardNo.match(/.{1,4}/g);e.newCardNo=(a=o==null?void 0:o.join(" "))!=null?a:""}function U(){var a;e.oldExpiryDate=e.oldExpiryDate.replace("/","");const o=e.oldExpiryDate.match(/.{1,2}/g);e.oldExpiryDate=(a=o==null?void 0:o.join("/"))!=null?a:""}function O(){var a;e.newExpiryDate=e.newExpiryDate.replace("/","");const o=e.newExpiryDate.match(/.{1,2}/g);e.newExpiryDate=(a=o==null?void 0:o.join("/"))!=null?a:""}async function k(){if(e.oldCardNo.trim()==""){n.value.openModal("",_("credit_card_modal__old_card_no_required_error"));return}if(e.newCardNo.trim()==""){n.value.openModal("",_("credit_card_modal__new_card_no_required_error"));return}if(e.oldExpiryDate.trim()==""){n.value.openModal("",_("credit_card_modal__old_expiry_date_required_error"));return}if(!e.oldExpiryDate.includes("/")){n.value.openModal("",_("credit_card_modal__old_expiry_date_invalid_error"));return}if(e.newExpiryDate.trim()==""){n.value.openModal("",_("credit_card_modal__new_expiry_date_required_error"));return}if(!e.newExpiryDate.includes("/")){n.value.openModal("",_("credit_card_modal__new_expiry_date_invalid_error"));return}if(e.cvv.trim()==""){n.value.openModal("",_("credit_card_modal__cvv_required_error"));return}if(e.cvv.length!=3&&n.value.openModal("",_("credit_card_modal__cvv_invalid_error")),e.nameOnCard.trim()==""){n.value.openModal("",_("credit_card_modal__name_required_error"));return}v.value.openModal(),e.userId=w.userId;const o=e.oldExpiryDate.split("/");o.length>1&&(e.oldMonth=o[0].toString(),e.oldYear=o[1].toString());const a=e.newExpiryDate.split("/");if(a.length>1&&(e.month=a[0].toString(),e.year=a[1].toString()),r){const b=await D.updateCreditCard(e.toMap());if(v.value.closeModal(),b.status==I.ERROR){n.value.openModal("",b.message);return}else b.status==I.SUCCESS&&(l.replaceCreditCard(e.newCardNo.toString(),e.month.toString(),e.year.toString(),e.cvv.toString(),e.nameOnCard.toString(),!0),g.value.toggle(!1))}else l.replaceCreditCard(e.newCardNo.toString(),e.month.toString(),e.year.toString(),e.cvv.toString(),e.nameOnCard.toString(),!1),v.value.closeModal(),g.value.toggle(!1);C!=null&&C()}return{psmodal:g,psloading:v,openModal:H,paramHolder:e,paramHolder1:h,profileParamHolder:c,onOldExpiryDateInput:U,onOldCardInput:P,date_text_field_controller:u,ps_error_dialog:n,submitClicked:k,onNewCardInput:$,onNewExpiryDateInput:O}}}),ee={class:"flex flex-col items-center mt-8"},re={class:"flex justify-between container w-full p-4"},oe={class:"md:flex flex-auto md:w-6/12 h-auto bg-feAchromatic-50 dark:bg-feAchromatic-900 border rounded-md dark:border-feAchromatic-500 pt-2"},ae={class:"flex flex-col w-full"},te=s("span",{style:{"font-size":"17px",color:"red"}},"*",-1),le=s("span",{style:{"font-size":"17px",color:"red"}},"*",-1),de=s("span",{style:{"font-size":"17px",color:"red"}},"*",-1),ne=s("span",{style:{"font-size":"17px",color:"red"}},"*",-1),ie=s("span",{style:{"font-size":"17px",color:"red"}},"*",-1),se=s("span",{style:{"font-size":"17px",color:"red"}},"*",-1),pe={class:"flex items-center justify-center mb-4"};function me(r,l,S,g,v,e){const h=f("ps-label-header-4"),c=f("ps-label"),u=f("ps-input"),n=f("ps-line"),y=f("ps-button"),D=f("ps-modal"),w=f("ps-loading-dialog"),C=f("ps-error-dialog");return K(),Q(W,null,[t(D,{ref:"psmodal",isClickOut:!1},{title:i(()=>[s("div",ee,[t(h,{class:"font-bold"},{default:i(()=>[p(m(r.$t("credit_card_modal__card_entry")),1)]),_:1})])]),body:i(()=>[s("div",re,[s("div",oe,[s("div",ae,[t(c,{class:"mt-4 mx-8"},{default:i(()=>[p(m(r.$t("credit_card_modal__card_number"))+" ",1),te]),_:1}),t(u,{class:"mt-2 mx-8",id:"card-number",type:"text",placeholder:r.paramHolder1.oldCardNo,value:r.paramHolder.oldCardNo,"onUpdate:value":l[0]||(l[0]=d=>r.paramHolder.oldCardNo=d),onInput:r.onOldCardInput,maxlength:19},null,8,["placeholder","value","onInput"]),t(c,{class:"mt-4 mx-8"},{default:i(()=>[p(m(r.$t("credit_card_modal__expired_date"))+" ",1),le]),_:1}),t(u,{class:"mt-2 mx-8",id:"card-expiry",type:"text",placeholder:r.paramHolder1.oldExpiryDate,value:r.paramHolder.oldExpiryDate,"onUpdate:value":l[1]||(l[1]=d=>r.paramHolder.oldExpiryDate=d),onInput:r.onOldExpiryDateInput,maxlength:5},null,8,["placeholder","value","onInput"]),t(n,{class:"mt-4"}),t(c,{class:"mt-4 mx-8"},{default:i(()=>[p(m(r.$t("credit_card_modal__new_card_number"))+" ",1),de]),_:1}),t(u,{class:"mt-2 mx-8",id:"card-number",type:"text",placeholder:r.$t("credit_card_modal__new_number_placeholder"),value:r.paramHolder.newCardNo,"onUpdate:value":l[2]||(l[2]=d=>r.paramHolder.newCardNo=d),onInput:r.onNewCardInput,maxlength:19},null,8,["placeholder","value","onInput"]),t(c,{class:"mt-4 mx-8"},{default:i(()=>[p(m(r.$t("credit_card_modal__new_expired_date"))+" ",1),ne]),_:1}),t(u,{class:"mt-2 mx-8",id:"card-expiry",type:"text",placeholder:r.$t("credit_card_modal__new_expired_date_placeholder"),value:r.paramHolder.newExpiryDate,"onUpdate:value":l[3]||(l[3]=d=>r.paramHolder.newExpiryDate=d),onInput:r.onNewExpiryDateInput,maxlength:5},null,8,["placeholder","value","onInput"]),t(c,{class:"mt-4 mx-8"},{default:i(()=>[p(m(r.$t("credit_card_modal__new_cvv"))+" ",1),ie]),_:1}),t(u,{class:"mt-2 mx-8",id:"card-cvc",type:"text",placeholder:r.$t("credit_card_modal__new_cvv_placeholder"),value:r.paramHolder.cvv,"onUpdate:value":l[4]||(l[4]=d=>r.paramHolder.cvv=d),maxlength:3},null,8,["placeholder","value"]),t(c,{class:"mt-4 mx-8"},{default:i(()=>[p(m(r.$t("credit_card_modal__new_card_holder_name"))+" ",1),se]),_:1}),t(u,{class:"mt-2 mx-8 mb-8",type:"text",placeholder:r.$t("credit_card_modal__new_card_holder_name_placeholder"),value:r.paramHolder.nameOnCard,"onUpdate:value":l[5]||(l[5]=d=>r.paramHolder.nameOnCard=d)},null,8,["placeholder","value"])])])])]),footer:i(()=>[s("div",pe,[t(y,{class:"text-center w-60 mx-auto",onClick:r.submitClicked},{default:i(()=>[p(m(r.$t("credit_card_modal__save")),1)]),_:1},8,["onClick"]),t(y,{class:"text-center w-60 mx-auto ms-4",theme:"btn-second",onClick:l[6]||(l[6]=d=>r.psmodal.toggle(!1))},{default:i(()=>[p(m(r.$t("credit_card_modal__cancel")),1)]),_:1})])]),_:1},512),t(w,{ref:"psloading",isClickOut:!1},null,512),t(C,{ref:"ps_error_dialog"},null,512)],64)}var Ke=X(Z,[["render",me]]);export{Ke as default};
