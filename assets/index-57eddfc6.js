import{_ as ze}from"./qrcode-105029cf.js";import{m as le}from"./message-89ab7550.js";import{_ as se,r as qe,o as j,a as C,b as f,U,h as ae,V as N,j as He,p as he,i as _e,$ as $e,O as ge,a1 as ne,a0 as ye,N as ce,x as re,P as je,l as x,u as y,S as pe,Z as be,w as ee,a2 as Ge,a3 as We,e as L,m as Ve,Q as de,W as Ye,f as Xe,F as fe,d as X,t as Y,k as H}from"./_plugin-vue_export-helper-9e9db05b.js";import{b as Se}from"./index-8929c8ab.js";import{u as Ze,d as Qe,e as Je}from"./vuex.esm-bundler-3cb7d60a.js";import{u as Ke}from"./index-37406977.js";import"./runtime-dom.esm-bundler-3d397fb5.js";import"./xtx-message-42ca877e.js";const et={},Ce=e=>(he("data-v-1888287c"),e=e(),_e(),e),tt={class:"login-header"},nt={class:"container"},at={class:"logo"},rt={class:"sub"},it=Ce(()=>f("i",{class:"iconfont icon-angle-right"},null,-1)),st=Ce(()=>f("i",{class:"iconfont icon-angle-right"},null,-1));function ot(e,t){const n=qe("RouterLink");return j(),C("header",tt,[f("div",nt,[f("h1",at,[U(n,{to:"/"},{default:ae(()=>[N("小兔鲜")]),_:1})]),f("h3",rt,[He(e.$slots,"default",{},void 0,!0)]),U(n,{class:"entry",to:"/"},{default:ae(()=>[N(" 进入网站首页 "),it,st]),_:1})])])}const lt=se(et,[["render",ot],["__scopeId","data-v-1888287c"]]);const ut={},ct={class:"login-footer"},dt=$e('<div class="container" data-v-ca772860><p data-v-ca772860><a href="javascript:;" data-v-ca772860>关于我们</a><a href="javascript:;" data-v-ca772860>帮助中心</a><a href="javascript:;" data-v-ca772860>售后服务</a><a href="javascript:;" data-v-ca772860>配送与验收</a><a href="javascript:;" data-v-ca772860>商务合作</a><a href="javascript:;" data-v-ca772860>搜索推荐</a><a href="javascript:;" data-v-ca772860>友情链接</a></p><p data-v-ca772860>CopyRight © 小兔鲜儿</p></div>',1),ft=[dt];function vt(e,t){return j(),C("footer",ct,ft)}const mt=se(ut,[["render",vt],["__scopeId","data-v-ca772860"]]);/**
  * vee-validate v4.0.3
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */function W(e){return typeof e=="function"}const ie=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e),ht={};function _t(e){return ht[e]}function ve(e){return W(e)&&!!e.__locatorRef}function gt(e){return["input","textarea","select"].includes(e)}function yt(e,t){return gt(e)&&t==="file"}function Fe(e){return!!e&&W(e.validate)}function Z(e){return e==="checkbox"||e==="radio"}function Ie(e){return Number(e)>=0}function pt(e){return Array.isArray(e)?e.length===0:ie(e)&&Object.keys(e).length===0}function oe(e){return/^\[.+\]$/i.test(e)}function Ae(e){return oe(e)?e.replace(/\[|\]/gi,""):e}function z(e,t){if(e)return oe(t)?e[Ae(t)]:t.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((n,r)=>{if(n&&r in n)return n[r]},e)}function K(e,t,n){if(oe(t)){e[Ae(t)]=n;return}const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let a=0;a<r.length;a++){if(a===r.length-1){i[r[a]]=n;return}r[a]in i||(i[r[a]]=Ie(r[a+1])?[]:{}),i=i[r[a]]}}function ue(e,t){if(Array.isArray(e)&&Ie(t)){e.splice(Number(t),1);return}delete e[t]}function te(e,t){if(oe(t)){delete e[Ae(t)];return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let a=0;a<n.length;a++){if(a===n.length-1){ue(r,n[a]);break}if(!(n[a]in r))break;r=r[n[a]]}const i=n.map((a,l)=>z(e,n.slice(0,l).join(".")));for(let a=i.length-1;a>=0;a--)if(pt(i[a])){if(a===0){ue(e,n[0]);continue}ue(i[a-1],n[a-1])}}function G(e){return Object.keys(e)}function Me(e,t=void 0){const n=Ye();return je(e,(n==null?void 0:n.provides[e])||t)}const bt=e=>e?!!(typeof Event<"u"&&W(Event)&&e instanceof Event||e&&e.srcElement):!1;function Re(e){if(!bt(e))return e;const t=e.target;return Z(t.type)&&"_value"in t?t._value:t.type==="file"&&t.files?Array.from(t.files):t.value}function Te(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?W(e)||Fe(e)||ie(e)&&e._$$isNormalized?e:ie(e)?Object.keys(e).reduce((n,r)=>{const i=Vt(e[r]);return e[r]!==!1&&(n[r]=we(i)),n},t):typeof e!="string"?t:e.split("|").reduce((n,r)=>{const i=St(r);return i.name&&(n[i.name]=we(i.params)),n},t):t}function Vt(e){return e===!0?[]:Array.isArray(e)||ie(e)?e:[e]}function we(e){const t=n=>typeof n=="string"&&n[0]==="@"?Ft(n.slice(1)):n;return Array.isArray(e)?e.map(t):Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{})}const St=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function Ft(e){const t=n=>n[e];return t.__locatorRef=e,t}function At(e){return Array.isArray(e)?e.filter(ve):Object.keys(e).filter(t=>ve(e[t])).map(t=>e[t])}const Oe=(e,t)=>e.slots.default?e.slots.default(t):e.slots.default,Ot={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let wt=Object.assign({},Ot);const me=()=>wt;async function kt(e,t,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:Te(t),bails:r??!0,formData:(n==null?void 0:n.values)||{}};return{errors:(await Et(i,e)).errors}}async function Et(e,t){if(Fe(e.rules))return $t(e,t);if(W(e.rules)){const a=await e.rules(t,{field:e.name,form:e.formData}),l=typeof a!="string"&&a,v=typeof a=="string"?a:De({field:e.name,value:t,form:e.formData});return{errors:l?[]:[v]}}const n=[],r=Object.keys(e.rules),i=r.length;for(let a=0;a<i;a++){const l=r[a],v=await jt(e,t,{name:l,params:e.rules[l]});if(v.error&&(n.push(v.error),e.bails))return{errors:n}}return{errors:n}}async function $t(e,t){return{errors:await e.rules.validate(t,{abortEarly:e.bails}).then(()=>[]).catch(r=>{if(r.name==="ValidationError")return r.errors;throw r})}}async function jt(e,t,n){const r=_t(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=Ct(n.params,e.formData),a={field:e.name,value:t,form:e.formData,rule:n},l=await r(t,i,a);return typeof l=="string"?{error:l}:{error:l?void 0:De(a)}}function De(e){const t=me().generateMessage;return t?t(e):"Field is invalid"}function Ct(e,t){const n=r=>ve(r)?r(t):r;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((r,i)=>(r[i]=n(e[i]),r),{})}const Be=Symbol("vee-validate-form"),Ne=Symbol("vee-validate-form-errors"),Ue=Symbol("vee-validate-form-initial-values");let ke=0;function It(e,t,n){const r=ke>=Number.MAX_SAFE_INTEGER?0:++ke,{initialValue:i,validateOnMount:a,bails:l,type:v,valueProp:g,label:S,validateOnValueUpdate:p}=Mt(y(e),n),c=Me(Be),{meta:V,errors:O,handleBlur:w,handleInput:m,resetValidationState:h,setValidationState:d,value:A,checked:M}=Rt({name:e,initValue:y(i),form:c,type:v,valueProp:g}),D=Dt(c==null?void 0:c.schema,y(e)),$=x(()=>Te(D||y(t))),E=async()=>{var _;V.pending=!0;let T;return!c||!c.validateSchema?T=await kt(A.value,$.value,{name:y(S)||y(e),values:(_=c==null?void 0:c.values)!==null&&_!==void 0?_:{},bails:l}):T=(await c.validateSchema())[y(e)],V.pending=!1,d(T)},R=_=>{var T,q;if(!(M&&M.value===((q=(T=_)===null||T===void 0?void 0:T.target)===null||q===void 0?void 0:q.checked))&&(A.value=Re(_),V.dirty=!0,!p))return E()};a&&pe(E);const B=x(()=>O.value[0]);function P(_){V.touched=_}function o(_){V.dirty=_}let s;function u(){p&&(s=ee(A,E,{deep:!0}))}u();function b(_){s==null||s(),h(_),u()}const F={fid:r,name:e,value:A,meta:V,errors:O,errorMessage:B,type:v,valueProp:g,checked:M,idx:-1,resetField:b,handleReset:()=>b(),validate:E,handleChange:R,handleBlur:w,handleInput:m,setValidationState:d,setTouched:P,setDirty:o};if(be(t)&&typeof y(t)!="function"&&ee(t,E,{deep:!0}),!c)return F;c.register(F),Ge(()=>{c.unregister(F)});const k=x(()=>{const _=$.value;return!_||W(_)||W(_.validate)?[]:Object.keys(_).reduce((T,q)=>{const Le=At($.value[q]).map(Pe=>Pe.__locatorRef);return T.push(...Le),T},[])});return We(()=>{k.value.length&&k.value.forEach(_=>{if(_ in c.values&&V.dirty)return E()})}),F}function Mt(e,t){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:e,validateOnValueUpdate:!0});return t?Object.assign(Object.assign({},n()),t||{}):n()}function Rt({name:e,initValue:t,form:n,type:r,valueProp:i}){var a;const l=L([]),v=Me(Ue,void 0),g=(a=z(y(v),y(e)))!==null&&a!==void 0?a:t,{resetMeta:S,meta:p}=Tt(g),c=Bt(g,e,n);Z(r)&&g&&(c.value=g);const V=Z(r)?x(()=>Array.isArray(c.value)?c.value.includes(y(i)):y(i)===c.value):void 0;(V===void 0||V.value)&&(c.value=g);const O=()=>{p.touched=!0},w=d=>{Z(r)||(c.value=Re(d)),p.dirty=!0};function m(d){return l.value=d.errors,p.valid=!d.errors.length,d}function h(d){var A;c.value=d&&"value"in d?d.value:(A=z(y(v),y(e)))!==null&&A!==void 0?A:t,l.value=(d==null?void 0:d.errors)||[],S(d)}return{meta:p,errors:l,setValidationState:m,resetValidationState:h,handleBlur:O,handleInput:w,value:c,checked:V}}function Tt(e){const t=()=>({touched:!1,dirty:!1,valid:!1,pending:!1,initialValue:e}),n=Ve(t());function r(i){var a,l,v;const g=t();n.pending=g.pending,n.touched=(a=i==null?void 0:i.touched)!==null&&a!==void 0?a:g.touched,n.dirty=(l=i==null?void 0:i.dirty)!==null&&l!==void 0?l:g.dirty,n.initialValue=(v=i==null?void 0:i.value)!==null&&v!==void 0?v:g.initialValue}return{meta:n,resetMeta:r}}function Dt(e,t){if(e)return e[t]}function Bt(e,t,n){return n?(K(n.values,y(t),e),x({get(){return z(n.values,y(t))},set(i){n.setFieldValue(y(t),i)}})):L(e)}const Q=ge({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:null},validateOnMount:{type:Boolean,default:!1},bails:{type:Boolean,default:()=>me().bails},label:{type:String,default:void 0}},setup(e,t){const n=ne(e,"rules"),r=ne(e,"name"),i=ne(e,"label"),{errors:a,value:l,errorMessage:v,validate:g,handleChange:S,handleBlur:p,handleInput:c,setDirty:V,setTouched:O,resetField:w,handleReset:m,meta:h,checked:d}=It(r,n,{validateOnMount:e.validateOnMount,bails:e.bails,type:t.attrs.type,initialValue:Z(t.attrs.type)||"modelValue"in t.attrs?t.attrs.modelValue:t.attrs.value,valueProp:t.attrs.value,label:i,validateOnValueUpdate:!1});let A=!1;function M(){A=!0,ce(()=>{A=!1})}const D="modelValue"in t.attrs?function(k){S(k),t.emit("update:modelValue",l.value)}:S,$="modelValue"in t.attrs?function(k){c(k),t.emit("update:modelValue",l.value)}:c,{validateOnInput:E,validateOnChange:R,validateOnBlur:B,validateOnModelUpdate:P}=me(),o=[p,t.attrs.onBlur,B?g:void 0].filter(Boolean),s=[$,M,E?D:void 0,t.attrs.onInput].filter(Boolean),u=[$,M,R?D:void 0,t.attrs.onChange].filter(Boolean),b=()=>{const F={name:e.name,onBlur:o,onInput:s,onChange:u};return P&&(F["onUpdate:modelValue"]=[D,M]),Z(t.attrs.type)&&d?F.checked=d.value:F.value=l.value,yt(Ee(e,t),t.attrs.type)&&delete F.value,{field:F,meta:h,errors:a.value,errorMessage:v.value,validate:g,resetField:w,handleChange:D,handleInput:$,handleReset:m,handleBlur:p,setDirty:V,setTouched:O}};return()=>{const F=ye(Ee(e,t)),k=b();"modelValue"in t.attrs&&String(t.attrs.modelValue)!==String(l.value)&&!A&&ce(()=>{S(t.attrs.modelValue)});const _=Oe(t,k);return F?re(F,Object.assign(Object.assign({},t.attrs),k.field),_):_}}});function Ee(e,t){let n=e.as||"";return!e.as&&!t.slots.default&&(n="input"),n}function Nt(e){const t=L([]),n=L(!1),r=x(()=>t.value.reduce((o,s)=>{if(!o[s.name])return o[s.name]=s,s.idx=-1,o;if(!Array.isArray(o[s.name])){const u=o[s.name];u.idx=0,o[s.name]=[u]}return s.idx=o[s.name].length,o[s.name].push(s),o},{})),i=Ve({}),a={},l=x(()=>t.value.reduce((o,s)=>{let u;if(Array.isArray(r.value[s.name])){const b=r.value[s.name];u=y((b.find(F=>y(F.checked))||s).errorMessage)}else u=y(s.errorMessage);return u&&(o[s.name]=u),o},{})),{initialValues:v,setInitialValues:g}=Lt(r,i,e==null?void 0:e.initialValues),S=Ut(t,v);function p(o,s){const u=r.value[o];if(u){if(Array.isArray(u)){u.forEach(b=>{b.setValidationState({errors:s?[s]:[]})});return}u.setValidationState({errors:s?[s]:[]})}}function c(o){G(o).forEach(s=>{p(s,o[s])})}function V(o,s){var u;const b=r.value[o];if(Array.isArray(b)&&((u=b[0])===null||u===void 0?void 0:u.type)==="checkbox"&&!Array.isArray(s)){const k=z(i,o),_=Array.isArray(k)?[...k]:[],T=_.indexOf(s);T>=0?_.splice(T,1):_.push(s),K(i,o,_),b.forEach(q=>{a[q.fid]=_});return}let F=s;(b==null?void 0:b.type)==="checkbox"&&(F=z(i,o)===s?void 0:s),K(i,o,F),b&&(a[b.fid]=F)}function O(o){G(o).forEach(s=>{V(s,o[s])})}function w(o,s){const u=r.value[o];if(u){if(Array.isArray(u)){u.forEach(b=>b.setTouched(s));return}u.setTouched(s)}}function m(o){G(o).forEach(s=>{w(s,!!o[s])})}function h(o,s){const u=r.value[o];if(u){if(Array.isArray(u)){u.forEach(b=>b.setDirty(s));return}u.setDirty(s)}}function d(o){G(o).forEach(s=>{h(s,!!o[s])})}const A=o=>{o!=null&&o.values&&g(o.values),t.value.forEach(s=>s.resetField()),o!=null&&o.dirty&&d(o.dirty),o!=null&&o.touched&&m(o.touched),o!=null&&o.errors&&c(o.errors)};function M(o){t.value.push(o),be(o.name)&&ee(o.name,s=>{V(s,a[o.fid])},{flush:"post"})}function D(o){var s,u;const b=t.value.indexOf(o);if(b===-1)return;t.value.splice(b,1);const F=o.fid;ce(()=>{delete a[F]});const k=y(o.name);if(o.idx===-1){te(i,k);return}const _=(u=(s=z(i,k))===null||s===void 0?void 0:s.indexOf)===null||u===void 0?void 0:u.call(s,y(o.valueProp));if(_===void 0){te(i,k);return}if(_!==-1){if(Array.isArray(i[k])){te(i,`${k}.${_}`);return}te(i,k)}}const $={register:M,unregister:D,fields:r,values:i,schema:e==null?void 0:e.validationSchema,validateSchema:Fe(e==null?void 0:e.validationSchema)?(o=!1)=>xt($,o):void 0,setFieldValue:V,setValues:O,setErrors:c,setFieldError:p,setFieldTouched:w,setTouched:m,setFieldDirty:h,setDirty:d,resetForm:A},E=async()=>$.validateSchema?$.validateSchema(!0).then(s=>Object.keys(s).every(u=>!s[u].errors.length)):(await Promise.all(t.value.map(s=>s.validate()))).every(s=>!s.errors.length),R=x(()=>t.value.reduce((o,s)=>(K(o,s.name,y(s.value)),o),{})),B=o=>function(u){return u instanceof Event&&(u.preventDefault(),u.stopPropagation()),n.value=!0,E().then(b=>{if(b&&typeof o=="function")return o(R.value,{evt:u,setDirty:d,setFieldDirty:h,setErrors:c,setFieldError:p,setTouched:m,setFieldTouched:w,setValues:O,setFieldValue:V,resetForm:A})}).then(()=>{n.value=!1},b=>{throw n.value=!1,b})},P=B((o,{evt:s})=>{var u;s&&((u=s==null?void 0:s.target)===null||u===void 0||u.submit())});return pe(()=>{e!=null&&e.initialErrors&&c(e.initialErrors),e!=null&&e.initialDirty&&d(e.initialDirty),e!=null&&e.initialTouched&&m(e.initialTouched),e!=null&&e.validateOnMount&&E()}),de(Be,$),de(Ne,l),{errors:l,meta:S,values:i,validate:E,isSubmitting:n,handleReset:()=>A(),resetForm:A,handleSubmit:B,submitForm:P,setFieldError:p,setErrors:c,setFieldValue:V,setValues:O,setFieldTouched:w,setTouched:m,setFieldDirty:h,setDirty:d}}function Ut(e,t){const n={valid:"every",dirty:"some",touched:"some",pending:"some"};return x(()=>{const r=G(n).reduce((i,a)=>{const l=n[a];return i[a]=e.value[l](v=>v.meta[a]),i},{});return Object.assign({initialValues:y(t)},r)})}async function xt(e,t=!1){const n=await e.schema.validate(e.values,{abortEarly:!1}).then(()=>[]).catch(l=>{if(l.name!=="ValidationError")throw l;return l.inner||[]}),r=e.fields.value,i=n.reduce((l,v)=>(l[v.path]=v,l),{});return G(r).reduce((l,v)=>{const g=r[v],p={errors:(i[v]||{errors:[]}).errors};l[v]=p;const c=Array.isArray(g),V=c?g.some(O=>O.meta.dirty):g.meta.dirty;return!t&&!V?l:c?(g.forEach(O=>O.setValidationState(p)),l):(g.setValidationState(p),l)},{})}function Lt(e,t,n){const r=L(y(n)||{}),i=x(()=>r.value);function a(l,v=!1){if(r.value=Object.assign(Object.assign({},r.value),l),!v)return;const g=S=>S.meta.dirty||S.meta.touched;G(e.value).forEach(S=>{const p=e.value[S];if(Array.isArray(p)?p.some(g):g(p))return;const V=z(r.value,S);K(t,S,V)})}return be(n)&&ee(n,l=>{a(l,!0)},{deep:!0}),de(Ue,i),{initialValues:i,setInitialValues:a}}const Pt=ge({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialDirty:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1}},setup(e,t){const n=ne(e,"initialValues"),{errors:r,validate:i,handleReset:a,resetForm:l,values:v,meta:g,isSubmitting:S,handleSubmit:p,submitForm:c,setErrors:V,setFieldError:O,setFieldValue:w,setValues:m,setFieldDirty:h,setDirty:d,setFieldTouched:A,setTouched:M}=Nt({validationSchema:e.validationSchema,initialValues:n,initialErrors:e.initialErrors,initialTouched:e.initialTouched,initialDirty:e.initialDirty,validateOnMount:e.validateOnMount}),D=t.attrs.onSubmit?p(t.attrs.onSubmit):c;function $(){a(),typeof t.attrs.onReset=="function"&&t.attrs.onReset()}function E(R,B){return p(typeof R=="function"&&!B?R:B)(R)}return function(){"setErrors"in this||(this.setFieldError=O,this.setErrors=V,this.setFieldValue=w,this.setValues=m,this.setFieldDirty=h,this.setDirty=d,this.setFieldTouched=A,this.setTouched=M,this.resetForm=l,this.validate=i);const B=Oe(t,{meta:g.value,errors:r.value,values:v,isSubmitting:S.value,validate:i,handleSubmit:E,handleReset:a,submitForm:c,setErrors:V,setFieldError:O,setFieldValue:w,setValues:m,setFieldDirty:h,setDirty:d,setFieldTouched:A,setTouched:M,resetForm:l});if(!e.as)return B;const P=e.as==="form"?{novalidate:!0}:{};return re(e.as==="form"?e.as:ye(e.as),Object.assign(Object.assign(Object.assign({},P),t.attrs),{onSubmit:D,onReset:$}),B)}}});ge({props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=je(Ne,void 0),r=x(()=>n==null?void 0:n.value[e.name]);return()=>{const i=Oe(t,{message:r.value}),a=e.as?ye(e.as):e.as,l=Object.assign({role:"alert"},t.attrs);return!a&&(i!=null&&i.length)?i:i!=null&&i.length?re(a,l,i):re(a||"span",l,r.value)}}});const J={account(e){return e?/^[a-zA-Z]\w{5,19}$/.test(e)?!0:"字母开头且6-20个字符":"请输入用户名"},password(e){return e?/^\w{6,24}$/.test(e)?!0:"密码是6-24个字符":"请输入密码"},mobile(e){return e?/^1[3-9]\d{9}$/.test(e)?!0:"手机号格式错误":"请输入手机号"},code(e){return e?/^\d{6}$/.test(e)?!0:"验证码是6个数字":"请输入验证码"},isAgree(e){return e?!0:"请勾选同意用户协议"}},zt=({account:e,password:t})=>Se("/login","post",{account:e,password:t}),qt=e=>Se("/login/code","get",{mobile:e}),Ht=({mobile:e,code:t})=>Se("/login/code","post",{mobile:e,code:t});const I=e=>(he("data-v-5a505cec"),e=e(),_e(),e),Gt={class:"account-box"},Wt={class:"toggle"},Yt=I(()=>f("i",{class:"iconfont icon-user"},null,-1)),Xt=I(()=>f("i",{class:"iconfont icon-msg"},null,-1)),Zt={class:"form-item"},Qt={class:"input"},Jt=I(()=>f("i",{class:"iconfont icon-user"},null,-1)),Kt={key:0,class:"error"},en=I(()=>f("i",{class:"iconfont icon-warning"},null,-1)),tn={class:"form-item"},nn={class:"input"},an=I(()=>f("i",{class:"iconfont icon-lock"},null,-1)),rn={key:0,class:"error"},sn=I(()=>f("i",{class:"iconfont icon-warning"},null,-1)),on={class:"form-item"},ln={class:"input"},un=I(()=>f("i",{class:"iconfont icon-user"},null,-1)),cn={key:0,class:"error"},dn=I(()=>f("i",{class:"iconfont icon-warning"},null,-1)),fn={class:"form-item"},vn={class:"input"},mn=I(()=>f("i",{class:"iconfont icon-code"},null,-1)),hn={key:0,class:"error"},_n=I(()=>f("i",{class:"iconfont icon-warning"},null,-1)),gn={class:"form-item"},yn={class:"agree"},pn=I(()=>f("span",null,"我已同意",-1)),bn=I(()=>f("a",{href:"javascript:;"},"《隐私条款》",-1)),Vn=I(()=>f("span",null,"和",-1)),Sn=I(()=>f("a",{href:"javascript:;"},"《服务条款》",-1)),Fn={key:0,class:"error"},An=I(()=>f("i",{class:"iconfont icon-warning"},null,-1)),On=$e('<div class="action" data-v-5a505cec><img src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png" alt="" data-v-5a505cec><div class="url" data-v-5a505cec><a href="javascript:;" data-v-5a505cec>忘记密码</a><a href="javascript:;" data-v-5a505cec>免费注册</a></div></div>',1),wn={__name:"login-form",setup(e){const t=Ze(),n=Qe(),r=Je(),i=L(!1),a=Ve({isAgree:!0,account:null,password:null,mobile:null,code:null}),l={account:J.account,password:J.password,mobile:J.mobile,code:J.code,isAgree:J.isAgree},v=L(null);ee(i,()=>{a.isAgree=!0,a.account=null,a.password=null,a.mobile=null,a.code=null,v.value.resetForm()});const g=async()=>{const w=await v.value.validate();let m=null;if(w)try{if(i.value){const{mobile:E,code:R}=a;m=await Ht({mobile:E,code:R})}else{const{account:E,password:R}=a;m=await zt({account:E,password:R})}const{id:h,account:d,avatar:A,mobille:M,nickname:D,token:$}=m.result;t.commit("user/setUser",{id:h,account:d,avatar:A,mobille:M,nickname:D,token:$}),t.dispatch("cart/mergeLocalCart").then(()=>{n.push(r.query.redirecUrl||"/"),le({type:"success",text:"登入成功"})})}catch(h){h.response&&le({type:"error",text:h.response.data.message||"登入失败"})}},S=L(0),{pause:p,resume:c,isActive:V}=Ke(()=>{S.value--,S.value<=0&&p()},1e3,{immediate:!1}),O=async()=>{const w=l.mobile(a.mobile);w===!0?S.value==0&&(await qt(a.mobile),le({type:"success",text:"验证码已发送"}),S.value=60,c()):v.value.setFieldError("mobile",w)};return pe(()=>{a.account="zhousg",a.password="123456"}),Xe(()=>{p()}),(w,m)=>(j(),C("div",Gt,[f("div",Wt,[i.value?(j(),C("a",{key:0,onClick:m[0]||(m[0]=h=>i.value=!1),href:"javascript:;"},[Yt,N(" 使用账号登录 ")])):(j(),C("a",{key:1,onClick:m[1]||(m[1]=h=>i.value=!0),href:"javascript:;"},[Xt,N(" 使用短信登录 ")]))]),U(y(Pt),{class:"form","validation-schema":l,autocomplete:"off",ref_key:"formCom",ref:v},{default:ae(({errors:h})=>[i.value?(j(),C(fe,{key:1},[f("div",on,[f("div",ln,[un,U(y(Q),{class:X({error:h.mobile}),modelValue:a.mobile,"onUpdate:modelValue":m[4]||(m[4]=d=>a.mobile=d),name:"mobile",type:"text",placeholder:"请输入手机号"},null,8,["class","modelValue"])]),h.mobile?(j(),C("div",cn,[dn,N(Y(h.mobile),1)])):H("",!0)]),f("div",fn,[f("div",vn,[mn,U(y(Q),{class:X({error:h.code}),modelValue:a.code,"onUpdate:modelValue":m[5]||(m[5]=d=>a.code=d),name:"code",type:"password",placeholder:"请输入验证码"},null,8,["class","modelValue"]),f("span",{class:"code",onClick:m[6]||(m[6]=d=>O())},Y(S.value===0?"发送验证码":`${S.value}秒后发送`),1),h.code?(j(),C("div",hn,[_n,N(Y(h.code),1)])):H("",!0)])])],64)):(j(),C(fe,{key:0},[f("div",Zt,[f("div",Qt,[Jt,U(y(Q),{class:X({error:h.account}),modelValue:a.account,"onUpdate:modelValue":m[2]||(m[2]=d=>a.account=d),name:"account",type:"text",placeholder:"请输入用户名或手机号"},null,8,["class","modelValue"])]),h.account?(j(),C("div",Kt,[en,N(Y(h.account),1)])):H("",!0)]),f("div",tn,[f("div",nn,[an,U(y(Q),{class:X({error:h.password}),modelValue:a.password,"onUpdate:modelValue":m[3]||(m[3]=d=>a.password=d),name:"password",type:"password",placeholder:"请输入密码"},null,8,["class","modelValue"])]),h.password?(j(),C("div",rn,[sn,N(Y(h.password),1)])):H("",!0)])],64)),f("div",gn,[f("div",yn,[U(y(Q),{as:"XtxCheckBox",name:"isAgree",modelValue:a.isAgree,"onUpdate:modelValue":m[7]||(m[7]=d=>a.isAgree=d)},null,8,["modelValue"]),pn,bn,Vn,Sn]),h.isAgree?(j(),C("div",Fn,[An,N(" "+Y(h.isAgree),1)])):H("",!0)]),f("a",{href:"javascript:;",class:"btn",onClick:g},"登录")]),_:1},512),On]))}},kn=se(wn,[["__scopeId","data-v-5a505cec"]]);const xe=e=>(he("data-v-865aaf53"),e=e(),_e(),e),En={class:"login-section"},$n={class:"wrapper"},jn={key:0,class:"account-box"},Cn={key:1,class:"qrcode-box"},In=xe(()=>f("img",{src:ze,alt:""},null,-1)),Mn=xe(()=>f("p",null,[N("打开 "),f("a",{href:"javascript:;"},"小兔鲜App"),N(" 扫码登录")],-1)),Rn=[In,Mn],Tn={__name:"index",setup(e){const t=L("account");return(n,r)=>(j(),C(fe,null,[U(lt,null,{default:ae(()=>[N("欢迎登录")]),_:1}),f("section",En,[f("div",$n,[f("nav",null,[f("a",{href:"javascript:;",onClick:r[0]||(r[0]=i=>t.value="account"),class:X({active:t.value==="account"})},"账户登录",2),f("a",{href:"javascript:;",onClick:r[1]||(r[1]=i=>t.value="qrcode"),class:X({active:t.value==="qrcode"})},"扫码登录",2)]),t.value==="account"?(j(),C("div",jn,[U(kn)])):H("",!0),t.value==="qrcode"?(j(),C("div",Cn,Rn)):H("",!0)])]),U(mt)],64))}},qn=se(Tn,[["__scopeId","data-v-865aaf53"]]);export{qn as default};
