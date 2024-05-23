import{P as B}from"./PsModal.f198af2b.js";import{P as $}from"./PsLabel.06b4363b.js";import{P as w}from"./PsButton.c9fc3d7e.js";import{d as N,i as t,B as i,H as z,r as d,o as D,f as I,w as s,a as C,b as c,q as h,t as b,l as M}from"./app.d57d51e9.js";import{P as V}from"./PsIcon.1e42bf4c.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";const j=N({name:"PsDialogWithInput",components:{PsModal:B,PsLabel:$,PsButton:w,PsIcon:V},props:["errors"],setup(e){const o=t(),p=t(i("ps_danger_dialog__danger")),m=t(i("ps_danger_dialog__danger_message")),y=t(),u=t(i("ps_confirm_dialog__yes")),l=t(i("ps_confirm_dialog__no"));let r,a=z({email:""});function f(n){n=="yes"?r():k()}function _(n,g,v,x,P,A){n!=null&&n.trim()!=""&&(p.value=n),g!=null&&g.trim()!=""&&(m.value=g),x!=null&&x.trim()!=""&&(l.value=x),v!=null&&v.trim()!=""&&(u.value=v),o.value.toggle(!0),r=P}function k(){o.value.toggle(!1)}return{psmodal:o,openModal:_,closeModal:k,title:p,actionClicked:f,okButton:u,cancelButton:l,message:m,form:a,projectName:y}}}),O={class:"flex flex-row items-center"},T={class:"flex flex-row justify-end"};function q(e,o,p,m,y,u){const l=d("ps-icon"),r=d("ps-label"),a=d("ps-button"),f=d("ps-modal");return D(),I(f,{ref:"psmodal",maxWidth:"370px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl me-3",class:"z-20"},{title:s(()=>[C("div",O,[c(l,{name:"mailOpen",class:"text-primary-500 me-2.5"}),c(r,{class:"text-lg font-semibold"},{default:s(()=>[h(b(e.title),1)]),_:1})])]),body:s(()=>[M(e.$slots,"body")]),footer:s(()=>[C("div",T,[c(a,{rounded:"rounded",onClick:o[0]||(o[0]=_=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-gray-200",colors:"bg-none",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:s(()=>[h(b(e.cancelButton),1)]),_:1}),c(a,{rounded:"rounded",onClick:o[1]||(o[1]=_=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-primary-500 text-white",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-300"},{default:s(()=>[h(b(e.okButton),1)]),_:1})])]),_:3},512)}var K=W(j,[["render",q]]);export{K as P};
