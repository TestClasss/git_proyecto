(this.webpackJsonpproyectopw=this.webpackJsonpproyectopw||[]).push([[0],{129:function(e,t,r){},132:function(e,t,r){},139:function(e,t){},143:function(e,t){},162:function(e,t){},730:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(24),o=r.n(c),s=(r(129),r(3)),i=r.n(s),l=r(5),u=r(6),b=r(7),x=r(124),d="https://posts-pw2021.herokuapp.com/api/v1",p={};p.login=function(){var e=Object(l.a)(i.a.mark((function e(t,r){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/auth/signin"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:t,password:r})});case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p.verifyToken=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/auth/whoami"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p.create=function(){var e=Object(l.a)(i.a.mark((function e(t,r,n,a){var c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/post/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:JSON.stringify({title:t,description:r,image:n})});case 2:if(!(c=e.sent).ok){e.next=8;break}return e.next=6,c.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}();var j=p,h=r(1),m=a.a.createContext(),f="token",g=function(e){var t=Object(n.useState)(void 0),r=Object(u.a)(t,2),a=r[0],c=r[1],o=Object(n.useState)(void 0),s=Object(u.a)(o,2),b=s[0],d=s[1];Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=v())){e.next=8;break}return e.next=4,j.verifyToken(t);case 4:r=e.sent,n=r.username,a=r.role,n&&a&&(d({username:n,role:a}),p(t));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var p=function(e){localStorage.setItem(f,e),c(e)},g=Object(n.useCallback)((function(e,t){var r=function(){var r=Object(l.a)(i.a.mark((function r(){var n,a,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=!1,r.prev=1,r.next=4,j.login(e,t);case 4:a=r.sent,(c=a.token)&&(p(c),n=!0),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.error(r.t0),console.error("Error in login");case 13:return r.prev=13,r.abrupt("return",n);case 16:case"end":return r.stop()}}),r,null,[[1,9,13,16]])})));return function(){return r.apply(this,arguments)}}();return r()}),[]),O=Object(n.useCallback)((function(){d(void 0),p(void 0)}),[]),y=Object(n.useMemo)((function(){return{token:a,user:b,login:g,logout:O}}),[a,b,g,O]);return Object(h.jsx)(m.Provider,Object(x.a)({value:y},e))},O=function(){var e=a.a.useContext(m);if(!e)throw new Error("useUserContext() must be inside of UserProvider");return e},v=function(){return localStorage.getItem(f)};function y(){var e=O(),t=e.login,r=e.token,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],s=c[1],x=Object(n.useState)(""),d=Object(u.a)(x,2),p=d[0],j=d[1],m=Object(n.useState)(!1),f=Object(u.a)(m,2),g=f[0],v=f[1],y=function(e,t){t(e.target.value)},w=function(){var e=Object(l.a)(i.a.mark((function e(r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t(o,p);case 3:n=e.sent,v(!n),s(""),j("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?(console.log("Ya se loggea"),Object(h.jsx)(b.a,{replace:!0,to:"/redirect"})):Object(h.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-bl from-emerald-400 to-indigo-800",children:Object(h.jsx)("main",{className:"w-3/4 max-w-3xl bg-blue-100 rounded-md p-8 md:p-10 shadow-md",children:Object(h.jsxs)("form",{onSubmit:w,className:"flex flex-col gap-4 items-center justify-center",children:[Object(h.jsx)("h2",{className:"text-gray-800 font-monserrat font-black text-4xl",children:"Proyecto Final"}),Object(h.jsx)("h3",{className:"-mt-4 p-0 font-monserrat text-gray-800 font-bold min-w-max",children:" Programaci\xf3n Web"}),g&&Object(h.jsx)("p",{className:"w-full rounded p-3 text-center text-yellow-800 font-roboto bg-amber-300 select-none",children:"Ha ocurrido un error. Por favor, revisa tus credenciales y vuelve a intentarlo"}),Object(h.jsx)("input",{className:"font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded",type:"text",value:o,placeholder:"Usuario",onChange:function(e){return y(e,s)}}),Object(h.jsx)("input",{className:"font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded",type:"password",placeholder:"Contrase\xf1a",onChange:function(e){return y(e,j)},value:p}),Object(h.jsx)("button",{className:"mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100",children:"Ingresar"})]})})})}function w(){var e=Object(b.g)(),t=O().logout,r=Object(n.useState)(""),a=Object(u.a)(r,2);a[0],a[1];return Object(h.jsx)("section",{className:"flex flex-col justify-center items-center min-h-screen min-w-scren",children:Object(h.jsxs)("div",{className:"p-10 w-11/12 lg:w-1/2 h-max min-h-screen flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md",children:[Object(h.jsx)("h2",{className:"text-5xl lg:text-6xl font-extrabold text-gray-800 text-center mb-4",children:"P\xe1gina de Admin"}),Object(h.jsx)("h3",{className:"text-xl lg:text-4xl font-medium text-gray-700 text-center -mt-12",children:"Has ingresado a la plataforma con credenciales de administrador"}),Object(h.jsx)("p",{className:"text-lg lg:text-3xl font-medium text-gray-400 text-center -mt-12",children:"Selecciona uno de los botones para realizar la acci\xf3n correspondiente"}),Object(h.jsx)("button",{onClick:function(){e("/Owned")},className:"mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 hover:border-blue-400 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-400 py-2 px-4 hover:text-blue-700 text-gray-100",children:"Ver mis posts"}),Object(h.jsx)("button",{className:"mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 hover:border-blue-400 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-400 py-2 px-4 hover:text-blue-700 text-gray-100",onClick:function(){e("/Create")},children:"Crear post"}),Object(h.jsx)("button",{onClick:function(){t(),e("/login")},className:"mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 hover:border-blue-400 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-400 py-2 px-4 hover:text-blue-700 text-gray-100",children:"Cerrar Sesi\xf3n"})]})})}var k=r(17),N=r(25),C=r(20),S=r(19),P=r(10),T=r(16),A=function(e){Object(C.a)(r,e);var t=Object(S.a)(r);function r(e){var n;return Object(k.a)(this,r),(n=t.call(this,e)).state={like:!0,fav:!0},n}return Object(N.a)(r,[{key:"render",value:function(){var e=this;if("like"==this.props.type){var t=this.props.getlike;return this.state.like?Object(h.jsx)("span",{children:Object(h.jsx)(P.d,{onClick:function(){e.setState({like:!e.state.like})},onAuxClick:t,className:"cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"})}):Object(h.jsx)("span",{children:Object(h.jsx)(T.c,{onClick:function(){e.setState({like:!e.state.like})},className:"cursor-pointer text-red-600 transition-all transform hover:scale-125"})})}return"comment"==this.props.type?Object(h.jsx)("span",{children:Object(h.jsx)(T.b,{className:"cursor-pointer text-gray-400 text-opacity-50 hover:text-coolgray-700 hover:text-opacity-1 transition-all transform hover:scale-125"})}):"fav"==this.props.type?this.state.like?Object(h.jsx)("span",{children:Object(h.jsx)(P.a,{onClick:function(){e.setState({like:!e.state.like})},className:"cursor-pointer text-gray-400 text-opacity-50 hover:text-yellow-600 hover:text-opacity-1 transition-all transform hover:scale-125"})}):Object(h.jsx)("span",{children:Object(h.jsx)(P.b,{onClick:function(){e.setState({like:!e.state.like})},className:"cursor-pointer text-yellow-600 transition-all transform hover:scale-125"})}):void 0}}]),r}(a.a.Component);var I=function(){var e=Object(b.g)();return Object(h.jsxs)("div",{className:"flex flex-col justify-center items-center w-screen h-screen bg-gray-200",children:[Object(h.jsx)("h2",{className:"text-6xl font-roboto text-center",children:"404"}),Object(h.jsx)("h3",{className:"text-xl font-roboto text-center",children:"Not Found"}),Object(h.jsx)("img",{className:"rounded-xl shadow-md border-4 my-8 lg:my-4 border-white lg:w-1/4 w-4/5",src:"https://th.bing.com/th/id/R.40f7688ccccf1ebd4c11f0cd07ac90ce?rik=%2bB12J7U35vMOZQ&riu=http%3a%2f%2ffmobserver.com%2fwp-content%2fuploads%2f2018%2f04%2fmonkey-business.gif&ehk=eAt6SspQJiCr3Xb55drgB6ijTFCCJZqXvLWB4xeq%2bUM%3d&risl=&pid=ImgRaw&r=0"}),Object(h.jsx)("p",{className:"mx-4 text-lg font-roboto text-center",children:"Lo sentimos, nuestros desarrolladores no pudieron encontrar la p\xe1gina que buscabas :("}),Object(h.jsx)("button",{className:"font-roboto bg-gray-300 m-4 py-2 px-4 rounded shadow-md border-2 boder-white text-gray-700",onClick:function(t){e("/login")},children:"Volver al inicio de sesi\xf3n"})]})},E={admin:"/admin",user:"/user"},B=function(){var e,t=O().user;return t?Object(h.jsx)(b.a,{replace:!0,to:null!==(e=E[t.role])&&void 0!==e?e:"/"}):Object(h.jsx)("p",{children:" No se puede redireccionar "})},R=function(e){var t=e.role,r=void 0===t?"user":t,n=e.children,a=O(),c=a.token,o=a.user;return c?o&&o.role===r?n:Object(h.jsx)(b.a,{replace:!0,to:"/404"}):Object(h.jsx)(b.a,{replace:!0,to:"/login"})},z=r(9),J=(r(132),r(15));r(23);J.b.success("Post created successfully");var L=function(){var e=Object(l.a)(i.a.mark((function e(t,r,n,a){var c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://posts-pw2021.herokuapp.com/api/v1","/post/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(a),"Content-type":"application/json"},body:JSON.stringify({title:t,description:r,image:n})});case 2:if(!(c=e.sent).ok){e.next=11;break}return console.log(c),e.next=7,c.json();case 7:return o=e.sent,e.abrupt("return",o);case 11:return console.log(c),e.abrupt("return",{});case 13:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),D=L;function U(){O().token;var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],x=o[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),j=p[0],m=p[1],f=localStorage.getItem("token"),g=function(e,t){t(e.target.value)},v=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),D(r,s,j,f);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(b.g)();return Object(h.jsx)("div",{className:"w-screen h-screen py-20 px-10",children:Object(h.jsx)("div",{className:"border border-bluegray-200 border shadow-xl mt-8 lg:mt-24 m-auto h-max lg:w-4/12 flex flex-none flex-col p-8",children:Object(h.jsxs)("form",{onSubmit:v,children:[Object(h.jsx)("h2",{className:"my-4 font-RobotoSlab text-3xl w-m",children:"Crea una nueva publicacion!"}),Object(h.jsx)("input",{type:"text",placeholder:"tittle",value:r,onChange:function(e){return g(e,a)},className:"border w-3/4 mb-10 m-5 p-2 text-md"}),Object(h.jsx)("input",{type:"text",placeholder:"description",value:s,onChange:function(e){return g(e,x)},className:"border w-3/4 mb-10 m-5 p-2 text-md"}),Object(h.jsx)("input",{type:"text",placeholder:"image",value:j,onChange:function(e){return g(e,m)},className:"border w-3/4 mb-10 m-5 p-2 text-md"}),Object(h.jsx)("button",{type:"submit",className:"mx-4 w-max lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100",children:"create"}),Object(h.jsx)("button",{onClick:function(){return y("/admin")},className:"mx-4 w-max lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100",children:"back"})]})})})}var F=function(){var e=Object(l.a)(i.a.mark((function e(t,r,n,a,c){var o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://posts-pw2021.herokuapp.com/api/v1/post/update/").concat(t),{method:"PUT",headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"},body:JSON.stringify({title:n,description:a,image:c})});case 2:return o=e.sent,e.next=5,o.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n,a,c){return e.apply(this,arguments)}}(),M=F;function q(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],b=o[1],x=Object(n.useState)(""),d=Object(u.a)(x,2),p=d[0],j=d[1],m=localStorage.getItem("token"),f=function(e,t){t(e.target.value)},g=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),M(r,s,p,m);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:g,children:[Object(h.jsx)("h2",{children:"create"}),Object(h.jsx)("input",{type:"text",placeholder:"tittle",value:r,onChange:function(e){return f(e,a)}}),Object(h.jsx)("input",{type:"text",placeholder:"description",value:s,onChange:function(e){return f(e,b)}}),Object(h.jsx)("input",{type:"text",placeholder:"image",value:p,onChange:function(e){return f(e,j)}}),Object(h.jsx)("button",{type:"submit",children:"create"})]})})}var _=function(){var e=Object(l.a)(i.a.mark((function e(t,r,n){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://posts-pw2021.herokuapp.com/api/v1/post/owned","?limit=").concat(t,"&page=").concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(n)}});case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,o=c.data,console.log(c),console.log(o),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),G=r(29),H=r(18),W=function(){var e=Object(l.a)(i.a.mark((function e(t,r){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://posts-pw2021.herokuapp.com/api/v1/post/toggle/").concat(t),{method:"PATCH",headers:{Authorization:"Bearer ".concat(r)}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Q=W,V=(a.a.Component,function(e){var t=e.identifier,r=e.active;console.log({identifier:t,active:r});var a=localStorage.getItem("token"),c=Object(n.useState)(null),o=Object(u.a)(c,2),s=o[0],b=o[1],x=null!==s?s:r;Object(n.useEffect)((function(){b(r)}),[r,t]);var d=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t,a);case 2:n=e.sent,b(!r),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return x?Object(h.jsx)("span",{children:Object(h.jsx)(H.a,{onClick:d,className:"cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"})}):Object(h.jsx)("span",{children:Object(h.jsx)(H.a,{onClick:d,className:"cursor-pointer text-red-600 transition-all hover:text-gray-400 transform hover:scale-125"})})}),X=document.getElementById("portal"),Z=function(e){Object(C.a)(r,e);var t=Object(S.a)(r);function r(){var e;return Object(k.a)(this,r),(e=t.call(this)).componentDidMount=function(){X.appendChild(e.el)},e.componentWillUnmount=function(){X.removeChild(e.el)},e.render=function(){var t=e.props.children;return o.a.createPortal(t,e.el)},e.el=document.createElement("div"),e}return r}(n.Component),Y=function(e){Object(C.a)(r,e);var t=Object(S.a)(r);function r(){return Object(k.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"render",value:function(){var e=this.props,t=(e.children,e.toogle),r=e.active,n=e.ident,a=e.onChangeTitle,c=e.onChangeDescription,o=e.onChangeImage,s=e.onSubmit;e.newTittle;return Object(h.jsx)(Z,{children:r&&Object(h.jsx)("div",{className:"border rounded-md border-bluegray-300 lg:w-4/12 lg:h-max lg:p-8 w-4/5 px-4 py-8 fixed right-1/2 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md",children:Object(h.jsxs)("div",{className:"relative",children:[Object(h.jsx)("button",{onClick:t,children:Object(h.jsx)(P.c,{className:"text-2xl fixed top-6 right-6 transform hover:scale-125 transition-all"})}),Object(h.jsx)("h2",{className:"mb-4 font-RobotoSlab text-3xl",children:"Modifica el post"}),Object(h.jsx)("form",{onSubmit:s,children:Object(h.jsxs)("div",{className:"flex flex-none flex-col",children:[Object(h.jsx)("p",{className:"w-max text-lg font-bold  m-auto mb-1",children:" Titulo"}),Object(h.jsx)("input",{onChange:a,type:"text",placeholder:"Mi publicacion...",className:"border w-3/4 mb-10 m-auto p-2 text-md",required:!0}),Object(h.jsx)("p",{className:"w-max text-lg font-bold m-auto mb-1",children:" Descripci\xf3n"}),Object(h.jsx)("input",{onChange:c,type:"text",placeholder:"Lorem ipsum...",className:"border w-3/4 mb-10 m-auto p-2 text-md"}),Object(h.jsx)("p",{className:"w-max text-lg font-bold m-auto mb-1",children:" Imagen"}),Object(h.jsx)("input",{onChange:o,type:"text",placeholder:"Url de la imagen...",className:"border w-3/4 mb-10 m-auto p-2 text-md",required:!0}),Object(h.jsx)("button",{onClick:n,className:"m-auto w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100",children:" Enviar! "})]})})]})})})}}]),r}(n.Component),K=function(e){var t=e.identify,r=e.post,a=e.image,c=e.date,o=e.description,s=e.likes,x=void 0===s?[]:s,d=e.user,p=e.active,j=(Object(b.g)(),Object(n.useState)(!1)),m=Object(u.a)(j,2),f=m[0],g=m[1],O=function(){g(!f)},v=Object(n.useState)(""),y=Object(u.a)(v,2),w=y[0],k=y[1],N=Object(n.useState)(""),C=Object(u.a)(N,2),S=C[0],P=C[1],A=Object(n.useState)(""),I=Object(u.a)(A,2),E=I[0],B=I[1],R=localStorage.getItem("token"),z=function(e,t){t(e.target.value),console.log("descripcion ",S),console.log("imagen ",E),console.log("titulo ,",w)},J=function(){var e=Object(l.a)(i.a.mark((function e(r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),n=M(t,R,w,S,E),console.log(n),alert("Post Actualizado"),O();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"w-11/12 p-8 rounded-xl shadow-xl border border-coolgray-400 my-6 bg-white relative",children:[Object(h.jsxs)("h1",{className:"lg:text-4xl text-2xl uppercase font-bold",children:[" ",d.username]}),Object(h.jsx)("img",{className:"rounded my-2 lg:my-8",src:a,alt:"Image posted from user ".concat(d.username," ")}),Object(h.jsxs)("div",{className:"w-max right-8 mt-1  flex flex-row absolute lg:text-4xl gap-2",children:[Object(h.jsx)(T.a,{className:"text-red-600 transition-all transform hover:scale-125"}),Object(h.jsx)("p",{children:x.length}),Object(h.jsx)(G.a,{onClick:O,className:"cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"}),Object(h.jsx)(V,{identifier:t,active:p})]}),Object(h.jsx)("p",{className:"font-RobotoSlab lg:text-2xl",children:r}),Object(h.jsx)("p",{className:"font-RobotoSlab font-light lg:text-lg text-xs",children:o}),Object(h.jsxs)("p",{className:"font-RobotoSlab font-light lg:text-lg text-xs",children:["fecha: ",c]}),Object(h.jsx)(Y,{active:f,toogle:O,ident:function(){console.log(t)},onChangeTitle:function(e){return z(e,k)},onSubmit:J,onChangeDescription:function(e){return z(e,P)},onChangeImage:function(e){return z(e,B)}})]})},$=r(33),ee=function(e){var t=e.direction,r=e.changePage,n=void 0===r?function(){}:r;return"L"===(t="undefined"!==typeof t?t:"R")?Object(h.jsx)("button",{onClick:function(){n()},children:Object(h.jsx)($.a,{className:"text-5xl p-2 h-12 w-28 text-blue-400 bg-white rounded shadow relative mx-10 hover:bg-blue-400 hover:text-white transition-all"})}):Object(h.jsx)("button",{onClick:function(){n()},children:Object(h.jsx)($.b,{className:"text-5xl p-2 h-12 w-28 text-blue-400 bg-white rounded shadow relative mx-10 hover:bg-blue-400 hover:text-white transition-all"})})};r(133);function te(){var e=localStorage.getItem("token"),t=Object(n.useState)([]),r=Object(u.a)(t,2),a=r[0],c=r[1],o=Object(n.useState)(0),s=Object(u.a)(o,2),x=s[0],d=s[1],p=Object(n.useState)(0),j=Object(u.a)(p,2),m=j[0],f=j[1];Object(n.useEffect)((function(){var t=function(){var t=Object(l.a)(i.a.mark((function t(){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("click"),t.next=4,_(10,m,e);case 4:r=t.sent,c(r),console.log(r),console.log(r.map((function(e){return e.description}))),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),console.log("esta es post",a._id);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[m,x]);var g=Object(b.g)();return Object(h.jsx)("section",{className:"flex flex-col justify-center items-center min-h-screen min-w-scren",children:Object(h.jsxs)("div",{className:"p-11 w-11/12 lg:w-1/2 h-max flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md",children:[Object(h.jsx)("h2",{className:"text-5xl lg:text-6xl font-extrabold text-gray-800 text-center",children:"Admin post"}),a.map((function(e){return Object(h.jsx)(K,{identify:e._id,post:e.title,date:e.createdAt,image:e.image,description:e.description,likes:e.likes,user:e.user,active:e.active})})),Object(h.jsxs)("span",{children:[Object(h.jsx)(ee,{direction:"L",changePage:function(){f(m>0?m-=1:m=0)}}),Object(h.jsx)(ee,{direction:"R",changePage:function(){f(m+=1)}})]}),Object(h.jsx)("button",{onClick:function(){d(x+1)},className:"fixed bottom-20 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white",children:"Actualizar"}),Object(h.jsx)("button",{onClick:function(){return g("/admin")},className:"fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white",children:"Regresar"})]})})}var re="https://posts-pw2021.herokuapp.com/api/v1",ne={};ne.login=function(){var e=Object(l.a)(i.a.mark((function e(t,r){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/auth/signin"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:t,password:r})});case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ne.verifyToken=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/auth/whoami"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne.create=function(){var e=Object(l.a)(i.a.mark((function e(t,r,n,a){var c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/post/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:JSON.stringify({title:t,description:r,image:n})});case 2:if(!(c=e.sent).ok){e.next=8;break}return e.next=6,c.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}();J.b.success("Post created successfully");var ae=function(){var e=Object(l.a)(i.a.mark((function e(t,r,n){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://posts-pw2021.herokuapp.com/api/v1/post/all","?limit=").concat(t,"&page=").concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(n)}});case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,o=c.data,console.log(c),console.log(o),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(i.a.mark((function e(t,r){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://posts-pw2021.herokuapp.com/api/v1/post/like/").concat(t),{method:"PATCH",headers:{Authorization:"Bearer ".concat(r)}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),oe=ce,se=function(e){var t=e.identifier,r=e.active,a=localStorage.getItem("token"),c=Object(n.useState)(null),o=Object(u.a)(c,2),s=o[0],b=o[1],x=null!==s?s:r;Object(n.useEffect)((function(){b(r)}),[r,t]);var d=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t,a);case 2:n=e.sent,console.log(s),console.log(n),b(!r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return x?Object(h.jsx)("span",{children:Object(h.jsx)(P.d,{onClick:d,className:"cursor-pointer text-red-600 transition-all hover:text-gray-400 transform hover:scale-125"})}):Object(h.jsx)("span",{children:Object(h.jsx)(P.d,{onClick:d,className:"cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"})})},ie=function(e){var t=e.identify,r=e.post,n=e.image,a=e.date,c=e.description,o=e.likes,s=void 0===o?[]:o,i=e.user,l=["gp26_user"];Object(b.g)();return Object(h.jsxs)("div",{className:"w-9/12 p-8 rounded-xl shadow-xl border border-coolgray-400 my-6 bg-white relative",children:[Object(h.jsxs)("h1",{className:"lg:text-4xl text-2xl uppercase font-bold",children:[" ",i.username]}),Object(h.jsx)("img",{className:"rounded my-2 lg:my-8 m-auto",src:n,alt:"Image posted from user ".concat(i.username," ")}),Object(h.jsxs)("div",{className:"w-max right-8 mt-1  flex flex-row absolute lg:text-4xl gap-2",children:[Object(h.jsxs)("p",{children:[s.length," "]}),Object(h.jsx)(se,{identifier:t,active:-1!=s.findIndex((function(e){return e.username===l[0]}))}),Object(h.jsx)(A,{type:"comment"}),Object(h.jsx)(A,{type:"fav"})]}),Object(h.jsx)("p",{className:"font-RobotoSlab lg:text-2xl truncate",children:r}),Object(h.jsx)("p",{className:"font-RobotoSlab font-light lg:text-lg text-xs mt-2 overflow-ellipsis overflow-hidden",children:c}),Object(h.jsx)("p",{className:"font-RobotoSlab font-light lg:text-lg text-xs mt-1",children:a})]})};function le(){var e=O().logout,t=Object(b.g)(),r=(O().token,localStorage.getItem("token")),a=Object(n.useState)(0),c=Object(u.a)(a,2),o=c[0],s=c[1],x=Object(n.useState)([]),d=Object(u.a)(x,2),p=d[0],j=d[1],m=function(){s(o+=1),document.documentElement.scrollTop=0},f=function(){s(o>0?o-=1:o=0),document.documentElement.scrollTop=0};return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("click"),e.next=4,ae(20,o,r);case 4:t=e.sent,j(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),console.log("esta es post",p._id);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(h.jsx)("section",{className:"flex flex-col justify-center items-center min-h-screen min-w-scren",children:Object(h.jsxs)("div",{className:"lg:p-11 pt-8 pb-16 lg:w-1/2 w-full h-max flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md",children:[Object(h.jsx)("h2",{className:"text-5xl lg:text-6xl font-extrabold text-gray-800 text-center",children:"All post"}),Object(h.jsxs)("div",{className:"flex pt-6",children:[Object(h.jsx)(ee,{direction:"L",changePage:f}),Object(h.jsxs)("p",{className:"text-xl px-4 py-2 h-max w-max m-0 text-blue-400 bg-white rounded shadow text-center",children:[" ",o+1," "]}),Object(h.jsx)(ee,{direction:"R",changePage:m})]}),p.map((function(e){return Object(h.jsx)(ie,{identify:e._id,post:e.title,date:e.createdAt,image:e.image,description:e.description,likes:e.likes,user:e.user})})),Object(h.jsxs)("span",{className:"flex",children:[Object(h.jsx)(ee,{direction:"L",changePage:f}),Object(h.jsxs)("p",{className:"text-xl px-4 py-2 h-max w-max m-0 text-blue-400 bg-white rounded shadow text-center",children:[" ",o+1," "]}),Object(h.jsx)(ee,{direction:"R",changePage:m})]}),Object(h.jsx)("button",{onClick:function(){e(),t("/login")},className:"fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white",children:"Log out"})]})})}var ue=function(){return Object(h.jsx)(z.a,{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/login",element:Object(h.jsx)(y,{})}),Object(h.jsx)(b.b,{path:"/redirect",element:Object(h.jsx)(B,{})}),Object(h.jsx)(b.b,{path:"/admin",element:Object(h.jsx)(R,{role:"admin",children:Object(h.jsx)(w,{})})}),Object(h.jsx)(b.b,{path:"/user",element:Object(h.jsxs)(R,{role:"user",children:[" ",Object(h.jsx)(le,{})," "]})}),Object(h.jsx)(b.b,{path:"/Create",element:Object(h.jsx)(R,{role:"admin",children:Object(h.jsx)(U,{})})}),Object(h.jsx)(b.b,{path:"/Update",element:Object(h.jsx)(R,{role:"admin",children:Object(h.jsx)(q,{})})}),Object(h.jsx)(b.b,{path:"/Owned",element:Object(h.jsx)(R,{role:"admin",children:Object(h.jsx)(te,{})})}),Object(h.jsx)(b.b,{path:"*",element:Object(h.jsx)(I,{})})]})})},be=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,731)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{children:Object(h.jsx)(ue,{})})}),document.getElementById("root")),be()}},[[730,1,2]]]);
//# sourceMappingURL=main.bab48b14.chunk.js.map