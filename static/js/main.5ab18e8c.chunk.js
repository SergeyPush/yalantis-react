(this["webpackJsonpyalantis-react-test"]=this["webpackJsonpyalantis-react-test"]||[]).push([[0],{38:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),r=c.n(s),a=c(7),i=c.n(a),l=c(4),o=c(5),d=c(23),u=c(24),j=c(8),b=c(2),O="FETCH_USERS",h="SELECT_USER",p="RESTORE_SELECTED",f={fetchedUsers:[],selectedUsers:[]},m=Object(o.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case O:return Object(b.a)(Object(b.a)({},e),{},{fetchedUsers:n});case h:var s=e.selectedUsers.find((function(e){return e.id===n.id}));if(!s)return Object(b.a)(Object(b.a)({},e),{},{selectedUsers:[].concat(Object(j.a)(e.selectedUsers),[n])});var r=e.selectedUsers.filter((function(e){return e.id!==n.id}));return Object(b.a)(Object(b.a)({},e),{},{selectedUsers:r});case p:return Object(b.a)(Object(b.a)({},e),{},{selectedUsers:n});default:return e}}}),y=[u.a],v=Object(o.createStore)(m,Object(d.composeWithDevTools)(o.applyMiddleware.apply(void 0,y))),x=(c(38),c(6)),g=function(e){var t=e.employee,c=e.months,s=t.firstName,r=t.lastName,a=t.dob,i=new Date(a),l=i.getFullYear(),o=i.getMonth(),d=i.getDate();return Object(n.jsx)("div",{children:Object(n.jsx)("p",{"data-testid":"employee",children:"".concat(r," ").concat(s," - ").concat(d," ").concat(c[o]," ").concat(l," year")})})},N=function(){var e=Object(l.c)((function(e){return e.users.selectedUsers})),t=["January","February","March","April","May","June","July","August","September","October","November","December"],c=e.reduce((function(e,t){var c=new Date(t.dob).getMonth();return void 0===e[c]?Object(b.a)(Object(b.a)({},e),{},Object(x.a)({},c,[t])):Object(b.a)(Object(b.a)({},e),{},Object(x.a)({},c,[t].concat(Object(j.a)(e[c]))))}),{}),s=Object.keys(c);return Object(n.jsxs)("div",{className:"calendar",children:[Object(n.jsx)("h1",{className:"calendar-title",children:"Employees Birthday"}),Object(n.jsx)(n.Fragment,{children:e.length>0?s.map((function(e){return Object(n.jsxs)("div",{className:"emp-list",children:[Object(n.jsx)("h3",{className:"calendar-month-title",children:t[e]}),c[e].map((function(e){return Object(n.jsx)(g,{employee:e,months:t},e.id)}))]},e)})):Object(n.jsx)("p",{children:"No selected employees"})})]})},U=c(13),E=c.n(U),S=c(25),w=c(26),C=c.n(w),k=function(e){var t=e.mat\u0441hedUsers,c=Object(l.b)(),s=Object(l.c)((function(e){return e.users.selectedUsers})),r=function(e){var t=s.find((function(t){return t.id===e.id}));return!!t&&!!t};return Object(n.jsx)("div",{children:t.map((function(e){return Object(n.jsxs)("div",{className:"user-item",children:[Object(n.jsx)("p",{className:"user-data",children:"".concat(e.lastName," ").concat(e.firstName)}),Object(n.jsx)("input",{type:"checkbox",checked:r(e),onChange:function(){return function(e){c({type:"SELECT_USER",payload:e})}(e)},"data-testid":"checkbox"})]},e.id)}))})},F=function(){var e="abcdefghijklmnopqrstuvwxyz".split(""),t=Object(l.b)(),c=Object(l.c)((function(e){return e.users.fetchedUsers})),r=Object(l.c)((function(e){return e.users.selectedUsers}));return Object(s.useEffect)((function(){t(function(){var e=Object(S.a)(E.a.mark((function e(t){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 2:c=e.sent,t({type:O,payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t((function(e){try{var t=localStorage.getItem("selectedUsers");t&&e({type:p,payload:JSON.parse(t)})}catch(c){console.log(c)}}))}),[t]),Object(s.useEffect)((function(){localStorage.setItem("selectedUsers",JSON.stringify(r))}),[r]),Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("h1",{children:"Employees"}),Object(n.jsx)("div",{className:"letter-list",children:e.map((function(e){var t=c.filter((function(t){return t.lastName[0].toLowerCase()===e}));return Object(n.jsxs)("div",{className:"letter-item",children:[Object(n.jsx)("p",{className:"capital-letter",children:e.toUpperCase()}),t.length>0?Object(n.jsx)(k,{"mat\u0441hedUsers":t}):Object(n.jsx)("p",{children:Object(n.jsx)("span",{className:"line"})})]},e)}))})]})},T=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(F,{}),Object(n.jsx)(N,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(l.a,{store:v,children:Object(n.jsx)(T,{})})}),document.getElementById("root")),D()}},[[57,1,2]]]);
//# sourceMappingURL=main.5ab18e8c.chunk.js.map