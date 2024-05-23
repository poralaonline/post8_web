import{d as y,i as r,B as c,o as B,f as A,w as t,a as v,b as a,q as f,t as d,h as P,r as m}from"./app.d57d51e9.js";import w from"./PsModal.15d0cd4c.js";import $ from"./PsLabel.b794d5bb.js";import S from"./PsButton.38caef2b.js";import z from"./PsIcon.9f1bf232.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";const M=y({name:"PsConfirmDialog",components:{PsModal:w,PsLabel:$,PsButton:S,PsIcon:z},setup(){const o=r(),e=r(c("ps_confirm_dialog__confirm")),p=r(c("ps_confirm_dialog__are_you_confirm")),u=r(c("ps_confirm_dialog__yes")),_=r(c("ps_confirm_dialog__no"));let x,s;function g(n){n=="yes"?x():s(),o.value.toggle(!1)}function i(n,l,k,b,C,h){e.value=n,p.value=l.toString(),u.value=k,_.value=b,o.value.toggle(!0),x=C,s=h}return{psmodal:o,title:e,message:p,openModal:i,actionClicked:g,okButton:u,cancelButton:_}}}),N={class:"w-full flex justify-between"},V={class:"w-full"},j={class:"flex flex-row justify-end rtl:space-x-reverse space-x-5"};function L(o,e,p,u,_,x){const s=m("ps-label"),g=m("ps-icon"),i=m("ps-button"),n=m("ps-modal");return B(),A(n,{ref:"psmodal",maxWidth:"472px",isClickOut:!1,theme:"px-5 py-6 rounded-md",class:"z-20",visibleLine:!1},{title:t(()=>[v("div",N,[a(s,{class:"font-semibold text-lg"},{default:t(()=>[f(d(o.title),1)]),_:1}),a(g,{name:"close",class:"text-feAchromatic-400 hover:cursor-pointer",onClick:e[0]||(e[0]=P(l=>o.actionClicked("no"),["prevent"]))})])]),body:t(()=>[v("div",V,[a(s,{class:"font-light text-xs lg:text-sm"},{default:t(()=>[f(d(o.message),1)]),_:1})])]),footer:t(()=>[v("div",j,[a(i,{onClick:e[1]||(e[1]=l=>o.actionClicked("yes")),textSize:"font-normal text-xxs lg:text-sm",colors:"bg-fePrimary-500 cursor-pointer text-feAchromatic-50",rounded:"rounded"},{default:t(()=>[f(d(o.okButton),1)]),_:1}),a(i,{onClick:e[2]||(e[2]=l=>o.actionClicked("no")),textSize:"font-normal text-xxs lg:text-sm",colors:"dark:bg-feAchromatic-800 dark:text-feAchromatic-200 hover:text-feAchromatic-50",focus:"focus:text-feAchromatic-50 focus:bg-fePrimary-500",border:"border border-feAchromatic-300 dark:border-feAchromatic-500",rounded:"rounded"},{default:t(()=>[f(d(o.cancelButton),1)]),_:1})])]),_:1},512)}var H=D(M,[["render",L]]);export{H as default};