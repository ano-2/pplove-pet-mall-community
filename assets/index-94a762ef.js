import{c as h,P as b,a1 as y,t as P,d as I,G as T,aD as A,b as t,I as C,B as k,w as L}from"./index-2e5f8ac5.js";const[N,e,_]=h("submit-bar"),w={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:b("¥"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:b("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:y(2),safeAreaInsetBottom:P};var D=I({name:N,props:w,emits:["submit"],setup(n,{emit:m,slots:a}){const o=T(),p=A(o,e),f=()=>{const{price:r,label:i,currency:l,textAlign:v,suffixLabel:s,decimalLength:u}=n;if(typeof r=="number"){const d=(r/100).toFixed(+u).split("."),S=u?`.${d[1]}`:"";return t("div",{class:e("text"),style:{textAlign:v}},[t("span",null,[i||_("label")]),t("span",{class:e("price")},[l,t("span",{class:e("price-integer")},[d[0]]),S]),s&&t("span",{class:e("suffix-label")},[s])])}},g=()=>{var r;const{tip:i,tipIcon:l}=n;if(a.tip||i)return t("div",{class:e("tip")},[l&&t(C,{class:e("tip-icon"),name:l},null),i&&t("span",{class:e("tip-text")},[i]),(r=a.tip)==null?void 0:r.call(a)])},x=()=>m("submit"),B=()=>a.button?a.button():t(k,{round:!0,type:n.buttonType,text:n.buttonText,class:e("button",n.buttonType),color:n.buttonColor,loading:n.loading,disabled:n.disabled,onClick:x},null),c=()=>{var r,i;return t("div",{ref:o,class:[e(),{"van-safe-area-bottom":n.safeAreaInsetBottom}]},[(r=a.top)==null?void 0:r.call(a),g(),t("div",{class:e("bar")},[(i=a.default)==null?void 0:i.call(a),f(),B()])])};return()=>n.placeholder?p(c):c()}});const G=L(D);export{G as S};
