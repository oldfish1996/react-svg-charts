import{r as v,R as n}from"./index-JhL3uwfD.js";import{d as Se,p as Le,O as d,a as Ae}from"./OptionToggle-DFEy9Z-x.js";import{P as ze,a as Te}from"./Polypoints-BX_tDCxj.js";import{u as Ee,f as je,a as Ve,F as Ne,X as Re,Y as Fe}from"./useCartesianInteraction-DyERHuqV.js";const u=({option:e,style:r,className:p,...z})=>{var _,I,B,X,Y,W;const g=Ee("rsc-line"),m=e.id??g,{series:o,internal:b,xAxis:T,yAxis:E}=Se(e,m),{animationDuration:c}=b,s=je({option:b}),{chartWidth:M,chartHeight:$,pointStartX:j,yAxisMargin:V,clipWidth:N,clipHeight:R}=s,D=v.useRef(null),P=v.useRef(null),fe=((_=e.interaction)==null?void 0:_.enabled)??!0,ve=((B=(I=e.interaction)==null?void 0:I.axisPointer)==null?void 0:B.show)??!0,F=((Y=(X=e.interaction)==null?void 0:X.tooltip)==null?void 0:Y.show)??!0,i=Ve({enabled:fe,axisPointerEnabled:ve,tooltipEnabled:F,svgRef:D,baseData:s,tooltipMaxWidth:220}),xe=v.useMemo(()=>{var H,Z,G,J;const a=i.hoverIndex;if(!F||a===null)return null;const t=i.xLabel,l=o.map(C=>C.values[a]),y={index:a,xLabel:t,values:l},h=(Z=(H=e.interaction)==null?void 0:H.tooltip)==null?void 0:Z.render;if(h)return h(y);const f=(J=(G=e.interaction)==null?void 0:G.tooltip)==null?void 0:J.formatter;if(f)return f(y);const ke=l.map((C,qe)=>`S${qe+1}: ${C??"-"}`);return[t,...ke].filter(Boolean).join(`
`)},[i.hoverIndex,i.xLabel,(W=e.interaction)==null?void 0:W.tooltip,o,F]);v.useEffect(()=>{if(c<=0)return;let a=0;const t=P.current;if(!t)return;function l(){a+=N/(c/16),t.setAttribute("d",`M${j-V} 0h${a} v${R} h-${a} Z`),a<N&&requestAnimationFrame(l)}requestAnimationFrame(l)},[c,R,N,j,V]);const O=c>0,we=s.grid;return n.createElement("div",{id:m,className:p,style:{position:"relative",width:`${M}px`,height:`${$}px`,...i.containerStyle,fontSize:0,...r},...z},n.createElement(Ne,{...i.tooltipProps,content:xe}),n.createElement("svg",{ref:D,width:M,height:$},n.createElement(Re,{xAxis:T,baseData:s}),n.createElement(Fe,{yAxis:E,baseData:s}),n.createElement("g",{clipPath:O?"url(#animation_clip)":void 0},o.map((a,t)=>n.createElement(ze,{key:t,index:t,data:a,baseData:s})),o.map((a,t)=>n.createElement(Te,{key:t,index:t,data:a,baseData:s}))),i.axisPointerPathD?n.createElement(n.Fragment,null,n.createElement("path",{d:i.axisPointerPathD,stroke:"rgba(0,0,0,0.18)",strokeWidth:1}),o.map((a,t)=>{const l=a.values[i.hoverIndex];if(typeof l!="number"||Number.isNaN(l))return null;const y=(s.max-l)*(s.polyHeight/(s.max-s.min||1))+we.top,{rgb:h,opacity:f}=Le(a.color);return n.createElement("circle",{key:t,cx:i.hoverX,cy:y,r:3,fill:h,fillOpacity:f,stroke:"#fff",strokeWidth:1.5})})):null,i.overlayRectProps?n.createElement("rect",{...i.overlayRectProps}):null,O?n.createElement("defs",null,n.createElement("clipPath",{id:"animation_clip"},n.createElement("path",{ref:P,d:`M${j-V} 0h0 v${R} h0 Z`,fill:"#000"}))):null))};u.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{option:{required:!0,tsType:{name:"intersection",raw:`BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: LineSeries | LineSeries[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  width: number;
  height: number;
  padding?: ChartPadding;
  animationDuration?: number;
  interaction?: ChartInteraction;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}},{key:"padding",value:{name:"union",raw:`| number
| { top?: number; right?: number; bottom?: number; left?: number }`,elements:[{name:"number"},{name:"signature",type:"object",raw:"{ top?: number; right?: number; bottom?: number; left?: number }",signature:{properties:[{key:"top",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}},{key:"bottom",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}}]}}],required:!1}},{key:"animationDuration",value:{name:"number",required:!1}},{key:"interaction",value:{name:"signature",type:"object",raw:`{
  enabled?: boolean;
  axisPointer?: { show?: boolean };
  tooltip?: {
    show?: boolean;
    formatter?: (params: {
      index: number;
      xLabel: string;
      values: Array<number | undefined>;
    }) => React.ReactNode;
    render?: (params: {
      index: number;
      xLabel: string;
      values: Array<number | undefined>;
    }) => React.ReactNode;
  };
}`,signature:{properties:[{key:"enabled",value:{name:"boolean",required:!1}},{key:"axisPointer",value:{name:"signature",type:"object",raw:"{ show?: boolean }",signature:{properties:[{key:"show",value:{name:"boolean",required:!1}}]},required:!1}},{key:"tooltip",value:{name:"signature",type:"object",raw:`{
  show?: boolean;
  formatter?: (params: {
    index: number;
    xLabel: string;
    values: Array<number | undefined>;
  }) => React.ReactNode;
  render?: (params: {
    index: number;
    xLabel: string;
    values: Array<number | undefined>;
  }) => React.ReactNode;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"formatter",value:{name:"signature",type:"function",raw:`(params: {
  index: number;
  xLabel: string;
  values: Array<number | undefined>;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  index: number;
  xLabel: string;
  values: Array<number | undefined>;
}`,signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"xLabel",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}],raw:"Array<number | undefined>",required:!0}}]}},name:"params"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:`(params: {
  index: number;
  xLabel: string;
  values: Array<number | undefined>;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  index: number;
  xLabel: string;
  values: Array<number | undefined>;
}`,signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"xLabel",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}],raw:"Array<number | undefined>",required:!0}}]}},name:"params"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]},required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: LineSeries | LineSeries[];
}`,signature:{properties:[{key:"x",value:{name:"intersection",raw:`AxisTextStyle & {
  labels?: string[];
  gap?: number;
  axisLabel?: XAxisLabelStyle;
  axisLine?: AxisLineStyle;
  axisTick?: AxisTickStyle;
  splitLine?: AxisLineStyle;
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  fontSize?: number;
  margin?: number;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"number",required:!1}},{key:"margin",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  labels?: string[];
  gap?: number;
  axisLabel?: XAxisLabelStyle;
  axisLine?: AxisLineStyle;
  axisTick?: AxisTickStyle;
  splitLine?: AxisLineStyle;
}`,signature:{properties:[{key:"labels",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"gap",value:{name:"number",required:!1}},{key:"axisLabel",value:{name:"intersection",raw:`AxisTextStyle & {
  show?: boolean;
  formatter?: (label: string, index: number) => string | number;
  rotate?: number;
  interval?: number;
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  fontSize?: number;
  margin?: number;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"number",required:!1}},{key:"margin",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  show?: boolean;
  formatter?: (label: string, index: number) => string | number;
  rotate?: number;
  interval?: number;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"formatter",value:{name:"signature",type:"function",raw:"(label: string, index: number) => string | number",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}},required:!1}},{key:"rotate",value:{name:"number",required:!1}},{key:"interval",value:{name:"number",required:!1}}]}}],required:!1}},{key:"axisLine",value:{name:"signature",type:"object",raw:`{
  show?: boolean;
  color?: string;
  width?: number;
  dash?: string;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}}]},required:!1}},{key:"axisTick",value:{name:"signature",type:"object",raw:`{
  show?: boolean;
  length?: number;
  color?: string;
  width?: number;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"length",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}}]},required:!1}},{key:"splitLine",value:{name:"signature",type:"object",raw:`{
  show?: boolean;
  color?: string;
  width?: number;
  dash?: string;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}}]},required:!1}}]}}],required:!1}},{key:"y",value:{name:"intersection",raw:`AxisTextStyle & {
  min?: number;
  max?: number;
  splitNum?: number;
  align?: 'left' | 'right';
  labelFormatter?: (v: number, index?: number) => string | number;
  axisLabel?: YAxisLabelStyle;
  axisLine?: AxisLineStyle;
  axisTick?: AxisTickStyle;
  splitLine?: {
    show?: boolean;
    color?: string;
    width?: number;
    dash?: string;
    containLabel?: boolean;
    omitBottomLine?: boolean;
  };
  emphasisValueLine?:
    | {
        value: number;
        width?: number;
        color?: string;
        dash?: string;
      }
    | {
        value: number;
        width?: number;
        color?: string;
        dash?: string;
      }[];
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  fontSize?: number;
  margin?: number;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"number",required:!1}},{key:"margin",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  min?: number;
  max?: number;
  splitNum?: number;
  align?: 'left' | 'right';
  labelFormatter?: (v: number, index?: number) => string | number;
  axisLabel?: YAxisLabelStyle;
  axisLine?: AxisLineStyle;
  axisTick?: AxisTickStyle;
  splitLine?: {
    show?: boolean;
    color?: string;
    width?: number;
    dash?: string;
    containLabel?: boolean;
    omitBottomLine?: boolean;
  };
  emphasisValueLine?:
    | {
        value: number;
        width?: number;
        color?: string;
        dash?: string;
      }
    | {
        value: number;
        width?: number;
        color?: string;
        dash?: string;
      }[];
}`,signature:{properties:[{key:"min",value:{name:"number",required:!1}},{key:"max",value:{name:"number",required:!1}},{key:"splitNum",value:{name:"number",required:!1}},{key:"align",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"labelFormatter",value:{name:"signature",type:"function",raw:"(v: number, index?: number) => string | number",signature:{arguments:[{type:{name:"number"},name:"v"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}},required:!1}},{key:"axisLabel",value:{name:"intersection",raw:`AxisTextStyle & {
  show?: boolean;
  formatter?: (v: number, index?: number) => string | number;
}`,elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  fontSize?: number;
  margin?: number;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"number",required:!1}},{key:"margin",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  show?: boolean;
  formatter?: (v: number, index?: number) => string | number;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"formatter",value:{name:"signature",type:"function",raw:"(v: number, index?: number) => string | number",signature:{arguments:[{type:{name:"number"},name:"v"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}},required:!1}}]}}],required:!1}},{key:"axisLine",value:{name:"signature",type:"object",raw:`{
  show?: boolean;
  color?: string;
  width?: number;
  dash?: string;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}}]},required:!1}},{key:"axisTick",value:{name:"signature",type:"object",raw:`{
  show?: boolean;
  length?: number;
  color?: string;
  width?: number;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"length",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}}]},required:!1}},{key:"splitLine",value:{name:"signature",type:"object",raw:`{
  show?: boolean;
  color?: string;
  width?: number;
  dash?: string;
  containLabel?: boolean;
  omitBottomLine?: boolean;
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"dash",value:{name:"string",required:!1}},{key:"containLabel",value:{name:"boolean",required:!1}},{key:"omitBottomLine",value:{name:"boolean",required:!1}}]},required:!1}},{key:"emphasisValueLine",value:{name:"union",raw:`| {
    value: number;
    width?: number;
    color?: string;
    dash?: string;
  }
| {
    value: number;
    width?: number;
    color?: string;
    dash?: string;
  }[]`,elements:[{name:"signature",type:"object",raw:`{
  value: number;
  width?: number;
  color?: string;
  dash?: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"dash",value:{name:"string",required:!1}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: number;
  width?: number;
  color?: string;
  dash?: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"dash",value:{name:"string",required:!1}}]}}],raw:`{
  value: number;
  width?: number;
  color?: string;
  dash?: string;
}[]`}],required:!1}}]}}],required:!1}},{key:"series",value:{name:"union",raw:"LineSeries | LineSeries[]",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"zeroValue",value:{name:"number",required:!1}},{key:"segmentColor",value:{name:"signature",type:"object",raw:"{ above: string; below: string }",signature:{properties:[{key:"above",value:{name:"string",required:!0}},{key:"below",value:{name:"string",required:!0}}]},required:!1}},{key:"segmentArea",value:{name:"signature",type:"object",raw:"{ above: { start: string; end: string }; below: { start: string; end: string } }",signature:{properties:[{key:"above",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}},{key:"below",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}}]},required:!1}}]},required:!1}},{key:"points",value:{name:"boolean",required:!1}},{key:"pointSize",value:{name:"number",required:!1}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"zeroValue",value:{name:"number",required:!1}},{key:"segmentColor",value:{name:"signature",type:"object",raw:"{ above: string; below: string }",signature:{properties:[{key:"above",value:{name:"string",required:!0}},{key:"below",value:{name:"string",required:!0}}]},required:!1}},{key:"segmentArea",value:{name:"signature",type:"object",raw:"{ above: { start: string; end: string }; below: { start: string; end: string } }",signature:{properties:[{key:"above",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}},{key:"below",value:{name:"signature",type:"object",raw:"{ start: string; end: string }",signature:{properties:[{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}}]},required:!0}}]},required:!1}}]},required:!1}},{key:"points",value:{name:"boolean",required:!1}},{key:"pointSize",value:{name:"number",required:!1}}]}}],raw:"LineSeries[]"}],required:!0}}]}}]},description:""}}};const Ce=[{path:"width",type:"number",group:"Base",defaultValue:"-",description:"画布宽度（px）。",example:"{ width: 360 }"},{path:"height",type:"number",group:"Base",defaultValue:"-",description:"画布高度（px）。",example:"{ height: 200 }"},{path:"padding",type:"number | {top,right,bottom,left}",group:"Base",defaultToken:"chartTokens.spacing.chartPadding",description:"图表内边距，影响坐标系布局与标签预留空间。",example:"{ padding: 12 }"},{path:"animationDuration",type:"number",group:"Base",defaultValue:"0",description:"折线绘制动画时长（ms）。0 表示不启用裁剪动画。",example:"{ animationDuration: 600 }"},{path:"interaction.enabled",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否启用交互（hover 竖线/高亮/tooltip）。",example:"{ interaction: { enabled: false } }"},{path:"interaction.axisPointer.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 hover 竖向指示线。",example:"{ interaction: { axisPointer: { show: false } } }"},{path:"interaction.tooltip.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 tooltip 浮窗。",example:"{ interaction: { tooltip: { show: false } } }"},{path:"interaction.tooltip.formatter",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 内容自定义格式化；values 为所有 series 在当前 index 的值数组。",example:"{ interaction: { tooltip: { formatter: ({ xLabel, values }) => `${xLabel}: ${values[0]}` } } }"},{path:"interaction.tooltip.render",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 自定义渲染，返回任意 ReactNode（可传入自定义布局）。",example:"{ interaction: { tooltip: { render: ({ xLabel, values }) => <div><b>{xLabel}</b> {values[0]}</div> } } }"},{path:"x.labels",type:"string[]",group:"X Axis",defaultValue:"auto",description:"x 轴标签，长度建议与数据点数一致；不传则用 1..N 占位。",example:"{ x: { labels: ['D1','D2'] } }"},{path:"x.fontSize",type:"number",group:"X Axis",defaultToken:"chartTokens.typography.fontSize.axis",description:"x 轴文本字号（px）。",example:"{ x: { fontSize: 12 } }"},{path:"x.color",type:"string",group:"X Axis",defaultToken:"chartTokens.color.text.secondary",description:"x 轴文本颜色。",example:"{ x: { color: '#333' } }"},{path:"x.margin",type:"number",group:"X Axis",defaultToken:"chartTokens.spacing.axis.xLabelMargin",description:"x 轴标签与坐标系的间距（px）。",example:"{ x: { margin: 6 } }"},{path:"y.min",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴下界；不传则从数据自动推导并 padding。",example:"{ y: { min: 0 } }"},{path:"y.max",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴上界；不传则从数据自动推导并 padding。",example:"{ y: { max: 100 } }"},{path:"y.splitNum",type:"number",group:"Y Axis",defaultToken:"chartTokens.axis.ySplitNum",description:"y 轴分段数（产生 splitNum+1 个刻度）。",example:"{ y: { splitNum: 4 } }"},{path:"y.splitLine.show",type:"boolean",group:"Y Axis",defaultValue:"true",description:"是否显示 y 轴分割线（横向网格线）。",example:"{ y: { splitLine: { show: false } } }"},{path:"y.align",type:"'left' | 'right'",group:"Y Axis",defaultValue:"'right'",description:"y 轴标签对齐方式。",example:"{ y: { align: 'left' } }"},{path:"y.labelFormatter",type:"(v:number, index?:number) => string | number",group:"Y Axis",defaultValue:"(v) => v",description:"y 轴刻度格式化函数。",example:"{ y: { labelFormatter: (v) => `${v}%` } }"},{path:"series",type:"LineSeries | LineSeries[]",group:"Series",defaultValue:"-",description:"折线序列，单条或多条。"},{path:"series.values",type:"Array<number | undefined>",group:"Series",defaultValue:"-",description:"数据点序列；undefined/NaN 会断开折线段。",example:"{ series: { values: [1, 2, undefined, 4] } }"},{path:"series.smooth",type:"number",group:"Series",defaultValue:"0",description:"平滑系数（0 表示折线，>0 表示曲线）。",example:"{ series: { smooth: 0.2 } }"},{path:"series.color",type:"string",group:"Series",defaultToken:"chartTokens.color.chart.line",description:"折线颜色。",example:"{ series: { color: '#f00' } }"},{path:"series.width",type:"number",group:"Series",defaultToken:"chartTokens.stroke.width.line",description:"折线宽度（px）。",example:"{ series: { width: 2 } }"},{path:"series.dash",type:"string",group:"Series",defaultValue:"undefined",description:"虚线样式（SVG strokeDasharray）。",example:"{ series: { dash: '4 2' } }"},{path:"series.area",type:"{ start: string; end: string }",group:"Series",defaultValue:"undefined",description:"折线下方渐变填充；start/end 为颜色字符串（支持 rgba）。",example:'{ series: { area: { start: "rgba(240,65,66,0.25)", end: "rgba(240,65,66,0)" } } }'},{path:"series.lineStyle.zeroValue",type:"number",group:"Series",defaultValue:"0",description:"分段渲染的基准线值（用于上下分色与填充闭合线）。",example:"{ series: { lineStyle: { zeroValue: 0 } } }"},{path:"series.lineStyle.segmentColor",type:"{ above: string; below: string }",group:"Series",defaultValue:"undefined",description:"基准线上/下分段线色。",example:'{ series: { lineStyle: { segmentColor: { above: "#f04142", below: "#2da822" } } } }'},{path:"series.lineStyle.segmentArea",type:"{ above: {start,end}; below: {start,end} }",group:"Series",defaultValue:"undefined",description:"折线与基准线之间的分段渐变填充（上/下使用不同渐变）。",example:'{ series: { lineStyle: { segmentArea: { above: { start: "rgba(240,65,66,0.16)", end: "rgba(240,65,66,0)" }, below: { start: "rgba(45,168,34,0)", end: "rgba(45,168,34,0.16)" } } } } }'},{path:"series.points",type:"boolean",group:"Series",defaultValue:"false",description:"是否绘制数据点圆点。",example:"{ series: { points: true } }"},{path:"series.pointSize",type:"number",group:"Series",defaultToken:"chartTokens.size.point",description:"数据点圆点直径（px）。",example:"{ series: { points: true, pointSize: 6 } }"}],_e={title:"Charts/LineChart",component:u},Me={width:360,height:200,padding:12,animationDuration:600,x:{labels:Array.from({length:8}).map((e,r)=>`D${r+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:0,max:100,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:e=>e},series:{values:[10,18,35,28,60,55,80,75],smooth:.2,color:"#f04142",width:1.5,area:{start:"rgba(240,65,66,0.25)",end:"rgba(240,65,66,0)"},points:!0,pointSize:5}},x={args:{option:Me},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(u,{option:e.option}),n.createElement(d,{value:e.option}))},w={args:{option:{width:360,height:200,padding:12,animationDuration:0,x:{labels:Array.from({length:10}).map((e,r)=>`W${r+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:0,max:120,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:e=>`${e}`},series:[{values:[10,18,35,28,60,55,80,75,88,96],smooth:.1,color:"#f04142",width:1.5,points:!0,pointSize:5},{values:[12,24,30,40,50,68,74,92,100,112],smooth:0,color:"#007AFF",width:1.5,dash:"4 2",points:!1,pointSize:4}]}},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(u,{option:e.option}),n.createElement(d,{value:e.option}))},k={args:{option:{width:360,height:200,padding:12,animationDuration:0,x:{labels:Array.from({length:12}).map((e,r)=>`D${r+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:0,max:100,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:e=>e},series:{values:[10,18,void 0,28,60,void 0,80,75,62,90,void 0,70],smooth:.15,color:"#f04142",width:1.5,points:!0,pointSize:5}}},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(u,{option:e.option}),n.createElement(d,{value:e.option}))},q={args:{option:(()=>{const r=Array.from({length:180}).map(()=>"");r[0]="09:30",r[Math.floor(179/2)]="11:30/13:00",r[179]="15:00";const p=330,z=Array.from({length:180}).map((g,m)=>{const o=m/179,b=o<.35?-o*18:(o-.35)*36-.35*18,T=Math.sin(m/6)*1.2+Math.sin(m/17)*.8,E=Math.max(0,o-.65)*24;return p+b+T+E});return{width:360,height:240,padding:12,animationDuration:0,x:{labels:r,fontSize:10,color:"#5e6570",margin:4},y:{min:300,max:360,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:g=>g.toFixed(2)},series:{values:z,smooth:.12,width:1.5,points:!1,pointSize:4,lineStyle:{zeroValue:p,segmentColor:{above:"#f04142",below:"#2da822"},segmentArea:{above:{start:"rgba(240,65,66,0.16)",end:"rgba(240,65,66,0)"},below:{start:"rgba(45,168,34,0)",end:"rgba(45,168,34,0.16)"}}}}}})()},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(u,{option:e.option}),n.createElement(d,{value:e.option}))},S={args:{option:{width:360,height:220,padding:{top:12,right:24,bottom:22,left:34},animationDuration:0,x:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{show:!0,color:"rgba(0,0,0,0.18)",width:1},axisTick:{show:!0,length:4,color:"rgba(0,0,0,0.18)",width:1},axisLabel:{show:!0,fontSize:10,color:"#5e6570",margin:6,interval:0,formatter:e=>e}},y:{min:0,max:100,splitNum:4,align:"right",axisLine:{show:!0,color:"rgba(0,0,0,0.18)",width:1},axisTick:{show:!0,length:4,color:"rgba(0,0,0,0.18)",width:1},splitLine:{show:!0,dash:"4 4",color:"rgba(0,0,0,0.12)",width:1},axisLabel:{show:!0,fontSize:10,color:"#5e6570",margin:8,formatter:e=>`${e}`}},series:{values:[10,18,35,28,60,55,80],smooth:.12,color:"#f04142",width:1.5,points:!0,pointSize:5}}},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(u,{option:e.option}),n.createElement(d,{value:e.option}))},L={args:{option:{width:360,height:200,padding:12,animationDuration:0,x:{labels:Array.from({length:24}).map((e,r)=>`T${r+1}`),gap:12,axisLabel:{interval:2,margin:4}},y:{min:0,max:100,splitNum:4,align:"right",splitLine:{show:!1},axisLabel:{formatter:e=>`${e}%`}},series:{values:Array.from({length:24}).map((e,r)=>Math.round(Math.sin(r/3)*30+50)),smooth:.2,color:"#007AFF",width:1.5,points:!1,pointSize:4}}},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(u,{option:e.option}),n.createElement(d,{value:e.option}))},A={render:()=>n.createElement(Ae,{meta:Ce})};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    option
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var ee,ne,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({
          length: 10
        }).map((_, i) => \`W\${i + 1}\`),
        fontSize: 10,
        color: '#5e6570',
        margin: 4
      },
      y: {
        min: 0,
        max: 120,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => \`\${v}\`
      },
      series: [{
        values: [10, 18, 35, 28, 60, 55, 80, 75, 88, 96],
        smooth: 0.1,
        color: '#f04142',
        width: 1.5,
        points: true,
        pointSize: 5
      }, {
        values: [12, 24, 30, 40, 50, 68, 74, 92, 100, 112],
        smooth: 0,
        color: '#007AFF',
        width: 1.5,
        dash: '4 2',
        points: false,
        pointSize: 4
      }]
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,te,ie;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({
          length: 12
        }).map((_, i) => \`D\${i + 1}\`),
        fontSize: 10,
        color: '#5e6570',
        margin: 4
      },
      y: {
        min: 0,
        max: 100,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => v
      },
      series: {
        values: [10, 18, undefined, 28, 60, undefined, 80, 75, 62, 90, undefined, 70],
        smooth: 0.15,
        color: '#f04142',
        width: 1.5,
        points: true,
        pointSize: 5
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(ie=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,oe,le;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    option: (() => {
      const n = 180;
      const labels = Array.from({
        length: n
      }).map(() => '');
      labels[0] = '09:30';
      labels[Math.floor((n - 1) / 2)] = '11:30/13:00';
      labels[n - 1] = '15:00';
      const baseline = 330;
      const values = Array.from({
        length: n
      }).map((_, i) => {
        const t = i / (n - 1);
        const drift = t < 0.35 ? -t * 18 : (t - 0.35) * 36 - 0.35 * 18;
        const wave = Math.sin(i / 6) * 1.2 + Math.sin(i / 17) * 0.8;
        const bump = Math.max(0, t - 0.65) * 24;
        return baseline + drift + wave + bump;
      });
      return {
        width: 360,
        height: 240,
        padding: 12,
        animationDuration: 0,
        x: {
          labels,
          fontSize: 10,
          color: '#5e6570',
          margin: 4
        },
        y: {
          min: 300,
          max: 360,
          splitNum: 4,
          align: 'right',
          color: '#5e6570',
          fontSize: 10,
          margin: 8,
          labelFormatter: (v: number) => v.toFixed(2)
        },
        series: {
          values,
          smooth: 0.12,
          width: 1.5,
          points: false,
          pointSize: 4,
          lineStyle: {
            zeroValue: baseline,
            segmentColor: {
              above: '#f04142',
              below: '#2da822'
            },
            segmentArea: {
              above: {
                start: 'rgba(240,65,66,0.16)',
                end: 'rgba(240,65,66,0)'
              },
              below: {
                start: 'rgba(45,168,34,0)',
                end: 'rgba(45,168,34,0.16)'
              }
            }
          }
        }
      } satisfies LineChartOption;
    })()
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(le=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ue,me,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    option: {
      width: 360,
      height: 220,
      padding: {
        top: 12,
        right: 24,
        bottom: 22,
        left: 34
      },
      animationDuration: 0,
      x: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
          show: true,
          color: 'rgba(0,0,0,0.18)',
          width: 1
        },
        axisTick: {
          show: true,
          length: 4,
          color: 'rgba(0,0,0,0.18)',
          width: 1
        },
        axisLabel: {
          show: true,
          fontSize: 10,
          color: '#5e6570',
          margin: 6,
          interval: 0,
          formatter: label => label
        }
      },
      y: {
        min: 0,
        max: 100,
        splitNum: 4,
        align: 'right',
        axisLine: {
          show: true,
          color: 'rgba(0,0,0,0.18)',
          width: 1
        },
        axisTick: {
          show: true,
          length: 4,
          color: 'rgba(0,0,0,0.18)',
          width: 1
        },
        splitLine: {
          show: true,
          dash: '4 4',
          color: 'rgba(0,0,0,0.12)',
          width: 1
        },
        axisLabel: {
          show: true,
          fontSize: 10,
          color: '#5e6570',
          margin: 8,
          formatter: v => \`\${v}\`
        }
      },
      series: {
        values: [10, 18, 35, 28, 60, 55, 80],
        smooth: 0.12,
        color: '#f04142',
        width: 1.5,
        points: true,
        pointSize: 5
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(de=(me=S.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ge,be;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({
          length: 24
        }).map((_, i) => \`T\${i + 1}\`),
        gap: 12,
        axisLabel: {
          interval: 2,
          margin: 4
        }
      },
      y: {
        min: 0,
        max: 100,
        splitNum: 4,
        align: 'right',
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: v => \`\${v}%\`
        }
      },
      series: {
        values: Array.from({
          length: 24
        }).map((_, i) => Math.round(Math.sin(i / 3) * 30 + 50)),
        smooth: 0.2,
        color: '#007AFF',
        width: 1.5,
        points: false,
        pointSize: 4
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(be=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ce,ye,he;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <OptionTable meta={lineOptionMeta} />
}`,...(he=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};const Ie=["Basic","MultipleSeries","MissingValues","SegmentedAreaLine","AxisStyle","AxisLabelInterval","Option"];export{L as AxisLabelInterval,S as AxisStyle,x as Basic,k as MissingValues,w as MultipleSeries,A as Option,q as SegmentedAreaLine,Ie as __namedExportsOrder,_e as default};
