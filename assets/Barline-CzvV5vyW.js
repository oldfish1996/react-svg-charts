import{R as t}from"./index-JhL3uwfD.js";import{p as I,c as V}from"./OptionToggle-DFEy9Z-x.js";const _=({data:f,baseData:v,progress:h=1,activeIndex:y=null})=>{const{xInterval:k,pointStartX:q,polyHeight:m,polyWidth:w,max:l,min:a,grid:F}=v,{values:n,colors:s,barWidth:z,radius:A,shift:S,labels:C,labelFormatter:T,labelColor:W,labelFontSize:G,labelGap:i,zero:r}=f,H=n.length,B=n.map(u=>u>=r?m*((l-r)/(l-a))*(u-r)/(l-r||1):m*((r-a)/(l-a))*(r-u)/(r-a||1)),b=z||w/H/2;return t.createElement(t.Fragment,null,B.map((u,e)=>{const g=S+parseFloat((q+e*k-b/2).toFixed(4)),R=m*(r-a)/(l-a),d=F.top+m-R,p=u*h,c=n[e]>r?d-p:d,E=Array.isArray(s)?s[e]||s[0]:s;let o=Array.isArray(i)&&i[e]?i[e]:i;o=n[e]<r?-o:o;const{rgb:$,opacity:j}=I(E);return t.createElement(t.Fragment,{key:e},t.createElement("rect",{x:g,y:c,width:b,height:p,rx:A,fill:$,fillOpacity:j,stroke:e===y?"rgba(0,0,0,0.25)":void 0,strokeWidth:e===y?1:void 0}),C?t.createElement("text",{textAnchor:"middle",dominantBaseline:n[e]<r?"hanging":"auto",y:-o,transform:`translate(${g+b/2} ${c+(n[e]<r?p:0)})`,fill:W,style:{fontSize:`${G}px`,fontFamily:V.typography.fontFamily.sans,fontWeight:400}},T(n[e])):null)}))};_.__docgenInfo={description:"",methods:[],displayName:"Barline",props:{data:{required:!0,tsType:{name:"intersection",raw:`BarSeries & {
  colors: string | string[];
  radius: number;
  shift: number;
  labels: boolean;
  labelFormatter: (v: number) => string | number;
  labelColor: string;
  labelFontSize: number;
  labelGap: number | number[];
  zero: number;
}`,elements:[{name:"signature",type:"object",raw:`{
  values: number[];
  colors?: string | string[];
  barWidth?: number;
  radius?: number;
  shift?: number;
  zero?: number;
  labels?: boolean;
  labelFormatter?: (v: number) => string | number;
  labelColor?: string;
  labelFontSize?: number;
  labelGap?: number;
}`,signature:{properties:[{key:"values",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"colors",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!1}},{key:"barWidth",value:{name:"number",required:!1}},{key:"radius",value:{name:"number",required:!1}},{key:"shift",value:{name:"number",required:!1}},{key:"zero",value:{name:"number",required:!1}},{key:"labels",value:{name:"boolean",required:!1}},{key:"labelFormatter",value:{name:"signature",type:"function",raw:"(v: number) => string | number",signature:{arguments:[{type:{name:"number"},name:"v"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}},required:!1}},{key:"labelColor",value:{name:"string",required:!1}},{key:"labelFontSize",value:{name:"number",required:!1}},{key:"labelGap",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  colors: string | string[];
  radius: number;
  shift: number;
  labels: boolean;
  labelFormatter: (v: number) => string | number;
  labelColor: string;
  labelFontSize: number;
  labelGap: number | number[];
  zero: number;
}`,signature:{properties:[{key:"colors",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}},{key:"radius",value:{name:"number",required:!0}},{key:"shift",value:{name:"number",required:!0}},{key:"labels",value:{name:"boolean",required:!0}},{key:"labelFormatter",value:{name:"signature",type:"function",raw:"(v: number) => string | number",signature:{arguments:[{type:{name:"number"},name:"v"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}},required:!0}},{key:"labelColor",value:{name:"string",required:!0}},{key:"labelFontSize",value:{name:"number",required:!0}},{key:"labelGap",value:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}],required:!0}},{key:"zero",value:{name:"number",required:!0}}]}}]},description:""},baseData:{required:!0,tsType:{name:"ReturnType",elements:[{name:"format"}],raw:"ReturnType<typeof format>"},description:""},progress:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},activeIndex:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};export{_ as B};
