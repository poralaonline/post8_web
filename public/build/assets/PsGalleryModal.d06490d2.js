import{d as P,i,o as a,f as S,w as n,a as s,b as r,h as C,c as d,m as $,s as U,F as x,r as p,E as B}from"./app.d57d51e9.js";import{S as I,a as M,b as N}from"./vue-splide.esm.2e16fe25.js";/* empty css                   */import T from"./PsModal.15d0cd4c.js";import z from"./PsLabel.b794d5bb.js";import G from"./PsButton.38caef2b.js";import j from"./PsIcon.9f1bf232.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";const E=P({name:"PsGalleryModal",components:{Splide:I,SplideSlide:M,SplideTrack:N,PsModal:T,PsLabel:z,PsButton:G,PsIcon:j},setup(){const e=i(),t=i(),c=i(),u=i(),b={rewind:!0,perPage:1,gap:"0rem",fixedHeight:"400px",pagination:!1,breakpoints:{744:{height:"400px"},640:{height:"328px"}}},g=i();let l,_;function f(o){o=="yes"?l():_(),e.value.toggle(!1)}function h(o,y,k,w){g.value=w,u.value=o,t.value=y,c.value=k}function v(o,y,k,w){g.value=w,u.value=o,t.value=y,c.value=k,e.value.toggle(!0)}function m(){e.value.toggle(!1)}return{img_type:u,active_img_path:t,gallery_list:g,img_id:c,psmodal:e,options:b,openModal:v,actionClicked:f,close:m,update:h}}}),F={class:"flex justify-end pb-20"},H={class:"h-8 w-8 rounded flex bg-feSecondary-300 dark:bg-feSecondary-800 justify-center items-center"},L={class:"w-full mb-28",dir:"ltr"},R={key:0,class:"w-auto h-full mx-auto rounded-lg",controls:""},V=["src"],O=["src"],W={key:1,class:"w-auto h-full mx-auto rounded-lg"},q={key:0,class:"w-auto h-full mx-auto rounded-lg"},A={key:1,class:"w-auto h-full mx-auto rounded-lg",controls:""},J=["src"],K=["src"],Q={class:"splide__arrows splide__arrows--ltr"},X={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--prev",type:"button","aria-label":"Previous slide","aria-controls":"splide01-track"},Y={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--next",type:"button","aria-label":"Next slide","aria-controls":"splide01-track"};function Z(e,t,c,u,b,g){const l=p("ps-icon"),_=p("SplideSlide"),f=p("SplideTrack"),h=p("Splide"),v=p("ps-modal"),m=B("lazy");return a(),S(v,{ref:"psmodal",maxWidth:"100%",bodyHeight:"h-full",line:"hidden",isClickOut:!1,theme:"rounded-lg",bgColor:"rounded-lg bg-transparent dark:bg-transparent",class:"z-20"},{body:n(()=>[s("div",F,[s("div",H,[r(l,{name:"close",class:"text-feSecondary-800 hover:cursor-pointer",onClick:t[0]||(t[0]=C(o=>e.psmodal.toggle(!1),["prevent"]))})])]),s("div",L,[r(h,{options:e.options,"has-track":!1},{default:n(()=>[r(f,null,{default:n(()=>[r(_,null,{default:n(()=>[e.img_type=="item-video-icon"?(a(),d("video",R,[s("source",{src:e.$page.props.uploadUrl+"/"+e.active_img_path,type:"video/mp4"},null,8,V),s("source",{src:e.$page.props.uploadUrl+"/"+e.active_img_path,type:"video/ogg"},null,8,O)])):$((a(),d("img",W,null,512)),[[m,{src:e.$page.props.uploadUrl+"/"+e.active_img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1}),(a(!0),d(x,null,U(e.gallery_list.filter(o=>o.imgPath!=e.active_img_path),o=>(a(),S(_,{key:o.imgId},{default:n(()=>[o.imgType=="item"?$((a(),d("img",q,null,512)),[[m,{src:e.$page.props.uploadUrl+"/"+o.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]):(a(),d("video",A,[s("source",{src:e.$page.props.uploadUrl+"/"+o.imgPath,type:"video/mp4"},null,8,J),s("source",{src:e.$page.props.uploadUrl+"/"+o.imgPath,type:"video/ogg"},null,8,K)]))]),_:2},1024))),128))]),_:1}),s("div",Q,[s("button",X,[r(l,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})]),s("button",Y,[r(l,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})])])]),_:1},8,["options"])])]),_:1},512)}var pe=D(E,[["render",Z],["__scopeId","data-v-a9483ad2"]]);export{pe as default};
