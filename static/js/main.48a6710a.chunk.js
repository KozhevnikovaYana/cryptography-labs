(this["webpackJsonpcryptography-labs"]=this["webpackJsonpcryptography-labs"]||[]).push([[0],{45:function(e,a,t){e.exports=t(64)},50:function(e,a,t){},51:function(e,a,t){},58:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=(t(50),t(19)),u=t(20),i=t(26),m=t(24),s=t(13),b=t(5),p=t(17),E=t(44),g=(t(51),function(){return r.a.createElement(p.a,{className:"navbar",responisve:"true",variant:"dark",expand:"lg"},r.a.createElement(s.c,{to:"/"},r.a.createElement(p.a.Brand,null,r.a.createElement("span",{className:"navbar-title"},"\u041a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"))),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,null,r.a.createElement(s.c,{to:"/diffiHellman",className:"nav-link "},"\u0414\u0438\u0444\u0444\u0438-\u0425\u0435\u043b\u043b\u043c\u0430\u043d"))))}),f=t(23),d=t(15),v=(t(58),t(22)),h=function(){return r.a.createElement(v.a,{className:"contactInfo",fluid:!0},r.a.createElement(f.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement("h6",null,"\u041a\u043e\u0436\u0435\u0432\u043d\u0438\u043a\u043e\u0432\u0430 \u042f\u043d\u0430, \u0433\u0440\u0443\u043f\u043f\u0430 17203. 7 \u0441\u0435\u043c\u0435\u0441\u0442\u0440, 2020"))))},y=t(43),S=t(68),x=t(67),O=t(59);function C(e,a){var t=BigInt(e),n=BigInt(a),r=O.randBetween((t/2n).toString(),(t-1n).toString()),l=X(n,r,t),c=O.randBetween((t/2n).toString(),(t-1n).toString()),o=X(n,c,t),u=X(o,r,t),i=X(l,c,t);return console.table({p:t,g:n,Xa:r,Ya:l,Xb:c,Yb:o,Zab:u,Zba:i}),{p:t,g:n,Xa:r,Ya:l,Xb:c,Yb:o,Zab:u,Zba:i}}function X(e,a,t){for(var n=BigInt(e),r=BigInt(a),l=BigInt(t),c=1n,o=function e(a){var t=1n;if(0n===a)return0n;else if(1n===a)return"1";for(;t<=a;)t*=2n;return a-=t/=2n,t.toString()+" "+e(a)}(r).split(" "),u=n*n%l,i=2n,m=o.length;m>0;m--)if(""!==o[m-1]&&"1"!==o[m-1]&&"0"!==o[m-1]){for(;i.toString()!==o[m-1];)u=u*u%l,i*=2n;c=c*u%l}else c=c*Y(n,BigInt(o[m-1]),l)%l;return c}var Y=function(e,a,t){return Math.pow(e,a)%t};var Z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={p:"",g:"",Xa:"",Ya:"",Xb:"",Yb:"",Zab:"",Zba:""},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.p,r=t.g;e.runDiffHellman(n,r)},e.handleChange=function(a){e.setState(Object(y.a)({},a.target.name,a.target.value))},e.runDiffHellman=function(a,t){var n=C(parseInt(a),parseInt(t));e.setState({p:n.p.toString(10),g:n.g.toString(10),Xa:n.Xa.toString(10),Xb:n.Xb.toString(10),Ya:n.Ya.toString(10),Yb:n.Yb.toString(10),Zab:n.Zab.toString(10),Zba:n.Zba.toString(10)})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"row center-block mt-5"},r.a.createElement("div",{class:"col-6 offset-3 shadow-lg p-3 2 bg-white rounded text-xs-center"},r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,{class:!0},"P"),r.a.createElement(S.a.Control,{required:!0,type:"text",value:this.state.p,onChange:function(a){return e.setState({p:a.target.value})}})),r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,null,"G"),r.a.createElement(S.a.Control,{required:!0,type:"text",value:this.state.g,onChange:function(a){return e.setState({g:a.target.value})}}))),r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,null,"Xa"),r.a.createElement(S.a.Control,{readOnly:!0,type:"text",value:this.state.Xa})),r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,null,"Ya"),r.a.createElement(S.a.Control,{readOnly:!0,type:"text",value:this.state.Ya}))),r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,null,"Xb"),r.a.createElement(S.a.Control,{readOnly:!0,type:"text",value:this.state.Xb})),r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,null,"Yb"),r.a.createElement(S.a.Control,{readOnly:!0,type:"text",value:this.state.Yb}))),r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,null,"Zab"),r.a.createElement(S.a.Control,{readOnly:!0,type:"text",value:this.state.Zab})),r.a.createElement(S.a.Group,{as:d.a,md:"6"},r.a.createElement(S.a.Label,null,"Zba"),r.a.createElement(S.a.Control,{readOnly:!0,type:"text",value:this.state.Zba}))),r.a.createElement(x.a,{type:"submit",className:"align-content-center"},"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c"))))}}]),t}(r.a.Component);t(61),t(62),t(63);var w=function(){return r.a.createElement(v.a,{id:"index"},r.a.createElement(f.a,null))},B=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(s.b,null,r.a.createElement(g,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:w}),r.a.createElement(b.a,{exact:!0,path:"/diffiHellman",component:Z})),r.a.createElement(h,null))}}]),t}(n.Component);c.a.render(r.a.createElement(s.a,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.48a6710a.chunk.js.map