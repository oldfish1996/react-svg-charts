import{R as r}from"./index-JhL3uwfD.js";import{p}from"./OptionToggle-DFEy9Z-x.js";function I(m,S){return!(typeof m!="number"||typeof S!="number"||Number.isNaN(m)||Number.isNaN(S))}function O(m,S,x){let f="";const k=m.length/2,F=1;let h=0,N=0,_=0,w=0,l=0,b=0,g=S,n=0;for(;n<k;n++){let t=m[g*2],e=m[g*2+1];if(g>=k||!I(t,e))break;if(g===S)f+=`M${t.toFixed(4)} ${e.toFixed(4)}`,_=t,w=e;else{let a=t-h,$=e-N;if(a*a+$*$<.5){g+=F;continue}if(x>0){let c=g+F,s=m[c*2],d=m[c*2+1];for(;s===t&&d===e&&n<k;)n++,c+=F,g+=F,s=m[c*2],d=m[c*2+1],t=m[g*2],e=m[g*2+1],a=t-h,$=e-N;const P=n+1;let E=.5,i=0,u=0,y=0,v=0;if(P>=k||!I(s,d))l=t,b=e;else{i=s-h,u=d-N;const q=t-h,z=s-t,M=e-N,A=d-e,C=Math.sqrt(q*q+M*M),o=Math.sqrt(z*z+A*A);E=o/(o+C),l=t-i*x*(1-E),b=e-u*x*(1-E),y=t+i*x*E,v=e+u*x*E,y=Math.min(y,Math.max(s,t)),v=Math.min(v,Math.max(d,e)),y=Math.max(y,Math.min(s,t)),v=Math.max(v,Math.min(d,e)),i=y-t,u=v-e,l=t-i*C/o,b=e-u*C/o,l=Math.min(l,Math.max(h,t)),b=Math.min(b,Math.max(N,e)),l=Math.max(l,Math.min(h,t)),b=Math.max(b,Math.min(N,e)),i=t-l,u=e-b,y=t+i*o/C,v=e+u*o/C}f+=`C${_.toFixed(4)} ${w.toFixed(4)} ${l.toFixed(4)} ${b.toFixed(4)} ${t.toFixed(4)} ${e.toFixed(4)}`,_=y,w=v}else f+=`L${t.toFixed(4)} ${e.toFixed(4)}`}h=t,N=e,g+=F}return{segPath:f,k:n}}const X=({data:m,baseData:S,index:x})=>{const{id:f,max:k,min:F,polyHeight:h,pointStartX:N,xInterval:_,grid:w}=S,{values:l,smooth:b,color:g,width:n,dash:t,area:e,lineStyle:a}=m,$=[],c=[];for(let o=0;o<l.length;o++){const j=l[o];if(typeof j!="number"||Number.isNaN(j)){$.push(Number.NaN,Number.NaN),c.push([Number.NaN,Number.NaN]);continue}const V=k-j,T=N+o*_,L=V*(h/(k-F))+w.top;$.push(T,L),c.push([T,L])}const s=h/(k-F||1),d=w.top+h,P=a==null?void 0:a.zeroValue,E=typeof P=="number"?(k-P)*s+w.top:d;let i=0,u="",y="";for(;i<$.length/2;){const{segPath:o,k:j}=O($,i,b);if(o){u+=o;const V=j+i-1;c[V]&&c[i]&&(y+=`${o}L${c[V][0].toFixed(4)} ${E.toFixed(4)}L${c[i][0].toFixed(4)} ${E.toFixed(4)}Z`)}i+=j+1}const v=a==null?void 0:a.segmentColor,q=a==null?void 0:a.segmentArea,z=!!v,M=`seg_area_above_${f}_${x}`,A=`seg_area_below_${f}_${x}`,C=z?B({values:l,smooth:b,max:k,ratio:s,gridTop:w.top,pointStartX:N,xInterval:_,baselineValue:P??0}):null;return r.createElement(r.Fragment,null,r.createElement("defs",null,e?r.createElement("linearGradient",{id:`area_color_${f}_${x}`,gradientUnits:"objectBoundingBox",x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:"0%",stopColor:p(e.start).rgb,stopOpacity:p(e.start).opacity}),r.createElement("stop",{offset:"100%",stopColor:p(e.end).rgb,stopOpacity:p(e.end).opacity})):null,z&&q?r.createElement(r.Fragment,null,r.createElement("linearGradient",{id:M,gradientUnits:"objectBoundingBox",x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:"0%",stopColor:p(q.above.start).rgb,stopOpacity:p(q.above.start).opacity}),r.createElement("stop",{offset:"100%",stopColor:p(q.above.end).rgb,stopOpacity:p(q.above.end).opacity})),r.createElement("linearGradient",{id:A,gradientUnits:"objectBoundingBox",x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:"0%",stopColor:p(q.below.start).rgb,stopOpacity:p(q.below.start).opacity}),r.createElement("stop",{offset:"100%",stopColor:p(q.below.end).rgb,stopOpacity:p(q.below.end).opacity}))):null),z&&C?r.createElement(r.Fragment,null,q?C.below.map((o,j)=>r.createElement("path",{key:`b_fill_${j}`,d:o.areaPath,fill:`url(#${A})`})):null,q?C.above.map((o,j)=>r.createElement("path",{key:`a_fill_${j}`,d:o.areaPath,fill:`url(#${M})`})):null,C.below.map((o,j)=>r.createElement("path",{key:`b_${j}`,d:o.strokePath,fill:"transparent",stroke:p(v.below).rgb,strokeOpacity:p(v.below).opacity,strokeWidth:n,strokeDasharray:t,strokeLinejoin:"bevel"})),C.above.map((o,j)=>r.createElement("path",{key:`a_${j}`,d:o.strokePath,fill:"transparent",stroke:p(v.above).rgb,strokeOpacity:p(v.above).opacity,strokeWidth:n,strokeDasharray:t,strokeLinejoin:"bevel"}))):r.createElement(r.Fragment,null,e?r.createElement("path",{d:y,fill:`url(#area_color_${f}_${x})`}):null,r.createElement("path",{d:u,fill:"transparent",stroke:p(g).rgb,strokeWidth:n,strokeOpacity:p(g).opacity,strokeDasharray:t,strokeLinejoin:"bevel"})))};function B(m){const{values:S,smooth:x,max:f,ratio:k,gridTop:F,pointStartX:h,xInterval:N,baselineValue:_}=m,w=(f-_)*k+F,l={above:[],below:[]},b=[],g=[];let n=null,t=null,e=null,a=null;function $(){e&&e.length>=2&&a&&(a==="above"?b.push(e):g.push(e)),e=null,a=null}for(let s=0;s<S.length;s++){const d=S[s];if(typeof d!="number"||Number.isNaN(d)){$(),n=null,t=null;continue}const P=h+s*N,E=(f-d)*k+F,i=d>=_?"above":"below",u={x:P,y:E,v:d};if(!n){e=[u],a=i,n=u,t=i;continue}if(t===i)e?e.push(u):(e=[n,u],a=i);else{const y=u.v-n.v,v=y===0?.5:(_-n.v)/y,z={x:n.x+(u.x-n.x)*v,y:w,v:_};e||(e=[n],a=t),e.push(z),$(),e=[z,u],a=i}n=u,t=i}$();function c(s){const d=[];for(const y of s)d.push(y.x,y.y);const{segPath:P}=O(d,0,x),E=s[0].x,i=s[s.length-1].x,u=`${P}L${i.toFixed(4)} ${w.toFixed(4)}L${E.toFixed(4)} ${w.toFixed(4)}Z`;return{strokePath:P,areaPath:u}}return l.above=b.map(c).filter(s=>s.strokePath),l.below=g.map(c).filter(s=>s.strokePath),l}X.__docgenInfo={description:"",methods:[],displayName:"Polyline",props:{data:{required:!0,tsType:{name:"intersection",raw:`LineSeries & {
  smooth: number;
  color: string;
  width: number;
  lineStyle?: {
    zeroValue: number;
    segmentColor?: { above: string; below: string };
    segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
  };
}`,elements:[{name:"signature",type:"object",raw:`{
  values: Array<number | undefined>;
  smooth?: number;
  color?: string;
  width?: number;
  dash?: string;
  area?: { start: string; end: string };
  lineStyle?: {
    zeroValue?: number;
    segmentColor?: { above: string; below: string };
    segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
  };
  points?: boolean;
  pointSize?: number;
}`,signature:{properties:[{key:"values",value:{name:"Array",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}],raw:"Array<number | undefined>",required:!0}},{key:"smooth",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}},{key:"area",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!1}},{key:"lineStyle",value:{name:"signature",type:"object",raw:`{
  zeroValue?: number;
  segmentColor?: { above: string; below: string };
  segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
}`,signature:{properties:[{key:"zeroValue",value:{name:"number",required:!1}},{key:"segmentColor",value:{name:"signature",type:"object",raw:"{ above: string; below: string }",signature:{properties:[{key:"above",value:{name:"string",required:!0}},{key:"below",value:{name:"string",required:!0}}]},required:!1}},{key:"segmentArea",value:{name:"signature",type:"object",raw:"{ above: { start: string; end: string }; below: { start: string; end: string } }",signature:{properties:[{key:"above",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}},{key:"below",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}}]},required:!1}}]},required:!1}},{key:"points",value:{name:"boolean",required:!1}},{key:"pointSize",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  smooth: number;
  color: string;
  width: number;
  lineStyle?: {
    zeroValue: number;
    segmentColor?: { above: string; below: string };
    segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
  };
}`,signature:{properties:[{key:"smooth",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"lineStyle",value:{name:"signature",type:"object",raw:`{
  zeroValue: number;
  segmentColor?: { above: string; below: string };
  segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
}`,signature:{properties:[{key:"zeroValue",value:{name:"number",required:!0}},{key:"segmentColor",value:{name:"signature",type:"object",raw:"{ above: string; below: string }",signature:{properties:[{key:"above",value:{name:"string",required:!0}},{key:"below",value:{name:"string",required:!0}}]},required:!1}},{key:"segmentArea",value:{name:"signature",type:"object",raw:"{ above: { start: string; end: string }; below: { start: string; end: string } }",signature:{properties:[{key:"above",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}},{key:"below",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}}]},required:!1}}]},required:!1}}]}}]},description:""},baseData:{required:!0,tsType:{name:"ReturnType",elements:[{name:"format"}],raw:"ReturnType<typeof format>"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Y=({data:m,baseData:S,index:x})=>{const{max:f,min:k,polyHeight:F,pointStartX:h,xInterval:N,grid:_}=S,{values:w,points:l,pointSize:b,color:g}=m,n=[];for(let t=0;t<w.length;t++){const e=w[t];if(typeof e!="number"||Number.isNaN(e)){n.push([Number.NaN,Number.NaN]);continue}const a=f-e,$=h+t*N,c=a*(F/(f-k))+_.top;n.push([$,c])}return r.createElement(r.Fragment,null,n.map(([t,e],a)=>Number.isNaN(t)||Number.isNaN(e)||!l?null:r.createElement(r.Fragment,{key:`${x}_${a}`},r.createElement("circle",{cx:t,cy:e,r:b/2,fill:g}))))};Y.__docgenInfo={description:"",methods:[],displayName:"Polypoints",props:{data:{required:!0,tsType:{name:"intersection",raw:`LineSeries & {
  points: boolean;
  pointSize: number;
  color: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  values: Array<number | undefined>;
  smooth?: number;
  color?: string;
  width?: number;
  dash?: string;
  area?: { start: string; end: string };
  lineStyle?: {
    zeroValue?: number;
    segmentColor?: { above: string; below: string };
    segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
  };
  points?: boolean;
  pointSize?: number;
}`,signature:{properties:[{key:"values",value:{name:"Array",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}],raw:"Array<number | undefined>",required:!0}},{key:"smooth",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}},{key:"area",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!1}},{key:"lineStyle",value:{name:"signature",type:"object",raw:`{
  zeroValue?: number;
  segmentColor?: { above: string; below: string };
  segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
}`,signature:{properties:[{key:"zeroValue",value:{name:"number",required:!1}},{key:"segmentColor",value:{name:"signature",type:"object",raw:"{ above: string; below: string }",signature:{properties:[{key:"above",value:{name:"string",required:!0}},{key:"below",value:{name:"string",required:!0}}]},required:!1}},{key:"segmentArea",value:{name:"signature",type:"object",raw:"{ above: { start: string; end: string }; below: { start: string; end: string } }",signature:{properties:[{key:"above",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}},{key:"below",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}}]},required:!1}}]},required:!1}},{key:"points",value:{name:"boolean",required:!1}},{key:"pointSize",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  points: boolean;
  pointSize: number;
  color: string;
}`,signature:{properties:[{key:"points",value:{name:"boolean",required:!0}},{key:"pointSize",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!0}}]}}]},description:""},baseData:{required:!0,tsType:{name:"ReturnType",elements:[{name:"format"}],raw:"ReturnType<typeof format>"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};export{X as P,Y as a};
