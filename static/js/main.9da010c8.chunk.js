(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),l=n(2),i=n(3),s=n(6),m=n(5),u=n(19),p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},e.clockStep=setInterval((function(){var t=(new Date).toLocaleTimeString();console.log(t),e.setState({time:t})}),1e3),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){return this.clockStep}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockStep)}},{key:"render",value:function(){var e=this.props.name,t=this.state.time;return c.a.createElement("div",null,c.a.createElement("h1",{className:"m-3"},"React clock: ".concat(e)),c.a.createElement("span",{className:"m-3 p-2 bg-success rounded"},"Current time: ".concat(t)))}}]),n}(a.Component);p.defaultProps={name:"No name"};n(15),n(16);var k=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,name:1},e.toggleClockVisibility=function(){e.setState((function(e){return{isClockVisible:!e.isClockVisible}}))},e.generateNewName=function(){var t=Math.floor(1e3*Math.random())+1;console.log("The Clock was renamed from ".concat(e.state.name," to ").concat(t)),e.setState({name:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.isClockVisible,t=this.state.name;return c.a.createElement("div",{className:"App p-5 bg-primary container text-center text-light rounded"},e?c.a.createElement(p,{name:t,isVisible:e}):c.a.createElement("div",{className:"mb-5 p-3 bg-danger text-light rounded"},"Oooooops, it seems like you have just broke our Clock down"),c.a.createElement("div",null,c.a.createElement(u.a,{className:"btn-info m-3",onClick:this.toggleClockVisibility},e?"Kill Clock":"Invoke Clock"),c.a.createElement(u.a,{className:"btn-secondary m-3",onClick:this.generateNewName},"Set new name")))}}]),n}(a.Component);r.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9da010c8.chunk.js.map