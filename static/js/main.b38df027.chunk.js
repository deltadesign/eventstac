(this.webpackJsonpeventstac=this.webpackJsonpeventstac||[]).push([[0],{39:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),r=n.n(a),s=n(15),c=n.n(s),o=(n(39),n(8)),l=n(9),d=n(11),u=n(10),h=n(14),v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=new Date(Date.parse(String(this.props.date).slice(0,10))),n=e.getDate(),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],r=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"][e.getMonth()],s=e.getFullYear();return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:this.props.name}),Object(i.jsx)("td",{children:this.props.location}),Object(i.jsxs)("td",{children:["".concat(a," ").concat(n,"-").concat(r,"-").concat(s)," ",Object(i.jsx)("br",{})," ",this.props.time]}),Object(i.jsx)("td",{children:this.props.detail}),Object(i.jsxs)("td",{children:[" ",Object(i.jsx)(h.a,{style:{width:"3em"},variant:this.props.attending?"success":"secondary",onClick:function(){return t.props.toggleAttend()},children:this.props.attending?"Yes":"No"})]}),Object(i.jsxs)("td",{children:[Object(i.jsx)(h.a,{variant:"outline-danger",onClick:function(){return t.props.remove()},children:"X"}),Object(i.jsx)(h.a,{variant:"outline-info",className:"ml-2",onClick:function(){return t.props.editEvent()},children:"Edit"})]})]})}}]),n}(r.a.Component),j=n(6),p=n(13),b=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={disabled:!1},i}return Object(l.a)(n,[{key:"submitHandler",value:function(t){var e,n=this;t.preventDefault(),this.setState({disabled:!0}),e=this.props.event._id?this.props.ApiClient.updateEvent(this.props.event._id,t.target.name.value,t.target.location.value,t.target.date.value,t.target.time.value,t.target.detail.value):this.props.ApiClient.addEvent(t.target.name.value,t.target.location.value,t.target.date.value,t.target.time.value,t.target.detail.value),console.log(e),e.then((function(){n.setState({disabled:!1}),n.props.getEvents(),document.getElementById("addform").reset()}))}},{key:"clearForm",value:function(){this.props.getEvents(),document.getElementById("addform").reset()}},{key:"render",value:function(){var t,e,n,a,r,s,c=this;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(j.a,{id:"addform",className:"mt-2 mb-2",onSubmit:function(t){return c.submitHandler(t)},children:[Object(i.jsx)(j.a.Row,{children:Object(i.jsx)(p.a,{children:Object(i.jsx)(j.a.Group,{children:Object(i.jsx)(j.a.Control,{name:"name",type:"text",defaultValue:null===(t=this.props.event)||void 0===t?void 0:t.name,placeholder:"Event Name",disabled:this.state.disabled,required:!0})})})}),Object(i.jsx)(j.a.Row,{children:Object(i.jsx)(p.a,{children:Object(i.jsx)(j.a.Group,{children:Object(i.jsx)(j.a.Control,{name:"location",defaultValue:null===(e=this.props.event)||void 0===e?void 0:e.location,type:"text",placeholder:"Location",disabled:this.state.disabled,required:!0})})})}),Object(i.jsxs)(j.a.Row,{children:[Object(i.jsx)(p.a,{children:Object(i.jsx)(j.a.Group,{children:Object(i.jsx)(j.a.Control,{name:"date",defaultValue:null===(n=this.props.event)||void 0===n?void 0:n.date,type:"date",disabled:this.state.disabled,required:!0})})}),Object(i.jsx)(p.a,{children:Object(i.jsx)(j.a.Group,{controlId:"time",children:Object(i.jsx)(j.a.Control,{name:"time",defaultValue:null===(a=this.props.event)||void 0===a?void 0:a.time,type:"time",disabled:this.state.disabled})})})]}),Object(i.jsx)(j.a.Row,{children:Object(i.jsx)(p.a,{children:Object(i.jsx)(j.a.Group,{children:Object(i.jsx)(j.a.Control,{name:"detail",defaultValue:null===(r=this.props.event)||void 0===r?void 0:r.detail,type:"text",placeholder:"Summary",disabled:this.state.disabled,required:!0})})})}),Object(i.jsx)(h.a,{className:"mr-2",variant:"outline-success",type:"submit",disabled:this.state.disabled,children:(null===(s=this.props.event)||void 0===s?void 0:s.name)?"Update":"Submit"}),Object(i.jsx)(h.a,{style:{visibility:this.props.event._id?"visible":"hidden"},variant:"outline-danger",onClick:function(){return c.clearForm()},children:"Cancel"})]})})}}]),n}(r.a.Component),m=n(31),O=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={loading:!0,eventList:[],editEvent:""},i}return Object(l.a)(n,[{key:"getEvents",value:function(){var t=this;this.props.ApiClient.getEventList().then((function(e){return t.setState({loading:!1,eventList:e.data,editEvent:[]})}))}},{key:"removeEvent",value:function(t){var e=this;this.props.ApiClient.removeEvent(t).then((function(){return e.getEvents()}))}},{key:"editEvent",value:function(t,e,n,i,a,r){this.setState({editEvent:{_id:t,name:e,location:n,date:i,time:a,detail:r}})}},{key:"toggleAttend",value:function(t){var e=this;this.props.ApiClient.toggleAttend(t).then((function(){return e.getEvents()}))}},{key:"componentDidMount",value:function(){this.getEvents()}},{key:"createEventsList",value:function(){var t=this;return this.state.eventList.map((function(e,n){return Object(i.jsx)(v,{_id:e._id,name:e.name,location:e.location,date:e.date,time:e.time,detail:e.detail,attending:e.attending,remove:function(n){return t.removeEvent(e._id)},toggleAttend:function(n){return t.toggleAttend(e._id)},editEvent:function(n){return t.editEvent(e._id,e.name,e.location,String(e.date).slice(0,10),e.time,e.detail)}},n)}))}},{key:"render",value:function(){var t=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{ApiClient:this.props.ApiClient,getEvents:function(){return t.getEvents()},event:this.state.editEvent}),Object(i.jsxs)(m.a,{responsive:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Event"}),Object(i.jsx)("th",{children:"Location"}),Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Summary"}),Object(i.jsx)("th",{children:"Attending"}),Object(i.jsx)("th",{children:"Actions"})]})}),Object(i.jsx)("tbody",{children:this.createEventsList()})]})]})}}]),n}(r.a.Component),g=n(32),f=n.n(g),x="https://cors-anywhere.herokuapp.com/https://eventstac.herokuapp.com/",y=function(){function t(){Object(o.a)(this,t)}return Object(l.a)(t,[{key:"status",value:function(t){return t.status>=200&&t.status<300?Promise.resolve(t):Promise.reject(new Error(t.text))}},{key:"request",value:function(t,e,n){return f()({method:t,url:e,data:n}).then(this.status).catch((function(t){console.log(t),alert(t)}))}},{key:"getEventList",value:function(){return this.request("get","".concat(x,"events"))}},{key:"removeEvent",value:function(t){return this.request("delete","".concat(x,"event/").concat(t))}},{key:"addEvent",value:function(t,e,n,i,a){return this.request("post","".concat(x,"event/create"),{name:t,location:e,date:n,time:i,detail:a})}},{key:"toggleAttend",value:function(t){return this.request("put","".concat(x,"attend/").concat(t))}},{key:"updateEvent",value:function(t,e,n,i,a,r){return this.request("put","".concat(x,"/event/").concat(t),{name:e,location:n,date:i,time:a,detail:r})}}]),t}(),E=(n(60),n(33)),k=n(21),C=(n(61),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).ApiClient=new y,i}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(E.a,{className:"App",children:[Object(i.jsx)(k.a,{variant:"dark",expand:"sm",className:" mt-2 navbar",children:Object(i.jsx)(k.a.Brand,{children:"EventStagram"})}),Object(i.jsx)(O,{ApiClient:this.ApiClient})]})})}}]),n}(r.a.Component)),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),r(t),s(t)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),A()}},[[62,1,2]]]);
//# sourceMappingURL=main.b38df027.chunk.js.map