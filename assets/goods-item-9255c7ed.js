import{_,r as i,o as a,c as d,h as n,b as o,t,k as p}from"./plugin-vue_export-helper-9e9db05b.js";const r=["src"],l={class:"name ellipsis"},m={class:"desc ellipsis"},g={class:"price"},u={__name:"goods-item",props:{goodsList:{type:Object,defult:{}}},setup(e){const s=e;return(f,L)=>{const c=i("RouterLink");return s.goodsList?(a(),d(c,{key:0,to:`/product/${s.goodsList.id}`,class:"goods-item"},{default:n(()=>[o("img",{src:s.goodsList.picture,alt:""},null,8,r),o("p",l,t(s.goodsList.naem),1),o("p",m,t(s.goodsList.desc),1),o("p",g,"¥"+t(s.goodsList.price),1)]),_:1},8,["to"])):p("",!0)}}},b=_(u,[["__scopeId","data-v-ffb362b5"]]);export{b as G};
