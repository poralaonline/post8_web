import{d as M,Z as E,p as I,i as P,G as B,j as F,c as U,b as s,a as c,w as a,n as W,F as j,D as A,r as i,o as T,q as l,t as m,h as O,g as C,f as x}from"./app.d57d51e9.js";import R from"./PsLabelHeader3.c07ae6fb.js";import z from"./PsLabelHeader5.36b62597.js";import{P as K}from"./PsCard.e47b5f14.js";import{u as q}from"./Validators.cb85894a.js";import N from"./PsInput.a60e3eb2.js";import{P as G}from"./PsInputWithRightIcon.8c9e6c80.js";import V from"./PsLabel.b794d5bb.js";import J from"./PsButton.38caef2b.js";import{P as Z}from"./PsIcon.1e42bf4c.js";import{P as Q}from"./PsCheckboxValue.373287f4.js";import X from"./PsLabelCaption.1fabc18a.js";import Y from"./PsLabelTitle.6c83e503.js";import ee from"./PsLabelTitle3.db3a4eea.js";import{P as oe}from"./PsLoading.1f212adc.js";import{f as _}from"./index.esm.159b9749.js";import"./PsNotificationBox.9d7f028f.js";import{u as re}from"./AuthStore.15f70667.js";import{g as $}from"./psApiService.cef39261.js";import te from"./PsFrontendLayout.296a569b.js";import{U as se}from"./UserCreateParameterHolder.d34d17bc.js";import{_ as ae}from"./plugin-vue_export-helper.21dcd24c.js";import"./Icons.ebbb778b.js";import"./PsLabel.06b4363b.js";import"./ProductStore.8e90df71.js";import"./ProductParameterHolder.e481cecf.js";import"./ps_constants.115f3686.js";import"./PsApiService.1464e9d5.js";import"./Product.8b62d5d3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.fb84ea36.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsValueStore.97ab20f6.js";import"./UserUnReadMessageParameterHolder.7f49d04a.js";import"./auth.esm.925cebae.js";import"./FooterView.a4d00124.js";import"./FooterLinkSection.df20daea.js";import"./PsLink.9f60ebb7.js";import"./PsRouteLink.0b0ba539.js";import"./PsIcon.9f1bf232.js";import"./AppInfoStore.9a878473.js";import"./PsNavTabBar.51c56524.js";import"./PsDropdown.7e09801f.js";import"./PsDropdownSelect.a17b6ef7.js";import"./PsIconToggle.a1ed1abf.js";import"./PsInputWithLeftIcon.098c7e47.js";import"./LocationModal.bd35d2f7.js";import"./PsModal.15d0cd4c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";import"./LocationParameterHolder.654c399d.js";import"./ItemLocationTownshipStore.0ddf7240.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.7b51b9e1.js";import"./UserStore.cdfd4a60.js";import"./UserListParameterHolder.d110b747.js";import"./PsConfirmDialog.ca5a3fee.js";import"./PsUtils.eb7a8002.js";import"./NotificationStore.d8e86611.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const ie=M({components:{Head:E,Link:I,PsLabelHeader3:R,PsCard:K,PsInput:N,PsInputWithRightIcon:G,PsLabel:V,PsButton:J,PsIcon:Z,PsCheckboxValue:Q,PsLabelCaption:X,PsLabelTitle:Y,PsLoading:oe,PsLabelTitle3:ee,getExistUser:$,PsLabelHeader5:z},props:{canResetPassword:Boolean,status:String,error:String,errors:Object,backendSetting:Object,userLoginData:Object,firebaseConfig:String,webPushKey:String,appUrl:String},layout:te,data(e){var o;return{form:this.$inertia.form({email:(o=e.userLoginData)==null?void 0:o.email,password:"",remember:!1,deviceToken:"",headerToken:"",loginMethod:e.userLoginData.loginMethod,google_id:e.userLoginData.google_id,facebook_id:e.userLoginData.facebook_id,apple_id:e.userLoginData.apple_id,profile_photo_url:e.userLoginData.profile_photo_url,name:e.userLoginData.name,registerForm:1,registerMethod:e.userLoginData.registerMethod,newUser:{username:e.userLoginData.username,password:""},user_phone:e.userLoginData.user_phone,phone_id:e.userLoginData.phone_id}),errors:{email:"",password:""}}},setup(e){const o=new se,d=P(),b=P(),H=P(!0),k=A(),w=B(()=>k.getters.isDarkMode),y=re(),h=JSON.parse(e.firebaseConfig);_.apps.length<1&&_.initializeApp(h);const p=_.messaging.isSupported()?_.messaging():null;p&&Notification.requestPermission().then(t=>{console.log(t==="granted"?"Notification permission granted.":"Unable to get permission to notify.")});function u(t,r){p&&fetch("https://iid.googleapis.com/iid/v1/"+t+"/rel/topics/"+r,{method:"POST",headers:new Headers({Authorization:"key="+e.backendSetting.fcm_api_key})}).then(n=>{if(n.status<200||n.status>=400)throw"Error subscribing to topic: "+n.status+" - "+n.text();console.log('Subscribed to "'+r+'"')}).catch(n=>{console.error(n)})}F(async()=>{if(k.dispatch("loadIsDarkMode"),"serviceWorker"in navigator){if(p){let t=e.appUrl,r=t+"/firebase-messaging-sw.js";t.endsWith("/")&&(r=t+"firebase-messaging-sw.js"),navigator.serviceWorker.register(r).then(function(n){p.getToken({vapidKey:e.webPushKey,serviceWorkerRegistration:n}).then(f=>{f&&(console.log("current token for client: ",f),localStorage.deviceToken=f,u(f,"fe_broadcast"))}).catch(f=>{console.log("An error occurred while retrieving token. ",f),localStorage.deviceToken="errorToken"})}).catch(function(n){localStorage.deviceToken="errorToken",console.log("Service worker registration failed, error:",n)})}}else localStorage.deviceToken="errorToken",console.log("no serviceWorker in navigator")});const{isEmpty:g,minLength:S,isEmail:v}=q();return{validateEmptyInput:(t,r)=>{e.errors[t]=r?S(t,r,4):g(t,r),t=="password"&&(b.value.isError=e.errors.password!="")},validateEmailInput:(t,r)=>{e.errors[t]=r?v(t,r):g(t,r),t=="email"&&(d.value.isError=e.errors.email!="")},email:d,password:b,isHide:H,authStore:y,paramHolder:o,isDarkMode:w}},methods:{async submit(){this.form.deviceToken=localStorage.deviceToken;const e=new Date;localStorage.headerToken=localStorage.deviceToken+e.getTime(),this.form.headerToken=localStorage.headerToken,this.form.password=this.form.newUser.password,this.paramHolder.username=this.form.newUser.username,this.paramHolder.password=this.form.newUser.password,this.paramHolder.google_id=this.form.google_id,this.paramHolder.facebook_id=this.form.facebook_id,this.paramHolder.apple_id=this.form.apple_id,this.form.loginMethod=="phone"?this.paramHolder.name=this.userLoginData.displayName:this.paramHolder.name=this.form.name?this.form.name:this.form.username,this.paramHolder.email=this.form.email,this.paramHolder.profile_photo_url=this.form.profile_photo_url?this.form.profile_photo_url:"",this.paramHolder.registerForm=this.form.registerForm,this.paramHolder.loginMethod=this.form.loginMethod,this.paramHolder.user_phone=this.form.user_phone,this.paramHolder.phone_id=this.form.phone_id;const o=await this.authStore.createUserwithUsername(this.paramHolder);o.data.status=="error"&&(this.errors.email="",this.errors.password="",this.errors.email=o.data.message.username[0],this.errors.password=o.data.message.password[0]),o.data.status=="success"&&(this.form.loginMethod=="phone"&&(this.form.email=this.form.user_phone.replace("-","")),this.form.loginMethod="normal",this.form.transform(d=>({...d,remember:this.form.remember?"on":""})).post(this.route("login"),{onFinish:()=>this.form.reset("password")}))},async getCategoriesData(e){category_loadmore_visible.value=!0,is_loading.value=!0,$(e).then(o=>{this.form.newUser=o.data})},async googleloginclicked(){const e=await this.authStore.loginWithGoogleId();this.form.deviceToken=localStorage.deviceToken;const o=new Date;localStorage.headerToken=localStorage.deviceToken+o.getTime(),this.form.headerToken=localStorage.headerToken,this.form.email=e.email,this.form.password="admin123",this.form.loginMethod="google",this.form.google_id=e.uid,this.form.name=e.displayName,this.form.profile_photo_url=e.photoURL,this.form.transform(d=>({...d})).post(this.route("createUser"),{onFinish:()=>this.form.reset("password")})},handleReset(){this.$inertia.get(route("password.request"))}}}),ne={class:"min-h-screen flex flex-col lg:mt-36 mt-28 items-center pt-6 sm:pt-0 dark:bg-feAchromatic-900 dark:text-feSecondary-50"},le={class:"px-6"},me={key:0,class:"mb-4"},de={class:"mb-4"},pe={class:"mb-8"},ce={class:"block mt-4"};function fe(e,o,d,b,H,k){const w=i("Head"),y=i("ps-label-header-5"),h=i("ps-label"),p=i("ps-input"),u=i("ps-label-caption"),g=i("ps-label-title-3"),S=i("ps-icon"),v=i("ps-input-with-right-icon"),L=i("ps-loading"),D=i("ps-button"),t=i("ps-card");return T(),U(j,null,[s(w,{title:e.$t("core__fe_sign_in")},null,8,["title"]),c("div",{class:W(e.isDarkMode?"dark":"")},[c("div",ne,[s(t,{class:"w-full sm:max-w-md mt-6 py-4 dark:bg-feSecondary-800"},{default:a(()=>[c("div",le,[s(y,{class:"pt-2 text-center font-semibold"},{default:a(()=>[l(m(e.$t("core_fe_create_account")),1)]),_:1}),c("form",{class:"mt-6",onSubmit:o[6]||(o[6]=O((...r)=>e.submit&&e.submit(...r),["prevent"]))},[e.userLoginData.loginMethod=="phone"?(T(),U("div",me,[s(h,{class:"mb-2",textColor:"text-feSecondary-800 dark:text-feSecondary-200"},{default:a(()=>[l(m(e.$t("core__fe_user_phone")),1)]),_:1}),s(p,{ref:"phone",type:"text",value:e.form.user_phone,"onUpdate:value":o[0]||(o[0]=r=>e.form.user_phone=r),class:"placeholder-feSecondary-800 dark:placeholder-feSecondary-500",theme:"text-feSecondary-500 dark:bg-feSecondary-800",defaultBorder:"border border-feSecondary-200 dark:border-feSecondary-400 focus:outline-none focus:ring-1 focus:ring-fePrimary-500",placeholder:e.$t("core__fe_phone_placeholder"),disabled:!0},null,8,["value","placeholder"]),s(u,{textColor:"text-feError-500 ",class:"mt-2 block"},{default:a(()=>[l(m(e.errors.phone),1)]),_:1})])):C("",!0),c("div",de,[s(h,{class:"mb-2",textColor:"text-feSecondary-800 dark:text-feSecondary-200"},{default:a(()=>[l(m(e.$t("core__fe_username")),1)]),_:1}),s(p,{ref:"email",type:"text",value:e.form.newUser.username,"onUpdate:value":o[1]||(o[1]=r=>e.form.newUser.username=r),class:"placeholder-feSecondary-800 dark:placeholder-feSecondary-500",theme:"text-feSecondary-500 dark:bg-feSecondary-800",defaultBorder:"border border-feSecondary-200 dark:border-feSecondary-400 focus:outline-none focus:ring-1 focus:ring-fePrimary-500",placeholder:e.$t("core__fe_username_placeholder"),autofocus:""},null,8,["value","placeholder"]),s(g,{class:"mt-2",textColor:"text-feSecondary-400 dark:text-feSecondary-500"},{default:a(()=>[l(m(e.$t("username__fe_valid_description")),1)]),_:1}),s(u,{textColor:"text-feError-500 ",class:"mt-2 block"},{default:a(()=>[l(m(e.errors.email),1)]),_:1})]),c("div",pe,[s(h,{class:"mb-2",textColor:"text-feSecondary-800 dark:text-feSecondary-200"},{default:a(()=>[l(m(e.$t("core__fe_password")),1)]),_:1}),s(v,{value:e.form.newUser.password,"onUpdate:value":o[3]||(o[3]=r=>e.form.newUser.password=r),ref:"password",placeholderColor:"placeholder-feSecondary-400 dark:placeholder-feSecondary-500",theme:"bg-feAchromatic-50 dark:bg-feSecondary-800",type:e.isHide?"password":"text",onKeyup:o[4]||(o[4]=r=>e.validateEmptyInput("password",e.form.password)),onBlur:o[5]||(o[5]=r=>e.validateEmptyInput("password",e.form.password)),placeholder:e.$t("core__fe_password_placeholder2"),autocomplete:"current-password"},{icon:a(()=>[s(S,{onClick:o[2]||(o[2]=r=>e.isHide=!e.isHide),class:"cursor-pointer",name:e.isHide?"eyeOff":"eye-on"},null,8,["name"])]),_:1},8,["value","type","placeholder"]),s(u,{textColor:"text-feError-500 ",class:"mt-2 block"},{default:a(()=>[l(m(e.errors.password),1)]),_:1})]),c("div",ce,[s(D,{class:"w-full mb-2"},{default:a(()=>[e.form.processing?(T(),x(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-fePrimary-500 me-1",loadingSize:"h-5 w-5"})):C("",!0),l(" "+m(e.$t("core__fe_btn_done")),1)]),_:1})])],32),l(" "+m(e.authStore.errorMessage),1)])]),_:1})])],2)],64)}var Mo=ae(ie,[["render",fe]]);export{Mo as default};
