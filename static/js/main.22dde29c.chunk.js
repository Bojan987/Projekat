(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/loginImage.68ecbd3f.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/HeroHunt.66ff4160.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/jugger.5c7f3563.png"},56:function(e,a,t){e.exports=t.p+"static/media/morph.d11b50a8.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/phoenix.23dddef4.png"},59:function(e,a,t){e.exports=t(94)},64:function(e,a,t){},65:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),l=t.n(c),s=(t(64),t(6)),o=t(11),m=t(7),u=(t(65),t(12)),i=t(16),d=t(8),g=t(20),p=t(21),E=t.n(p),f={headers:{"Content-Type":"application/json","x-apikey":"5f63daa75313511c55fc97b7"}},b=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){E.a.get("https://gamestorage-9cd1.restdb.io/rest/scores",f).then((function(e){c(e.data.sort((function(e,a){return e.juggHuntScore-a.juggHuntScore})).slice(0,10))}))}),[]),r.a.createElement("div",null,r.a.createElement("ol",null,t.map((function(e){return r.a.createElement("li",{key:e._id}," ",r.a.createElement("span",null,e.username)," - ",r.a.createElement("span",null,e.juggHuntScore," seconds")," ")}))))},N=t(53),v=t.n(N),h=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){E.a.get("https://gamestorage-9cd1.restdb.io/rest/herohuntscore",f).then((function(e){c(e.data.sort((function(e,a){return e.heroHuntScore-a.heroHuntScore})).slice(0,10))}))}),[]),r.a.createElement("div",null,r.a.createElement("ol",{className:"linkovi"},t.map((function(e){return r.a.createElement("li",{key:e._id}," ",r.a.createElement("span",null,e.username)," - ",r.a.createElement("span",null,e.heroHuntScore," seconds")," ")}))))},O=t(24),j=function(e){var a=e.loggedPlayer;return r.a.createElement(O.a,{bg:"dark",variant:"dark",className:"navigation ",sticky:"top"},r.a.createElement(u.a,null,r.a.createElement(O.a.Brand,null,r.a.createElement(o.b,{className:"linkovi",to:"/user"},"Home")),r.a.createElement(O.a.Toggle,null),r.a.createElement(O.a.Collapse,{className:"justify-content-end"},r.a.createElement(O.a.Text,null,r.a.createElement(o.b,{to:"/",className:"LogOut",onClick:function(){return localStorage.clear()}},"Log out")),r.a.createElement(O.a.Text,null,"Signed in as:","  ",r.a.createElement(o.b,{to:"/user/".concat(a.username),className:"PRofile"},"".concat(a.username))))))},S=function(){var e=JSON.parse(localStorage.getItem("LoggedUser"));return r.a.createElement("div",null,r.a.createElement(j,{loggedPlayer:e}),r.a.createElement("section",{id:"JuggerHunt",bg:"light",variant:"light",className:"text-muted py-5"},r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement(d.a,{md:6},r.a.createElement(o.b,{to:"/JuggernautHunt"},r.a.createElement(g.a,{src:"https://gamestorage-9cd1.restdb.io/media/5f6939f4db00907500005fe2",roundedCircle:!0,className:" img-fluid  mb-3 "}))),r.a.createElement(d.a,{md:6},r.a.createElement("h3",null,"Score board - TOP 10"),r.a.createElement(b,null))))),r.a.createElement("section",{id:"HeroHunt",className:"py-5"},r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement(d.a,{md:{order:2}},r.a.createElement(o.b,{to:"/HeroHunt"},r.a.createElement(g.a,{src:v.a,roundedCircle:!0,className:" img-fluid  mb-3 "}))),r.a.createElement(d.a,{md:{order:1}},r.a.createElement("h3",{className:"linkovi"},"Score board - TOP 10"),r.a.createElement(h,null))))))},y=t(18),w=t(23),x=t(30),k=t.n(x),H=function(){var e=Object(m.h)().username,a=Object(m.g)(),t=JSON.parse(localStorage.getItem("LoggedUser"));return r.a.createElement(r.a.Fragment,null,t.username===e?r.a.createElement("div",null,r.a.createElement(j,{loggedPlayer:JSON.parse(localStorage.getItem("LoggedUser"))}),r.a.createElement("div",{className:"profile-wrapp"},r.a.createElement(d.a,{lg:6},r.a.createElement(y.a,{className:"wanted-card"},r.a.createElement(y.a.Body,{className:"wanted-card-content"},r.a.createElement(g.a,{fluid:!0,className:" w-50 mb-3 wanted",src:k.a,roundedCircle:!0}),r.a.createElement("h3",null,t.username),r.a.createElement("h5",{className:"text-muted"},"Personal infos"),r.a.createElement("p",null,"Your password is : ",t.password),r.a.createElement(w.a,{variant:"primary",block:!0,onClick:function(){return a.push("/user")}},"Back")))))):r.a.createElement("p",null,"\u041a\u043e\u0440\u0438\u0441\u043d\u0438\u043a \u0441\u0430 ID: ",e," \u043d\u0435 \u043f\u043e\u0441\u0442\u043e\u0458\u0438"))},I=t(58),C=t(17),J=t(31),L=t.n(J),U=t(55),R=t.n(U),T=function(e){var a=e.toggleJuggKill,t=e.isDead,n=(e.resize,function(){a()});return r.a.createElement(L.a,{isFlipped:t,flipDirection:"vertical",style:{width:"100px",height:"100px",margin:"0.1rem"}},r.a.createElement(J.FrontSide,{style:{backgroundColor:"#51c8ec",borderRadius:"10px"},onClick:n}),r.a.createElement(J.BackSide,{style:{backgroundColor:"#076986",borderRadius:"10px"},onClick:n},r.a.createElement(g.a,{src:R.a,rounded:!0,className:"flipImage"})))},P=(t(90),function(e){var a=e.toggleJuggKill,t=e.isDead;return r.a.createElement("td",null,r.a.createElement(T,{toggleJuggKill:a,isDead:t}))}),z=t(56),B=t.n(z),D=function(e){var a=e.nrows,t=e.ncols,c=e.chanceJuggOnStart,l=Object(n.useState)(function(){for(var e=[],n=0;n<a;n++){for(var r=[],l=0;l<t;l++)r.push(Math.random()<c);e.push(r)}return e}()),o=Object(s.a)(l,2),m=o[0],g=o[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),N=b[0],v=b[1],h=Object(n.useState)(0),O=Object(s.a)(h,2),S=O[0],y=O[1],w=Object(n.useState)({juggHuntScore:0,username:""}),x=Object(s.a)(w,2),k=x[0],H=x[1],J=Object(n.useState)(),L=Object(s.a)(J,2),U=L[0],R=L[1];Object(n.useEffect)((function(){return R(setInterval((function(){y((function(e){return e+1})),console.log("izvrsilo se ")}),1e3)),function(){return clearInterval(U)}}),[]),Object(n.useEffect)((function(){N&&(H((function(e){return Object(C.a)(Object(C.a)({},e),{},{juggHuntScore:S,username:JSON.parse(localStorage.getItem("LoggedUser")).username})})),clearInterval(U))}),[N]),Object(n.useEffect)((function(){0!==k.juggHuntScore&&function(e){var a=JSON.stringify(e);E.a.post("https://gamestorage-9cd1.restdb.io/rest/scores",a,f)}(k)}),[k]);var T=function(e){var n=Object(I.a)(m),r=e.split("-").map((function(e){return parseInt(e)})),c=Object(s.a)(r,2),l=c[0],o=c[1];function u(e,r){e>=0&&e<t&&r>=0&&r<a&&(n[r][e]=!n[r][e])}u(o,l),u(o,l-1),u(o,l+1),u(o-1,l),u(o+1,l);var i=n.every((function(e){return e.every((function(e){return!e}))}));v(i),g(n)};return r.a.createElement("div",null,r.a.createElement(j,{loggedPlayer:JSON.parse(localStorage.getItem("LoggedUser"))}),r.a.createElement(u.a,{fluid:!0,style:{backgroundImage:"url(".concat(B.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",paddingTop:"15px"}},N?r.a.createElement(u.a,{className:"d-flex justify-content-center win-section"},r.a.createElement("span",{className:"winner neon-blue"},"YOU"),r.a.createElement("span",{className:"winner neon-blue"},"WIN!")):r.a.createElement(u.a,{className:"juggernaut-section"},r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"Board-title ",lg:10},r.a.createElement("div",{className:"neon-orange"},"Hunt the Juggernaut"),r.a.createElement("div",{className:"neon-blue"},S))),r.a.createElement(i.a,{className:"tableRow  d-flex "},r.a.createElement(d.a,{lg:5},r.a.createElement("div",{className:"jugg-description align-self-center"})),r.a.createElement(d.a,{lg:5},function(){for(var e=[],n=0;n<a;n++){for(var c=[],l=function(e){var a="".concat(n,"-").concat(e);c.push(r.a.createElement(P,{key:a,isDead:m[n][e],toggleJuggKill:function(){return T(a)}}))},s=0;s<t;s++)l(s);e.push(r.a.createElement("tr",{key:n},c))}return r.a.createElement("table",{className:"Table"},r.a.createElement("tbody",null,e))}())))))},F=t(25),G=t(10),W=(t(51),t(32)),A=t(33),K=function(){var e=Object(m.g)(),a=Object(n.useState)(null),t=Object(s.a)(a,2),c=t[0],l=t[1],g=Object(n.useState)(!1),p=Object(s.a)(g,2),b=p[0],N=p[1],v=Object(n.useState)({username:"",password:"",score:0}),h=Object(s.a)(v,2),O=h[0],j=h[1],S=function(e){var a=e.target,t=a.name,n=a.value;j((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(F.a)({},t,n.toLowerCase()))}))};Object(n.useEffect)((function(){b&&new Promise((function(e){return setTimeout(e,2500)})).then((function(){N(!1)}))}),[b]);var x=c?"placeholderRed":"";return r.a.createElement("header",{id:"home-section",style:{backgroundImage:"url(".concat(k.a,")")}},r.a.createElement("div",{className:"dark-overlay"},r.a.createElement(u.a,{className:"home-inner"},r.a.createElement(i.a,{className:"LoginRow"},r.a.createElement(d.a,{lg:7,className:"d-none d-lg-block"},r.a.createElement("h1",{className:"display-3 loginText"},"Lorem ipsum dolor sit.",r.a.createElement("strong",null,"Lorem, ipsum.")),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"p-4 align-self-start"},r.a.createElement(W.a,{icon:A.a,className:"fas",size:"3x"})),r.a.createElement("div",{className:"p-4 align-self-end  loginText"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, non expedita praesentium possimus repudiandae totam!")),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"p-4 align-self-start loginText"},r.a.createElement(W.a,{icon:A.a,className:"fas",size:"3x"})),r.a.createElement("div",{className:"p-4 align-self-end loginText"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, non expedita praesentium possimus repudiandae totam!")),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"p-4 align-self-start"},r.a.createElement(W.a,{icon:A.a,className:"fas ",size:"3x"})),r.a.createElement("div",{className:"p-4 align-self-end loginText"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, non expedita praesentium possimus repudiandae totam!"))),r.a.createElement(d.a,{lg:5,className:" align-self-center"},r.a.createElement(y.a,{bg:"primary",text:"center",className:"card-form"},r.a.createElement(y.a.Body,null,r.a.createElement("h3",null,r.a.createElement("strong",null,"Login")),r.a.createElement(G.a,{onSubmit:function(a){a.preventDefault(),b||(N(!0),E.a.get("https://gamestorage-9cd1.restdb.io/rest/testcollection",f).then((function(a){var t=a.data.filter((function(e){return e.username===O.username&&e.password===O.password}));0!==t.length?(localStorage.setItem("LoggedUser",JSON.stringify(t[0])),setTimeout((function(){e.push("/user")}),2e3)):(l("Wrong Username or Password"),j({username:"",password:""}))})).catch((function(e){console.log("AXIOS ERROR: ",e),j({username:"",password:""})})))}},r.a.createElement(G.a.Group,{className:"p-2 "},r.a.createElement(G.a.Control,{type:"text",size:"lg",placeholder:c||"Enter Username",className:x,onChange:S,value:O.username,name:"username"})),r.a.createElement(G.a.Group,{className:"p-2"},r.a.createElement(G.a.Control,{name:"password",size:"lg",type:"password",placeholder:"Password",onChange:S,value:O.password})),r.a.createElement(G.a.Group,{className:"p-2"},r.a.createElement(w.a,{variant:"outline-light",block:!0,type:"submit",disabled:b},b?"Loading\u2026":"Submit")),r.a.createElement(o.b,{className:"linkovi",to:"/register"},r.a.createElement(G.a.Text,{className:"p-2 "},"Not Registered? Click Here"))))))))))},M=t(57),Y=t.n(M),_=function(e){var a=e.newUser,t=e.setNewUser,c=Object(m.g)(),l=Object(n.useState)(null),u=Object(s.a)(l,2),i=u[0],g=u[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),N=b[0],v=b[1],h=function(e){var a=e.target,n=a.name,r=a.value;t((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(F.a)({},n,r.toLowerCase()))}))};Object(n.useEffect)((function(){N&&new Promise((function(e){return setTimeout(e,2500)})).then((function(){v(!1)}))}),[N]);var O=i?"placeholderRed":"";return r.a.createElement("div",{className:"register-section d-flex",style:{backgroundImage:"url(".concat(Y.a,")")}},r.a.createElement("div",{className:"dark-overlay d-flex justify-content-center"},r.a.createElement(d.a,{lg:4,className:" align-self-center"},r.a.createElement(y.a,{bg:"primary",text:"center",className:"card-form"},r.a.createElement(y.a.Body,null,r.a.createElement("h3",null,r.a.createElement("strong",null,"Register")),r.a.createElement(G.a,{onSubmit:function(e){e.preventDefault(),N||v(!0),""!==a.username&&""!==a.password&&function(e){var a=JSON.stringify(e);return E.a.post("https://gamestorage-9cd1.restdb.io/rest/testcollection",a,f)}(a).then((function(e){i&&g(null),localStorage.setItem("LoggedUser",JSON.stringify(a)),t({username:"",password:""}),c.push("/user")})).catch((function(e){console.log("AXIOS ERROR: ",e),g("Username ".concat(a.username," is already taken")),t({username:"",password:""})}))}},r.a.createElement(G.a.Group,{className:"p-2 "},r.a.createElement(G.a.Control,{type:"text",size:"lg",placeholder:i||"Enter Username",className:O,onChange:h,value:a.username,name:"username"})),r.a.createElement(G.a.Group,{className:"p-2"},r.a.createElement(G.a.Control,{name:"password",type:"password",size:"lg",placeholder:"Password",onChange:h,value:a.password})),r.a.createElement(G.a.Group,{className:"p-2"},r.a.createElement(w.a,{variant:"outline-light",block:!0,type:"submit",disabled:N},N?"Loading\u2026":"Submit")),r.a.createElement(o.b,{className:"linkovi",to:"/"},r.a.createElement(G.a.Text,{className:"p-2 "},"Already Registered? Click Here"))))))))},X=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),m=o[0],p=o[1],b=Object(n.useState)(!1),N=Object(s.a)(b,2),v=N[0],h=N[1],O=Object(n.useState)(),S=Object(s.a)(O,2),w=S[0],x=S[1],k=Object(n.useState)(0),H=Object(s.a)(k,2),I=H[0],J=H[1],L=Object(n.useState)({username:"",heroHuntScore:0}),U=Object(s.a)(L,2),R=U[0],T=U[1],P=function(e){for(var a=e.slice(),t=a.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[a[n],a[t]];a[t]=r[0],a[n]=r[1]}return a};Object(n.useEffect)((function(){E.a.get("https://api.opendota.com/api/heroStats/").then((function(e){c(P(e.data)),p(P(e.data).slice(0,3))}))}),[]),Object(n.useEffect)((function(){return x(setInterval((function(){J((function(e){return e+1}))}),1e3)),function(){return clearInterval(w)}}),[]),Object(n.useEffect)((function(){v&&(T((function(e){return Object(C.a)(Object(C.a)({},e),{},{username:JSON.parse(localStorage.getItem("LoggedUser")).username,heroHuntScore:I})})),clearInterval(w))}),[v]),Object(n.useEffect)((function(){0!==R.heroHuntScore&&function(e){var a=JSON.stringify(e);E.a.post("https://gamestorage-9cd1.restdb.io/rest/herohuntscore",a,f)}(R)}),[R]);var z=function(e){console.log(e.target.id);var a=m.findIndex((function(a){return e.target.id===a.img}));0===m.filter((function(e,t){return t!==a})).length&&h(!0),a>=0&&p((function(e){return e.filter((function(e,t){return t!==a}))}))};return r.a.createElement("div",null,r.a.createElement(j,{loggedPlayer:JSON.parse(localStorage.getItem("LoggedUser"))}),v?r.a.createElement(u.a,{className:"d-flex justify-content-center win-section"},r.a.createElement("span",{className:"winner neon-blue"},"YOU"),r.a.createElement("span",{className:"winner neon-blue"},"WIN!")):r.a.createElement(u.a,{className:"HeroHunt-container"},r.a.createElement(i.a,null,r.a.createElement(d.a,{className:"Board-title ",lg:10},r.a.createElement("div",{className:"heroHunt-title"},"Wanted! Dead! Not Alive"),r.a.createElement("div",{className:"neon-blue"},I))),r.a.createElement(i.a,{className:"py-4"},m.map((function(e){return r.a.createElement(d.a,{lg:4,key:e.img},r.a.createElement(y.a,{className:"wanted-card"},r.a.createElement(y.a.Body,{className:"wanted-card-content"},r.a.createElement(g.a,{key:e.img,id:e.img,fluid:!0,className:" w-50 mb-3 wanted",src:"https://api.opendota.com".concat(e.img),roundedCircle:!0}),r.a.createElement("h3",null,e.localized_name),r.a.createElement("h5",{className:"text-muted"},"Wanted!"),r.a.createElement("p",null,"Wanted for -napraviti neki array sa tekstovima"))))}))),r.a.createElement(i.a,null,t.map((function(e){return r.a.createElement(g.a,{key:e.img,id:e.img,className:"heroImg",src:"https://api.opendota.com".concat(e.img),roundedCircle:!0,onClick:z})})))))};var q=function(){var e=Object(n.useState)({username:"",password:"",score:0}),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"/Projekat"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(K,{newUser:t,setNewUser:c})),r.a.createElement(m.b,{exact:!0,path:"/user"},null!==localStorage.getItem("LoggedUser")?r.a.createElement(S,null):r.a.createElement(m.a,{to:"/"})),r.a.createElement(m.b,{path:"/user/:username"},r.a.createElement(H,null)),r.a.createElement(m.b,{path:"/JuggernautHunt"},r.a.createElement(D,{nrows:5,ncols:5,chanceJuggOnStart:.25})),r.a.createElement(m.b,{path:"/Register"},r.a.createElement(_,{newUser:t,setNewUser:c})),r.a.createElement(m.b,{path:"/HeroHunt"},r.a.createElement(X,null)))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.22dde29c.chunk.js.map