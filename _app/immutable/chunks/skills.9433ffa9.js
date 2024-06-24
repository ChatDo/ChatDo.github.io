import{A as e}from"./UIcon.941bd778.js";const u=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function m(t,...a){const s=Object.assign({},t);return Object.keys(s).forEach(r=>{a.includes(r)&&delete s[r]}),s}const n=t=>t,d=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],o=t=>{const a=m(t,"category");return t.category&&(a.category=d.find(s=>s.slug===t.category)),a},c=[o({slug:"js",color:"yellow",description:"JavaScript",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"blue",description:"TypeScript",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"css",color:"blue",description:"CSS",logo:e.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"HTML",logo:e.HTML,name:"HTML",category:"markup-style"}),o({slug:"svelte",color:"orange",description:u,logo:e.Svelte,name:"Svelte",category:"library"}),o({slug:"vuejs",color:"green",description:"Vue Js",logo:e.VueJs,name:"Vue Js",category:"framework"}),o({slug:"flutter",color:"blue",description:"Flutter",logo:e.Flutter,name:"Flutter",category:"framework"}),o({slug:"dart",color:"blue",description:"Dart",logo:e.Dart,name:"Dart",category:"pro-lang"}),o({slug:"kotlin",color:"blue",description:"Kotlin",logo:e.Kotlin,name:"Kotlin",category:"pro-lang"}),o({slug:"java",color:"blue",description:"Java",logo:e.Java,name:"Java",category:"pro-lang"}),o({slug:"postgres",color:"blue",description:"PostgreSQL",logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),o({slug:"team-lead",color:"orange",description:"Team Leading",logo:e.Unknown,name:"Team Leading",category:"soft"}),o({slug:"communication",color:"orange",description:"Communication",logo:e.Unknown,name:"Communication",category:"soft"})],y="Skills",h=(...t)=>c.filter(a=>t.includes(a.slug)),f=t=>{const a=[],s=[];return c.forEach(r=>{if(t.trim()&&!r.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!r.category){console.log(r.category),s.push(r);return}let i=a.find(g=>{var l;return g.category.slug===((l=r.category)==null?void 0:l.slug)});i||(i={items:[],category:r.category},a.push(i)),i.items.push(r)}),s.length!==0&&a.push({category:{name:"Others",slug:"others"},items:s}),a};export{f as a,h as g,c as i,y as t};
