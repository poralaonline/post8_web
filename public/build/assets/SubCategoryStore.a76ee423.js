import{a as c,P as g}from"./PsApiService.1464e9d5.js";import{S as y}from"./SubCategory.1b4176e0.js";import{bD as p,y as d,i as L}from"./app.d57d51e9.js";import{m as P}from"./PsSepetetedStore.9a31ac47.js";class f{constructor(){this.keyword="",this.catId="",this.orderBy="",this.orderType=""}SubCategoryListParameterHolder(){return this.keyword="",this.catId="",this.orderBy="",this.orderType="",this}toMap(){const a={};return a.keyword=this.keyword,a.category_id=this.catId,a.order_by=this.orderBy,a.order_type=this.orderType,a}}const B=P(m=>p(`subCategory/${m}`,()=>{const a=d({value:!1}),t=d(new c);let S="";const l=d({value:!1});let i=L(30),r=0;const v=d(new f().SubCategoryListParameterHolder());function n(e){var s,u;t!=null&&t.data!=null&&t.data.length>0&&r!=0?(e.data!=null&&e.data.length>0?(((s=e.data)==null?void 0:s.length)<i.value?a.value=!0:a.value=!1,t.data.push(...e.data)):a.value=!0,t.code=e.code,t.status=e.status,t.message=e.message):(((u=e.data)==null?void 0:u.length)<i.value||e.data==null?a.value=!0:a.value=!1,t.data=e.data,t.code=e.code,t.status=e.status,t.message=e.message),t!=null&&t.data!=null&&(r=t.data.length)}async function b(e){if(e!=e){const o=new c;t.data=o.data,t.code=o.code,t.status=o.status,t.message=o.message,r=0}e=e.toString(),l.value=!0;const s=new f;s.catId=e;const u=await g.searchSubCategoryList(new y,"1",i.value,r,s.toMap());l.value=!1,n(u)}async function w(e){if(e!=e){const o=new c;t.data=o.data,t.code=o.code,t.status=o.status,t.message=o.message}r=0,e=e.toString(),l.value=!0;const s=new f;s.catId=e;const u=await g.searchSubCategoryList(new y,"1",i.value,r,s.toMap());n(u),l.value=!1}function C(e,s){h(e,s)}async function h(e,s){r=0,l.value=!0;const u=await g.searchSubCategoryList(new y,e,i.value,r,s.toMap());n(u),l.value=!1}return{isNoMoreRecord:a,subCategoryList:t,catId:S,loading:l,limit:i,offset:r,paramHolder:v,loadSubCategoryList:b,resetSubCategoryList:w,filtersubCatUpdate:C,resetSearchSubCategoryList:h}}));export{f as S,B as u};
