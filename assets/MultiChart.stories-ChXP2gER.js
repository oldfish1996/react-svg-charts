import{r as j,R as e}from"./index-JhL3uwfD.js";import{e as me,p as de,O as k,a as pe}from"./OptionToggle-DFEy9Z-x.js";import{P as be,a as ce}from"./Polypoints-BX_tDCxj.js";import{C as ge}from"./Candleline-VhVwGdQC.js";import{B as ye}from"./Barline-CzvV5vyW.js";import{u as he,f as fe,a as ve,F as xe,X as ke,Y as we}from"./useCartesianInteraction-DyERHuqV.js";const p=({option:n,style:u,className:Q,...K})=>{var A,T,z,C,N,E;const J=he("rsc-multi"),w=n.id??J,{series:m,internal:U,xAxis:Z,yAxis:ee}=me(n,w),t=fe({option:U}),{chartWidth:q,chartHeight:S}=t,L=j.useRef(null),ne=((A=n.interaction)==null?void 0:A.enabled)??!0,re=((z=(T=n.interaction)==null?void 0:T.axisPointer)==null?void 0:z.show)??!0,x=((N=(C=n.interaction)==null?void 0:C.tooltip)==null?void 0:N.show)??!0,a=ve({enabled:ne,axisPointerEnabled:re,tooltipEnabled:x,svgRef:L,baseData:t,tooltipMaxWidth:260}),ae=j.useMemo(()=>{var V,R,B,F;const r=a.hoverIndex;if(!x||r===null)return null;const i=a.xLabel,d=m.map(l=>{switch(l.type){case"line":return l.values[r];case"bar":return l.values[r];case"candle":{const s=l.values[r];return s?s[1]:void 0}default:return}}),b={index:r,xLabel:i,values:d},c=(R=(V=n.interaction)==null?void 0:V.tooltip)==null?void 0:R.render;if(c)return c(b);const g=(F=(B=n.interaction)==null?void 0:B.tooltip)==null?void 0:F.formatter;if(g)return g(b);const ie=m.map((l,s)=>{switch(l.type){case"line":{const o=l.values[r];return`S${s+1}(line): ${o??"-"}`}case"bar":{const o=l.values[r];return`S${s+1}(bar): ${o??"-"}`}case"candle":{const o=l.values[r];if(!o)return`S${s+1}(candle): -`;const[le,se,oe,ue]=o;return`S${s+1}(candle): O${le} C${se} L${oe} H${ue}`}default:return""}}).filter(Boolean);return[i,...ie].filter(Boolean).join(`
`)},[a.hoverIndex,a.xLabel,(E=n.interaction)==null?void 0:E.tooltip,m,x]),te=t.grid;return e.createElement("div",{id:w,className:Q,style:{position:"relative",width:`${q}px`,height:`${S}px`,...a.containerStyle,fontSize:0,...u},...K},e.createElement(xe,{...a.tooltipProps,content:ae}),e.createElement("svg",{ref:L,width:q,height:S},e.createElement(ke,{xAxis:Z,baseData:t}),e.createElement(we,{yAxis:ee,baseData:t}),e.createElement("g",null,m.map((r,i)=>{switch(r.type){case"line":return e.createElement(e.Fragment,{key:i},e.createElement(be,{index:i,data:r,baseData:t}),e.createElement(ce,{index:i,data:r,baseData:t}));case"candle":return e.createElement(ge,{key:i,data:r,baseData:t,activeIndex:a.hoverIndex});case"bar":return e.createElement(ye,{key:i,data:r,baseData:t,activeIndex:a.hoverIndex});default:return null}})),a.axisPointerPathD?e.createElement(e.Fragment,null,e.createElement("path",{d:a.axisPointerPathD,stroke:"rgba(0,0,0,0.18)",strokeWidth:1}),m.map((r,i)=>{if(r.type!=="line")return null;const d=r.values[a.hoverIndex];if(typeof d!="number"||Number.isNaN(d))return null;const b=(t.max-d)*(t.polyHeight/(t.max-t.min||1))+te.top,{rgb:c,opacity:g}=de(r.color);return e.createElement("circle",{key:i,cx:a.hoverX,cy:b,r:3,fill:c,fillOpacity:g,stroke:"#fff",strokeWidth:1.5})})):null,a.overlayRectProps?e.createElement("rect",{...a.overlayRectProps}):null))};p.__docgenInfo={description:"",methods:[],displayName:"MultiChart",props:{option:{required:!0,tsType:{name:"intersection",raw:`BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: MultiSeries[];
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
  series: MultiSeries[];
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
}[]`}],required:!1}}]}}],required:!1}},{key:"series",value:{name:"Array",elements:[{name:"union",raw:`| ({ type: 'line' } & LineSeries)
| ({ type: 'bar' } & BarSeries)
| ({ type: 'candle' } & CandleSeries)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"MultiSeries[]",required:!0}}]}}]},description:""}}};const qe=[{path:"width",type:"number",group:"Base",defaultValue:"-",description:"画布宽度（px）。"},{path:"height",type:"number",group:"Base",defaultValue:"-",description:"画布高度（px）。"},{path:"padding",type:"number | {top,right,bottom,left}",group:"Base",defaultToken:"chartTokens.spacing.chartPadding",description:"图表内边距，影响坐标系布局与标签预留空间。"},{path:"animationDuration",type:"number",group:"Base",defaultValue:"0",description:"动画时长（ms）。"},{path:"interaction.enabled",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否启用交互（hover 竖线/高亮/tooltip）。"},{path:"interaction.axisPointer.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 hover 竖向指示线。"},{path:"interaction.tooltip.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 tooltip 浮窗。"},{path:"interaction.tooltip.formatter",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 内容自定义格式化；MultiChart 默认会展示每个 series 的当前值。"},{path:"interaction.tooltip.render",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 自定义渲染，返回任意 ReactNode（可传入自定义布局）。"},{path:"x.labels",type:"string[]",group:"X Axis",defaultValue:"auto",description:"x 轴标签，不传则用 1..N 占位。"},{path:"y.min",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴下界；不传则自动推导并 padding。"},{path:"y.max",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴上界；不传则自动推导并 padding。"},{path:"y.splitNum",type:"number",group:"Y Axis",defaultToken:"chartTokens.axis.ySplitNum",description:"y 轴分段数（产生 splitNum+1 个刻度）。"},{path:"y.splitLine.show",type:"boolean",group:"Y Axis",defaultValue:"true",description:"是否显示 y 轴分割线（横向网格线）。"},{path:"series",type:"MultiSeries[]",group:"Series",defaultValue:"-",description:"混合序列数组（line/bar/candle）。"},{path:"series[].type",type:"'line' | 'bar' | 'candle'",group:"Series",defaultValue:"-",description:"系列类型。"},{path:"series[].(line).values",type:"Array<number | undefined>",group:"Line",defaultValue:"-",description:"折线数据；undefined/NaN 会断开折线段。"},{path:"series[].(line).smooth",type:"number",group:"Line",defaultValue:"0",description:"平滑系数（0 表示折线）。"},{path:"series[].(line).color",type:"string",group:"Line",defaultToken:"chartTokens.color.chart.line",description:"折线颜色。"},{path:"series[].(line).width",type:"number",group:"Line",defaultToken:"chartTokens.stroke.width.line",description:"折线宽度（px）。"},{path:"series[].(line).lineStyle.zeroValue",type:"number",group:"Line",defaultValue:"0",description:"分段渲染的基准线值（用于上下分色与填充闭合线）。"},{path:"series[].(line).lineStyle.segmentColor",type:"{ above: string; below: string }",group:"Line",defaultValue:"undefined",description:"基准线上/下分段线色。"},{path:"series[].(line).lineStyle.segmentArea",type:"{ above: {start,end}; below: {start,end} }",group:"Line",defaultValue:"undefined",description:"折线与基准线之间的分段渐变填充（上/下使用不同渐变）。"},{path:"series[].(line).points",type:"boolean",group:"Line",defaultValue:"false",description:"是否绘制数据点圆点。"},{path:"series[].(line).pointSize",type:"number",group:"Line",defaultToken:"chartTokens.size.point",description:"数据点圆点直径（px）。"},{path:"series[].(bar).barWidth",type:"number",group:"Bar",defaultValue:"auto",description:"柱子宽度（px）。不传则按间距自动计算。"},{path:"series[].(bar).values",type:"number[]",group:"Bar",defaultValue:"-",description:"柱状数据值序列。"},{path:"series[].(bar).colors",type:"string | string[]",group:"Bar",defaultToken:"chartTokens.color.chart.bar",description:"柱子颜色；数组时按索引取色。"},{path:"series[].(bar).radius",type:"number",group:"Bar",defaultToken:"chartTokens.shape.radius.bar",description:"圆角半径（px）。"},{path:"series[].(bar).shift",type:"number",group:"Bar",defaultValue:"0",description:"整体水平偏移（px），用于分组柱状（barShift）。"},{path:"series[].(bar).labels",type:"boolean",group:"Bar",defaultValue:"false",description:"是否绘制标签。"},{path:"series[].(bar).labelGap",type:"number | number[]",group:"Bar",defaultToken:"chartTokens.spacing.label.gap",description:"标签与柱子的间距（px）。"},{path:"series[].(bar).zero",type:"number",group:"Bar",defaultValue:"yAxis.min",description:"零基线值；不传则取 y 轴下界。"},{path:"series[].(candle).values",type:"Array<[open, close, low, high]>",group:"Candle",defaultValue:"-",description:"K 线 OHLC 数据数组。"},{path:"series[].(candle).rise.fill",type:"string",group:"Candle",defaultToken:"chartTokens.color.chart.positive",description:"上涨实体填充色。"},{path:"series[].(candle).fall.fill",type:"string",group:"Candle",defaultToken:"chartTokens.color.chart.negative",description:"下跌实体填充色。"}],Ee={title:"Charts/MultiChart",component:p},Se={width:360,height:200,padding:12,animationDuration:0,x:{labels:Array.from({length:8}).map((n,u)=>`P${u+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:0,max:100,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:n=>n},series:[{type:"bar",values:[15,22,30,18,40,55,48,65],colors:"rgba(0,122,255,0.35)",radius:2},{type:"line",values:[10,18,35,28,60,55,80,75],smooth:.2,color:"#f04142",width:1.5,points:!0,pointSize:5}]},y={args:{option:Se},render:n=>e.createElement("div",{style:{display:"grid",gap:12}},e.createElement(p,{option:n.option}),e.createElement(k,{value:n.option}))},h={args:{option:{width:360,height:220,padding:12,animationDuration:0,x:{labels:Array.from({length:10}).map((n,u)=>`D${u+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:80,max:150,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:n=>n},series:[{type:"candle",values:[[100,110,95,120],[110,105,100,125],[105,118,102,130],[118,112,108,135],[112,125,110,138],[125,120,115,140],[120,128,118,139],[128,132,120,137],[132,126,122,136],[126,134,124,138]]},{type:"line",values:[102,108,115,118,121,126,128,130,129,134],smooth:.15,color:"#007AFF",width:1.5,points:!0,pointSize:5}]}},render:n=>e.createElement("div",{style:{display:"grid",gap:12}},e.createElement(p,{option:n.option}),e.createElement(k,{value:n.option}))},f={args:{option:{width:420,height:260,padding:{top:30,right:44,bottom:30,left:34},animationDuration:0,x:{labels:["2023FY","2024Q1","2024H1","2024Q9","2024FY"],fontSize:12,color:"#5e6570",margin:6},y:{min:0,max:100,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:()=>"",splitLine:{show:!1}},series:[{type:"bar",values:[90,40,60,50,55],colors:"rgba(240,65,66,0.14)",barWidth:10,radius:2,shift:-14,labels:!0,labelColor:"rgba(0,0,0,0.85)",labelFontSize:12,labelGap:6},{type:"bar",values:[10,20,30,10,25],colors:"rgba(45,168,34,0.14)",barWidth:10,radius:2,shift:0,labels:!0,labelColor:"rgba(0,0,0,0.85)",labelFontSize:12,labelGap:6},{type:"bar",values:[15,25,35,15,30],colors:"rgba(0,122,255,0.14)",barWidth:10,radius:2,shift:14,labels:!0,labelColor:"rgba(0,0,0,0.85)",labelFontSize:12,labelGap:6},{type:"line",values:[10,60,90,80,80],smooth:.35,color:"rgba(255,122,0,0.22)",width:3,points:!0,pointSize:5}]}},render:n=>e.createElement("div",{style:{display:"grid",gap:12}},e.createElement(p,{option:n.option}),e.createElement(k,{value:n.option}))},v={render:()=>e.createElement(pe,{meta:qe})};var M,P,I;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    option
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <MultiChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(I=(P=y.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var O,W,$;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    option: {
      width: 360,
      height: 220,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({
          length: 10
        }).map((_, i) => \`D\${i + 1}\`),
        fontSize: 10,
        color: '#5e6570',
        margin: 4
      },
      y: {
        min: 80,
        max: 150,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => v
      },
      series: [{
        type: 'candle',
        values: [[100, 110, 95, 120], [110, 105, 100, 125], [105, 118, 102, 130], [118, 112, 108, 135], [112, 125, 110, 138], [125, 120, 115, 140], [120, 128, 118, 139], [128, 132, 120, 137], [132, 126, 122, 136], [126, 134, 124, 138]]
      }, {
        type: 'line',
        values: [102, 108, 115, 118, 121, 126, 128, 130, 129, 134],
        smooth: 0.15,
        color: '#007AFF',
        width: 1.5,
        points: true,
        pointSize: 5
      }]
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <MultiChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var Y,D,X;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    option: {
      width: 420,
      height: 260,
      padding: {
        top: 30,
        right: 44,
        bottom: 30,
        left: 34
      },
      animationDuration: 0,
      x: {
        labels: ['2023FY', '2024Q1', '2024H1', '2024Q9', '2024FY'],
        fontSize: 12,
        color: '#5e6570',
        margin: 6
      },
      y: {
        min: 0,
        max: 100,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: () => '',
        splitLine: {
          show: false
        }
      },
      series: [{
        type: 'bar',
        values: [90, 40, 60, 50, 55],
        colors: 'rgba(240,65,66,0.14)',
        barWidth: 10,
        radius: 2,
        shift: -14,
        labels: true,
        labelColor: 'rgba(0,0,0,0.85)',
        labelFontSize: 12,
        labelGap: 6
      }, {
        type: 'bar',
        values: [10, 20, 30, 10, 25],
        colors: 'rgba(45,168,34,0.14)',
        barWidth: 10,
        radius: 2,
        shift: 0,
        labels: true,
        labelColor: 'rgba(0,0,0,0.85)',
        labelFontSize: 12,
        labelGap: 6
      }, {
        type: 'bar',
        values: [15, 25, 35, 15, 30],
        colors: 'rgba(0,122,255,0.14)',
        barWidth: 10,
        radius: 2,
        shift: 14,
        labels: true,
        labelColor: 'rgba(0,0,0,0.85)',
        labelFontSize: 12,
        labelGap: 6
      }, {
        type: 'line',
        values: [10, 60, 90, 80, 80],
        smooth: 0.35,
        color: 'rgba(255,122,0,0.22)',
        width: 3,
        points: true,
        pointSize: 5
      }]
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <MultiChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(X=(D=f.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};var G,_,H;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <OptionTable meta={multiOptionMeta} />
}`,...(H=(_=v.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const Ve=["Basic","WithCandle","MultipleBarsWithLine","Option"];export{y as Basic,f as MultipleBarsWithLine,v as Option,h as WithCandle,Ve as __namedExportsOrder,Ee as default};
