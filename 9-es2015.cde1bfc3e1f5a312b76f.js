(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Mgl+":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var o=t("pMnS"),c=t("SVse"),b=t("mrSG"),r=t("CoC1"),a=t("8nyR"),i=t("e1JD");let s=(()=>{let l=class extends a.a{addTodo(l){l&&this.ctx.setState(n=>n.concat(l))}removeTodo(l){this.ctx.setState(n=>n.filter((n,t)=>t!==l))}};return Object(b.a)([Object(r.a)(),Object(b.c)(0,Object(r.g)("todo")),Object(b.b)("design:type",Function),Object(b.b)("design:paramtypes",[String]),Object(b.b)("design:returntype",void 0)],l.prototype,"addTodo",null),Object(b.a)([Object(r.a)(),Object(b.c)(0,Object(r.g)("idx")),Object(b.b)("design:type",Function),Object(b.b)("design:paramtypes",[Number]),Object(b.b)("design:returntype",void 0)],l.prototype,"removeTodo",null),l=Object(b.a)([Object(r.c)(),Object(r.d)(),Object(i.e)({name:"todo",defaults:[]})],l),l})();class d{constructor(l){this.todo=l}}var p=u.pb({encapsulation:2,styles:[],data:{}});function m(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,3,"li",[["class","todo"]],null,null,null,null,null)),(l()(),u.Gb(1,null,[" "," "])),(l()(),u.rb(2,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.todo.removeTodo(l.context.index)&&u),u}),null,null)),(l()(),u.Gb(-1,null,["\u{1f5d1}"]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function g(l){return u.Ib(2,[(l()(),u.rb(0,0,null,null,1,"a",[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),u.rb(1,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(l()(),u.rb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["TodoState"])),(l()(),u.Gb(-1,null,[" PS: TodoState will be persistence in localStorage "])),(l()(),u.rb(5,0,null,null,5,"div",[["class","add-todo"]],null,null,null,null,null)),(l()(),u.rb(6,0,[["text",1]],null,0,"input",[["placeholder","New Todo"]],null,null,null,null,null)),(l()(),u.rb(7,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.todo.addTodo(u.Bb(l,6).value)&&e),e}),null,null)),(l()(),u.Gb(-1,null,["Add"])),(l()(),u.rb(9,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.todo.reset()&&u),u}),null,null)),(l()(),u.Gb(-1,null,["Reset"])),(l()(),u.rb(11,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,2,null,m)),u.qb(13,278528,null,0,c.j,[u.N,u.K,u.r],{ngForOf:[0,"ngForOf"]},null),u.Db(131072,c.b,[u.i])],(function(l,n){var t=n.component;l(n,13,0,u.Hb(n,13,0,u.Bb(n,14).transform(t.todo.state$)))}),null)}function f(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,1,"todo",[],null,null,null,g,p)),u.qb(1,49152,null,0,d,[s],null,null)],null,null)}var j=u.nb("todo",d,f,{},{},[]),O=t("Mrqg"),v=t("iInd");t.d(n,"TodoModuleNgFactory",(function(){return y}));var y=u.ob(e,[],(function(l){return u.zb([u.Ab(512,u.k,u.Z,[[8,[o.a,j]],[3,u.k],u.w]),u.Ab(4608,c.m,c.l,[u.t,[2,c.s]]),u.Ab(4608,i.D,i.D,[[3,i.D],[2,i.c]]),u.Ab(4608,s,s,[]),u.Ab(1073742336,c.c,c.c,[]),u.Ab(512,i.y,i.y,[u.q,i.v,[3,i.y],i.n,i.z,i.B,[2,O.a]]),u.Ab(1024,i.s,(function(){return[[s]]}),[]),u.Ab(1073742336,i.p,i.p,[i.h,i.C,i.y,[2,i.s],i.o]),u.Ab(1073742336,v.m,v.m,[[2,v.r],[2,v.k]]),u.Ab(1073742336,e,e,[]),u.Ab(1024,v.i,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);