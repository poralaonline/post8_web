import"https://checkout.razorpay.com/v1/checkout.js";import re from"./PsModal.15d0cd4c.js";import le from"./PsLabel.b794d5bb.js";import se from"./PsButton.38caef2b.js";import ie from"./PsRadio.1fdf431d.js";import me from"./PsRadio2.223575b5.js";import pe from"./PsErrorDialog.01320524.js";import de from"./PsWarningDialog2.aa0d5d76.js";import ce from"./PsIcon.9f1bf232.js";import fe from"./StripePaymentModal.6702f38d.js";import ue from"./PaypalPaymentModal.20586f55.js";import _e from"./OfflinePaymentModal.acf5f958.js";import ge from"./InputEmailModal.fe6d0ad2.js";import{u as ye}from"./AppInfoStore.9a878473.js";import{P as be}from"./PsValueStore.97ab20f6.js";import{u as ke}from"./UserStore.cdfd4a60.js";import{u as Pe}from"./PackageStore.47117577.js";import{I as ve}from"./ItemLimitParameterHolder.a3bfbb51.js";import{A as Se}from"./AppInfoParameterHolder.e24d894d.js";import{u as Ie}from"./LimitAdItemStore.55c4edf6.js";import{b as ee}from"./PsApiService.1464e9d5.js";import{d as he,i as u,o as k,c as te,b as r,w as a,a as s,f as E,q as P,t as y,g as L,F as Ce,s as Ae,n as we,m as U,B as R,r as _,E as Ee}from"./app.d57d51e9.js";import{P as N}from"./ps_constants.115f3686.js";import{s as oe}from"./inline.d0ef9675.js";import{P as T}from"./PsUtils.eb7a8002.js";import{f as Me}from"./format.min.0ec31140.js";import{_ as Le}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";import"./PsLabelTitle.6c83e503.js";import"./stripe.esm.307e598d.js";import"./PsLabelHeader4.c908098e.js";import"./PsLoadingDialog.eb65b887.js";import"./TokenStore.27f92187.js";import"./ApiStatus.5720ba0b.js";import"./PsObject.a17ef38f.js";import"./PsSepetetedStore.9a31ac47.js";import"./dropin.1dc84efe.js";import"./PsLabelTitle3.db3a4eea.js";import"./PsLabelHeader6.c74c5e2a.js";import"./OfflinePaymentStore.b97ce520.js";import"./DefaultIcon.e76b39a5.js";import"./PsInput.a60e3eb2.js";import"./DefaultPhoto.cc755f93.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./Package.5254ef20.js";import"./PaymentInfo.5aa268a0.js";import"./LimitAdTransaction.68a62e95.js";const Ne=he({name:"LimitItemModal",components:{PsModal:re,PsIcon:ce,PsLabel:le,PsButton:se,PsErrorDialog:pe,PsRadio2:me,PsRadio:ie,StripePaymentModal:fe,PaypalPaymentModal:ue,OfflinePaymentModal:_e,PsWarningDialog2:de,InputEmailModal:ge},setup(){const e=u(),n=u(),V=u(),H=u(),F=u(),x=u(),i=u(),d=u(),g=Pe(),v=Ie(),b=new ve,o=ye(),K=new Se,Y=ke(),S=be().getLoginUserId(),z=u(0),C=u(""),l=u("");async function m(){e.value.toggle(!0),await v.resetPaidAdItemList(S),await g.packageListWithPurchasedCount(S),A();const t=await o.loadAppInfo(K);C.value=t.data.razorKey,t.status==ee.SUCCESS?z.value=parseInt(t.data.oneDay,10):z.value=0}function A(){g.packageList!=null&&g.packageList.data!=null&&g.packageList.data.length>0&&(d.value=g.packageList.data[0])}function w(t){if(d.value==null||d.value.paymentInfo==null){F.value.openModal("",$t("select_package"));return}o.appInfo.data.mobileSetting.is_demo_for_payment==1?i.value.openModal(R("payment__warning_title"),R("payment__confirm_message"),R("payment__ok"),R("credit_card_modal__cancel"),()=>{t=="PAYPAL"?j():t=="STRIPE"?M():t=="RAZOR"?Z():t=="PAYSTACK"?W():t=="OFFLINE"&&q()},()=>{T.log("Cancel")}):t=="PAYPAL"?j():t=="STRIPE"?M():t=="RAZOR"?Z():t=="PAYSTACK"?W():t=="OFFLINE"&&q()}function M(){e.value.toggle(!1),n.value.openModal(()=>{const t=N.PAYMENT_STRIPE_METHOD.toString();c(t)},()=>{T.log("Cancel")})}async function c(t){var f;b.userId=S,b.packageId=(f=d.value.paymentInfo)==null?void 0:f.id,b.paymentMethod=t,b.paymentMethodNounce=localStorage.paymentNonce||"",b.price=d.value.paymentAttributes.price,b.razorId=l.value||"";const p=await g.postPackageBought(S,b);e.value.toggle(!1),p.status==ee.ERROR?F.value.openModal("",g.limititem.message):(localStorage.paymentNonce="",location.reload())}function j(){e.value.toggle(!1),V.value.openModal(()=>{const t=N.PAYMENT_PAYPAL_METHOD.toString();c(t)},()=>{T.log("Cancel")})}async function Z(){const p=(await Y.loadUser(S)).data,f={key:C.value,name:"Test Company",prefill:{email:p.userEmail,name:p.userName,contact:p.userPhone},theme:{color:"#0e9f6e"},handler:async function(h){l.value=h.razorpay_payment_id,c(N.PAYMENT_RAZOR_METHOD.toString())}},I=new window.Razorpay(f);I.open(),I.on("payment.failed",function(h){})}async function W(){var I;const p=(await Y.loadUser(S)).data;let f=p.userEmail;p.userEmail==""||p.userEmail==null?x.value.openModal(h=>{var O;f=h,oe.setup({key:(O=o==null?void 0:o.appInfo)==null?void 0:O.data.payStackKey,email:f,amount:d.value.price,callback:async function(D){T.log(D),c(N.PAYMENT_PAY_STACK_METHOD.toString())},onClose:function(){}}).openIframe()},()=>{console.log("cancel")}):oe.setup({key:(I=o==null?void 0:o.appInfo)==null?void 0:I.data.payStackKey,email:f,amount:d.value.paymentAttributes.price,callback:async function($){T.log($),c(N.PAYMENT_PAY_STACK_METHOD.toString())},onClose:function(){}}).openIframe()}function q(){e.value.toggle(!1),H.value.openModal(()=>{const t=N.PAYMENT_OFFLINE_METHOD.toString();c(t)},()=>{T.log("Cancel")})}function ae(t){var p,f,I,h,$,O,D,G,J;if(t.toString()=="0")return R("item_price__free");if(((I=(f=(p=o==null?void 0:o.appInfo)==null?void 0:p.data)==null?void 0:f.mobileSetting)==null?void 0:I.price_format)==="###,###")return new Intl.NumberFormat("en-FR",{style:"decimal",useGrouping:!0,minimumFractionDigits:0}).format(t).replace(","," ");if(((O=($=(h=o==null?void 0:o.appInfo)==null?void 0:h.data)==null?void 0:$.mobileSetting)==null?void 0:O.price_format)==="##,####"){let Q=parseFloat(t).toFixed(4).split("."),X=Q.pop();return X=Q[0],X.replace(/(\d)(?=(\d{4})+$)/g,"$1,")}else return Me((J=(G=(D=o==null?void 0:o.appInfo)==null?void 0:D.data)==null?void 0:G.mobileSetting)==null?void 0:J.price_format,t)}return{psmodal:e,openModal:m,packageprovider:g,appInfoStore:o,limitProvider:v,ps_error_dialog:F,stripe_payment_modal:n,paypal_payment_modal:V,offline_payment_modal:H,selected:d,ps_warning_dialog:i,paymentClicked:w,input_email:x,formatPrice:ae}}}),Te={class:"flex justify-between items-start"},$e={class:"flex flex-wrap"},Oe={class:"flex flex-col mt-1 sm:mt-7"},Re={class:""},Fe={class:"flex flex-col w-full"},Ye={class:"flex flex-col w-full mt-3 gap-2 sm:gap-4",id:"r1"},ze={class:"font-light"},De={class:"grid grid-cols-3 sm:grid-cols-3 gap-4 mt-6"},Ue={alt:"",class:"w-full h-full object-contain bottom-0"},Ve={alt:"",class:"w-full h-full object-contain bottom-0"},He={alt:"",class:"w-full h-full object-contain bottom-0"},xe={alt:"",class:"w-full h-full object-contain bottom-0"},Ke=P("Offline");function Be(e,n,V,H,F,x){const i=_("ps-label"),d=_("ps-icon"),g=_("ps-radio-2"),v=_("ps-button"),b=_("ps-modal"),o=_("stripe-payment-modal"),K=_("paypal-payment-modal"),Y=_("ps-warning-dialog-2"),B=_("offline-payment-modal"),S=_("ps-error-dialog"),z=_("input-email-modal"),C=Ee("lazy");return k(),te("div",null,[r(b,{ref:"psmodal",line:"hidden",maxWidth:"534px",isClickOut:!1,class:"h-full",bodyHeight:"max-h-75",theme:"px-4 py-8 sm:p-8 rounded-lg"},{title:a(()=>{var l,m,A,w;return[s("div",Te,[((l=e.limitProvider.buyadList)==null?void 0:l.data)!=null&&((w=(A=(m=e.limitProvider.buyadList)==null?void 0:m.data[0])==null?void 0:A.user)==null?void 0:w.remainingPost)==0?(k(),E(i,{key:0,textColor:"text-lg font-semibold text-feSecondary-800 mb-2"},{default:a(()=>[P(y(e.$t("limit_item_modal__quota_running_out.")),1)]),_:1})):L("",!0),s("div",$e,[r(i,{class:"text-lg text-feSecondary-800 me-2"},{default:a(()=>[P(y(e.$t("limit_item_modal__limit")),1)]),_:1}),r(i,{class:"text-lg"},{default:a(()=>[P(y(e.$t("limit_item_modal__limit_post_buy")),1)]),_:1})]),r(d,{class:"cursor-pointer dark:text-feSecondary-500",name:"close",w:"24",h:"24",onClick:n[0]||(n[0]=M=>e.psmodal.toggle(!1))})])]}),body:a(()=>[s("div",Oe,[s("div",Re,[s("div",Fe,[r(i,{class:"font-medium text-base"},{default:a(()=>[P(y(e.$t("promote_item_modal__choose_package")),1)]),_:1}),s("div",Ye,[(k(!0),te(Ce,null,Ae(e.packageprovider.packageList.data,l=>(k(),E(g,{class:we(["border px-2 py-2 rounded",{"border-fePrimary-500":e.selected===l}]),key:l.packageId,value:l,selectedValue:e.selected,"onUpdate:selectedValue":n[1]||(n[1]=m=>e.selected=m)},{title:a(()=>[s("div",null,[r(i,{class:"ms-2 pl-1 text-sm font-semibold text-feSecondary-800"},{default:a(()=>[P(y(l.paymentInfo.value),1)]),_:2},1024),r(i,{class:"ms-2 pl-1 mt-1 text-sm text-feSecondary-800"},{default:a(()=>[P(y(l.paymentAttributes.count)+" "+y(e.$t("limit_item_modal__post")),1)]),_:2},1024)])]),price:a(()=>[r(i,{class:"text-sm"},{default:a(()=>{var m;return[s("span",ze,y((m=l.paymentAttributes)==null?void 0:m.currencySymbol),1),P(" "+y(e.formatPrice(l.paymentAttributes.price)),1)]}),_:2},1024)]),_:2},1032,["value","selectedValue","class"]))),128))])])])])]),footer:a(()=>{var l,m,A,w,M;return[r(i,{class:"mt-6 sm:mt-7 font-medium text-base"},{default:a(()=>[P(y(e.$t("promote_item_modal__pay_with")),1)]),_:1}),s("div",De,[((l=e.appInfoStore.appInfo.data)==null?void 0:l.paypalEnable)=="1"?(k(),E(v,{key:0,colors:"bg-transparent dark:bg-feSecondary-50",border:"border hover:shadow",hover:"none",class:"",rounded:"rounded-lg",onClick:n[2]||(n[2]=c=>e.paymentClicked("PAYPAL"))},{default:a(()=>[U(s("img",Ue,null,512),[[C,{src:e.$page.props.sysImageUrl+"/paypal.png"}]])]),_:1})):L("",!0),((m=e.appInfoStore.appInfo.data)==null?void 0:m.stripeEnable)=="1"?(k(),E(v,{key:1,colors:"bg-transparent  dark:bg-feSecondary-50",border:"border hover:shadow",hover:"none",class:"",rounded:"rounded-lg",onClick:n[3]||(n[3]=c=>e.paymentClicked("STRIPE"))},{default:a(()=>[U(s("img",Ve,null,512),[[C,{src:e.$page.props.sysImageUrl+"/stripe.png"}]])]),_:1})):L("",!0),((A=e.appInfoStore.appInfo.data)==null?void 0:A.razorEnable)=="1"?(k(),E(v,{key:2,colors:"bg-transparent dark:bg-feSecondary-50",border:"border hover:shadow",hover:"none",class:"",rounded:"rounded-lg",onClick:n[4]||(n[4]=c=>e.paymentClicked("RAZOR"))},{default:a(()=>[U(s("img",He,null,512),[[C,{src:e.$page.props.sysImageUrl+"/razorpay.png"}]])]),_:1})):L("",!0),((w=e.appInfoStore.appInfo.data)==null?void 0:w.payStackEnabled)=="1"?(k(),E(v,{key:3,colors:"bg-transparent dark:bg-feSecondary-50",border:"border hover:shadow",hover:"none",class:"",rounded:"rounded-lg",onClick:n[5]||(n[5]=c=>e.paymentClicked("PAYSTACK"))},{default:a(()=>[U(s("img",xe,null,512),[[C,{src:e.$page.props.sysImageUrl+"/paystack.png"}]])]),_:1})):L("",!0),((M=e.appInfoStore.appInfo.data)==null?void 0:M.offlineEnabled)=="1"?(k(),E(v,{key:4,colors:"bg-transparent dark:bg-feSecondary-50",class:"",border:"border hover:shadow",hover:"none",padding:"px-8 py-4",rounded:"rounded-lg",onClick:n[6]||(n[6]=c=>e.paymentClicked("OFFLINE"))},{default:a(()=>[r(d,{class:"dark:text-feSecondary-800 pr-1",name:"wallet",w:"20",h:"20"}),r(i,{textColor:" font-semibold"},{default:a(()=>[Ke]),_:1})]),_:1})):L("",!0)])]}),_:1},512),r(o,{ref:"stripe_payment_modal"},null,512),r(K,{ref:"paypal_payment_modal"},null,512),r(Y,{ref:"ps_warning_dialog"},null,512),r(B,{ref:"offline_payment_modal"},null,512),r(S,{ref:"ps_error_dialog"},null,512),r(z,{ref:"input_email"},null,512)])}var Kt=Le(Ne,[["render",Be]]);export{Kt as default};
