import{n as b,s as g}from"./scheduler.7a274a43.js";const t=[];function d(o,u=b){let i;const n=new Set;function r(e){if(g(o,e)&&(o=e,i)){const c=!t.length;for(const s of n)s[1](),t.push(s,o);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(o))}function _(e,c=b){const s=[e,c];return n.add(s),n.size===1&&(i=u(r,f)||b),e(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_13e7gam)==null?void 0:a.base)??"/slick-portfolio-svelte";var l;const m=((l=globalThis.__sveltekit_13e7gam)==null?void 0:l.assets)??p;export{m as a,p as b,d as w};
