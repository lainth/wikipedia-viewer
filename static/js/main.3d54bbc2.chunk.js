(this["webpackJsonpwikipedia-viewer"]=this["webpackJsonpwikipedia-viewer"]||[]).push([[0],{35:function(e,n,t){e.exports=t(59)},40:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(26),i=t.n(o),c=(t(40),t(5)),l=t(6),u=t(11),s=t(10),m=t(3),h=t(4),p=t(32),d=t(31),f=t(33);function b(){var e=Object(m.a)(["\n  color: white;\n  font-size: 1em;\n  text-align: center;\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    color: white;\n    text-decoration: none;\n  }\n  \n"]);return b=function(){return e},e}var v=h.a.div(b()),g=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{as:"a",href:"https://en.wikipedia.org/wiki/Special:Random",target:"_blank"},"Click here for a random article")}}]),t}(r.a.Component),j=t(34),O=t(12),w=t(30),k=t.n(w);function E(){var e=Object(m.a)(["\n    margin: auto;\n    border: 4px solid orange;\n    background-color: transparent;\n    border-radius: 25px;\n    color: white;\n    padding: 3px 1em;\n\n    &:focus {\n        outline: 5px white;\n    } \n"]);return E=function(){return e},e}function x(){var e=Object(m.a)(["\n    color: white;\n    text-align: center;\n    margin-top: 1em;\n"]);return x=function(){return e},e}function y(){var e=Object(m.a)(["\n    color: white;\n    text-align: left;\n    background-color: grey;\n    border: 1px solid white;\n    margin-bottom: 1em;\n"]);return y=function(){return e},e}function C(){var e=Object(m.a)(["\n    text-decoration: none !important;\n"]);return C=function(){return e},e}function S(){var e=Object(m.a)(["\n    text-align: center;\n    margin-top: 1em;\n"]);return S=function(){return e},e}var V=h.a.div(S()),_=h.a.a(C()),B=h.a.div(y()),J=h.a.p(x()),W=h.a.input.attrs({type:"text"})(E()),z=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=e.target.value;a.setState({inputVal:n})},a.handleSubmit=function(e){var n="https://en.wikipedia.org/api/rest_v1/page/summary/"+a.state.inputVal;k.a.get(n).then((function(e){var n=e.data;a.setState({articles:[].concat(Object(j.a)(a.state.articles),[n])},(function(){console.log(a.state.articles)}))})),e.preventDefault()},a.state={inputVal:"",articles:[]},a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.articles;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(W,{onChange:this.handleChange,value:this.state.inputVal})),r.a.createElement(J,null,"Type something to search")),e.map((function(e){return r.a.createElement(_,{href:e.content_urls.desktop.page,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(B,null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.extract)))})))}}]),t}(r.a.Component);function D(){var e=Object(m.a)(["\n  height: 100vh !important;\n  align-items: center !important; \n  justify-content: center !important;\n"]);return D=function(){return e},e}var F=Object(h.a)(d.a)(D()),I=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(F,null,r.a.createElement(f.a,null,r.a.createElement(g,null),r.a.createElement(z,null))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(58);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.3d54bbc2.chunk.js.map