(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{120:function(e,t,a){e.exports=a(132)},125:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),i=(a(125),a(83)),c=a(10),m=a(9),u=a(14),s=a(73),d=a(74),E=a(202),p=a(203),g=a(161),h=a(181),b=a(182),f=a(185),v=a(184),y=a(183),x=a(173),w=a(207),C=a(56),k=a(163),j=a(165),P=a(93),O=a.n(P),S=a(95),A=a.n(S),L=a(166),B=a(94),N=a.n(B),W=Object(g.a)({root:{width:500,bottom:0},fabButton:{position:"absolute",zIndex:1}});function I(){var e=W(),t=r.a.useState(0),a=Object(c.a)(t,2),n=a[0],l=a[1],o=function(){window.navigator.vibrate(50)};return r.a.createElement("div",{className:"nav-botn"},r.a.createElement(k.a,{value:n,onChange:function(e,t){l(t)},showLabels:!0,className:e.root},r.a.createElement(j.a,{onClick:o,value:"home",component:m.b,to:"/",label:"Home",icon:r.a.createElement(O.a,null)}),r.a.createElement(L.a,{color:"secondary",onClick:o,className:e.fabButton},r.a.createElement(j.a,{showLabel:!0,value:"add",component:m.b,label:"",to:"/add",icon:r.a.createElement(N.a,null)})),r.a.createElement(j.a,{onClick:o,value:"profile",component:m.b,to:"/profile",label:"Profile",icon:r.a.createElement(A.a,null)})))}var D=a(167),_=a(68),T=a.n(_),R=a(69),q=a.n(R),K=[{id:1,name:"Koradau Kasturi",description:"A different and imagenative biography of Hari Badahur",image:"https://upload.wikimedia.org/wikipedia/en/e/e8/Karodaun_Kasturi_book_cover.jpg",author:"Amar Neupane",originalPrice:500,discountedPrice:200,postedBy:"Laxman Bhusal"},{id:2,name:"2 Koradau Kasturi",description:"A different and imagenative biography of Hari Badahur",image:"https://upload.wikimedia.org/wikipedia/en/e/e8/Karodaun_Kasturi_book_cover.jpg",author:"Amar Neupane",originalPrice:500,discountedPrice:200,postedBy:"Laxman Bhusal"},{id:3,name:"3 Koradau Kasturi",description:"A different and imagenative biography of Hari Badahur",image:"https://upload.wikimedia.org/wikipedia/en/e/e8/Karodaun_Kasturi_book_cover.jpg",author:"Amar Neupane",originalPrice:500,discountedPrice:200,postedBy:"Laxman Bhusal"}],M=a(168);function F(){return r.a.createElement(w.a,{color:"text.dark"},r.a.createElement(D.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement("div",null,r.a.createElement(M.a,{variant:"rect",width:210,height:118}),r.a.createElement(M.a,{variant:"text",animation:"pulse",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement(M.a,{variant:"rect",width:210,height:118}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement("br",null)),"            ",r.a.createElement("div",null,r.a.createElement(M.a,{variant:"rect",width:210,height:118}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement("br",null)),"            ",r.a.createElement("div",null,r.a.createElement(M.a,{variant:"rect",width:210,height:118}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement(M.a,{variant:"text",width:210}),r.a.createElement("br",null))))}var z=a(177),U=a(170),G=a(171),J=a(172),H=a(178),X=a(179),Y=a(180),Z=a(209),$=a(176),Q=a(175),V=a(174),ee=a(67),te=a.n(ee),ae=a(169),ne=Object(g.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),re=r.a.forwardRef((function(e,t){return r.a.createElement(ae.a,Object.assign({direction:"up",ref:t},e))}));function le(e){var t=e.open,a=e.handleClose,n=e.cart,l=e.setCart,o=ne();return r.a.createElement("div",null,r.a.createElement(Z.a,{fullScreen:!0,open:t,onClose:a,TransitionComponent:re},r.a.createElement(U.a,{className:o.appBar},r.a.createElement(G.a,null,r.a.createElement(J.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close"},r.a.createElement(te.a,null)),r.a.createElement(C.a,{variant:"h6",className:o.title},"Cart"),n.length?r.a.createElement(x.a,{size:"small",autoFocus:!0,onClick:function(){l([]),console.log("cleared the carrt")},style:{background:"red"}},"Clear Cart "):null,r.a.createElement(x.a,{autoFocus:!0,color:"inherit",onClick:a},"Checkout"))),r.a.createElement(V.a,null,n.map((function(e){return r.a.createElement("section",{key:Math.random()},r.a.createElement(Q.a,{button:!0},r.a.createElement($.a,{primary:"Book: ".concat(e.name),secondary:"Author: ".concat(e.author," \n| Price: ").concat(e.discountedPrice)})),r.a.createElement(z.a,null))})))))}var oe=Object(g.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),ie=r.a.forwardRef((function(e,t){return r.a.createElement(ae.a,Object.assign({direction:"up",ref:t},e))}));function ce(e){var t=e.open,a=e.handleClose,n=e.cart,l=e.setCart,o=oe();return r.a.createElement("div",null,r.a.createElement(Z.a,{fullScreen:!0,open:t,onClose:a,TransitionComponent:ie},r.a.createElement(U.a,{className:o.appBar},r.a.createElement(G.a,null,r.a.createElement(J.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close"},r.a.createElement(te.a,null)),r.a.createElement(C.a,{variant:"h6",className:o.title},"Cart"),n.length?r.a.createElement(x.a,{size:"small",autoFocus:!0,onClick:function(){l([]),console.log("cleared the carrt")},style:{background:"red"}},"Clear Wishlist "):null,r.a.createElement(x.a,{autoFocus:!0,color:"inherit",onClick:a},"Checkout"))),r.a.createElement(V.a,null,n.map((function(e){return r.a.createElement("section",{key:e.id*Math.random()},r.a.createElement(Q.a,{button:!0},r.a.createElement($.a,{primary:"Book: ".concat(e.name),secondary:"Author: ".concat(e.author," \n| Price: ").concat(e.discountedPrice)})),r.a.createElement(z.a,null))})))))}function me(e){var t=e.isLoggedin,a=e.Cart,n=e.Wish,l=e.setCart,o=e.setWish,i=r.a.useState(!1),u=Object(c.a)(i,2),s=u[0],d=u[1],E=r.a.useState(!1),p=Object(c.a)(E,2),g=p[0],h=p[1],b=function(){d(!0)},f=function(){h(!0)};return r.a.createElement("div",null,r.a.createElement(U.a,{position:"static"},r.a.createElement(G.a,null,r.a.createElement(C.a,{variant:"h6",style:{flexGrow:1}},r.a.createElement(m.b,{style:{textDecoration:"none",textAnchor:"unset",color:"inherit"},to:"/"},"   Bookstore(IMJC)")),r.a.createElement(J.a,{"aria-label":"show shopping items",color:"inherit",onClick:b},r.a.createElement(H.a,{badgeContent:a.length,color:"secondary"},r.a.createElement(X.a,null))),r.a.createElement(le,{open:s,handleClose:function(){d(!1)},handleOpen:b,cart:a,setCart:l}),r.a.createElement(J.a,{"aria-label":"show whitelist items",color:"inherit",onClick:f},r.a.createElement(H.a,{badgeContent:n.length,color:"secondary"},r.a.createElement(Y.a,null))),r.a.createElement(ce,{open:g,handleClose:function(){h(!1)},handleOpen:f,cart:n,setCart:o}),t?r.a.createElement(m.b,{style:{textDecoration:"none",textAnchor:"unset"},to:"/profile"}," ",r.a.createElement(x.a,{color:"secondary"},"Profile")):r.a.createElement(m.b,{style:{textDecoration:"none",textAnchor:"unset"},to:"/login"}," ",r.a.createElement(x.a,{color:"secondary"},"Login")))))}var ue=Object(g.a)({root:{maxWidth:345,margin:10,borderRadius:25},media:{height:140},title:{flexGrow:1}});function se(e){var t=e.isLoggedin,a=e.datas,n=e.Cart,l=e.Wish,o=e.addToCart,i=e.addToWish,c=e.setCart,m=e.setWish,u=ue();return r.a.createElement(w.a,null,r.a.createElement(w.a,null,r.a.createElement(me,{isLoggedin:t,Cart:n,Wish:l,setCart:c,setWish:m}),r.a.createElement(D.a,{className:"main-content",container:!0,direction:"row",justify:"center",alignItems:"center"},K.length?a.map((function(e){return r.a.createElement(h.a,{key:e.id,className:u.root},r.a.createElement(b.a,null,r.a.createElement(y.a,{className:u.media,image:e.image,title:e.name}),r.a.createElement(v.a,null,r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(C.a,{variant:"subtitle2",color:"inherit",component:"span"},r.a.createElement("small",null,r.a.createElement(T.a,null),"Author:")," ",e.author),r.a.createElement(C.a,{variant:"subtitle1",color:"inherit",component:"p"},r.a.createElement("small",null,r.a.createElement(q.a,null),"Posted by:"),"  ",e.postedBy),r.a.createElement(C.a,{variant:"subtitle2",color:"inherit",component:"p"},r.a.createElement("small",null,"Original Price :"),"Rs.  ",e.originalPrice),r.a.createElement(C.a,{variant:"subtitle2",color:"inherit",component:"strong"},r.a.createElement("small",null,"Discounted Price :"),"Rs.  ",e.discountedPrice),r.a.createElement(z.a,null),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},e.description))),r.a.createElement(f.a,null,r.a.createElement(x.a,{size:"medium",onClick:function(){return o(e)},color:"primary"},"Add To Cart"),r.a.createElement(x.a,{size:"medium",onClick:function(){return i(e)},color:"primary"},"Add To Wishlist")))})):r.a.createElement(w.a,null,r.a.createElement(F,null)))),r.a.createElement(I,null))}var de=a(186),Ee=a(187),pe=a(191),ge=a(193),he=a(210),be=a(188),fe=a(189),ve=a(190),ye=a(192),xe=a(194),we=a(195),Ce=[{name:"Laxman Bhusal",profession:"Student",school:"Bhaktapur Multiple Campus",address:"Bhaktapur",img:"https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/95690151_2566098146991134_1788949673734569984_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=Cas_gK9XdgYAX8edZ5X&_nc_ht=scontent.fktm5-1.fna&oh=8d63a41266ddd85c398dfbb3b188d12a&oe=5EF823B2",description:"A Tech enthusiast. Web Developer and Creator of Bookstore."}];function ke(e){var t=e.isLoggedin;return r.a.createElement("div",null,r.a.createElement(U.a,{position:"static"},r.a.createElement(G.a,null,r.a.createElement(C.a,{variant:"h6",style:{flexGrow:1}},r.a.createElement(m.b,{style:{textDecoration:"none",textAnchor:"unset",color:"inherit"},to:"/"},"   Bookstore(IMJC)")),t?r.a.createElement(m.b,{style:{textDecoration:"none",textAnchor:"unset"},to:"/profile"}," ",r.a.createElement(x.a,{color:"secondary"},"Profile")):r.a.createElement(m.b,{style:{textDecoration:"none",textAnchor:"unset"},to:"/login"}," ",r.a.createElement(x.a,{color:"secondary"},"Login")))))}var je=Object(g.a)({root:{maxWidth:345,margin:10,borderRadius:25},media:{height:200},title:{flexGrow:1}});function Pe(e){var t=e.darkState,a=e.handleThemeChange,n=e.isLoggedin,l=(e.setLogin,je()),o=r.a.useState([]),i=Object(c.a)(o,2),u=i[0],s=i[1];return r.a.useEffect((function(){s(Ce)}),[]),r.a.createElement(w.a,null,r.a.createElement(w.a,null,r.a.createElement(ke,{isLoggedin:n,darkState:t,handleThemeChange:a}),r.a.createElement(w.a,{className:"main-content"},r.a.createElement(de.a,{className:"container"},r.a.createElement(D.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",className:"row"},r.a.createElement(h.a,{className:l.root},r.a.createElement(V.a,{subheader:r.a.createElement(Ee.a,null,"Profile"),className:l.root}),n?u.length?u.map((function(e){return r.a.createElement(b.a,{key:e.name},r.a.createElement(y.a,{className:l.media,image:e.img,title:e.name}),r.a.createElement(v.a,null,r.a.createElement(C.a,{style:{textAlign:"center"},component:"h4",variant:"h4"},e.name),r.a.createElement(z.a,null),r.a.createElement(C.a,{component:"small",variant:"subtitle1"},r.a.createElement(be.a,null),e.school),r.a.createElement("br",null),r.a.createElement(C.a,{component:"small",varaint:"subtitle1"},r.a.createElement(fe.a,null)," ",e.profession),r.a.createElement("br",null),r.a.createElement(C.a,{component:"small",variant:"subtitle1"},r.a.createElement(ve.a,null),e.address),r.a.createElement(z.a,null),r.a.createElement(C.a,{style:{textAlign:"center"},component:"p",variant:"caption"},e.description)))})):r.a.createElement(F,null):r.a.createElement(de.a,null,r.a.createElement(C.a,{component:"p",variant:"body2"},"Seems Like You're not Logged in"),r.a.createElement(C.a,{component:"strong",variant:"button"},r.a.createElement(m.b,{to:"/login"},"Please Login"))),r.a.createElement(z.a,null),r.a.createElement(V.a,{subheader:r.a.createElement(Ee.a,null,"Settings"),className:l.root},r.a.createElement(Q.a,null,r.a.createElement(pe.a,null,r.a.createElement(ye.a,null)),r.a.createElement($.a,{id:"switch-list-label-darkmode",primary:"Darkmode"}),r.a.createElement(ge.a,null,r.a.createElement(he.a,{edge:"end",checked:t,onChange:a}))),r.a.createElement(z.a,null),r.a.createElement(Q.a,null,r.a.createElement(pe.a,null,r.a.createElement(xe.a,null)),r.a.createElement($.a,{id:"myBooks",primary:"My Books"}),r.a.createElement(ge.a,null,r.a.createElement(J.a,null,r.a.createElement(m.b,{style:{color:"inherit",textDecoration:"none"},to:"/myBooks"},r.a.createElement(we.a,null))))))))))),r.a.createElement(I,null))}var Oe=a(43),Se=a(47),Ae=a(196),Le=a(206),Be=a(197);function Ne(e){var t=e.isLoggedin,a=r.a.useState({id:Math.random(),name:"",description:"",author:"",originalPrice:"",discountedPrice:"",image:"",postedBy:"Laxman Bhusal"}),n=Object(c.a)(a,2),l=n[0],o=n[1],i=function(e){return function(t){o(Object(Se.a)(Object(Se.a)({},l),{},Object(Oe.a)({},e,t.target.value)))}};return r.a.createElement(w.a,null,r.a.createElement(w.a,null,r.a.createElement(ke,{isLoggedin:t}),r.a.createElement(w.a,{className:"main-content"},r.a.createElement(C.a,{style:{textAlign:"center"},component:"h2",variant:"subtitle2"},"Add a Book:"),r.a.createElement(D.a,{container:!0,alignContent:"center",alignItems:"center",justify:"center"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(l),K.push(l);o({name:"",description:"",author:"",originalPrice:"",discountedPrice:"",image:"",postedBy:"Laxman Bhusal"})}},r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Book Name",variant:"outlined",type:"text",required:!0,value:l.name,onChange:i("name"),lang:"en",fullWidth:!0,style:{margin:8}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Author",variant:"outlined",value:l.author,onChange:i("author"),type:"text",required:!0,lang:"en",fullWidth:!0,style:{margin:8}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Description",variant:"outlined",value:l.description,onChange:i("description"),multiline:!0,fullWidth:!0,rows:3,type:"text",required:!0,lang:"en",style:{margin:8}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Original Price",variant:"outlined",value:l.originalPrice,onChange:i("originalPrice"),type:"number",required:!0,lang:"en",fullWidth:!0,style:{margin:8},InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement("strong",null,"Rs."))}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Price",variant:"outlined",type:"number",required:!0,value:l.discountedPrice,onChange:i("discountedPrice"),lang:"en",fullWidth:!0,style:{margin:8},InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement("strong",null,"Rs."))}})),r.a.createElement("br",null),r.a.createElement(C.a,{component:"strong",variant:"subtitle2"},"Image:"),r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"contained-button-file",type:"file",value:l.image,onChange:i("image")}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(x.a,{variant:"contained",color:"primary",component:"span"},"Upload")),r.a.createElement("br",null),r.a.createElement("br",null),t?r.a.createElement(Ae.a,null,r.a.createElement(x.a,{type:"submit",color:"secondary",variant:"outlined"},"Submit")):r.a.createElement(de.a,null,r.a.createElement(x.a,{disabled:!0,color:"secondary",variant:"outlined"},"Submit"),r.a.createElement(C.a,{component:"p",variant:"caption"},"Please ",r.a.createElement(m.b,{to:"/login"}," Login "),"First To Submit")))))),r.a.createElement(I,null))}var We=a(198),Ie=a(199),De=a(71),_e=a.n(De),Te=a(72),Re=a.n(Te),qe=Object(g.a)((function(e){return{margin:{margin:e.spacing(1)},root:{borderRadius:25,maxWidth:350,boxSizing:"border-box",boxShadow:"2px 2px 5px 2px"}}}));function Ke(e){var t=e.isLoggedin,a=e.setLogin,l=qe(),o=Object(n.useState)(""),i=Object(c.a)(o,2),s=i[0],d=i[1],E=Object(n.useState)(""),p=Object(c.a)(E,2),g=p[0],h=p[1],b=Object(u.f)(),f=Object(n.useState)(!1),v=Object(c.a)(f,2),y=v[0],k=v[1];return r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(ke,{isLoggedin:t}),r.a.createElement(D.a,{className:"main-content",container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(de.a,{className:l.root},r.a.createElement(C.a,{component:"h1",color:"textPrimary",style:{textAlign:"center"}},"Sign In"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(!0),b.push("/")}},r.a.createElement(Le.a,{className:l.margin,id:"input-with-icon-textfield",label:"Email",type:"email",placeholder:"email",onChange:function(e){return d(e.target.value)},value:s,autoComplete:"off",helperText:"Enter email address",variant:"outlined",required:!0,InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement(We.a,null))}}),r.a.createElement("br",null),r.a.createElement(Le.a,{className:l.margin,id:"input-with-icon-textfield2",label:"Password",placeholder:"password",autoComplete:"false",required:!0,type:y?"text":"password",variant:"outlined",helperText:"Enter your password",onChange:function(e){return h(e.target.value)},value:g,InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement(Ie.a,null)),endAdornment:r.a.createElement(Be.a,{position:"end"},r.a.createElement(J.a,{"aria-label":"toggle password visibility",onClick:function(){k(!y)},onMouseDown:function(e){e.preventDefault()},edge:"end"},y?r.a.createElement(_e.a,null):r.a.createElement(Re.a,null)))}}),r.a.createElement("br",null),r.a.createElement(x.a,{type:"submit",variant:"contained",color:"inherit"},"Login")),r.a.createElement("br",null),r.a.createElement(C.a,{component:"h3",color:"error",style:{textAlign:"center"}},"Not A member? ",r.a.createElement(m.b,{to:"/signup"},"Sign up!")))),r.a.createElement(I,null)))}var Me=a(200),Fe=Object(g.a)((function(e){return{margin:{margin:e.spacing(1)},root:{borderRadius:25,maxWidth:350,boxSizing:"border-box",boxShadow:"2px 2px 5px 2px"}}}));function ze(e){var t=e.isLoggedin,a=e.setLogin,l=Fe(),o=Object(u.f)(),i=Object(n.useState)(""),s=Object(c.a)(i,2),d=s[0],E=s[1],p=Object(n.useState)(""),g=Object(c.a)(p,2),h=g[0],b=g[1],f=Object(n.useState)(""),v=Object(c.a)(f,2),y=v[0],k=v[1],j=Object(n.useState)(!1),P=Object(c.a)(j,2),O=P[0],S=P[1];return r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(ke,{isLoggedin:t}),r.a.createElement(D.a,{className:"main-content",container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(de.a,{className:l.root},r.a.createElement(C.a,{component:"h1",color:"textPrimary",style:{textAlign:"center"}},"Sign Up!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(!0),o.push("/")}},r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{className:l.margin,id:"input-with-icon-textfield0",label:"Name",type:"text",placeholder:"Full Name",onChange:function(e){return k(e.target.value)},value:y,autoComplete:"off",helperText:"Enter Your Full Name",variant:"outlined",required:!0,InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement(Me.a,null))}})),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{className:l.margin,id:"input-with-icon-textfield",label:"Email",type:"email",placeholder:"email",onChange:function(e){return E(e.target.value)},value:d,autoComplete:"off",helperText:"Enter email address",variant:"outlined",required:!0,InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement(We.a,null))}})),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{className:l.margin,id:"input-with-icon-textfield2",label:"Password",placeholder:"password",autoComplete:"false",required:!0,type:O?"text":"password",variant:"outlined",helperText:"Enter your password",onChange:function(e){return b(e.target.value)},value:h,InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement(Ie.a,null)),endAdornment:r.a.createElement(Be.a,{position:"end"},r.a.createElement(J.a,{"aria-label":"toggle password visibility",onClick:function(){S(!O)},onMouseDown:function(e){e.preventDefault()},edge:"end"},O?r.a.createElement(_e.a,null):r.a.createElement(Re.a,null)))}})),r.a.createElement(x.a,{type:"submit",variant:"contained",color:"inherit"},"Sign Up")),r.a.createElement("br",null),r.a.createElement(C.a,{component:"h3",style:{textAlign:"center",color:"green"}},"Alreday a Member? ",r.a.createElement(m.b,{to:"/login"},"Sign In!")))),r.a.createElement(I,null)))}var Ue=a(96),Ge=a(204),Je=a(205),He=a(201),Xe=Object(g.a)({root:{maxWidth:345,margin:10,borderRadius:25},media:{height:140},title:{flexGrow:1}});function Ye(){var e=Xe(),t=Object(n.useState)([]),a=Object(c.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){o(K),console.log("effect")}),[]),r.a.createElement(w.a,null,r.a.createElement(U.a,{position:"static"},r.a.createElement(G.a,null,r.a.createElement(m.b,{to:"/profile"},r.a.createElement(J.a,null,r.a.createElement(He.a,null))))),r.a.createElement(w.a,null,r.a.createElement(D.a,{className:"inner-content",container:!0,direction:"row",justify:"center",alignItems:"center"},K.length?l.map((function(t){return r.a.createElement(h.a,{key:t.id,className:e.root},r.a.createElement(b.a,null,r.a.createElement(y.a,{className:e.media,image:t.image,title:t.name}),r.a.createElement(v.a,null,r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(C.a,{variant:"subtitle2",color:"inherit",component:"span"},r.a.createElement("small",null,r.a.createElement(T.a,null),"Author:")," ",t.author),r.a.createElement(C.a,{variant:"subtitle1",color:"inherit",component:"p"},r.a.createElement("small",null,r.a.createElement(q.a,null),"Posted by:"),"  ",t.postedBy),r.a.createElement(C.a,{variant:"subtitle2",color:"inherit",component:"p"},r.a.createElement("small",null,"Original Price :"),"Rs.  ",t.originalPrice),r.a.createElement(C.a,{variant:"subtitle2",color:"inherit",component:"strong"},r.a.createElement("small",null,"Discounted Price :"),"Rs.  ",t.discountedPrice),r.a.createElement(z.a,null),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},t.description))),r.a.createElement(f.a,null,r.a.createElement(x.a,{size:"small",color:"primary"},r.a.createElement(m.b,{style:{textDecoration:"none",color:"inherit"},to:{pathname:"/edit",search:"?id=".concat(t.id),state:{id:"".concat(t._id),author:"".concat(t.author),name:"".concat(t.name),description:"".concat(t.description),image:"".concat(t.image),originalPrice:"".concat(t.originalPrice),discountedPrice:"".concat(t.discountedPrice)}}},"Edit"))))})):r.a.createElement(w.a,null,r.a.createElement(F,null)))))}function Ze(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",textAlign:"center",alignContent:"center",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement("p",{style:{color:"red"}},"Looks like you directly jumped to this page."),r.a.createElement("p",null,r.a.createElement("h4",null,"Go back to ",r.a.createElement(m.b,{to:"/myBooks"},"Previous Page"),"and select item you want."))))}function $e(e){var t=e.isLoggedin,a=(e.props,Object(u.g)()),n=Object(u.f)(),l=a.state,o=r.a.useState({name:void 0!==l?l.name:"",description:void 0!==l?l.description:"",author:void 0!==l?l.author:"",originalPrice:void 0!==l?l.originalPrice:"",discountedPrice:void 0!==l?l.discountedPrice:"",image:"",postedBy:"Laxman Bhusal"}),i=Object(c.a)(o,2),m=i[0],s=i[1],d=function(e){return function(t){s(Object(Se.a)(Object(Se.a)({},m),{},Object(Oe.a)({},e,t.target.value)))}};return void 0!==l?r.a.createElement(w.a,null,r.a.createElement(w.a,null,r.a.createElement(ke,{isLoggedin:t}),r.a.createElement(w.a,{className:"main-content"},r.a.createElement(C.a,{style:{textAlign:"center"},component:"h2",variant:"subtitle2"},"Add a Book:"),r.a.createElement(D.a,{container:!0,alignContent:"center",alignItems:"center",justify:"center"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.push("/profile")}},r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Book Name",variant:"outlined",type:"text",required:!0,value:m.name,onChange:d("name"),lang:"en",fullWidth:!0,style:{margin:8}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Author",variant:"outlined",value:m.author,onChange:d("author"),type:"text",required:!0,lang:"en",fullWidth:!0,style:{margin:8}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Description",variant:"outlined",value:m.description,onChange:d("description"),multiline:!0,fullWidth:!0,rows:3,type:"text",required:!0,lang:"en",style:{margin:8}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Original Price",variant:"outlined",value:m.originalPrice,onChange:d("originalPrice"),type:"number",required:!0,lang:"en",fullWidth:!0,style:{margin:8},InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement("strong",null,"Rs."))}})),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(Le.a,{label:"Price",variant:"outlined",type:"number",required:!0,value:m.discountedPrice,onChange:d("discountedPrice"),lang:"en",fullWidth:!0,style:{margin:8},InputProps:{startAdornment:r.a.createElement(Be.a,{position:"start"},r.a.createElement("strong",null,"Rs."))}})),r.a.createElement("br",null),r.a.createElement(C.a,{component:"strong",variant:"subtitle2"},"Image:"),r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"contained-button-file",type:"file",value:m.image,onChange:d("image")}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(x.a,{variant:"contained",color:"primary",component:"span"},"Upload")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Ae.a,null,r.a.createElement(x.a,{type:"submit",color:"secondary",variant:"outlined"},"Submit")))))),r.a.createElement(I,null)):r.a.createElement(Ze,null)}var Qe=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),g=Object(c.a)(o,2),h=g[0],b=g[1],f=a?"dark":"light",v=a?s.a[500]:d.a[500],y=a?E.a[900]:p.a[500],x=Object(n.useState)([]),w=Object(c.a)(x,2),C=w[0],k=w[1],j=Object(n.useState)([]),P=Object(c.a)(j,2),O=P[0],S=P[1],A=Object(n.useState)([]),L=Object(c.a)(A,2),B=L[0],N=L[1];Object(n.useEffect)((function(){var e=localStorage.getItem("dark");k(K),console.log("darkmode state from localStorage:",e),null===e?e=!1:l(JSON.parse(e))}),[]);var W=Object(Ue.a)({palette:{type:f,primary:{main:v},secondary:{main:y}}});return r.a.createElement(Ge.a,{theme:W},r.a.createElement(Je.a,null),r.a.createElement(m.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(se,{isLoggedin:h,setLogin:b,datas:C,Cart:O,Wish:B,addToCart:function(e){var t=[].concat(Object(i.a)(O),[e]);S(t),console.log(t)},addToWish:function(e){var t=[].concat(Object(i.a)(B),[e]);N(t),console.log(t)},setCart:S,setWish:N})),r.a.createElement(u.a,{path:"/profile"},r.a.createElement(Pe,{darkState:a,handleThemeChange:function(){l(!a),localStorage.setItem("dark",!a)},isLoggedin:h,setLogin:b})),r.a.createElement(u.a,{path:"/add"},r.a.createElement(Ne,{isLoggedin:h,setLogin:b})),r.a.createElement(u.a,{path:"/login"},r.a.createElement(Ke,{isLoggedin:h,setLogin:b})),r.a.createElement(u.a,{path:"/signup"},r.a.createElement(ze,{isLoggedin:h,setLogin:b})),r.a.createElement(u.a,{path:"/myBooks"},r.a.createElement(Ye,null)),r.a.createElement(u.a,{path:"/edit"},r.a.createElement($e,null)))))},Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function et(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Qe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):et(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):et(t,e)}))}}()}},[[120,1,2]]]);