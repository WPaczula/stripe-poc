(this["webpackJsonpstripe-poc"]=this["webpackJsonpstripe-poc"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(6),i=n.n(s),a=(n(12),n(2)),o=n.n(a),u=n(3),p=n(5),l=(n(14),n(7)),j=n.n(l).a.Jose;function f(t){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(o.a.mark((function t(e){var n,r,c,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://issuing-key.stripe.com/v1/keys").then((function(t){return t.json()}));case 2:return n=t.sent,r=j.Utils.importRsaPublicKey(n.jwk,"RSA-OAEP"),(c=new j.WebCryptographer).setContentEncryptionAlgorithm("A128CBC-HS256"),(s=new j.JoseJWE.Encrypter(c,r)).addHeader("kid",n.key_id),t.next=10,s.encrypt(e);case 10:return i=t.sent,t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=n(0);var b=function(){var t=Object(r.useState)("4252"),e=Object(p.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(""),i=Object(p.a)(s,2),a=i[0],l=i[1];return Object(d.jsxs)("div",{className:"App",style:{marginTop:"15px",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{style:{maxWidth:"100px"},value:n,onChange:function(t){c(t.currentTarget.value)}}),Object(d.jsx)("button",{style:{},onClick:function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l,t.next=3,f(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},children:"Encode"})]}),Object(d.jsx)("hr",{style:{marginTop:"15px"}}),Object(d.jsx)("code",{children:a})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.ec944b6b.chunk.js.map