import{p as Q,y as _e,i,z as Ie,A as Te,B as $,O as N,C as Ee,o as r,c as f,a as o,b as t,w as s,F as H,s as G,n as F,q as d,t as l,f as k,g as h,m as le,h as Oe,D as re,r as m,E as pe,G as R,k as ze,j as me,d as ie,H as J,Z as Ne,I as Ve,Q as ue,x as ae,l as He}from"./app.d57d51e9.js";import{P as X}from"./PsIcon.1e42bf4c.js";import{P as Re}from"./PsDropdown.0c78da9b.js";import{P as We}from"./PsDropdownSelect.13d0e05f.js";import{P as Z}from"./PsLabel.06b4363b.js";import{b as Ge,P as Ze,c as qe,a as Ke,d as Ye}from"./PsDangerDialog.1643aeb7.js";import{P as Je}from"./PsToggle.fddd5498.js";import{P as ee}from"./PsButton.c9fc3d7e.js";import{P as Qe}from"./PsWarningDialog.67ba6cb5.js";import{f as ne}from"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import{S as Xe}from"./SidebarMenuItem.66190284.js";import{S as eo}from"./SidebarSubTab.148b6988.js";import{P as fe}from"./PsInputWithRightIcon.8c9e6c80.js";import{P as ge}from"./PsSuccessDialog.a19b3bb4.js";import{P as he}from"./PsModal.f198af2b.js";import{P as oo}from"./PsLoading.1f212adc.js";import{P as to}from"./PsInput.b3485f1e.js";import{P as so}from"./PsLabelCaption.b0af0e56.js";import{P as ao}from"./PsBannerIcon.0cb3925c.js";import{P as lo}from"./PsLoadingCircleDialog.c95deca1.js";import{P as no}from"./PsErrorDialog.a25aef9e.js";const ro={components:{PsIcon:X,PsDropdown:Re,PsDropdownSelect:We,PsLabel:Z,Link:Q,PsToggle:Je,PsButton:ee,PsIconToggle:Ge,PsLabelHeader6:Ze,PsTextButton:qe,PsLabelCaption3:Ke,PsDangerDialog:Ye,PsWarningDialog:Qe},props:["can","defaultProfileImg"],data(){return{show:!1,selectedLanguage:""}},setup(){const e=_e({data:{}}),a=i(!1),C=i(),n=i(),B=i(),L=re(),u=i(localStorage.activeLanguage);async function _(){e.data!=null&&e.data.length>0?await c():(a.value=!0,await c(),a.value=!1)}async function c(){await axios.get(route("contact.getContactFormTitle")).then(b=>{e.data=b.data.contacts,n.value=b.data.unseenCount}).catch(b=>{})}function w(b){C.value.openModal($("core__delete"),$("core__comfirm_to_delete_contact"),$("core__be_btn_confirm"),$("core__be_btn_cancel"),()=>{N.delete(route("contact.destroy",b),{onSuccess:()=>{c()},onError:()=>{}})},()=>{})}function v(){B.value.openModal($("core__warning"),$("core__comfirm_to_mark_as_read"),$("core__be_btn_confirm"),$("core__be_btn_cancel"),()=>{N.put(route("contact.allasread"),{onSuccess:()=>{c()},onError:()=>{}})},()=>{})}function x(b){N.get(route("contact.edit",b))}function g(b){N.put(route("language.changeLanguage",b.symbol),"",{onSuccess:()=>{Ee(b.symbol),L.dispatch("handleActiveLanguage",b.symbol),setTimeout(()=>{window.location.reload()},1e3)}})}return{contacts:e,clickMessageButton:_,clickedDeleteContact:w,loading:a,ps_danger_dialog:C,makeAllRead:v,goToDetail:x,count:n,ps_warning_dialog:B,handleLanguage:g,activeLanguage:u}},computed:{...Ie(["isDarkMode","dir","sidebarNavOpen","sidebarFull","showMenu","supportedLanguages"])},methods:{...Te(["handleSidebarFull","handleSidebarNavOpen","handleShowMenu","toggleDir","toggleDarkMode"]),logout(){ne.auth().signOut(),this.$inertia.post(route("logout"))},toContact(){this.$inertia.get(route("contact.index"))}}},io={class:"text-secondary-800 dark:text-secondary-100 font-extrabold flex flex-row ps-6"},co={class:"text-secondary-800 flex items-center"},uo={class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8"},_o={class:"rounded-md shadow-xs w-32"},po={class:"pt-2 z-30"},mo=["onClick"],fo={class:"rounded-md shadow-xs w-72 sm:w-96 lg:w-140"},go={class:"z-30 py-2"},ho={class:"w-full items-center px-4 py-2"},bo={class:"flex justify-between"},vo={key:0,class:"text-white text-center ms-2 px-1.5 text-sm py-0.5 rounded-full bg-primary-500"},ko={key:0},yo={key:1,class:"h-80 overflow-y-auto"},wo=["onClick"],$o={class:"h-8 w-8 sm:w-12 sm:h-12"},Co={width:"20",height:"20",class:"mx-2 h-8 w-8 sm:w-12 sm:h-12 rounded-full ring-2 object-cover",alt:"Profile photo"},xo={class:"w-full ms-4"},Po={class:"flex flex-col sm:flex-row sm:justify-between lg:justify-start lg:grid grid-cols-2 text-sm"},So={class:"truncate w-44 sm:w-68 lg:w-104 overflow-hidden"},Bo={key:2},Lo={class:"h-8 w-8 rounded-full"},Do=["alt"],jo=["src","alt"],Uo={class:"rounded-md shadow-xs w-56"},Fo={class:"z-30"},Mo={type:"submit",class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"};function Ao(e,a,C,n,B,L){const u=m("ps-icon"),_=m("ps-dropdown-select"),c=m("ps-label"),w=m("ps-dropdown"),v=m("ps-icon-toggle"),x=m("ps-label-caption-3"),g=m("ps-text-button"),b=m("Link"),P=m("ps-danger-dialog"),S=m("ps-warning-dialog"),A=pe("lazy");return r(),f("div",{class:F([{"ps-0 xl:ps-76":e.sidebarFull,"ps-0 xl:ps-20":!e.sidebarFull},"fixed transition-all duration-600 bg-white z-50 dark:bg-secondary-800 dark:text-white shadow py-2 pe-6 items-center flex justify-between w-full"])},[o("div",io,[o("button",{onClick:a[0]||(a[0]=y=>{e.handleShowMenu(e.sidebarFull?e.showMenu:!1),e.handleSidebarFull(!e.sidebarFull)}),class:"hidden xl:block"},[t(u,{name:"hamburger"})]),o("button",{onClick:a[1]||(a[1]=y=>{e.handleSidebarNavOpen(!e.sidebarNavOpen),e.handleShowMenu(e.sidebarFull?e.showMenu:!1)}),class:"xl:hidden block"},[t(u,{name:"hamburger"})])]),o("div",co,[o("div",uo,[t(w,{align:"left"},{select:s(()=>[t(_,{padding:"px-4 py-0.5",selectedValue:e.$page.props.languages.filter(y=>y.symbol==n.activeLanguage)[0].name},null,8,["selectedValue"])]),list:s(()=>[o("div",_o,[o("div",po,[(r(!0),f(H,null,G(e.$page.props.languages,y=>(r(),f("div",{key:y.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:p=>n.handleLanguage(y)},[t(c,{class:F(["ms-2",y.symbol==n.activeLanguage?" font-bold":""])},{default:s(()=>[d(l(y.name),1)]),_:2},1032,["class"])],8,mo))),128))])])]),_:1})]),t(v,{class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8",selectedValue:e.isDarkMode,onOnChange:e.toggleDarkMode},null,8,["selectedValue","onOnChange"]),t(w,{horizontalAlign:"right",class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8 w-full",h:"h-auto"},{select:s(()=>[t(u,{onClick:n.clickMessageButton,name:"email",class:"text-secondary-800 dark:text-secondary-100 cursor-pointer text-"},null,8,["onClick"])]),list:s(()=>{var y;return[o("div",fo,[o("div",go,[o("div",ho,[o("div",bo,[t(c,{class:"text-md lg:text-lg",textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[d(l(e.$t("core__be_messages")),1)]),_:1}),e.$page.props.can.updateContact?(r(),k(c,{key:0,onClick:n.makeAllRead,class:"text-xs sm:text-sm cursor-pointer",textColor:"text-primary-500"},{default:s(()=>[d(l(e.$t("core__be_mark_all_as_read")),1)]),_:1},8,["onClick"])):h("",!0)]),t(c,{textColor:"text-sm sm:text-md text-primary-500 mt-4 lg:mt-6 mb-2"},{default:s(()=>[d(l(e.$t("core__be_new_messages")),1),n.count>0?(r(),f("span",vo,l(n.count),1)):h("",!0)]),_:1}),d(" "+l(n.contacts.data.newMessageCount),1)]),n.loading?(r(),f("div",ko,[t(c,{class:"text-center py-6"},{default:s(()=>[d(l(e.$t("core__be_loading")),1)]),_:1})])):((y=n.contacts.data)==null?void 0:y.length)>0?(r(),f("div",yo,[(r(!0),f(H,null,G(n.contacts.data,p=>{var D;return r(),f("div",{key:p.id,class:"cursor-pointer"},[o("div",{class:F([p.is_read==0?"bg-primary-50 dark:bg-primary-900":"bg-secondary-50 dark:bg-secondary-900 ","rounded py-3 px-4 mb-2 text-base inline-flex items-center w-full shadow-sm"])},[o("div",{class:"flex flex-row w-full items-center",onClick:I=>n.goToDetail(p.id)},[o("div",$o,[le(o("img",Co,null,512),[[A,{src:e.$page.props.uploadUrl+"/"+((D=p.owner)==null?void 0:D.user_cover_photo),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]])]),o("span",xo,[o("span",Po,[t(c,{class:"font-semibold text-xs sm:text-sm"},{default:s(()=>[d(l(p.contact_name),1)]),_:2},1024),t(x,null,{default:s(()=>[d(l(e.$t("core__be_by"))+" : "+l(p.contact_email),1)]),_:2},1024)]),o("div",So,[t(x,{class:"truncate w-44 sm:w-68 lg:w-104"},{default:s(()=>[d(l(p.contact_message),1)]),_:2},1024)])])],8,wo),p.authorization.delete?(r(),k(u,{key:0,name:"close",onClick:I=>n.clickedDeleteContact(p.id),class:"text-secondary-400 text-sm ms-auto justify-end my-auto focus:shadow-none hover:text-purple-500"},null,8,["onClick"])):h("",!0)],2)])}),128))])):(r(),f("div",Bo,[t(c,{class:"text-center py-6"},{default:s(()=>[d(l(e.$t("core__be_no_contact_message")),1)]),_:1})])),t(g,{class:"w-full justify-center m-3",textColor:"text-primary-500",onClick:a[2]||(a[2]=p=>L.toContact())},{default:s(()=>[d(l(e.$t("core__be_view_all_message")),1)]),_:1})])])]}),_:1}),t(w,{horizontalAlign:"right",class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8 w-full",h:"h-auto"},{select:s(()=>{var y,p;return[o("div",Lo,[(y=e.$page.props.authUser)!=null&&y.user_cover_photo?le((r(),f("img",{key:0,class:"object-cover h-8 w-8 rounded-full cursor-pointer",alt:e.$t("core__be_profile")},null,8,Do)),[[A,{src:e.$page.props.uploadUrl+"/"+((p=e.$page.props.authUser)==null?void 0:p.user_cover_photo),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]):(r(),f("img",{key:1,class:"object-cover h-8 w-8 rounded-full cursor-pointer",src:e.$page.props.uploadUrl+"/default_profile.png",alt:e.$t("core__be_profile")},null,8,jo))])]}),list:s(()=>[o("div",Uo,[o("div",Fo,[t(b,{href:e.route("user.profile.edit",e.$page.props.user),class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},{default:s(()=>[t(u,{name:"user-line"}),t(c,{class:"ms-2"},{default:s(()=>[d(l(e.$t("core__be_profile")),1)]),_:1})]),_:1},8,["href"]),e.$page.props.canAccessVendor?(r(),k(b,{key:0,href:e.route("vendor.setSession"),class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},{default:s(()=>[t(u,{name:"refresh"}),t(c,{class:"ms-2"},{default:s(()=>[d(l(e.$t("core__be_switch_to_vendor")),1)]),_:1})]),_:1},8,["href"])):h("",!0),t(b,{href:e.route("dashboard"),class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},{default:s(()=>[t(u,{name:"refresh"}),t(c,{class:"ms-2"},{default:s(()=>[d(l(e.$t("core__be_switch_to_fe")),1)]),_:1})]),_:1},8,["href"]),o("form",{onSubmit:a[3]||(a[3]=Oe((...y)=>L.logout&&L.logout(...y),["prevent"]))},[o("button",Mo,[t(u,{name:"signOut"}),t(c,{class:"ms-2"},{default:s(()=>[d(l(e.$t("core__be_logout")),1)]),_:1})])],32)])])]),_:1})]),t(P,{ref:"ps_danger_dialog"},null,512),t(S,{ref:"ps_warning_dialog"},null,512)],2)}var Io=q(ro,[["render",Ao]]);const To={components:{Link:Q,SidebarMenuItem:Xe,SideBarTab:eo,PsLabel:Z,PsIcon:X,PsInputWithRightIcon:fe},setup(){const e=i(""),a=re(),C=R(()=>a.getters.sidebarNavOpen),n=R(()=>a.getters.sidebarFull),B=i(R(()=>a.getters.sidebarActive)),L=i("0");function u(v){a.dispatch("handleSidebarNavOpen",v)}function _(v){a.dispatch("handleSidebarFull",v)}const c=i(null);function w(){localStorage.sidebarScroll=c.value.scrollTop}return ze(()=>{}),me(()=>{c.value.addEventListener("scroll",w),localStorage.sidebarScroll!=null&&setTimeout(()=>{c.value.scrollTo(0,parseInt(localStorage.sidebarScroll))},1e3)}),{searchterm:e,sidebarNavOpen:C,handleSidebarFull:_,sidebarFull:n,sidebarActive:B,dropDownOpen:L,handleSidebarNavOpen:u,sidebarMenuC:c}}},Eo={class:"grid grid-cols-1 divide-y-4"},Oo={class:""},zo={key:0},No={key:1},Vo={key:2},Ho={key:3},Ro={class:"flex items-center justify-center my-2 py-2"};function Wo(e,a,C,n,B,L){const u=m("Link"),_=m("ps-label"),c=m("ps-icon"),w=m("ps-input-with-right-icon"),v=m("sidebar-menu-item"),x=pe("lazy");return r(),f("div",{ref:"sidebarMenuC",class:F(["h-screen bg-primary-50 dark:border-gray-600 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-100 transition-all duration-30 p-4 fixed xl:relative overflow-y-scroll overflow-x-hidden scroll-smooth",{"w-76":n.sidebarFull,"w-76 xl:w-20":!n.sidebarFull,"top-0 start-0":n.sidebarNavOpen,"top-0 -left-76 xl:left-0":!n.sidebarNavOpen}])},[o("div",{class:F(["flex flex-row ms-1 mt-4 justify-center xl:ms-0",n.sidebarFull?"ps-2 pe-2":""])},[t(u,{href:e.route("admin.index"),class:"flex flex-row"},{default:s(()=>[e.$page.props.backendLogo?(r(),f("div",{key:0,class:F(["rounded-lg pe-1",n.sidebarFull?"h-12 w-12":"w-8 h-8"])},[le(o("img",{class:F(["rounded-lg object-contain",n.sidebarFull?"h-12 w-12":"w-8 h-8"])},null,2),[[x,{src:e.$page.props.uploadUrl+"/"+e.$page.props.backendLogo.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])],2)):h("",!0)]),_:1},8,["href"])],2),o("div",{class:F(["flex flex-row justify-center mt-4",(n.sidebarFull,"")])},[t(_,{class:F(["text-base font-semibold",n.sidebarFull?"ms-1 mt-1":"xl:hidden"])},{default:s(()=>[d(l(e.$t("site_name")),1)]),_:1},8,["class"])],2),o("div",{class:F(["mt-5 mb-5",n.sidebarFull?"flex":"flex xl:hidden"])},[t(w,{value:n.searchterm,"onUpdate:value":a[0]||(a[0]=g=>n.searchterm=g),theme:"bg-white dark:bg-secondaryDark-black border-none rounded-lg placeholder-secondary-800 dark:placeholder-secondary-200",class:"w-full rounded-full flex",placeholder:e.$t("core__be_search")},{icon:s(()=>[t(c,{name:"search",class:"cursor-pointer",theme:"text-secondary-800 dark:text-secondary-200"})]),_:1},8,["value","placeholder"])],2),o("div",{class:F(["rounded-lg p-1 mt-6 mb-8 w-full flex items-center text-secondary-800 bg-primary-50 hover:bg-primary-200 dark:hover:bg-secondary-700 dark:text-secondary-300 dark:bg-secondary-900",n.sidebarFull?"hidden":"hidden xl:flex"]),onClick:a[1]||(a[1]=(...g)=>n.handleSidebarFull&&n.handleSidebarFull(...g))},[t(c,{name:"search",class:"cursor-pointer",w:"20",h:"20"})],2),o("div",Eo,[o("div",Oo,[(r(!0),f(H,null,G(e.$page.props.menuGroups,g=>(r(),f("div",{key:g.id},[n.searchterm==null&&g.is_invisible_group_name!=1?(r(),k(_,{key:0,class:F([{flex:n.sidebarFull,hidden:!n.sidebarFull},"mt-4 mb-2"])},{default:s(()=>[d(l(e.$t(g.group_lang_key)),1)]),_:2},1032,["class"])):g.is_invisible_group_name!=1?(r(),k(_,{key:1,class:F([{flex:n.sidebarFull,hidden:!n.sidebarFull},"mt-4 mb-2"])},{default:s(()=>[e.$t(g.group_lang_key).toLowerCase().trim().includes(n.searchterm.toLowerCase().trim())?(r(),f("span",zo,l(e.$t(g.group_lang_key)),1)):g.sub_menu_group.filter(b=>e.$t(b.sub_menu_lang_key).toLowerCase().trim().includes(n.searchterm.toLowerCase().trim())).length>0?(r(),f("span",No,l(e.$t(g.group_lang_key)),1)):g.sub_menu_group.filter(b=>b.is_dropdown==1&&b.module.filter(P=>e.$t(P.module_lang_key).toLowerCase().trim().includes(n.searchterm.toLowerCase().trim())).length>0).length>0?(r(),f("span",Vo,l(e.$t(g.group_lang_key)),1)):(r(),f("span",Ho))]),_:2},1032,["class"])):h("",!0),(r(!0),f(H,null,G(g.sub_menu_group,b=>(r(),f("div",{key:b.id,class:"mt-2"},[t(v,{dropDown:n.dropDownOpen,"onUpdate:dropDown":a[2]||(a[2]=P=>n.dropDownOpen=P),group:b,searchterm:n.searchterm},null,8,["dropDown","group","searchterm"])]))),128))]))),128))]),o("div",Ro,[t(_,{class:F(["text-xs font-regular",n.sidebarFull?"ms-1 mt-1":"xl:hidden"]),textColor:"text-gray-500"},{default:s(()=>[d(l(e.$t("core__be_version"))+" "+l(e.$page.props.backendSetting.backend_version_no),1)]),_:1},8,["class"])])])],2)}var Go=q(To,[["render",Wo]]);const Zo=ie({name:"PsConfirmDialog",components:{PsModal:he,PsLabel:Z,PsButton:ee},props:{showOkBtnFirst:{type:Boolean,default:!1}},setup(){const e=i(),a=i($("ps_confirm_dialog__confirm")),C=i($("ps_confirm_dialog__are_you_confirm")),n=i($("ps_confirm_dialog__yes")),B=i($("ps_confirm_dialog__no")),L=i(null);let u,_;function c(v){v=="yes"?u():_(),e.value.toggle(!1)}function w(v,x,g,b,P,S,A=null){a.value=v,C.value=x.toString(),n.value=g,B.value=b,e.value.toggle(!0),u=P,_=S,L.value=A}return{psmodal:e,title:a,message:C,openModal:w,actionClicked:c,okButton:n,cancelButton:B,warningString:L}}}),qo={class:"w-full text-start"},Ko={class:"w-full text-start mt-2"},Yo=o("span",{class:"text-red-800 font-medium me-1"},"*",-1),Jo=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Qo={class:"flex flex-row justify-end"};function Xo(e,a,C,n,B,L){const u=m("ps-label"),_=m("ps-button"),c=m("ps-modal");return r(),k(c,{ref:"psmodal",maxWidth:"480px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-50 h-56 bg-white"},{title:s(()=>[o("div",qo,[t(u,{class:"text-lg font-semibold"},{default:s(()=>[d(l(e.title),1)]),_:1})])]),body:s(()=>[o("div",Ko,[t(u,{class:"font-light text-sm lg:text-base"},{default:s(()=>[d(l(e.message),1)]),_:1}),e.warningString?(r(),k(u,{key:0,class:"mt-3 font-light text-sm lg:text-base"},{default:s(()=>[Yo,d(" "+l(e.warningString)+" ",1),Jo]),_:1})):h("",!0)])]),footer:s(()=>[o("div",Qo,[e.showOkBtnFirst?(r(),k(_,{key:0,rounded:"rounded",onClick:a[0]||(a[0]=w=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"me-4"},{default:s(()=>[d(l(e.okButton),1)]),_:1})):h("",!0),t(_,{rounded:"rounded",onClick:a[1]||(a[1]=w=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"",border:"border border-gray-200",colors:"bg-white",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:s(()=>[d(l(e.cancelButton),1)]),_:1}),e.showOkBtnFirst?h("",!0):(r(),k(_,{key:1,rounded:"rounded",onClick:a[2]||(a[2]=w=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"ms-4"},{default:s(()=>[d(l(e.okButton),1)]),_:1}))])]),_:1},512)}var et=q(Zo,[["render",Xo]]);const ot=ie({name:"PsLicenseActivateModal",components:{PsModal:he,PsLabel:Z,PsButton:ee,PsIcon:X,PsInput:to,PsLabelCaption:so,PsBannerIcon:ao,PsConfirmDialog:et,PsLoadingCircleDialog:lo,PsInputWithRightIcon:fe,PsLoading:oo,Link:Q,PsErrorDialog:no,PsSuccessDialog:ge},props:["hasError","selectedZipFileName","systemCode2","errors","status","project","purchased_code","logMessages","isCountDownShow","defaultBuilderToken"],setup(e){const a=i(),C=i($("ps_success_dialog__success")),n=i($("ps_success_dialog__success_message")),B=i($("ps_confirm_dialog__yes")),L=i(),u=i(),_=i();let c;const w=i(!0);let v=i(!0),x=i(!1);const g=i(!1);let b=i(!0),P=i(!1),S=i(!1);const A=i(!1);let y=i(!0),p=i(!1),D=i(!1);const I=i();let V=i(e.selectedZipFileName),M=i("");const U=i(),T=i(),O=i(!1),K=i(!1),oe=i(!1),de=i(!1),be=i(),ve=i(e.project.project_code!="");function ke(){c(),a.value.toggle(!1)}let te=J({backend_url:e.project.project_url,purchased_code:e.project.project_code});console.log(e.project.token);let z=J({token:e.project.token}),ye=new Date(e.systemCode2).getTime(),we=setInterval(function(){let E=new Date().getTime(),j=ye-E,W=Math.floor(j/(1e3*60*60*24)),Y=Math.floor(j%(1e3*60*60*24)/(1e3*60*60)),se=Math.floor(j%(1e3*60*60)/(1e3*60));M.value=W+"d : "+Y+"hr : "+se+"min",j<0&&(clearInterval(we),v.value=!1,M.value="EXPIRED")},1e3);function ce(){a.value.toggle(!1)}function $e(E,j,W,Y,se=!0){C.value=E,n.value=j.toString(),B.value=W,a.value.toggle(!0),c=Y,w.value=se}function Ce(){this.$inertia.post(route("admin.dashboard.updateLicense"),te,{onBefore:()=>{b.value=!0,P.value=!0,g.value=!1},onSuccess:()=>{P.value=!1,S.value=!0,setTimeout(()=>{S.value=!1,x.value=!1},3e3)},onError:()=>{S.value=!1,P.value=!1}})}function xe(){this.$inertia.post(route("admin.dashboard.updateLicense"),te,{onBefore:()=>{y.value=!0,p.value=!0,A.value=!1},onSuccess:()=>{p.value=!1,D.value=!0,setTimeout(()=>{D.value=!1,x.value=!1},3e3)},onError:()=>{D.value=!1,p.value=!1}})}function Pe(){g.value=!0,b.value=!1}function Se(){A.value=!0,y.value=!1}function Be(){!A.value&&!p.value&&!D.value&&!g.value&&!P.value&&!S.value&&I.value.click()}function Le(E){v.value=!1;const j=E.target.files;V.value=j[0]}function De(){V.value="",v.value=!0}function je(E,j=0){let W=J({zipFile:E,tableSetting:j});N.post(route("admin.dashboard.activateLicense"),W,{onBefore:()=>{u.value.openModal($("license_activating"),$("wait_msg"))},onSuccess:Y=>{u.value.closeModal(),v.value=!0,e.hasError===0&&ce()},onError:()=>{u.value.closeModal()}})}function Ue(){let E=J({name:"defaultBuilderToken",permissions:["builderToken"]});(z.token==null||z.token=="")&&(N.post(route("api_token.default_creating_token"),E,{onSuccess:j=>{z.token=j.props.defaultBuilderToken?j.props.defaultBuilderToken:"",console.log(z.token),a.value.toggle(!1),setTimeout(()=>{a.value.toggle(!0)},1e3)}}),console.log(z.token))}function Fe(){z.token!=""&&N.post(route("admin.dashboard.activateLicenseWithBuilderConnection"),z,{onBefore:()=>{u.value.openModal($("activating"),$("wait_msg"))},onSuccess:()=>{u.value.closeModal()},onError:()=>{u.value.closeModal()}})}function Me(){z.token!=""&&N.post(route("admin.dashboard.checkConnection"),z,{onBefore:()=>{u.value.openModal($("creating_auto_sync"),$("wait_msg"))},onSuccess:()=>{u.value.closeModal(),K.value=!0,O.value=!0,oe.value=!1},onError:()=>{oe.value=!0,u.value.closeModal()}})}function Ae(){var E;try{let j=(E=z.token)!=null?E:"";navigator.clipboard.writeText(j),de.value=!0}catch(j){console.log(j)}}return{isClickOut:v,psmodal:a,title:C,message:n,openModal:$e,actionClicked:ke,okButton:B,close:ce,showIcon:w,form:te,handleUpdatePurchaseCode:Ce,visible:x,ps_confirm_dialog:L,ps_error_dialog:_,importClicked:Be,handleImport:Le,importFile:I,ps_loading_circle_dialog:u,loadingPurchasedCode:P,isEditPurchasedCode:g,isDisablePurchasedCode:b,successPurchasedCode:S,handlePurchasedCodeEdit:Pe,loadingBackendUrl:p,isEditBackendUrl:A,isDisableBackendUrl:y,successBackendUrl:D,handleBackendUrlEdit:Se,handleUpdateBackendUrl:xe,selectedFile:V,doImport:je,clearSelectedFile:De,showcountDownDate:M,generateApiKey:Ue,installClicked:Fe,connect:K,reconnect:oe,activate:O,tokenCopied:de,checkConnection:Me,copyToken:Ae,tokenForm:z,ps_download_project_dialog:U,defaultToken:be,ps_success_dialog:T,alreadyPurchased:ve}},mounted(){this.generateApiKey()}}),tt={class:"flex justify-end mb-3"},st={key:0,class:"flex flex-col"},at={class:"bg-primary-50 text-xl p-3 text-dark rounded w-full text-center mb-8"},lt={class:"text-green-500 animate-pulse",id:"systemCode2"},nt={class:"w-full mt-6 px-4"},rt={class:"mb-6"},it={class:"mb-4"},dt={class:""},ct={class:"mb-6"},ut={class:"mb-4"},_t={key:1,class:"mt-2 mb-6 pb-4 px-4 pt-2 bg-blue-50 flex flex-row"},pt={class:"mt-2 me-4 text-blue-500"},mt={class:"text-base"},ft={target:"_blank",href:"https://www.psx-builder.panacea-soft.com/project/create"},gt={key:2,class:"p-4 bg-red-100 border border-red-200 rounded-md"},ht={class:"flex justify-between flex-wrap"},bt={class:"w-0 flex-1 flex"},vt={class:"mr-3 pt-1"},kt={class:"text-md leading-6 font-medium"},yt={class:"text-sm"},wt={class:"flex mt-3"},$t={target:"_blank",href:"https://www.psx-builder.panacea-soft.com/project",class:"underline text-indigo-500"},Ct={key:3,class:"p-4 bg-green-100 border border-red-200 rounded-md"},xt={class:"flex justify-between flex-wrap"},Pt={class:"w-0 flex-1 flex"},St={class:"mr-3 pt-1"},Bt={class:"text-md leading-6 font-medium"},Lt={class:"text-sm"},Dt={class:"mt-3"},jt={key:4,class:"mb-6 border rounded border-red-500 w-80 p-3"},Ut={class:""},Ft={key:0,class:"flex mb-2"},Mt={class:""},At={class:"text-red-500 text-base"},It={key:1,class:"flex mb-2"},Tt={class:""},Et={class:"text-green-500 text-base"},Ot={class:"mb-6"},zt={class:"mb-2"},Nt={target:"_blank",href:"https://www.docs.panacea-soft.com/psx-mpc/faqs/web/how-to-solve-connectivity-error-with-psx-builder",class:"underline text-indigo-500"},Vt={class:"mb-2"},Ht={target:"_blank",href:"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",class:"underline text-indigo-500"};function Rt(e,a,C,n,B,L){const u=m("ps-icon"),_=m("ps-label"),c=m("ps-banner-icon"),w=m("ps-loading"),v=m("ps-button"),x=m("ps-input-with-right-icon"),g=m("ps-label-caption"),b=m("ps-modal"),P=m("ps-confirm-dialog"),S=m("ps-loading-circle-dialog"),A=m("ps-error-dialog"),y=m("ps-success-dialog");return r(),f(H,null,[t(b,{ref:"psmodal",maxWidth:"552px",bodyHeight:"100%",line:"hidden",isClickOut:!1,theme:" px-4 py-4 rounded-lg shadow-xl",class:"z-20"},{title:s(()=>[o("div",tt,[e.isClickOut?(r(),k(u,{key:0,onClick:a[0]||(a[0]=p=>e.close()),name:"cross",theme:"text-secondary-400"})):h("",!0)]),e.isCountDownShow?(r(),f("div",st,[o("div",at,[d(l(e.$t("your_free_trial_duration_left"))+" ",1),o("span",lt,l(e.showcountDownDate),1)])])):h("",!0),e.alreadyPurchased?(r(),k(_,{key:1,class:"font-medium text-xl lg:text-2xl px-4"},{default:s(()=>[d(l(e.$t("core_be__make_connection_with_psx_builder")),1)]),_:1})):(r(),k(_,{key:2,class:"font-medium text-xl lg:text-2xl px-4"},{default:s(()=>[d(l(e.$t(e.title)),1)]),_:1}))]),body:s(()=>[o("div",nt,[e.visible?(r(),k(c,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-8",iconColor:"white"},{default:s(()=>[d(l(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),o("div",rt,[o("div",it,[t(_,{class:"text-base mb-1"},{default:s(()=>[d(l(e.$t("installer_messages.environment.wizard.form.base_domain_label")),1)]),_:1}),t(x,{disabled:e.isDisableBackendUrl,value:e.form.backend_url,"onUpdate:value":a[3]||(a[3]=p=>e.form.backend_url=p),placeholder:e.$t("enter_backend_url")},{icon:s(()=>[e.loadingBackendUrl?(r(),k(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):h("",!0),e.successBackendUrl?(r(),k(_,{key:1,class:"transition-all duration-300",textColor:"text-dark dark:text-secondaryDark-black"},{default:s(()=>[d(l(e.$t("core__be_btn_saved")),1)]),_:1})):h("",!0),e.isEditBackendUrl&&!e.loadingBackendUrl&&!e.successBackendUrl?(r(),k(v,{key:2,onClick:a[1]||(a[1]=p=>e.handleUpdateBackendUrl()),class:"",padding:"p-0",colors:"text-primary-500",hover:""},{default:s(()=>[d(l(e.$t("core__be_btn_save")),1)]),_:1})):h("",!0),!e.isEditBackendUrl&&!e.loadingBackendUrl&&!e.successBackendUrl?(r(),k(u,{key:3,onClick:a[2]||(a[2]=p=>e.handleBackendUrlEdit()),name:"editPencil"})):h("",!0)]),_:1},8,["disabled","value","placeholder"]),t(g,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(l(e.errors.backend_url),1)]),_:1})]),o("div",dt,[t(_,{class:"text-base mb-1"},{default:s(()=>[d(l(e.$t("purchase_code")),1)]),_:1}),t(x,{disabled:e.isDisablePurchasedCode,value:e.form.purchased_code,"onUpdate:value":a[6]||(a[6]=p=>e.form.purchased_code=p),placeholder:e.$t("enter_purchase_code")},{icon:s(()=>[e.loadingPurchasedCode?(r(),k(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):h("",!0),e.successPurchasedCode?(r(),k(_,{key:1,class:"transition-all duration-300",textColor:"text-dark dark:text-secondaryDark-black"},{default:s(()=>[d(l(e.$t("core__be_btn_saved")),1)]),_:1})):h("",!0),e.isEditPurchasedCode&&!e.loadingPurchasedCode&&!e.successPurchasedCode?(r(),k(v,{key:2,onClick:a[4]||(a[4]=p=>e.handleUpdatePurchaseCode()),class:"",padding:"p-0",colors:"text-primary-500",hover:""},{default:s(()=>[d(l(e.$t("core__be_btn_save")),1)]),_:1})):h("",!0),!e.isEditPurchasedCode&&!e.loadingPurchasedCode&&!e.successPurchasedCode?(r(),k(u,{key:3,onClick:a[5]||(a[5]=p=>e.handlePurchasedCodeEdit()),name:"editPencil"})):h("",!0)]),_:1},8,["disabled","value","placeholder"]),t(g,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(l(e.errors.purchased_code),1)]),_:1}),e.purchased_code?(r(),k(g,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(l(e.purchased_code),1)]),_:1})):h("",!0),e.alreadyPurchased?(r(),k(g,{key:1,textColor:"text-green-500 ",class:"mt-2 block"},{default:s(()=>[d(l(e.$t("core_be__already_purchased")),1)]),_:1})):h("",!0)])]),o("div",ct,[o("div",ut,[t(_,{class:"text-base mb-1"},{default:s(()=>[d(l(e.$t("setup_connection_with_builder__label")),1)]),_:1}),t(x,{value:e.tokenForm.token,"onUpdate:value":a[8]||(a[8]=p=>e.tokenForm.token=p),placeholder:e.$t("setup_connection_with_builder__enter_token"),ref:"token"},{icon:s(()=>[e.tokenCopied?(r(),k(u,{key:1,name:"check"})):(r(),k(u,{key:0,onClick:a[7]||(a[7]=p=>e.copyToken()),name:"clipboard-icon"}))]),_:1},8,["value","placeholder"])])]),!e.connect&&!e.reconnect?(r(),f("div",_t,[o("div",pt,[t(u,{name:"warning-circle",w:"20",h:"20",viewBox:"0 0 20 20"})]),o("div",null,[t(_,{textColor:"text-secondary-900"},{default:s(()=>[o("span",mt,l(e.$t("project_create_at_ps_builder__title")),1)]),_:1}),t(_,{class:"mt-1 mb-2"},{default:s(()=>[d(l(e.$t("project_create_at_ps_builder__description")),1)]),_:1}),t(_,{textColor:"text-blue-500",class:"underline"},{default:s(()=>[o("a",ft,l(e.$t("project_create_at_ps_builder__link")),1)]),_:1})])])):h("",!0),e.reconnect?(r(),f("div",gt,[o("div",ht,[o("div",bt,[o("div",vt,[t(u,{name:"error-icon",theme:"text-red-500"})]),o("div",null,[o("h4",kt,l(e.$t("setup_connection_with_builder__error_title")),1),o("p",yt,l(e.$t("setup_connection_with_builder__error_dialog")),1),o("div",wt,[o("a",$t,l(e.$t("navigate_to_builder")),1)])])])])])):h("",!0),e.connect?(r(),f("div",Ct,[o("div",xt,[o("div",Pt,[o("div",St,[t(u,{name:"success-icon",theme:"text-green-500"})]),o("div",null,[o("h4",Bt,l(e.$t("setup_connection_with_builder__success_title")),1),o("p",Lt,l(e.$t("setup_connection_with_builder__success_dialog")),1)])])])])):h("",!0),o("div",Dt,[!e.activate&&!e.reconnect?(r(),k(v,{key:0,onClick:e.checkConnection,class:"mb-0.5",padding:"px-3 py-2"},{default:s(()=>[t(_,{textColor:"text-white"},{default:s(()=>[d(l(e.$t("setup_connection_with_builder__connect")),1)]),_:1})]),_:1},8,["onClick"])):h("",!0),!e.activate&&e.reconnect?(r(),k(v,{key:1,onClick:e.checkConnection,class:"mb-0.5",padding:"px-3 py-2"},{default:s(()=>[t(_,{textColor:"text-white"},{default:s(()=>[d(l(e.$t("setup_connection_with_builder__reconnect")),1)]),_:1})]),_:1},8,["onClick"])):h("",!0),e.activate&&e.connect?(r(),k(v,{key:2,onClick:e.installClicked,class:"mb-0.5",padding:"px-3 py-2"},{default:s(()=>[t(_,{textColor:"text-white"},{default:s(()=>[d(l(e.$t("setup_connection_with_builder__activate")),1)]),_:1})]),_:1},8,["onClick"])):h("",!0)]),e.logMessages?(r(),f("div",jt,[(r(!0),f(H,null,G(e.logMessages,p=>(r(),f("div",Ut,[p.status==="danger"?(r(),f("div",Ft,[o("div",Mt,[t(u,{name:"cross",w:"20",h:"20",class:"me-4 p-0.5 inline-block align-middle font-semibold bg-red-500 border rounded-full text-white"})]),o("p",At,l(p.message),1)])):h("",!0),p.status==="success"?(r(),f("div",It,[o("div",Tt,[t(u,{name:"check",w:"20",h:"20",class:"me-4 p-0.5 inline-block align-middle font-semibold bg-green-500 border rounded-full text-white"})]),o("p",Et,l(p.message),1)])):h("",!0)]))),256))])):h("",!0),o("div",Ot,[t(_,{class:"text-base mb-3 mt-5"},{default:s(()=>[d(l(e.$t("guide_link")),1)]),_:1}),o("div",zt,[o("a",Nt,l(e.$t("how_to_connect_with_psx_builder")),1)]),o("div",Vt,[o("a",Ht,l(e.$t("how_to_purchase_code")),1)])])])]),footer:s(()=>[]),_:1},512),t(P,{ref:"ps_confirm_dialog"},null,512),t(S,{ref:"ps_loading_circle_dialog"},null,512),t(A,{ref:"ps_error_dialog"},null,512),t(y,{ref:"ps_download_project_dialog"},null,512),t(y,{ref:"ps_success_dialog"},null,512)],64)}var Wt=q(ot,[["render",Rt]]);const Gt=ie({components:{TitleBar:Io,SidebarMenu:Go,Head:Ne,Link:Q,PsLabel:Z,PsIcon:X,PsButton:ee,PsSuccessDialog:ge,PsLicenseActivateModal:Wt},props:["title","project","firebaseConfig","builderAppInfo","hasError","logMessages","status","purchased_code","project","errors","systemCode2","checkVersionUpdate"],setup(e){var y,p;const a=JSON.parse(e.firebaseConfig);ne.apps.length<1&&ne.initializeApp(a);const C=i(1),n=re(),B=R(()=>n.getters.isDarkMode),L=R(()=>n.getters.sidebarFull),u=R(()=>n.getters.dir),_=_e({dark:B});Ve(()=>_.dark,(D,I)=>{D?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")});const c=i(!1),w=i(!1),v=i(!1),x=i(),g=i();if(e.builderAppInfo!=null&&e.builderAppInfo!=""){const D=i((p=(y=e.builderAppInfo)==null?void 0:y.latestVersion)==null?void 0:p.version_code),I=i(e.checkVersionUpdate);if(I.value!=null){const V=i(I.value.source_code_version_code==D.value),M=i(I.value.backend_language_version_code==D.value),U=i(I.value.frontend_language_version_code==D.value),T=i(I.value.mobile_language_version_code==D.value),O=i(e.builderAppInfo.syncAble==1);V.value&&M.value&&U.value&&T.value&&!O.value?c.value=!1:c.value=!0}else c.value=!0;w.value=e.builderAppInfo.isProjectChanged==1,v.value=e.builderAppInfo.isConnected==0}console.log("builderAppInfo",e.builderAppInfo),console.log("checkVersionUpdate",e.checkVersionUpdate);function b(){N.get(route("table.replace"))}function P(){n.dispatch("handleSidebarNavOpen",!1)}me(()=>{var D=document.getElementById("home_loading__container");D.style.display="none";const V=ue().props.currentRoute.split(".")[0],M=ue().props.menuGroups;if(e.builderAppInfo!=null&&e.builderAppInfo.isValid==0&&g.value.openModal($("pls_activate_your_app"),"You have successfully imported the file.","Back",()=>{console.log("open")},!1),V=="admin"){const U="core__be_dashboard_label";localStorage.sidebarScroll=0,setTimeout(()=>{n.dispatch("handleSidebarActive",$(U))},100)}else for(let U=0;U<M.length;U++)for(let T=0;T<M[U].sub_menu_group.length;T++)if(M[U].sub_menu_group[T].module.length>0){for(let O=0;O<M[U].sub_menu_group[T].module.length;O++)if(M[U].sub_menu_group[T].module[O].module_name==V){const K=M[U].sub_menu_group[T].module[O].module_lang_key;setTimeout(()=>{n.dispatch("handleSidebarActive",$(K))},100)}}else if(M[U].sub_menu_group[T].sub_menu_name==V){const O=M[U].sub_menu_group[T].sub_menu_lang_key;setTimeout(()=>{n.dispatch("handleSidebarActive",$(O))},100)}n.dispatch("loadIsDarkMode"),n.dispatch("loadActiveLanguage"),n.dispatch("loadDirectory"),C.value=1}),N.on("start",D=>{n.dispatch("handleSidebarNavOpen",!1)});function S(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}function A(){C.value=!C.value}return{replaceTable:b,ps_success_dialog:x,ps_license_activate_modal:g,getDir:S,isDarkMode:B,dir:u,sidebarFull:L,clickOutsideSidebar:P,isHide:A,isHideAlert:C,isVersionUpdate:c,isProjectChanged:w,isConnected:v}}}),Zt={key:0,class:"z-50 p-1 w-full text-white-50 bg-red-100 h-8 fixed top-0 text-center"},qt=["href"],Kt=["dir"],Yt={class:"flex-grow w-full flex flex-col dark:bg-secondaryDark-black dark:text-textLight"},Jt={class:"h-full px-4 transition-all duration-600 overflow-x-hidden overflow-y-auto scroll-smooth"},Qt={class:"pb-18"},Xt={key:0,class:"flex p-6 gap-4 bg-yellow-50 rounded shadow border-l-4 border-yellow-500 mb-4"},es={class:""},os={class:"w-full"},ts={class:"flex justify-between w-full"},ss={key:1,class:"flex p-6 gap-4 bg-yellow-50 rounded shadow border-l-4 border-yellow-500 mb-4"},as={class:""},ls={class:"w-full"},ns={class:"flex justify-between w-full"},rs={key:2,class:"flex p-6 gap-4 bg-yellow-50 rounded shadow border-l-4 border-yellow-500 mb-4"},is={class:""},ds={class:"w-full"},cs={class:"flex justify-between w-full"},us={href:"https://www.docs.panacea-soft.com/psx-mpc/manual/web-manual/api-token-deleted-or-updated",target:"_blank"};function _s(e,a,C,n,B,L){const u=m("Head"),_=m("ps-icon"),c=m("ps-label"),w=m("Link"),v=m("ps-button"),x=m("title-bar"),g=m("sidebar-menu"),b=m("ps-success-dialog"),P=m("ps-license-activate-modal");return r(),f(H,null,[e.project.ps_license_code?h("",!0):(r(),f("small",Zt," \u26A0Please Activate Your Application!\u26A0 ")),t(u,null,{default:s(()=>[e.$page.props.favIcon?(r(),f("link",{key:0,rel:"icon",type:"image/svg+xml",href:e.$page.props.uploadUrl+"/"+e.$page.props.favIcon.img_path},null,8,qt)):h("",!0)]),_:1}),o("div",{class:"flex flex-row",dir:e.getDir()},[o("div",Yt,[o("div",{onClick:a[4]||(a[4]=(...S)=>e.clickOutsideSidebar&&e.clickOutsideSidebar(...S)),style:ae([e.project.ps_license_code?"":"margin-top: 24px !important;"]),class:F([{"xl:ms-76 ms-0":e.sidebarFull,"ms-0 xl:ms-20":!e.sidebarFull},"h-screen pt-18"])},[o("div",Jt,[o("div",Qt,[o("div",null,[e.isVersionUpdate?(r(),f("div",Xt,[o("div",es,[t(_,{class:"text-primary-500",name:"hond",w:"32",h:"32",viewBox:"0 0 32 32"})]),o("div",os,[o("div",ts,[t(c,{textColor:"leading-6 text-base font-medium text-primary-500"},{default:s(()=>[d(l(e.$t("core_be__version_update_noti_title")),1)]),_:1}),t(c,{textColor:"leading-5 text-sm text-secondary-400 flex items-center gap-2 cursor-pointer",onClick:a[0]||(a[0]=S=>e.isVersionUpdate=!1)},{default:s(()=>[t(_,{name:"close-fill",w:"16",h:"16",viewBox:"0 0 16 16"}),d(" "+l(e.$t("core_be__dismiss")),1)]),_:1})]),t(c,{textColor:"text-sm text-secondary-500 mt-3"},{default:s(()=>[d(l(e.$t("core_be__version_update_noti_desc")),1)]),_:1}),t(v,{class:"mt-6",rounded:"rounded"},{default:s(()=>[t(w,{href:e.route("NextLaravelUpdater::welcome")},{default:s(()=>[d(l(e.$t("btn_update")),1)]),_:1},8,["href"])]),_:1})])])):h("",!0),e.isProjectChanged?(r(),f("div",ss,[o("div",as,[t(_,{class:"text-primary-500",name:"project",w:"32",h:"32",viewBox:"0 0 32 32"})]),o("div",ls,[o("div",ns,[t(c,{textColor:"leading-6 text-base font-medium text-primary-500"},{default:s(()=>[d(l(e.$t("core_be__project_change_noti_title")),1)]),_:1}),t(c,{textColor:"leading-5 text-sm text-secondary-400 flex items-center gap-2 cursor-pointer",onClick:a[1]||(a[1]=S=>e.isProjectChanged=!1)},{default:s(()=>[t(_,{name:"close-fill",w:"16",h:"16",viewBox:"0 0 16 16"}),d(" "+l(e.$t("core_be__dismiss")),1)]),_:1})]),t(c,{textColor:"text-sm text-secondary-500 mt-3"},{default:s(()=>[d(l(e.$t("core_be__project_change_noti_desc")),1)]),_:1}),t(v,{class:"mt-6",rounded:"rounded",onClick:a[2]||(a[2]=S=>e.replaceTable())},{default:s(()=>[d(l(e.$t("setup")),1)]),_:1})])])):h("",!0),e.isConnected?(r(),f("div",rs,[o("div",is,[t(_,{class:"text-primary-500",name:"connection",w:"32",h:"32",viewBox:"0 0 32 32"})]),o("div",ds,[o("div",cs,[t(c,{textColor:"leading-6 text-base font-medium text-primary-500"},{default:s(()=>[d(l(e.$t("core_be__losing_connection_noti_title")),1)]),_:1}),t(c,{textColor:"leading-5 text-sm text-secondary-400 flex items-center gap-2 cursor-pointer",onClick:a[3]||(a[3]=S=>e.isConnected=!1)},{default:s(()=>[t(_,{name:"close-fill",w:"16",h:"16",viewBox:"0 0 16 16"}),d(" "+l(e.$t("core_be__dismiss")),1)]),_:1})]),t(c,{textColor:"text-sm text-secondary-500 mt-3"},{default:s(()=>[d(l(e.$t("core_be__losing_connection_noti_desc")),1)]),_:1}),t(v,{class:"mt-6",rounded:"rounded"},{default:s(()=>[o("a",us,l(e.$t("core_be__open_token_key_documentation")),1)]),_:1})])])):h("",!0)]),He(e.$slots,"default")])])],6)]),o("div",{class:"fixed",style:ae([e.project.ps_license_code?"":"top: 24px !important;"])},[t(x)],4),o("div",{class:"min-h-screen antialiased flex fixed ltr:left-0 rtl:right-0",style:ae([e.project.ps_license_code?"":"top: 24px !important;"])},[t(g)],4)],8,Kt),t(b,{ref:"ps_success_dialog"},null,512),t(P,{isCountDownShow:!0,hasError:e.hasError,logMessages:e.logMessages,status:e.status,purchased_code:e.purchased_code,project:e.project,errors:e.errors,systemCode2:e.systemCode2,ref:"ps_license_activate_modal"},null,8,["hasError","logMessages","status","purchased_code","project","errors","systemCode2"])],64)}var Is=q(Gt,[["render",_s]]);export{Is as P,et as a,Wt as b};