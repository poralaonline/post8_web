import{o as s,c as a,F as c,s as p,m,by as u,a as i,t as h}from"./app.d57d51e9.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const g={props:{options:{type:Array,required:!0},selectedOption:{type:String,required:!0}},data(){return{selectedOption:this.options[0].toLowerCase()}},methods:{handleChange(){this.$emit("change",this.selectedOption)}}},_={class:"flex mb-4"},y=["id","value"],C=["for"];function k(v,e,d,b,o,n){return s(),a("div",_,[(s(!0),a(c,null,p(d.options,(t,l)=>(s(),a("div",{key:l,class:"mr-8"},[m(i("input",{type:"radio",id:t.toLowerCase(),"onUpdate:modelValue":e[0]||(e[0]=r=>o.selectedOption=r),value:t.toLowerCase(),class:"mr-2 checked:bg-fePrimary-500 checked:dark:bg-fePrimary-500 dark:bg-feSecondary-800",onChange:e[1]||(e[1]=(...r)=>n.handleChange&&n.handleChange(...r))},null,40,y),[[u,o.selectedOption]]),i("label",{for:t.toLowerCase(),class:"text-sm"},h(t),9,C)]))),128))])}var x=f(g,[["render",k]]);export{x as default};
