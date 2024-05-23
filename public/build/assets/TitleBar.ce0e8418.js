import{p as S,y as F,i as g,z as O,A as B,o as u,c as _,a as r,b as o,w as t,F as z,s as A,n as D,q as f,t as h,m as N,f as V,g as T,h as x,D as U,B as d,O as L,C as I,r as c,E}from"./app.d57d51e9.js";import{P as j}from"./PsIcon.1e42bf4c.js";import{P as q}from"./PsDropdown.0c78da9b.js";import{P as G}from"./PsDropdownSelect.13d0e05f.js";import{P as H}from"./PsLabel.06b4363b.js";import{b as R,P as W,c as J,a as K,d as Q}from"./PsDangerDialog.1643aeb7.js";import{P as X}from"./PsToggle.fddd5498.js";import{P as Y}from"./PsButton.c9fc3d7e.js";import{P as Z}from"./PsWarningDialog.67ba6cb5.js";import{f as ee}from"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";import"./Icons.ebbb778b.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./toggle.6b621a64.js";const ae={components:{PsIcon:j,PsDropdown:q,PsDropdownSelect:G,PsLabel:H,Link:S,PsToggle:X,PsButton:Y,PsIconToggle:R,PsLabelHeader6:W,PsTextButton:J,PsLabelCaption3:K,PsDangerDialog:Q,PsWarningDialog:Z},props:["can","defaultProfileImg"],data(){return{show:!1,selectedLanguage:""}},setup(){const e=F({data:{}}),n=g(!1),w=g(),p=g(),y=g(),b=U(),i=g(localStorage.activeLanguage);async function k(){e.data!=null&&e.data.length>0?await l():(n.value=!0,await l(),n.value=!1)}async function l(){await axios.get(route("contact.getContactFormTitle")).then(s=>{e.data=s.data.contacts,p.value=s.data.unseenCount}).catch(s=>{})}function v(s){w.value.openModal(d("core__delete"),d("core__comfirm_to_delete_contact"),d("core__be_btn_confirm"),d("core__be_btn_cancel"),()=>{L.delete(route("contact.destroy",s),{onSuccess:()=>{l()},onError:()=>{}})},()=>{})}function P(){y.value.openModal(d("core__warning"),d("core__comfirm_to_mark_as_read"),d("core__be_btn_confirm"),d("core__be_btn_cancel"),()=>{L.put(route("contact.allasread"),{onSuccess:()=>{l()},onError:()=>{}})},()=>{})}function m(s){L.get(route("contact.edit",s))}function $(s){I(s.symbol),b.dispatch("handleActiveLanguage",s.symbol)}return{contacts:e,clickMessageButton:k,clickedDeleteContact:v,loading:n,ps_danger_dialog:w,makeAllRead:P,goToDetail:m,count:p,ps_warning_dialog:y,handleLanguage:$,activeLanguage:i}},computed:{...O(["isDarkMode","dir","sidebarNavOpen","sidebarFull","showMenu","supportedLanguages"])},methods:{...B(["handleSidebarFull","handleSidebarNavOpen","handleShowMenu","toggleDir","toggleDarkMode"]),logout(){ee.auth().signOut(),this.$inertia.post(route("logout"))},toContact(){this.$inertia.get(route("contact.index"))}}},se={class:"text-secondary-800 dark:text-secondary-100 font-extrabold flex flex-row ps-6"},re={class:"text-secondary-800 flex items-center"},te={class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8"},ne={class:"rounded-md shadow-xs w-32"},le={class:"pt-2 z-30"},ie=["onClick"],de={class:"h-8 w-8 rounded-full"},ce=["alt"],pe=["src","alt"],ue={class:"rounded-md shadow-xs w-56"},me={class:"z-30"},ge={type:"submit",class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"};function _e(e,n,w,p,y,b){const i=c("ps-icon"),k=c("ps-dropdown-select"),l=c("ps-label"),v=c("ps-dropdown"),P=c("ps-icon-toggle"),m=c("Link"),$=c("ps-danger-dialog"),s=c("ps-warning-dialog"),M=E("lazy");return u(),_("div",{class:D([{"ps-0 xl:ps-76":e.sidebarFull,"ps-0 xl:ps-20":!e.sidebarFull},"fixed transition-all duration-600 bg-white z-50 dark:bg-secondary-800 dark:text-white shadow py-2 pe-6 items-center flex justify-between w-full"])},[r("div",se,[r("button",{onClick:n[0]||(n[0]=a=>{e.handleShowMenu(e.sidebarFull?e.showMenu:!1),e.handleSidebarFull(!e.sidebarFull)}),class:"hidden xl:block"},[o(i,{name:"hamburger"})]),r("button",{onClick:n[1]||(n[1]=a=>{e.handleSidebarNavOpen(!e.sidebarNavOpen),e.handleShowMenu(e.sidebarFull?e.showMenu:!1)}),class:"xl:hidden block"},[o(i,{name:"hamburger"})])]),r("div",re,[r("div",te,[o(v,{align:"left"},{select:t(()=>[o(k,{padding:"px-4 py-0.5",selectedValue:e.$page.props.languages.filter(a=>a.symbol==p.activeLanguage)[0].name},null,8,["selectedValue"])]),list:t(()=>[r("div",ne,[r("div",le,[(u(!0),_(z,null,A(e.$page.props.languages,a=>(u(),_("div",{key:a.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:C=>p.handleLanguage(a)},[o(l,{class:D(["ms-2",a.symbol==p.activeLanguage?" font-bold":""])},{default:t(()=>[f(h(a.name),1)]),_:2},1032,["class"])],8,ie))),128))])])]),_:1})]),o(P,{class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8",selectedValue:e.isDarkMode,onOnChange:e.toggleDarkMode},null,8,["selectedValue","onOnChange"]),o(v,{horizontalAlign:"right",class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8 w-full",h:"h-auto"},{select:t(()=>{var a,C;return[r("div",de,[(a=e.$page.props.authUser)!=null&&a.user_cover_photo?N((u(),_("img",{key:0,class:"object-cover h-8 w-8 rounded-full cursor-pointer",alt:e.$t("core__be_profile")},null,8,ce)),[[M,{src:e.$page.props.uploadUrl+"/"+((C=e.$page.props.authUser)==null?void 0:C.user_cover_photo),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]):(u(),_("img",{key:1,class:"object-cover h-8 w-8 rounded-full cursor-pointer",src:e.$page.props.uploadUrl+"/default_profile.png",alt:e.$t("core__be_profile")},null,8,pe))])]}),list:t(()=>[r("div",ue,[r("div",me,[o(m,{href:e.route("fe_profile"),class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},{default:t(()=>[o(i,{name:"user-line"}),o(l,{class:"ms-2"},{default:t(()=>[f(h(e.$t("core__be_profile")),1)]),_:1})]),_:1},8,["href"]),o(m,{href:e.route("dashboard"),class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},{default:t(()=>[o(i,{name:"refresh"}),o(l,{class:"ms-2"},{default:t(()=>[f(h(e.$t("core__be_switch_to_fe")),1)]),_:1})]),_:1},8,["href"]),e.$page.props.canAccessAdminPanel?(u(),V(m,{key:0,href:e.route("admin.index"),class:"w-56 flex p-4 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},{default:t(()=>[o(i,{name:"refresh"}),o(l,{class:"ms-2"},{default:t(()=>[f(h(e.$t("core__be_switch_to_admin")),1)]),_:1})]),_:1},8,["href"])):T("",!0),r("form",{onSubmit:n[2]||(n[2]=x((...a)=>b.logout&&b.logout(...a),["prevent"]))},[r("button",ge,[o(i,{name:"signOut"}),o(l,{class:"ms-2"},{default:t(()=>[f(h(e.$t("core__be_logout")),1)]),_:1})])],32)])])]),_:1})]),o($,{ref:"ps_danger_dialog"},null,512),o(s,{ref:"ps_warning_dialog"},null,512)],2)}var Be=oe(ae,[["render",_e]]);export{Be as default};
