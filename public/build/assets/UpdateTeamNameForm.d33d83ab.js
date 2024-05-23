import{J as f}from"./ActionMessage.19f16b8d.js";import{J as b}from"./Button.1d4b2ef4.js";import{J as h}from"./FormSection.457faaca.js";import{J as v}from"./Input.1c4d716c.js";import{J as g}from"./InputError.96a1fc4a.js";import{J as j}from"./Label.7fb3feb0.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import{d as T,f as w,a0 as N,w as o,r as s,o as S,b as a,q as m,t as n,n as $,a as t}from"./app.d57d51e9.js";import"./SectionTitle.a2276a5b.js";const V=T({components:{JetActionMessage:f,JetButton:b,JetFormSection:h,JetInput:v,JetInputError:g,JetLabel:j},props:["team","permissions"],data(){return{form:this.$inertia.form({name:this.team.name})}},methods:{updateTeamName(){this.form.put(route("teams.update",this.team),{errorBag:"updateTeamName",preserveScroll:!0})}}}),y=m(" Team Name "),B=m(" The team's name and owner information. "),C={class:"col-span-6"},U={class:"flex items-center mt-2"},k=["src","alt"],F={class:"ms-4 leading-tight"},I={class:"text-gray-700 text-sm"},q={class:"col-span-6 sm:col-span-4"};function z(e,r,A,D,E,L){const i=s("jet-label"),l=s("jet-input"),d=s("jet-input-error"),p=s("jet-action-message"),c=s("jet-button"),_=s("jet-form-section");return S(),w(_,{onSubmitted:e.updateTeamName},N({title:o(()=>[y]),description:o(()=>[B]),form:o(()=>[t("div",C,[a(i,{value:"Team Owner"}),t("div",U,[t("img",{class:"w-12 h-12 rounded-full object-cover",src:e.team.owner.profile_photo_url,alt:e.team.owner.name},null,8,k),t("div",F,[t("div",null,n(e.team.owner.name),1),t("div",I,n(e.team.owner.email),1)])])]),t("div",q,[a(i,{for:"name",value:"Team Name"}),a(l,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=u=>e.form.name=u),disabled:!e.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),a(d,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])])]),_:2},[e.permissions.canUpdateTeam?{name:"actions",fn:o(()=>[a(p,{on:e.form.recentlySuccessful,class:"me-3"},{default:o(()=>[m(n(e.$t("core__be_btn_saved")),1)]),_:1},8,["on"]),a(c,{class:$({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:o(()=>[m(n(e.$t("core__be_btn_save")),1)]),_:1},8,["class","disabled"])])}:void 0]),1032,["onSubmitted"])}var X=J(V,[["render",z]]);export{X as default};
