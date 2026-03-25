import{r as d,R as n}from"./index-JhL3uwfD.js";import{r as ie,O as M,a as se}from"./OptionToggle-DFEy9Z-x.js";import{B as ue}from"./Barline-CzvV5vyW.js";import{u as le,f as oe,a as me,F as de,X as be,Y as pe}from"./useCartesianInteraction-DyERHuqV.js";const y=({option:e,style:s,className:$,...H})=>{var A,T,B,N,j,z;const K=le("rsc-bar"),f=e.id??K,{series:u,internal:w,xAxis:J,yAxis:Q}=ie(e,f),{animationDuration:v}=w,[U,h]=d.useState(1),q=d.useRef(null),l=oe({option:w}),{chartWidth:S,chartHeight:L}=l,Z=((A=e.interaction)==null?void 0:A.enabled)??!0,ee=((B=(T=e.interaction)==null?void 0:T.axisPointer)==null?void 0:B.show)??!0,k=((j=(N=e.interaction)==null?void 0:N.tooltip)==null?void 0:j.show)??!0,r=me({enabled:Z,axisPointerEnabled:ee,tooltipEnabled:k,svgRef:q,baseData:l,tooltipMaxWidth:220}),ne=d.useMemo(()=>u.map(a=>a.values.join(",")).join("|"),[u]),re=d.useMemo(()=>{var R,V,F,E;const a=r.hoverIndex;if(!k||a===null)return null;const t=r.xLabel,b=u.map(x=>x.values[a]),o={index:a,xLabel:t,values:b},i=(V=(R=e.interaction)==null?void 0:R.tooltip)==null?void 0:V.render;if(i)return i(o);const m=(E=(F=e.interaction)==null?void 0:F.tooltip)==null?void 0:E.formatter;if(m)return m(o);const ae=b.map((x,te)=>`S${te+1}: ${x??"-"}`);return[t,...ae].filter(Boolean).join(`
`)},[r.hoverIndex,r.xLabel,(z=e.interaction)==null?void 0:z.tooltip,u,k]);return d.useEffect(()=>{if(v<=0){h(1);return}h(0);let a=0;const t=performance.now(),b=i=>1-Math.pow(1-i,3),o=i=>{const m=Math.min(1,(i-t)/v);h(b(m)),m<1&&(a=requestAnimationFrame(o))};return a=requestAnimationFrame(o),()=>{cancelAnimationFrame(a)}},[v,f,ne]),n.createElement("div",{id:f,className:$,style:{position:"relative",width:`${S}px`,height:`${L}px`,overflowX:"hidden",overflowY:"hidden",...r.containerStyle,fontSize:0,...s},...H},n.createElement(de,{...r.tooltipProps,content:re}),n.createElement("svg",{ref:q,width:S,height:L},n.createElement(be,{xAxis:J,baseData:l}),n.createElement(pe,{yAxis:Q,baseData:l}),u.map((a,t)=>n.createElement(ue,{key:t,data:a,baseData:l,progress:U,activeIndex:r.hoverIndex})),r.axisPointerPathD?n.createElement("path",{d:r.axisPointerPathD,stroke:"rgba(0,0,0,0.18)",strokeWidth:1}):null,r.overlayRectProps?n.createElement("rect",{...r.overlayRectProps}):null))};y.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{option:{required:!0,tsType:{name:"intersection",raw:`BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: BarSeries | BarSeries[];
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
  series: BarSeries | BarSeries[];
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
}[]`}],required:!1}}]}}],required:!1}},{key:"series",value:{name:"union",raw:"BarSeries | BarSeries[]",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"values",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"colors",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!1}},{key:"barWidth",value:{name:"number",required:!1}},{key:"radius",value:{name:"number",required:!1}},{key:"shift",value:{name:"number",required:!1}},{key:"zero",value:{name:"number",required:!1}},{key:"labels",value:{name:"boolean",required:!1}},{key:"labelFormatter",value:{name:"signature",type:"function",raw:"(v: number) => string | number",signature:{arguments:[{type:{name:"number"},name:"v"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}},required:!1}},{key:"labelColor",value:{name:"string",required:!1}},{key:"labelFontSize",value:{name:"number",required:!1}},{key:"labelGap",value:{name:"number",required:!1}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"values",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"colors",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!1}},{key:"barWidth",value:{name:"number",required:!1}},{key:"radius",value:{name:"number",required:!1}},{key:"shift",value:{name:"number",required:!1}},{key:"zero",value:{name:"number",required:!1}},{key:"labels",value:{name:"boolean",required:!1}},{key:"labelFormatter",value:{name:"signature",type:"function",raw:"(v: number) => string | number",signature:{arguments:[{type:{name:"number"},name:"v"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}},required:!1}},{key:"labelColor",value:{name:"string",required:!1}},{key:"labelFontSize",value:{name:"number",required:!1}},{key:"labelGap",value:{name:"number",required:!1}}]}}],raw:"BarSeries[]"}],required:!0}}]}}]},description:""}}};const ge=[{path:"width",type:"number",group:"Base",defaultValue:"-",description:"画布宽度（px）。"},{path:"height",type:"number",group:"Base",defaultValue:"-",description:"画布高度（px）。"},{path:"padding",type:"number | {top,right,bottom,left}",group:"Base",defaultToken:"chartTokens.spacing.chartPadding",description:"图表内边距，影响坐标系布局与标签预留空间。"},{path:"animationDuration",type:"number",group:"Base",defaultValue:"0",description:"动画时长（ms）。"},{path:"interaction.enabled",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否启用交互（hover 竖线/高亮/tooltip）。"},{path:"interaction.axisPointer.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 hover 竖向指示线。"},{path:"interaction.tooltip.show",type:"boolean",group:"Interaction",defaultValue:"true",description:"是否显示 tooltip 浮窗。"},{path:"interaction.tooltip.formatter",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 内容自定义格式化；values[0] 为当前柱子值。"},{path:"interaction.tooltip.render",type:"({ index, xLabel, values }) => ReactNode",group:"Interaction",defaultValue:"undefined",description:"tooltip 自定义渲染，返回任意 ReactNode（可传入自定义布局）。"},{path:"x.labels",type:"string[]",group:"X Axis",defaultValue:"auto",description:"x 轴标签，不传则用 1..N 占位。"},{path:"y.min",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴下界；不传则自动推导并 padding。"},{path:"y.max",type:"number",group:"Y Axis",defaultValue:"auto(extent(values))",description:"y 轴上界；不传则自动推导并 padding。"},{path:"y.splitNum",type:"number",group:"Y Axis",defaultToken:"chartTokens.axis.ySplitNum",description:"y 轴分段数（产生 splitNum+1 个刻度）。"},{path:"y.splitLine.show",type:"boolean",group:"Y Axis",defaultValue:"true",description:"是否显示 y 轴分割线（横向网格线）。"},{path:"series",type:"BarSeries | BarSeries[]",group:"Series",defaultValue:"-",description:"柱状序列配置；传数组可绘制多组柱状（配合 shift 做分组）。"},{path:"series[]",type:"BarSeries",group:"Series",defaultValue:"undefined",description:"多组柱状序列数组元素。"},{path:"series.values",type:"number[]",group:"Series",defaultValue:"-",description:"柱状数据值序列。"},{path:"series.colors",type:"string | string[]",group:"Series",defaultToken:"chartTokens.color.chart.bar",description:"柱子颜色；数组时按索引取色。"},{path:"series.barWidth",type:"number",group:"Series",defaultValue:"auto",description:"柱宽（px）。不传则按间距自动计算。"},{path:"series.radius",type:"number",group:"Series",defaultToken:"chartTokens.shape.radius.bar",description:"圆角半径（px）。"},{path:"series.shift",type:"number",group:"Series",defaultValue:"0",description:"整体水平偏移（px）。"},{path:"series.labels",type:"boolean",group:"Label",defaultValue:"false",description:"是否绘制柱顶部/底部数值标签。"},{path:"series.labelFormatter",type:"(v:number) => string | number",group:"Label",defaultValue:"(v) => v",description:"标签格式化函数。"},{path:"series.labelColor",type:"string",group:"Label",defaultToken:"chartTokens.color.text.secondary",description:"标签颜色。"},{path:"series.labelFontSize",type:"number",group:"Label",defaultToken:"chartTokens.typography.fontSize.axis",description:"标签字号（px）。"},{path:"series.labelGap",type:"number | number[]",group:"Label",defaultToken:"chartTokens.spacing.label.gap",description:"标签与柱子的间距（px）。"},{path:"series.zero",type:"number",group:"Series",defaultValue:"yAxis.min",description:"零基线值；不传则取 y 轴下界。"}],xe={title:"Charts/BarChart",component:y},ce={width:360,height:200,padding:12,animationDuration:600,x:{labels:Array.from({length:10}).map((e,s)=>`T${s+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:0,max:100,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:e=>e},series:{values:[12,40,35,20,62,77,55,31,90,66],colors:"#ff403a",radius:2,labels:!0,labelFontSize:10,labelGap:4}},p={args:{option:ce},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(y,{option:e.option}),n.createElement(M,{value:e.option}))},_=[30,-15,55,-28,60,-12,42,-44,70,-10,10,-22],ye=_.map(e=>e<0?"#2da822":"#f04142"),g={args:{option:{width:360,height:200,padding:12,animationDuration:600,x:{labels:Array.from({length:12}).map((e,s)=>`D${s+1}`),fontSize:10,color:"#5e6570",margin:4},y:{min:-80,max:80,splitNum:4,align:"right",color:"#5e6570",fontSize:10,margin:8,labelFormatter:e=>e},series:{values:_,colors:ye,radius:2,labels:!0,labelGap:4,zero:0}}},render:e=>n.createElement("div",{style:{display:"grid",gap:12}},n.createElement(y,{option:e.option}),n.createElement(M,{value:e.option}))},c={render:()=>n.createElement(se,{meta:ge})};var C,P,I;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    option
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <BarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var O,D,Y;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 600,
      x: {
        labels: Array.from({
          length: 12
        }).map((_, i) => \`D\${i + 1}\`),
        fontSize: 10,
        color: '#5e6570',
        margin: 4
      },
      y: {
        min: -80,
        max: 80,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => v
      },
      series: {
        values: positiveNegativeValues,
        colors: positiveNegativeColors,
        radius: 2,
        labels: true,
        labelGap: 4,
        zero: 0
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <BarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
}`,...(Y=(D=g.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};var G,W,X;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <OptionTable meta={barOptionMeta} />
}`,...(X=(W=c.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const we=["Basic","PositiveNegative","Option"];export{p as Basic,c as Option,g as PositiveNegative,we as __namedExportsOrder,xe as default};
