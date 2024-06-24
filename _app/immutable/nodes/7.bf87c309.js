import{i as be,t as re}from"../chunks/projects.1e29dbec.js";import{s as _e,e as se,i as T,n as R,d as h,f as w,l as H,a as S,g as C,h as x,m as J,c as M,I as Z,j as k,K as g,L as N,x as ke,p as Q,u as he,O,M as te}from"../chunks/scheduler.7a274a43.js";import{S as me,i as ge,b as z,d as B,m as A,t as V,c as W,a as D,e as L,g as X}from"../chunks/index.28409b7f.js";import{g as Y,U as ee,e as G}from"../chunks/UIcon.941bd778.js";import{b as oe}from"../chunks/paths.ab501b6d.js";import{C as ye}from"../chunks/CardLogo.ffd18bf4.js";import{M as we}from"../chunks/app.8498a9b2.js";import{B as Ce,M as je}from"../chunks/Banner.03106378.js";import{T as Ee}from"../chunks/TabTitle.5dc74021.js";import{C as ve}from"../chunks/Chip.e492ac4c.js";import{C as $e}from"../chunks/CardDivider.09b854d8.js";function Ie({params:r}){if(r.slug)return{project:be.find(l=>l.slug===r.slug)}}const lt=Object.freeze(Object.defineProperty({__proto__:null,load:Ie},Symbol.toStringTag,{value:"Module"}));function ae(r){var v;let e,l,t,n,a=((v=r[0])==null?void 0:v.label)+"",o,s,i,u,p="Click outside the frame to close",y,c;return{c(){e=w("div"),l=w("div"),t=w("div"),n=w("p"),o=H(a),i=S(),u=w("p"),u.textContent=p,this.h()},l(d){e=C(d,"DIV",{class:!0});var $=x(e);l=C($,"DIV",{class:!0});var j=x(l);t=C(j,"DIV",{class:!0,style:!0});var b=x(t);n=C(b,"P",{class:!0});var F=x(n);o=J(F,a),F.forEach(h),b.forEach(h),i=M(j),u=C(j,"P",{class:!0,["data-svelte-h"]:!0}),Z(u)!=="svelte-hpptvy"&&(u.textContent=p),j.forEach(h),$.forEach(h),this.h()},h(){var d;k(n,"class","font-italic m-t-auto m-x-auto m-b-5 inline-flex bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),k(t,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),k(t,"style",s=`background-image: url(${(d=r[0])==null?void 0:d.src});`),k(u,"class","text-[var(--accent-text)] text-0.7em"),k(l,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),k(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(d,$){T(d,e,$),g(e,l),g(l,t),g(t,n),g(n,o),g(l,i),g(l,u),y||(c=[N(l,"click",xe),N(l,"keydown",r[7]),N(l,"keypress",r[8]),N(l,"keyup",r[9]),N(l,"keyup",r[10]),N(e,"click",function(){ke(r[1])&&r[1].apply(this,arguments)}),N(e,"click",Ve),N(e,"keydown",r[3]),N(e,"keypress",r[4]),N(e,"keyup",r[5]),N(e,"keyup",r[6])],y=!0)},p(d,$){var j,b;r=d,$&1&&a!==(a=((j=r[0])==null?void 0:j.label)+"")&&Q(o,a),$&1&&s!==(s=`background-image: url(${(b=r[0])==null?void 0:b.src});`)&&k(t,"style",s)},d(d){d&&h(e),y=!1,he(c)}}}function De(r){let e,l=r[2]&&ae(r);return{c(){l&&l.c(),e=se()},l(t){l&&l.l(t),e=se()},m(t,n){l&&l.m(t,n),T(t,e,n)},p(t,[n]){t[2]?l?l.p(t,n):(l=ae(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:R,o:R,d(t){t&&h(e),l&&l.d(t)}}}const xe=r=>r.stopPropagation(),Ve=r=>r.stopPropagation();function Pe(r,e,l){let t,{screenshot:n=void 0}=e,{onClose:a=()=>{l(0,n=void 0)}}=e;function o(d){O.call(this,r,d)}function s(d){O.call(this,r,d)}function i(d){O.call(this,r,d)}function u(d){O.call(this,r,d)}function p(d){O.call(this,r,d)}function y(d){O.call(this,r,d)}function c(d){O.call(this,r,d)}function v(d){O.call(this,r,d)}return r.$$set=d=>{"screenshot"in d&&l(0,n=d.screenshot),"onClose"in d&&l(1,a=d.onClose)},r.$$.update=()=>{r.$$.dirty&1&&l(2,t=typeof n<"u")},[n,a,t,o,s,i,u,p,y,c,v]}class Se extends me{constructor(e){super(),ge(this,e,Pe,De,_e,{screenshot:0,onClose:1})}}function ie(r,e,l){const t=r.slice();return t[11]=e[l],t[13]=l,t}function ce(r,e,l){const t=r.slice();return t[11]=e[l],t}function fe(r,e,l){const t=r.slice();return t[11]=e[l],t}function Me(r){let e,l,t,n,a,o,s,i,u,p,y,c,v,d;l=new Ce({props:{img:Y(r[0].project.logo),$$slots:{default:[Ae]},$$scope:{ctx:r}}});const $=[Oe,Le],j=[];function b(I,f){return I[0].project.description?0:1}o=b(r),s=j[o]=$[o](r),p=new $e({});const F=[qe,Ue],U=[];function E(I,f){return I[4].length>0?0:1}return c=E(r),v=U[c]=F[c](r),{c(){e=w("div"),z(l.$$.fragment),t=S(),n=w("div"),a=w("div"),s.c(),i=S(),u=w("div"),z(p.$$.fragment),y=S(),v.c(),this.h()},l(I){e=C(I,"DIV",{class:!0});var f=x(e);B(l.$$.fragment,f),t=M(f),n=C(f,"DIV",{class:!0});var _=x(n);a=C(_,"DIV",{class:!0});var P=x(a);s.l(P),P.forEach(h),i=M(_),u=C(_,"DIV",{class:!0});var m=x(u);B(p.$$.fragment,m),m.forEach(h),y=M(_),v.l(_),_.forEach(h),f.forEach(h),this.h()},h(){k(a,"class","px-10px m-y-5"),k(u,"class","w-100% m-t-8"),k(n,"class","pt-3 pb-1 overflow-x-hidden w-full"),k(e,"class","flex flex-col items-center overflow-x-hidden")},m(I,f){T(I,e,f),A(l,e,null),g(e,t),g(e,n),g(n,a),j[o].m(a,null),g(n,i),g(n,u),A(p,u,null),g(n,y),U[c].m(n,null),d=!0},p(I,f){const _={};f&1&&(_.img=Y(I[0].project.logo)),f&262145&&(_.$$scope={dirty:f,ctx:I}),l.$set(_);let P=o;o=b(I),o===P?j[o].p(I,f):(X(),V(j[P],1,1,()=>{j[P]=null}),W(),s=j[o],s?s.p(I,f):(s=j[o]=$[o](I),s.c()),D(s,1),s.m(a,null)),v.p(I,f)},i(I){d||(D(l.$$.fragment,I),D(s),D(p.$$.fragment,I),D(v),d=!0)},o(I){V(l.$$.fragment,I),V(s),V(p.$$.fragment,I),V(v),d=!1},d(I){I&&h(e),L(l),j[o].d(),L(p),U[c].d()}}}function Te(r){let e,l,t,n,a="Could not load project data...",o;return l=new ee({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),z(l.$$.fragment),t=S(),n=w("p"),n.textContent=a,this.h()},l(s){e=C(s,"DIV",{class:!0});var i=x(e);B(l.$$.fragment,i),t=M(i),n=C(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(n)!=="svelte-18mwztv"&&(n.textContent=a),i.forEach(h),this.h()},h(){k(n,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,i){T(s,e,i),A(l,e,null),g(e,t),g(e,n),o=!0},p:R,i(s){o||(D(l.$$.fragment,s),o=!0)},o(s){V(l.$$.fragment,s),o=!1},d(s){s&&h(e),L(l)}}}function Ne(r){let e=r[0].project.name+"",l;return{c(){l=H(e)},l(t){l=J(t,e)},m(t,n){T(t,l,n)},p(t,n){n&1&&e!==(e=t[0].project.name+"")&&Q(l,e)},d(t){t&&h(l)}}}function ze(r){let e,l,t,n,a=r[11].label+"",o,s,i;return l=new ee({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),z(l.$$.fragment),t=S(),n=w("span"),o=H(a),s=S(),this.h()},l(u){e=C(u,"DIV",{class:!0});var p=x(e);B(l.$$.fragment,p),t=M(p),n=C(p,"SPAN",{});var y=x(n);o=J(y,a),y.forEach(h),p.forEach(h),s=M(u),this.h()},h(){k(e,"class","row-center gap-2")},m(u,p){T(u,e,p),A(l,e,null),g(e,t),g(e,n),g(n,o),T(u,s,p),i=!0},p(u,p){(!i||p&1)&&a!==(a=u[11].label+"")&&Q(o,a)},i(u){i||(D(l.$$.fragment,u),i=!0)},o(u){V(l.$$.fragment,u),i=!1},d(u){u&&(h(e),h(s)),L(l)}}}function ue(r){let e,l;return e=new ve({props:{href:r[11].to,$$slots:{default:[ze]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,n){A(e,t,n),l=!0},p(t,n){const a={};n&1&&(a.href=t[11].to),n&262145&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Be(r){let e,l,t,n=r[11].name+"",a,o,s;return e=new ye({props:{src:Y(r[11].logo),alt:r[11].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){z(e.$$.fragment),l=S(),t=w("span"),a=H(n),o=S(),this.h()},l(i){B(e.$$.fragment,i),l=M(i),t=C(i,"SPAN",{class:!0});var u=x(t);a=J(u,n),u.forEach(h),o=M(i),this.h()},h(){k(t,"class","text-[0.9em]")},m(i,u){A(e,i,u),T(i,l,u),T(i,t,u),g(t,a),T(i,o,u),s=!0},p(i,u){const p={};u&1&&(p.src=Y(i[11].logo)),u&1&&(p.alt=i[11].name),e.$set(p),(!s||u&1)&&n!==(n=i[11].name+"")&&Q(a,n)},i(i){s||(D(e.$$.fragment,i),s=!0)},o(i){V(e.$$.fragment,i),s=!1},d(i){i&&(h(l),h(t),h(o)),L(e,i)}}}function de(r){let e,l;return e=new ve({props:{classes:"inline-flex flex-row items-center justify-center",href:`${oe}/skills/${r[11].slug}`,$$slots:{default:[Be]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,n){A(e,t,n),l=!0},p(t,n){const a={};n&1&&(a.href=`${oe}/skills/${t[11].slug}`),n&262145&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ae(r){let e,l,t,n,a,o=r[0].project.type+"",s,i,u,p,y,c,v,d,$;t=new we({props:{$$slots:{default:[Ne]},$$scope:{ctx:r}}}),p=new $e({});let j=G(r[0].project.links),b=[];for(let f=0;f<j.length;f+=1)b[f]=ue(fe(r,j,f));const F=f=>V(b[f],1,1,()=>{b[f]=null});let U=G(r[0].project.skills),E=[];for(let f=0;f<U.length;f+=1)E[f]=de(ce(r,U,f));const I=f=>V(E[f],1,1,()=>{E[f]=null});return{c(){e=w("div"),l=w("div"),z(t.$$.fragment),n=S(),a=w("p"),s=H(o),i=S(),u=w("div"),z(p.$$.fragment),y=S(),c=w("div");for(let f=0;f<b.length;f+=1)b[f].c();v=S(),d=w("div");for(let f=0;f<E.length;f+=1)E[f].c();this.h()},l(f){e=C(f,"DIV",{class:!0});var _=x(e);l=C(_,"DIV",{class:!0});var P=x(l);B(t.$$.fragment,P),P.forEach(h),n=M(_),a=C(_,"P",{class:!0});var m=x(a);s=J(m,o),m.forEach(h),i=M(_),u=C(_,"DIV",{class:!0});var q=x(u);B(p.$$.fragment,q),q.forEach(h),y=M(_),c=C(_,"DIV",{class:!0});var le=x(c);for(let K=0;K<b.length;K+=1)b[K].l(le);le.forEach(h),v=M(_),d=C(_,"DIV",{class:!0});var ne=x(d);for(let K=0;K<E.length;K+=1)E[K].l(ne);ne.forEach(h),_.forEach(h),this.h()},h(){k(l,"class","text-0.9em"),k(a,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),k(u,"class","w-75%"),k(c,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),k(d,"class","row-center flex-wrap m-b-2"),k(e,"class","col-center p-y-20")},m(f,_){T(f,e,_),g(e,l),A(t,l,null),g(e,n),g(e,a),g(a,s),g(e,i),g(e,u),A(p,u,null),g(e,y),g(e,c);for(let P=0;P<b.length;P+=1)b[P]&&b[P].m(c,null);g(e,v),g(e,d);for(let P=0;P<E.length;P+=1)E[P]&&E[P].m(d,null);$=!0},p(f,_){const P={};if(_&262145&&(P.$$scope={dirty:_,ctx:f}),t.$set(P),(!$||_&1)&&o!==(o=f[0].project.type+"")&&Q(s,o),_&1){j=G(f[0].project.links);let m;for(m=0;m<j.length;m+=1){const q=fe(f,j,m);b[m]?(b[m].p(q,_),D(b[m],1)):(b[m]=ue(q),b[m].c(),D(b[m],1),b[m].m(c,null))}for(X(),m=j.length;m<b.length;m+=1)F(m);W()}if(_&1){U=G(f[0].project.skills);let m;for(m=0;m<U.length;m+=1){const q=ce(f,U,m);E[m]?(E[m].p(q,_),D(E[m],1)):(E[m]=de(q),E[m].c(),D(E[m],1),E[m].m(d,null))}for(X(),m=U.length;m<E.length;m+=1)I(m);W()}},i(f){if(!$){D(t.$$.fragment,f),D(p.$$.fragment,f);for(let _=0;_<j.length;_+=1)D(b[_]);for(let _=0;_<U.length;_+=1)D(E[_]);$=!0}},o(f){V(t.$$.fragment,f),V(p.$$.fragment,f),b=b.filter(Boolean);for(let _=0;_<b.length;_+=1)V(b[_]);E=E.filter(Boolean);for(let _=0;_<E.length;_+=1)V(E[_]);$=!1},d(f){f&&h(e),L(t),L(p),te(b,f),te(E,f)}}}function Le(r){let e,l,t,n,a="No description",o;return l=new ee({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),z(l.$$.fragment),t=S(),n=w("p"),n.textContent=a,this.h()},l(s){e=C(s,"DIV",{class:!0});var i=x(e);B(l.$$.fragment,i),t=M(i),n=C(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(n)!=="svelte-1ugej71"&&(n.textContent=a),i.forEach(h),this.h()},h(){k(n,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){T(s,e,i),A(l,e,null),g(e,t),g(e,n),o=!0},p:R,i(s){o||(D(l.$$.fragment,s),o=!0)},o(s){V(l.$$.fragment,s),o=!1},d(s){s&&h(e),L(l)}}}function Oe(r){let e,l;return e=new je({props:{content:r[0].project.description}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,n){A(e,t,n),l=!0},p(t,n){const a={};n&1&&(a.content=t[0].project.description),e.$set(a)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ue(r){let e,l,t,n,a="No screenshots",o;return l=new ee({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),z(l.$$.fragment),t=S(),n=w("p"),n.textContent=a,this.h()},l(s){e=C(s,"DIV",{class:!0});var i=x(e);B(l.$$.fragment,i),t=M(i),n=C(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(n)!=="svelte-s36p3y"&&(n.textContent=a),i.forEach(h),this.h()},h(){k(n,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){T(s,e,i),A(l,e,null),g(e,t),g(e,n),o=!0},p:R,i(s){o||(D(l.$$.fragment,s),o=!0)},o(s){V(l.$$.fragment,s),o=!1},d(s){s&&h(e),L(l)}}}function qe(r){let e,l=G(r[4]),t=[];for(let n=0;n<l.length;n+=1)t[n]=pe(ie(r,l,n));return{c(){e=w("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=C(n,"DIV",{class:!0});var a=x(e);for(let o=0;o<t.length;o+=1)t[o].l(a);a.forEach(h),this.h()},h(){k(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(n,a){T(n,e,a);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(n,a){if(a&18){l=G(n[4]);let o;for(o=0;o<l.length;o+=1){const s=ie(n,l,o);t[o]?t[o].p(s,a):(t[o]=pe(s),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},i:R,o:R,d(n){n&&h(e),te(t,n)}}}function pe(r){let e,l,t,n,a=r[11].label+"",o,s,i,u;function p(){return r[9](r[13])}return{c(){e=w("div"),l=w("div"),t=S(),n=w("p"),o=H(a),s=S(),this.h()},l(y){e=C(y,"DIV",{class:!0});var c=x(e);l=C(c,"DIV",{class:!0,style:!0}),x(l).forEach(h),t=M(c),n=C(c,"P",{class:!0});var v=x(n);o=J(v,a),v.forEach(h),s=M(c),c.forEach(h),this.h()},h(){k(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),k(l,"style",`background-image: url(${r[11].src});`),k(n,"class","text-[var(--tertiary-text)] font-300"),k(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(y,c){T(y,e,c),g(e,l),g(e,t),g(e,n),g(n,o),g(e,s),i||(u=[N(e,"click",p),N(e,"keydown",r[5]),N(e,"keypress",r[6]),N(e,"keyup",r[7]),N(e,"keyup",r[8])],i=!0)},p(y,c){r=y},d(y){y&&h(e),i=!1,he(u)}}}function Ke(r){let e,l,t,n,a,o,s,i;e=new Ee({props:{title:r[2]}});const u=[Te,Me],p=[];function y(c,v){return c[0].project===void 0?0:1}return n=y(r),a=p[n]=u[n](r),s=new Se({props:{screenshot:r[3],onClose:r[10]}}),{c(){z(e.$$.fragment),l=S(),t=w("div"),a.c(),o=S(),z(s.$$.fragment),this.h()},l(c){B(e.$$.fragment,c),l=M(c),t=C(c,"DIV",{class:!0});var v=x(t);a.l(v),v.forEach(h),o=M(c),B(s.$$.fragment,c),this.h()},h(){k(t,"class","pb-10 overflow-x-hidden col flex-1")},m(c,v){A(e,c,v),T(c,l,v),T(c,t,v),p[n].m(t,null),T(c,o,v),A(s,c,v),i=!0},p(c,[v]){const d={};v&4&&(d.title=c[2]),e.$set(d);let $=n;n=y(c),n===$?p[n].p(c,v):(X(),V(p[$],1,1,()=>{p[$]=null}),W(),a=p[n],a?a.p(c,v):(a=p[n]=u[n](c),a.c()),D(a,1),a.m(t,null));const j={};v&8&&(j.screenshot=c[3]),v&2&&(j.onClose=c[10]),s.$set(j)},i(c){i||(D(e.$$.fragment,c),D(a),D(s.$$.fragment,c),i=!0)},o(c){V(e.$$.fragment,c),V(a),V(s.$$.fragment,c),i=!1},d(c){c&&(h(l),h(t),h(o)),L(e,c),p[n].d(),L(s,c)}}}function Re(r,e,l){var d;let t,n,{data:a}=e;const o=((d=a.project)==null?void 0:d.screenshots)??[];let s;function i($){O.call(this,r,$)}function u($){O.call(this,r,$)}function p($){O.call(this,r,$)}function y($){O.call(this,r,$)}const c=$=>l(1,s=$),v=()=>l(1,s=void 0);return r.$$set=$=>{"data"in $&&l(0,a=$.data)},r.$$.update=()=>{r.$$.dirty&2&&l(3,t=typeof s<"u"&&o[s]?o[s]:void 0),r.$$.dirty&1&&l(2,n=a.project?`${a.project.name} - ${re}`:re)},[a,s,n,t,o,i,u,p,y,c,v]}class nt extends me{constructor(e){super(),ge(this,e,Re,Ke,_e,{data:0})}}export{nt as component,lt as universal};
