(this.webpackJsonpeventstac=this.webpackJsonpeventstac||[]).push([[0],{30:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(1),s=n.n(c),r=n(20),a=n.n(r),o=(n(30),n(4)),u=n(5),h=n(10),j=n(9),d=n(21),l=n.n(d),b=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,[{key:"status",value:function(t){return t.status>=200&&t.status<300?Promise.resolve(t):Promise.reject(new Error(t.text))}},{key:"getEventList",value:function(){return this.getRequest("https://cors-anywhere.herokuapp.com/https://eventstac.herokuapp.com/events")}},{key:"getRequest",value:function(t){return l.a.get(t).then(this.status).catch((function(t){console.log(t),alert(t)}))}}]),t}(),p=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:this.props.name}),Object(i.jsx)("td",{children:this.props.location}),Object(i.jsx)("td",{children:this.props.date}),Object(i.jsx)("td",{children:this.props.detail}),Object(i.jsx)("td",{children:this.props.attending})]})}}]),n}(s.a.Component),O=n(22),v=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"createEventsList",value:function(){return this.props.eventList.map((function(t,e){return Object(i.jsx)(p,{id:t._id,name:t.name,location:t.location,date:t.date,detail:t.detail,attending:t.attending},e)}))}},{key:"render",value:function(){return Object(i.jsxs)(O.a,{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Event"}),Object(i.jsx)("th",{children:"Location"}),Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Summary"}),Object(i.jsx)("th",{children:"Attending"})]})}),this.createEventsList()]})}}]),n}(s.a.Component),f=(n(48),n(23)),g=n(24),x=(n(49),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={loading:!0,eventList:[]},i.ApiClient=new b,i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getEvents()}},{key:"getEvents",value:function(){var t=this;this.ApiClient.getEventList().then((function(e){t.setState({loading:!1,eventList:e.data})}))}},{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("pre",{children:JSON.stringify(this.state)}),Object(i.jsx)(f.a,{className:"App",children:this.state.loading?Object(i.jsx)(g.a,{animation:"border"}):Object(i.jsx)(v,{eventList:this.state.eventList})})]})}}]),n}(s.a.Component)),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),s(t),r(t)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),m()}},[[50,1,2]]]);
//# sourceMappingURL=main.542462d2.chunk.js.map