/*! For license information please see about.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkuhooks=self.webpackChunkuhooks||[]).push([[521],{265:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var n=o(480);const r={css:'todo h4,[is="todo"] h4{ border-top: 1px solid #aaa; padding-top: 1rem; } todo ul,[is="todo"] ul{ padding: 0; } todo li,[is="todo"] li{ list-style-type: none; padding: 0.2em 0; } todo li:hover,[is="todo"] li:hover{ background-color: #eee; } todo li .completed,[is="todo"] li .completed{ text-decoration: line-through; color: #ccc; }',exports:(0,o(719).M)(((e,t)=>{const[o,r]=(0,n.eJ)(e.nextId),[d,i]=(0,n.eJ)(e.todoList),[s,u]=(0,n.eJ)(e.todoList),[a,l]=(0,n.eJ)(""),p=e=>(e||d).some((e=>!0===e.done)),c=()=>{window.confirm("本当に全てのtodoを削除してもよろしいですか? ")&&(void 0).update({hasDoneTodo:!1,todoList:(void 0).state.todoList.filter((e=>!0!==e.done))})};return{input:a,onInput:e=>{l(e.target.value)},todoList:d,hasDoneTodo:s,deleteDoneTodos:c,addTodo:e=>{if(e.preventDefault(),e.target.todo.value){const t=[...d,{id:o+1,title:e.target.todo.value,done:!1}];u(p(t)),i(t),r(o+1),e.target.todo.value=""}},toggle:e=>{e.done=!e.done,u(p())},checkDoneTodo:p,deleteTodo:e=>{if(window.confirm("本当に削除してもよろしいですか? ")){const t=d.filter((t=>t.id!==e.id));u(p(t)),i(t)}},deleteDoneTodos:c}})),template:function(e,t,o,n){return e('<div id="container"><h1>ToDo App</h1><form expr9="expr9"><input expr10="expr10" name="todo" value placeholder="please input task"/><button expr11="expr11"> </button><button expr12="expr12" class="danger">\n          delete done\n        </button></form><hr/><h4>todo list</h4><ul><li expr13="expr13"></li></ul><p expr17="expr17"></p></div>',[{redundantAttribute:"expr9",selector:"[expr9]",expressions:[{type:t.EVENT,name:"onsubmit",evaluate:function(e){return e.addTodo}}]},{redundantAttribute:"expr10",selector:"[expr10]",expressions:[{type:t.EVENT,name:"oninput",evaluate:function(e){return e.onInput}}]},{redundantAttribute:"expr11",selector:"[expr11]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:function(e){return["Add #",e.todoList.length+1].join("")}},{type:t.ATTRIBUTE,name:"disabled",evaluate:function(e){return!e.input}}]},{redundantAttribute:"expr12",selector:"[expr12]",expressions:[{type:t.ATTRIBUTE,name:"disabled",evaluate:function(e){return!e.hasDoneTodo}},{type:t.EVENT,name:"onclick",evaluate:function(e){return e.deleteDoneTodos}}]},{type:o.EACH,getKey:function(e){return e.todo.id},condition:null,template:e('<label expr14="expr14"><input expr15="expr15" type="checkbox"/> </label><button expr16="expr16" class="danger">\n          delete\n        </button>',[{redundantAttribute:"expr14",selector:"[expr14]",expressions:[{type:t.TEXT,childNodeIndex:1,evaluate:function(e){return[e.todo.title].join("")}},{type:t.ATTRIBUTE,name:"class",evaluate:function(e){return e.todo.done?"completed":null}}]},{redundantAttribute:"expr15",selector:"[expr15]",expressions:[{type:t.ATTRIBUTE,name:"checked",evaluate:function(e){return e.todo.done}},{type:t.EVENT,name:"onclick",evaluate:function(e){return()=>e.toggle(e.todo)}}]},{redundantAttribute:"expr16",selector:"[expr16]",expressions:[{type:t.EVENT,name:"onclick",evaluate:function(e){return()=>e.deleteTodo(e.todo)}}]}]),redundantAttribute:"expr13",selector:"[expr13]",itemName:"todo",indexName:null,evaluate:function(e){return e.todoList}},{type:o.IF,evaluate:function(e){return 0===e.todoList.length},redundantAttribute:"expr17",selector:"[expr17]",template:e("No Todos",[])}])},name:"todo"};(()=>{{const t=o(74).default;e.hot.accept(),e.hot.data&&t(o(265).default)}})()},480:(e,t,o)=>{o.d(t,{Sk:()=>x,eJ:()=>v});const n="function"==typeof Promise?Promise:function(e){let t,o=[],n=0;return e((e=>{t=e,n=1,o.splice(0).forEach(r)})),{then:r};function r(e){return n?setTimeout(e,0,t):o.push(e),this}};let r=null,d=new Set;const i=e=>{const{$:t,r:o,h:n}=e;h(o)&&(u.get(n).delete(e),o()),h(e.r=t())&&u.get(n).add(e)},s=()=>{const e=d;d=new Set,e.forEach((({h:e,c:t,a:o,e:n})=>{n&&e.apply(t,o)}))},u=new WeakMap,a=[],l=[];function p(e,t){return e!==this[t]}const c=()=>r,h=e=>"function"==typeof e,x=e=>{const t={h:o,c:null,a:null,e:0,i:0,s:[]};return o;function o(){const o=r;r=t,t.e=t.i=0;try{return e.apply(t.c=this,t.a=arguments)}finally{r=o,a.length&&f.then(a.forEach.bind(a.splice(0),i)),l.length&&l.splice(0).forEach(i)}}},f=new n((e=>e())),T=e=>(t,o)=>{const n=c(),{i:r,s:d,h:i}=n,s=r===d.length;n.i++,s&&(u.has(i)||u.set(i,new Set),d[r]={$:t,_:o,r:null,h:i}),(s||!o||o.some(p,d[r]._))&&e.push(d[r]),d[r].$=t,d[r]._=o},m=(T(a),T(l),(e,t)=>h(t)?t(e):t),v=e=>((e,t,o)=>{const n=c(),{i:r,s:i}=n;r===i.length&&i.push({$:h(o)?o(t):m(void 0,t),set:t=>{i[r].$=e(i[r].$,t),(e=>{d.has(e)||(e.e=1,d.add(e),f.then(s))})(n)}});const{$:u,set:a}=i[n.i++];return[u,a]})(m,e)},719:(e,t,o)=>{o.d(t,{M:()=>r});var n=o(480);const r=e=>({onBeforeMount(){this.isUpdated=!1,n.Sk((()=>{Object.assign(this,e(this.props,this.state)),this.isUpdated&&this.update()}))(),this.isUpdated=!0}})}}]);
//# sourceMappingURL=about.bundle.js.map