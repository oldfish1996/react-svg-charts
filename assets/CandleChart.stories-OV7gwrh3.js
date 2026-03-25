import{r as N,R as n}from"./index-JhL3uwfD.js";import{b as ae,O as $,a as te}from"./OptionToggle-DFEy9Z-x.js";import{C as ie}from"./Candleline-VhVwGdQC.js";import{u as se,f as ue,a as le,F as oe,X as me,Y as de}from"./useCartesianInteraction-DyERHuqV.js";const o=({option:e,style:a,className:W,...X})=>{var h,v,x,k,w,q;const _=se("rsc-candle"),g=e.id??_,{series:m,internal:K,xAxis:M,yAxis:H}=ae(e,g),t=ue({option:K}),{chartWidth:c,chartHeight:y}=t,f=N.useRef(null),G=((h=e.interaction)==null?void 0:h.enabled)??!0,J=((x=(v=e.interaction)==null?void 0:v.axisPointer)==null?void 0:x.show)??!0,d=((w=(k=e.interaction)==null?void 0:k.tooltip)==null?void 0:w.show)??!0,r=le({enabled:G,axisPointerEnabled:J,tooltipEnabled:d,svgRef:f,baseData:t,tooltipMaxWidth:220}),Q=N.useMemo(()=>{var T,R,C,j;const p=r.hoverIndex;if(!d||p===null)return null;const b=r.xLabel,i=m.values[p],U=i?[...i]:[],L={index:p,xLabel:b,values:U},A=(R=(T=e.interaction)==null?void 0:T.tooltip)==null?void 0:R.render;if(A)return A(L);const S=(j=(C=e.interaction)==null?void 0:C.tooltip)==null?void 0:j.formatter;if(S)return S(L);if(!i)return`${b}`;const[Z,ee,ne,re]=i;return`${b}
O:${Z} C:${ee}
L:${ne} H:${re}`},[r.hoverIndex,r.xLabel,(q=e.interaction)==null?void 0:q.tooltip,m.values,d]);return n.createElement("div",{id:g,className:W,style:{position:"relative",width:`${c}px`,height:`${y}px`,...r.containerStyle,fontSize:0,...a},...X},n.createElement(oe,{...r.tooltipProps,content:Q}),n.createElement("svg",{ref:f,width:c,height:y},n.createElement(me,{xAxis:M,baseData:t}),n.createElement(de,{yAxis:H,baseData:t}),n.createElement(ie,{data:m,baseData:t,activeIndex:r.hoverIndex}),r.axisPointerPathD?n.createElement("path",{d:r.axisPointerPathD,stroke:"rgba(0,0,0,0.18)",strokeWidth:1}):null,r.overlayRectProps?n.createElement("rect",{...r.overlayRectProps}):null))};o.__docgenInfo={description:"",methods:[],displayName:"CandleChart",props:{option:{required:!0,tsType:{name:"intersection",raw:`BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: CandleSeries;
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
  series: CandleSeries;
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
}[]`}],required:!1}}]}}],required:!1}},{key:"series",value:{name:"signature",type:"object",raw:`{
  values: number[][];
  candleWidth?: number;
  rise?: { fill: string; border: string };
  fall?: { fill: string; border: string };
}`,signature:{properties:[{key:"values",value:{name:"Array",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}],raw:"number[][]",required:!0}},{key:"candleWidth",value:{name:"number",required:!1}},{key:"rise",value:{name:"signature",type:"object",raw:"{ fill: string; border: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!0}},{key:"border",value:{name:"string",required:!0}}]},required:!1}},{key:"fall",value:{name:"signature",type:"object",raw:"{ fill: string; border: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!0}},{key:"border",value:{name:"string",required:!0}}]},required:!1}}]},required:!0}}]}}]},description:""}}};const pe=[{path:"width",type:"number",group:"Base",defaultValue:"-",description:"画布宽度（px）。"},{path:"height",type:"number",group:"Base",defaultValue:"-",description:"画布高度（px）。"},{path:"padding",type:"number | {top,right,bottom,left}",group:"Base",defaultToken:"chartTokens.spacing.chartPadding",description:"图表内边距，影响坐标系布局与标签预留空间。"},{path:"animationDuration",type:"number",group:"Base",defaultValue:"0",description:"动画时长（ms）。"},{path:"interaction.enabled",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否启用交互（hover 竖线/高亮/tooltip）。"},{path:"interaction.axisPointer.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 hover 竖向指示线。"},{path:"interaction.tooltip.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 tooltip 浮窗。"},{path:"interaction.tooltip.formatter",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 内容自定义格式化；values 为当前 K 线的 [open, close, low, high]。"},{path:"interaction.tooltip.render",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 自定义渲染，返回任意 ReactNode（可传入自定义布局）。"},{path:"x.labels",type:"string[]",group:"X Axis",defaultValue:"auto",description:"x 轴标签，不传则用 1..N 占位。"},{path:"y.min",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴下界；不传则自动推导并 padding。"},{path:"y.max",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴上界；不传则自动推导并 padding。"},{path:"y.splitNum",type:"number",group:"Y Axis",defaultToken:"chartTokens.axis.ySplitNum",description:"y 轴分段数（产生 splitNum+1 个刻度）。"},{path:"y.splitLine.show",type:"boolean",group:"Y Axis",defaultValue:"true",description:"是否显示 y 轴分割线（横向网格线）。"},{path:"series",type:"CandleSeries",group:"Series",defaultValue:"-",description:"K 线序列配置。"},{path:"series.values",type:"Array<[open, close, low, high]>",group:"Series",defaultValue:"-",description:"K 线 OHLC 数据数组。"},{path:"series.candleWidth",type:"number",group:"Series",defaultValue:"auto",description:"K 线实体宽度（px）。不传则按间距自动计算。"},{path:"series.rise.fill",type:"string",group:"Style",defaultToken:"chartTokens.color.chart.positive",description:"上涨实体填充色。"},{path:"series.rise.border",type:"string",group:"Style",defaultToken:"chartTokens.color.chart.positive",description:"上涨边框色。"},{path:"series.fall.fill",type:"string",group:"Style",defaultToken:"chartTokens.color.chart.negative",description:"下跌实体填充色。"},{path:"series.fall.border",type:"string",group:"Style",defaultToken:"chartTokens.color.chart.negative",description:"下跌边框色。"}],fe={title:"Charts/CandleChart",component:o},Y={width:360,height:200,padding:12,animationDuration:0,x:{labels:Array.from({length:10}).map((e,a)=>`D${a+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:80,max:140,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:e=>e},series:{values:[[100,110,95,120],[110,105,100,125],[105,118,102,130],[118,112,108,135],[112,125,110,138],[125,120,115,140],[120,128,118,139],[128,132,120,137],[132,126,122,136],[126,134,124,138]]}},s={args:{option:Y},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(o,{option:e.option}),n.createElement($,{value:e.option}))},u={args:{option:{width:360,height:200,padding:12,animationDuration:0,x:{labels:Array.from({length:10}).map((e,a)=>`D${a+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:80,max:140,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:e=>e},series:{values:Y.series.values,rise:{fill:"rgba(0,122,255,0.25)",border:"#007AFF"},fall:{fill:"rgba(240,65,66,0.22)",border:"#f04142"},candleWidth:14}}},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(o,{option:e.option}),n.createElement($,{value:e.option}))},l={render:()=>n.createElement(te,{meta:pe})};var E,V,z;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    option
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <CandleChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(z=(V=s.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var O,I,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    option: {
      width: 360,
      height: 200,
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
        max: 140,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => v
      },
      series: {
        values: option.series.values,
        rise: {
          fill: 'rgba(0,122,255,0.25)',
          border: '#007AFF'
        },
        fall: {
          fill: 'rgba(240,65,66,0.22)',
          border: '#f04142'
        },
        candleWidth: 14
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <CandleChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var D,F,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <OptionTable meta={candleOptionMeta} />
}`,...(B=(F=l.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const he=["Basic","CustomColors","Option"];export{s as Basic,u as CustomColors,l as Option,he as __namedExportsOrder,fe as default};
