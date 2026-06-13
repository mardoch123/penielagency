import{c as o}from"./index-r2aKEJLZ.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=o("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);function y(t,a){const s=(a.latitude-t.latitude)*Math.PI/180,i=(a.longitude-t.longitude)*Math.PI/180,e=Math.sin(s/2),n=Math.sin(i/2),c=e*e+Math.cos(t.latitude*Math.PI/180)*Math.cos(a.latitude*Math.PI/180)*n*n;return 6371*2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}function r(t){return`https://maps.google.com/maps?q=${t.latitude},${t.longitude}`}export{h as L,y as c,r as g};
