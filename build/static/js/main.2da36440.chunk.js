(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(75),c=t(180),l=t(185),i=t(7),d=t(188),s=t(186),m=t(189),u=t(181);t(190);var p=t(109),f=t(9),b=t(191),g=t(192),h=t(193),x=t(194),E=t(195),k=t(177),j=t(184),v=t(176),O=t(96),y=t.n(O),w=(t(94),function(e){var n=255*e/100,t=255*(100-e)/100;return"rgb(".concat(Math.floor(n),",").concat(Math.floor(t),",0)")}),S=Object(f.a)(function(e){e.expand;var n=Object(p.a)(e,["expand"]);return a.createElement(v.a,n)})(function(e){var n=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})}});function F(e){var n=a.useState(!1),t=Object(i.a)(n,2),r=t[0],o=t[1];return a.createElement(b.a,{sx:{}},a.createElement(g.a,{avatar:a.createElement(j.a,{sx:{bgcolor:w(e.healthScore)},"aria-label":"recipe"},e.title.charAt(0)),title:e.title,subheader:e.subheader}),a.createElement(h.a,{component:"img",height:"194",image:e.picture,alt:e.title}),a.createElement(x.a,null,a.createElement(s.a,{variant:"body2",color:"text.secondary"},a.createElement("div",{dangerouslySetInnerHTML:{__html:e.short}}))),a.createElement(E.a,{disableSpacing:!0},a.createElement(S,{expand:r,onClick:function(){o(!r)},"aria-expanded":r,"aria-label":"show more"},a.createElement(y.a,null))),a.createElement(k.a,{in:r,timeout:"auto",unmountOnExit:!0},a.createElement(x.a,null,a.createElement("div",{dangerouslySetInnerHTML:{__html:e.method}}))))}var z,I,M,L,A=t(182),C=t(179),_=t(196),B=t(197),R=t(93),D=t(25),H=t(100),J=(t(175),t(173)),P=t(101),T=t(198),U=t(174),V=t(58),W="#DAECFF",Y="#99CCF3",Z="#3399FF",q="#007FFF",G="#003A75",K="#f6f8fa",N="#eaeef2",Q="#d0d7de",X="#afb8c1",$="#8c959f",ee="#57606a",ne="#424a53",te="#32383f",ae="#24292f",re=(Object(V.a)("button")(function(e){var n=e.theme;return"\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  min-height: calc(1.5em + 22px);\n  min-width: 320px;\n  padding: 12px;\n  border-radius: 12px;\n  text-align: left;\n  line-height: 1.5;\n  background: ".concat("dark"===n.palette.mode?ae:"#fff",";\n  border: 1px solid ").concat("dark"===n.palette.mode?ne:Q,";\n  color: ").concat("dark"===n.palette.mode?X:ae,";\n\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 120ms;\n\n  &:hover {\n    background: ").concat("dark"===n.palette.mode?te:K,";\n    border-color: ").concat("dark"===n.palette.mode?ee:X,";\n  }\n\n  &.").concat(H.a.focusVisible," {\n    border-color: ").concat(Z,";\n    outline: 3px solid ").concat("dark"===n.palette.mode?q:Y,";\n  }\n\n  &.").concat(H.a.expanded," {\n    &::after {\n      content: '\u25b4';\n    }\n  }\n\n  &::after {\n    content: '\u25be';\n    float: right;\n  }\n  ")}),Object(V.a)("ul")(function(e){var n=e.theme;return"\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  padding: 6px;\n  margin: 12px 0;\n  min-width: 320px;\n  border-radius: 12px;\n  overflow: auto;\n  outline: 0px;\n  background: ".concat("dark"===n.palette.mode?ae:"#fff",";\n  border: 1px solid ").concat("dark"===n.palette.mode?ne:Q,";\n  color: ").concat("dark"===n.palette.mode?X:ae,";\n  box-shadow: 0px 4px 30px ").concat("dark"===n.palette.mode?ae:Q,";\n  ")}),Object(V.a)(J.a)(function(e){var n=e.theme;return"\n  list-style: none;\n  padding: 8px;\n  border-radius: 8px;\n  cursor: default;\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n\n  &.".concat(P.a.selected," {\n    background-color: ").concat("dark"===n.palette.mode?G:W,";\n    color: ").concat("dark"===n.palette.mode?W:G,";\n  }\n\n  &.").concat(P.a.highlighted," {\n    background-color: ").concat("dark"===n.palette.mode?te:N,";\n    color: ").concat("dark"===n.palette.mode?X:ae,";\n  }\n\n  &.").concat(P.a.highlighted,".").concat(P.a.selected," {\n    background-color: ").concat("dark"===n.palette.mode?G:W,";\n    color: ").concat("dark"===n.palette.mode?W:G,";\n  }\n\n  &.").concat(P.a.disabled," {\n    color: ").concat("dark"===n.palette.mode?ne:$,";\n  }\n\n  &:hover:not(.").concat(P.a.disabled,") {\n    background-color: ").concat("dark"===n.palette.mode?te:N,";\n    color: ").concat("dark"===n.palette.mode?X:ae,";\n  }\n  ")}),Object(V.a)("li")(z||(z=Object(D.a)(["\n  list-style: none;\n"])))),oe=Object(V.a)("span")(I||(I=Object(D.a)(["\n  display: block;\n  padding: 15px 0 5px 10px;\n  font-size: 0.75em;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05rem;\n  color: ",";\n"])),ee),ce=Object(V.a)("ul")(M||(M=Object(D.a)(["\n  list-style: none;\n  margin-left: 0;\n  padding: 0;\n\n  > li {\n    padding-left: 20px;\n  }\n"])));Object(V.a)(U.a)(L||(L=Object(D.a)(["\n  z-index: 1;\n"])));a.forwardRef(function(e,n){var t=Object(R.a)({Root:re,Label:oe,List:ce},e.components);return a.createElement(T.a,Object.assign({},e,{ref:n,components:t}))});function le(){return r.a.createElement(_.a,{position:"static"},r.a.createElement(B.a,null,r.a.createElement(s.a,{variant:"h6",color:"inherit",noWrap:!0},"6 Zufallsrezepte")))}var ie=Object(C.a)({typography:{background:"#f000"}});function de(){return r.a.createElement(l.a,{theme:ie})}var se=function(e){return e.replace(/(<([^>]+)>)/gi,"")},me=t(102);function ue(){return r.a.createElement(s.a,{variant:"body2",color:"text.secondary",align:"center"},"\xa9 ",r.a.createElement(u.a,{color:"inherit",href:"https://aleksiej.com/"},"aleksiej.com"),", ",(new Date).getFullYear())}Object(C.a)();function pe(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1];return r.a.useEffect(function(){me.a.get("https://aleksiej.website/random/").then(function(e){return console.log(e.data),e.data.map(function(e){return[e.recipes[0].diets.join(", "),e.recipes[0].title,e.recipes[0].image,e.recipes[0].summary,e.recipes[0].instructions,e.recipes[0].spoonacularSourceUrl,e.recipes[0].healthScore,e.recipes[0].extendedIngredients.map(function(e){return[e.id,e.original,e.amount,e.image,e.aisle]})]})}).then(function(e){console.log(e),o(e)}).catch(function(e){console.log(e)})},[]),console.log(t),r.a.createElement(d.a,null,r.a.createElement(c.a,null),r.a.createElement(le,null),r.a.createElement(A.a,{container:!0,spacing:4},t&&t.length>0&&t.map(function(e){return console.log("record",e[1]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{item:!0,xs:6,md:4},r.a.createElement(F,{title:e[1],subheader:e[0],picture:e[2],short:se(e[3]),method:e[4],healthScore:e[6]})))})),r.a.createElement(m.a,{sx:{my:4}},r.a.createElement(ue,null)),r.a.createElement(de,null))}var fe=t(91),be=t(103),ge=Object(be.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:fe.a.A400}}}),he=document.getElementById("root");Object(o.createRoot)(he).render(a.createElement(l.a,{theme:ge},a.createElement(c.a,null),a.createElement(pe,null)))},80:function(e,n,t){e.exports=t(122)},94:function(e,n,t){e.exports=t.p+"static/media/test.50f32ef6.jpg"}},[[80,2,1]]]);
//# sourceMappingURL=main.2da36440.chunk.js.map