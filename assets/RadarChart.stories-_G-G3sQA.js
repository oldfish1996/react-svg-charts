import{R as t}from"./index-JhL3uwfD.js";import{p as M,f as be,n as fe,g as z,c as j,F as ke,O as le,a as we}from"./OptionToggle-DFEy9Z-x.js";function V(r,d,l,h,k){const i=[],y=2*Math.PI/h,c=Math.atan2(k.y-d,k.x-r);for(let p=0;p<h;p++){const a=c+p*y;i.push({x:r+l*Math.cos(a),y:d+l*Math.sin(a)})}return i}function $e(r,d,l,h,k){const{cpX:i,cpY:y}=k,c=r.map((a,m)=>{const $=d[m]||1;return V(i,y,a/$*h,l,{x:i,y:(1-a/$)*h})[m]}),p=c.reduce((a,m,$)=>$===0?`${a}M${m.x} ${m.y}`:$===c.length-1?`${a}L${m.x} ${m.y}Z`:`${a}L${m.x} ${m.y}`,"");return{valuesPoints:c,valuesPath:p}}function qe(r,d,l){return r===0?{align:"middle",baseline:"auto",translateX:0,translateY:-l}:0<r&&r<d/4?{align:"start",baseline:"auto",translateX:l,translateY:0}:r===d/4?{align:"start",baseline:"middle",translateX:l,translateY:0}:d/4<r&&r<d/2?{align:"start",baseline:"hanging",translateX:l,translateY:0}:r===d/2?{align:"middle",baseline:"hanging",translateX:0,translateY:l}:d/2<r&&r<3/4*d?{align:"end",baseline:"hanging",translateX:-l,translateY:0}:r===3/4*d?{align:"end",baseline:"middle",translateX:-l,translateY:0}:{align:"end",baseline:"auto",translateX:-l,translateY:0}}function ue({r,cp:d,splitNumber:l,colors:h,splitLine:k}){const{cpX:i,cpY:y}=d,c=y-r,p=y+r,a=1/l*r,m=Array.from({length:l}).map((u,n)=>(1-n/l)*r),$=m.map((u,n)=>{const o=m[n];if(n<l-1){const b=m[n+1];return`M${i} ${c+n*a}
              A${o} ${o} 0 1 1 ${i} ${p-n*a}
              A${o} ${o} 0 1 1 ${i} ${c+n*a}
              M${i} ${c+(n+1)*a}
              A${b} ${b} 0 1 0 ${i} ${p-(n+1)*a}
              A${b} ${b} 0 1 0 ${i} ${c+(n+1)*a}`}return`M${i} ${c+n*a}
              A${o} ${o} 0 1 1 ${i} ${p-n*a}
              A${o} ${o} 0 1 1 ${i} ${c+n*a}`}),S=m.reduce((u,n,o)=>`${u}M${i} ${c+o*a}
     A${n} ${n} 0 1 1 ${i} ${p-o*a}
     A${n} ${n} 0 1 1 ${i} ${c+o*a}`,""),{width:x,color:P,dash:T}=k,{rgb:O,opacity:A}=M(P);return t.createElement(t.Fragment,null,Array.isArray(h)?$.map((u,n)=>t.createElement("path",{key:n,d:u,fill:h[n]?h[n]:"none"})):null,t.createElement("path",{d:S,fill:"none",strokeWidth:x,stroke:O,strokeOpacity:A,strokeDasharray:T}))}function de({r,n:d,cp:l,splitNumber:h,colors:k,splitLine:i}){const{cpX:y,cpY:c}=l,p=1/h*r,a=Array.from({length:h}).map((A,u)=>(1-u/h)*r),m=a.map((A,u)=>{const n=a[u],o=V(y,c,n,d,{x:y,y:u*p}),b=o.reduce((w,s,C)=>C===0?`${w}M${s.x} ${s.y}`:C===o.length-1?`${w}L${s.x} ${s.y}Z`:`${w}L${s.x} ${s.y}`,"");if(u<h-1){const w=a[u+1],C=V(y,c,w,d,{x:y,y:(u+1)*p}).reduce((X,q,B)=>B===0?`${X}M${q.x} ${q.y}`:B===o.length-1?`${X}L${q.x} ${q.y}Z`:`${X}L${q.x} ${q.y}`,"");return b+C}return b}),$=a.reduce((A,u,n)=>{const o=V(y,c,u,d,{x:y,y:n*p}),b=o.reduce((w,s,C)=>C===0?`${w}M${s.x} ${s.y}`:C===o.length-1?`${w}L${s.x} ${s.y}Z`:`${w}L${s.x} ${s.y}`,"");return A+b},""),{width:S,color:x,dash:P}=i,{rgb:T,opacity:O}=M(x);return t.createElement(t.Fragment,null,Array.isArray(k)?m.map((A,u)=>t.createElement("path",{key:u,fill:k[u]?k[u]:"none",d:A,fillRule:"evenodd"})):null,t.createElement("path",{d:$,fill:"none",strokeWidth:S,stroke:T,strokeOpacity:O,strokeDasharray:P}))}ue.__docgenInfo={description:"",methods:[],displayName:"CircleCoords",props:{r:{required:!0,tsType:{name:"number"},description:""},cp:{required:!0,tsType:{name:"signature",type:"object",raw:"{ cpX: number; cpY: number }",signature:{properties:[{key:"cpX",value:{name:"number",required:!0}},{key:"cpY",value:{name:"number",required:!0}}]}},description:""},splitNumber:{required:!0,tsType:{name:"number"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},splitLine:{required:!0,tsType:{name:"signature",type:"object",raw:"{ width: number; color: string; dash?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"dash",value:{name:"string",required:!1}}]}},description:""}}};de.__docgenInfo={description:"",methods:[],displayName:"PolygonCoords",props:{r:{required:!0,tsType:{name:"number"},description:""},n:{required:!0,tsType:{name:"number"},description:""},cp:{required:!0,tsType:{name:"signature",type:"object",raw:"{ cpX: number; cpY: number }",signature:{properties:[{key:"cpX",value:{name:"number",required:!0}},{key:"cpY",value:{name:"number",required:!0}}]}},description:""},splitNumber:{required:!0,tsType:{name:"number"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},splitLine:{required:!0,tsType:{name:"signature",type:"object",raw:"{ width: number; color: string; dash?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"dash",value:{name:"string",required:!1}}]}},description:""}}};const H=({option:r,style:d,className:l,...h})=>{var J;const{width:k,height:i,dataset:y}=r,c=(J=r.splitArea)==null?void 0:J.color,{indicator:p,shape:a,padding:m,splitNumber:$,indicatorStyle:S,axisLine:x,splitLine:P}=be(r),T=fe(m),O=T.top,A=T.right,u=T.bottom,n=T.left,o=S.fontSize??ke,b=S.gap??6,w=p.map(e=>e.text).map(e=>{if(Array.isArray(e)){let g=z(e[0],o);return e.forEach(f=>{g=Math.max(g,z(f,o))}),g}return z(e,o)}),s=p.length,C=(w[Math.floor(s/4)]||0)+b+A,X=(w[Math.ceil(3*s/4)]||0)+b+n,q=o*1.4+b+O,B=s%2?u:q+b+u,pe=(k-C-X)/2,me=(i-q-B)/2,F=Math.min(pe,me),Y=X+F,v=(i+q)/2,ge=p.map(e=>e.max),he=y.map(e=>{var g,f,L,E,R,_,N,W,K,Q;return{...$e(e.values,ge,s,F,{cpX:Y,cpY:v}),lineColor:((g=e==null?void 0:e.lineStyle)==null?void 0:g.color)||j.color.chart.radar,lineWidth:((f=e==null?void 0:e.lineStyle)==null?void 0:f.width)||1,lineDash:(L=e==null?void 0:e.lineStyle)==null?void 0:L.dash,symbolColor:((E=e==null?void 0:e.symbol)==null?void 0:E.color)||((R=e==null?void 0:e.lineStyle)==null?void 0:R.color)||j.color.chart.radar,symbolWidth:((_=e==null?void 0:e.symbol)==null?void 0:_.width)||3,symbolBorderWidth:(W=(N=e==null?void 0:e.symbol)==null?void 0:N.border)==null?void 0:W.width,symbolBorderColor:((Q=(K=e==null?void 0:e.symbol)==null?void 0:K.border)==null?void 0:Q.color)||"#fff",areaColor:e.areaColor?M(e.areaColor).rgb:"none",areaColorOpacity:e.areaColor?M(e.areaColor).opacity:"none"}}),I=V(Y,v,F,s,{x:Y,y:v-F}),ye=p.map((e,g)=>{const{text:f,shiftX:L,shiftY:E}=e,R=I[g].x,_=I[g].y,N=g<s/2?1:-1;return{radialPointX:R,radialPointY:_,radialPath:`M${Y} ${v}L${I[g].x} ${I[g].y}`,label:Array.isArray(f)?f.map(W=>({txt:W,shift:N*((w[g]||0)-z(W,o))/2})):f,shiftX:L,shiftY:E,...qe(g,s,b)}});return t.createElement("div",{className:l,style:{position:"relative",width:`${k}px`,height:`${i}px`,fontSize:0,...d},...h},t.createElement("svg",{width:k,height:i},a==="circle"?t.createElement(ue,{r:F,cp:{cpX:Y,cpY:v},splitNumber:$,colors:c,splitLine:P}):t.createElement(de,{r:F,n:s,cp:{cpX:Y,cpY:v},splitNumber:$,colors:c,splitLine:P}),ye.map((e,g)=>t.createElement(t.Fragment,{key:g},x.show?t.createElement("path",{d:e.radialPath,stroke:M(x.color||j.color.chart.axisLine).rgb,strokeOpacity:M(x.color||j.color.chart.axisLine).opacity,strokeWidth:x.width,strokeDasharray:x.dash,strokeLinejoin:"round"}):null,t.createElement("text",{textAnchor:e.align,dominantBaseline:e.baseline,x:e.radialPointX+e.translateX+e.shiftX,y:e.radialPointY+e.translateY+e.shiftY,fill:S.fontColor,style:{fontSize:`${o}px`,fontFamily:j.typography.fontFamily.sans}},Array.isArray(e.label)?t.createElement(t.Fragment,null,e.label.map(({txt:f,shift:L},E)=>t.createElement("tspan",{key:E,x:e.radialPointX+e.translateX+L,dy:E?"1.3em":void 0},f))):e.label))),he.map((e,g)=>t.createElement(t.Fragment,{key:g},t.createElement("path",{d:e.valuesPath,stroke:e.lineColor,strokeWidth:e.lineWidth,strokeDasharray:e.lineDash,fill:e.areaColor,fillOpacity:e.areaColorOpacity}),e.valuesPoints.map((f,L)=>t.createElement(t.Fragment,{key:L},e.symbolBorderWidth?t.createElement("circle",{cx:f.x,cy:f.y,r:e.symbolBorderWidth+e.symbolWidth,fill:e.symbolBorderColor}):null,t.createElement("circle",{cx:f.x,cy:f.y,r:e.symbolWidth,fill:e.symbolColor})))))))};H.__docgenInfo={description:"",methods:[],displayName:"RadarChart",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  width: number;
  height: number;
  shape?: 'circle' | 'polygon';
  padding?: ChartPadding;
  splitNumber?: number;
  indicator: RadarIndicator[];
  indicatorStyle?: {
    fontSize?: number;
    fontColor?: string;
    gap?: number;
  };
  splitArea?: { color: string[] };
  splitLine?: { color?: string; width?: number; dash?: string };
  axisLine?: { show?: boolean; color?: string; width?: number; dash?: string };
  dataset: {
    values: number[];
    areaColor?: string;
    lineStyle?: { width?: number; color?: string; dash?: string };
    symbol?: { width?: number; color?: string; border?: { width: number; color: string } };
  }[];
}`,signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:"'circle' | 'polygon'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'polygon'"}],required:!1}},{key:"padding",value:{name:"union",raw:`| number
| { top?: number; right?: number; bottom?: number; left?: number }`,elements:[{name:"number"},{name:"signature",type:"object",raw:"{ top?: number; right?: number; bottom?: number; left?: number }",signature:{properties:[{key:"top",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}},{key:"bottom",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}}]}}],required:!1}},{key:"splitNumber",value:{name:"number",required:!1}},{key:"indicator",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string | string[];
  max: number;
  shiftX?: number;
  shiftY?: number;
}`,signature:{properties:[{key:"text",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"shiftX",value:{name:"number",required:!1}},{key:"shiftY",value:{name:"number",required:!1}}]}}],raw:"RadarIndicator[]",required:!0}},{key:"indicatorStyle",value:{name:"signature",type:"object",raw:`{
  fontSize?: number;
  fontColor?: string;
  gap?: number;
}`,signature:{properties:[{key:"fontSize",value:{name:"number",required:!1}},{key:"fontColor",value:{name:"string",required:!1}},{key:"gap",value:{name:"number",required:!1}}]},required:!1}},{key:"splitArea",value:{name:"signature",type:"object",raw:"{ color: string[] }",signature:{properties:[{key:"color",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"splitLine",value:{name:"signature",type:"object",raw:"{ color?: string; width?: number; dash?: string }",signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}}]},required:!1}},{key:"axisLine",value:{name:"signature",type:"object",raw:"{ show?: boolean; color?: string; width?: number; dash?: string }",signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}}]},required:!1}},{key:"dataset",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  values: number[];
  areaColor?: string;
  lineStyle?: { width?: number; color?: string; dash?: string };
  symbol?: { width?: number; color?: string; border?: { width: number; color: string } };
}`,signature:{properties:[{key:"values",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"areaColor",value:{name:"string",required:!1}},{key:"lineStyle",value:{name:"signature",type:"object",raw:"{ width?: number; color?: string; dash?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"dash",value:{name:"string",required:!1}}]},required:!1}},{key:"symbol",value:{name:"signature",type:"object",raw:"{ width?: number; color?: string; border?: { width: number; color: string } }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"border",value:{name:"signature",type:"object",raw:"{ width: number; color: string }",signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!0}}]},required:!1}}]},required:!1}}]}}],raw:`{
  values: number[];
  areaColor?: string;
  lineStyle?: { width?: number; color?: string; dash?: string };
  symbol?: { width?: number; color?: string; border?: { width: number; color: string } };
}[]`,required:!0}}]}},description:""}}};const xe=[{path:"width",type:"number",group:"Base",defaultValue:"-",description:"画布宽度（px）。"},{path:"height",type:"number",group:"Base",defaultValue:"-",description:"画布高度（px）。"},{path:"shape",type:"'polygon' | 'circle'",group:"Base",defaultValue:"'polygon'",description:"网格形状：多边形或圆形。"},{path:"padding",type:"number | {top,right,bottom,left}",group:"Base",defaultToken:"chartTokens.spacing.chartPadding",description:"图表内边距，影响雷达半径与文字布局。"},{path:"splitNumber",type:"number",group:"Grid",defaultValue:"3",description:"网格分段数。"},{path:"indicator",type:"Array<{ text: string | string[]; max: number; shiftX?: number; shiftY?: number }>",group:"Indicator",defaultValue:"-",description:"维度配置：文本/最大值/微调偏移。"},{path:"indicatorStyle.fontSize",type:"number",group:"Indicator",defaultToken:"chartTokens.typography.fontSize.axis",description:"指标文本字号（px）。"},{path:"indicatorStyle.fontColor",type:"string",group:"Indicator",defaultToken:"chartTokens.color.text.secondary",description:"指标文本颜色。"},{path:"indicatorStyle.gap",type:"number",group:"Indicator",defaultToken:"chartTokens.spacing.radar.indicatorGap",description:"指标文本与顶点的间距（px）。"},{path:"splitLine.width",type:"number",group:"Grid",defaultToken:"chartTokens.stroke.width.axisLine",description:"网格分割线宽度（px）。"},{path:"splitLine.color",type:"string",group:"Grid",defaultToken:"chartTokens.color.grid.line",description:"网格分割线颜色。"},{path:"splitLine.dash",type:"string",group:"Grid",defaultValue:"undefined",description:"网格分割线虚线（SVG strokeDasharray）。"},{path:"splitArea.color",type:"string[]",group:"Grid",defaultValue:"undefined",description:"网格分割区域的交替背景色。"},{path:"axisLine.show",type:"boolean",group:"Axis",defaultValue:"true",description:"是否绘制从中心指向顶点的轴线。"},{path:"axisLine.width",type:"number",group:"Axis",defaultToken:"chartTokens.stroke.width.axisLine",description:"轴线宽度（px）。"},{path:"axisLine.color",type:"string",group:"Axis",defaultToken:"chartTokens.color.chart.axisLine",description:"轴线颜色。"},{path:"axisLine.dash",type:"string",group:"Axis",defaultValue:"undefined",description:"轴线虚线（SVG strokeDasharray）。"},{path:"dataset",type:"Array<{ values: number[]; areaColor?: string; lineStyle?: {...}; symbol?: {...} }>",group:"Series",defaultValue:"-",description:"雷达数据集数组。"},{path:"dataset[].values",type:"number[]",group:"Series",defaultValue:"-",description:"每个维度的取值数组（长度需与 indicator 一致）。"},{path:"dataset[].areaColor",type:"string",group:"Series",defaultValue:"undefined",description:"面积填充颜色（支持 rgba）。"},{path:"dataset[].lineStyle.color",type:"string",group:"Series",defaultToken:"chartTokens.color.chart.radar",description:"轮廓线颜色。"}],Se={title:"Charts/RadarChart",component:H},ce={width:360,height:320,shape:"polygon",splitNumber:4,padding:8,indicatorStyle:{fontSize:10,fontColor:"#5e6570",gap:6},indicator:[{text:"A",max:100},{text:"B",max:100},{text:"C",max:100},{text:"D",max:100},{text:"E",max:100},{text:"F",max:100}],splitArea:{color:["rgba(0,0,0,0.02)","rgba(0,0,0,0.04)","rgba(0,0,0,0.06)","rgba(0,0,0,0.08)"]},splitLine:{color:"rgba(0,0,0,0.15)",width:1},axisLine:{show:!0,color:"rgba(0,0,0,0.18)",width:1},dataset:[{values:[60,82,45,72,55,90],areaColor:"rgba(0,122,255,0.15)",lineStyle:{color:"#007AFF",width:1.5},symbol:{width:3,color:"#007AFF",border:{width:1.5,color:"#fff"}}}]},D={args:{option:ce},render:r=>t.createElement("div",{style:{display:"grid",gap:12}},t.createElement(H,{option:r.option}),t.createElement(le,{value:r.option}))},G={args:{option:{...ce,shape:"circle",splitNumber:5,splitLine:{color:"rgba(0,0,0,0.12)",width:1,dash:"4 2"},axisLine:{show:!0,color:"rgba(0,0,0,0.18)",width:1,dash:"2 2"},dataset:[{values:[35,68,72,46,62,80],areaColor:"rgba(240,65,66,0.12)",lineStyle:{color:"#f04142",width:1.5},symbol:{width:3,color:"#f04142",border:{width:1.5,color:"#fff"}}},{values:[60,82,45,72,55,90],areaColor:"rgba(0,122,255,0.12)",lineStyle:{color:"#007AFF",width:1.5},symbol:{width:3,color:"#007AFF",border:{width:1.5,color:"#fff"}}}]}},render:r=>t.createElement("div",{style:{display:"grid",gap:12}},t.createElement(H,{option:r.option}),t.createElement(le,{value:r.option}))},Z={render:()=>t.createElement(we,{meta:xe})};var U,ee,re;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    option
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <RadarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(re=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,ne;G.parameters={...G.parameters,docs:{...(te=G.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    option: {
      ...option,
      shape: 'circle',
      splitNumber: 5,
      splitLine: {
        color: 'rgba(0,0,0,0.12)',
        width: 1,
        dash: '4 2'
      },
      axisLine: {
        show: true,
        color: 'rgba(0,0,0,0.18)',
        width: 1,
        dash: '2 2'
      },
      dataset: [{
        values: [35, 68, 72, 46, 62, 80],
        areaColor: 'rgba(240,65,66,0.12)',
        lineStyle: {
          color: '#f04142',
          width: 1.5
        },
        symbol: {
          width: 3,
          color: '#f04142',
          border: {
            width: 1.5,
            color: '#fff'
          }
        }
      }, {
        values: [60, 82, 45, 72, 55, 90],
        areaColor: 'rgba(0,122,255,0.12)',
        lineStyle: {
          color: '#007AFF',
          width: 1.5
        },
        symbol: {
          width: 3,
          color: '#007AFF',
          border: {
            width: 1.5,
            color: '#fff'
          }
        }
      }]
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <RadarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(ne=(ae=G.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,ie,se;Z.parameters={...Z.parameters,docs:{...(oe=Z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <OptionTable meta={radarOptionMeta} />
}`,...(se=(ie=Z.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Te=["Basic","Circle","Option"];export{D as Basic,G as Circle,Z as Option,Te as __namedExportsOrder,Se as default};
