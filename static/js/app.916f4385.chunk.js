(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{80:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var c=n(14),r=n.n(c),l=n(22),a=n.n(l),o=n(0),s=n(79),i=n(3),b=n(42),u=n(12),j=n(2),d=n(52),O=n(78),x=n(71),f=n(1);function h(e){var t=function(){return e.currValue==e.value};return Object(f.jsxs)(x.a,{onPress:e.onPress,children:[Object(f.jsxs)(u.a,{style:[t()?p.active:p.inactive],children:[e.value,"%"]}),Object(f.jsxs)(u.a,{style:[t()?p.line:{}],children:[" ",t()?"|":""]})]})}var p=i.a.create({active:{textAlign:"center",fontSize:20,bottom:10,color:"#5e5e5e"},inactive:{flex:1,textAlignVertical:"center",textAlign:"center",fontWeight:"normal",color:"#bdc3c7"},line:{fontSize:10,textAlign:"center"}});function g(e){return Object(f.jsxs)(j.a,{children:[Object(f.jsx)(j.a,{style:[v.column],children:function(){for(var t=[],n=function(n){t.push(Object(f.jsx)(h,{value:n,currValue:e.value,onPress:function(){e.onChange(n)}},"slider_scale_item_"+n))},c=e.min;c<=e.max;c++)n(c);return t}()}),Object(f.jsx)(j.a,{style:v.container,children:Object(f.jsx)(O.a,{trackStyle:{backgroundColor:"#bdc3c7"},selectedStyle:{backgroundColor:"#5e5e5e"},values:[e.value],onValuesChange:function(t){e.onChange(t[0])},min:e.min,max:e.max,step:1,allowOverlap:!1,snapped:!0})})]})}var v=i.a.create({container:{justifyContent:"center",alignItems:"center"},column:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",bottom:-20},active:{textAlign:"center",fontSize:20,color:"#5e5e5e"},inactive:{textAlign:"center",fontWeight:"normal",color:"#bdc3c7"},line:{textAlign:"center"}}),y=n(41);function m(e){return Object(f.jsxs)(j.a,{style:k.cols,children:[Object(f.jsx)(j.a,{style:k.col,children:Object(f.jsx)(u.a,{children:e.label})}),Object(f.jsx)(j.a,{style:k.col,children:Object(f.jsx)(y.a,{value:e.value?""+e.value:null,onChangeText:function(t){e.onChange(parseFloat(t))},style:k.input,keyboardType:"numeric",clearButtonMode:"always"})})]})}var k=i.a.create({input:{height:40,margin:12,borderWidth:1,padding:10},cols:{flex:1,flexDirection:"row",flexWrap:"wrap",alignItems:"center"},col:{width:"50%"}});function P(e){return Object(f.jsxs)(j.a,{style:w.cols,children:[Object(f.jsx)(j.a,{style:w.col,children:Object(f.jsx)(u.a,{children:e.label})}),Object(f.jsx)(j.a,{style:w.col,children:Object(f.jsx)(u.a,{children:e.value})})]})}var w=i.a.create({cols:{flex:1,flexDirection:"row",flexWrap:"wrap",alignItems:"center"},col:{width:"50%"}});function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){var c=Object(o.useState)(!1),r=a()(c,2),l=(r[0],r[1]);return Object(o.useEffect)((function(){d.a.getItem(e).then((function(e){return n(parseFloat(e))}))}),[e,t]),{value:t,onChange:function(t){d.a.setItem(e,""+t),n(parseFloat(t)),l(!0)}}}function W(e,t){return parseFloat(e.toFixed(t))}function z(){var e=Object(o.useState)(1e3),t=a()(e,2),n=t[0],c=t[1],r=Object(o.useState)(1),l=a()(r,2),i=l[0],d=l[1],O=Object(o.useState)(),x=a()(O,2),h=x[0],p=x[1],v=Object(o.useState)(),y=a()(v,2),k=y[0],w=y[1],C=Object(o.useState)(),z=a()(C,2),D=z[0],T=z[1],I=k<h?"LONG":"SHORT",F=W(Math.abs(n*(i/100)/(h-k)),6),M=F*h,R=W(Math.abs(h*F-k*F),0),E=W(Math.abs(D*F-h*F),0),V=W(E/R,2);return Object(f.jsxs)(b.a,{style:B.container,children:[Object(f.jsxs)(j.a,{style:B.block,children:[Object(f.jsx)(m,S({label:"Account size ($)"},A("accountSize",n,c))),Object(f.jsx)(m,{label:"Risk per trade (%)",value:i,onChange:d}),i%1===0&&i>=1&&i<=5?Object(f.jsx)(g,{min:1,max:5,value:i,onChange:d}):null]}),Object(f.jsxs)(j.a,{style:B.block,children:[Object(f.jsx)(m,S({label:"Entry"},A("entryPrice",h,p))),Object(f.jsx)(m,S({label:"Stop loss"},A("slPrice",k,w))),Object(f.jsx)(m,S(S({label:"Take Profit"},A("tpPrice",D,T)),{},{value:D}))]}),n&&i&&h&&k&&D?Object(f.jsxs)(j.a,{children:[Object(f.jsxs)(j.a,{style:B.block,children:[Object(f.jsx)(P,{label:"Trade direction",value:I}),Object(f.jsx)(P,{label:"Risk/Reward",value:V})]}),Object(f.jsxs)(j.a,{style:B.block,children:[Object(f.jsx)(P,{label:"Max risk ($)",value:R}),Object(f.jsx)(P,{label:"Possible gain ($)",value:E})]}),Object(f.jsxs)(j.a,{style:B.resultsBlock,children:[Object(f.jsx)(P,{label:"Position size",value:F}),Object(f.jsx)(P,{label:"Position size ($)",value:M})]})]}):Object(f.jsx)(u.a,{style:B.resultPlaceholder,children:"Please enter values."}),Object(f.jsx)(s.a,{style:"auto"})]})}var B=i.a.create({container:{backgroundColor:"#fff",paddingTop:50,paddingLeft:40,paddingRight:40},inputsBlock:{borderWidth:1,borderColor:"#333333",marginBottom:40},block:{marginBottom:40},resultsBlock:{borderWidth:1,borderColor:"#333333",marginBottom:40,backgroundColor:"#f3f3f3",padding:20},resultPlaceholder:{textAlign:"center",marginTop:20,fontWeight:"bold"}})},81:function(e,t,n){e.exports=n(109)}},[[81,1,2]]]);
//# sourceMappingURL=app.916f4385.chunk.js.map