(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVRoge2Y0QrCMAxFA/qJyh7058Thg37iBG1kwaLd2NakTeEeyIsP2T3tXEOJAAAAANAOu1CXUGeD3sdQt1B7g94fOHwf6hXqSboSHH4Yez/ISELCS/EDO4W+HX3DS/UKff84JB6UuxPxysc9T1lJZ9CUKB5e0JCoFl7IkageXtgi4Sa8sEbCXXhhiYTb8MKchPvwQupAGiZ+0zgATUjthPuV/2VKoonwTOqdtxgATZgK34RE03/iuU+lxRSrypLvvFuJNYeUO4ktJ6wbiZzxoLqExmxTTUJzMCsuYTFVFpVo/lqFL7auZDOYxTtxJ8PbOW7Mq2MxCnRjb7PwAAAAANDmDZU/C/0K4gwaAAAAAElFTkSuQmCC"},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var c=n(14),r=n.n(c),a=n(24),l=n.n(a),o=n(0),s=n(80),i=n(3),u=n(42),b=n(12),j=n(2),x=n(54),O=n(79),d=n(46),h=n(1);function g(e){var t=function(){return e.currValue==e.value};return Object(h.jsxs)(d.a,{onPress:e.onPress,children:[Object(h.jsxs)(b.a,{style:[t()?f.active:f.inactive],children:[e.value,"%"]}),Object(h.jsxs)(b.a,{style:[t()?f.line:{}],children:[" ",t()?"|":""]})]})}var f=i.a.create({active:{textAlign:"center",fontSize:20,bottom:10,color:"#5e5e5e"},inactive:{flex:1,textAlignVertical:"center",textAlign:"center",fontWeight:"normal",color:"#bdc3c7"},line:{fontSize:10,textAlign:"center"}});function A(e){return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.a,{style:[p.column],children:function(){for(var t=[],n=function(n){t.push(Object(h.jsx)(g,{value:n,currValue:e.value,onPress:function(){e.onChange(n)}},"slider_scale_item_"+n))},c=e.min;c<=e.max;c++)n(c);return t}()}),Object(h.jsx)(j.a,{style:p.container,children:Object(h.jsx)(O.a,{trackStyle:{backgroundColor:"#bdc3c7"},selectedStyle:{backgroundColor:"#5e5e5e"},values:[e.value],onValuesChange:function(t){e.onChange(t[0])},min:e.min,max:e.max,step:1,allowOverlap:!1,snapped:!0})})]})}var p=i.a.create({container:{justifyContent:"center",alignItems:"center"},column:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",bottom:-20},active:{textAlign:"center",fontSize:20,color:"#5e5e5e"},inactive:{textAlign:"center",fontWeight:"normal",color:"#bdc3c7"},line:{textAlign:"center"}}),v=n(41),y=n(48);function m(e){return Object(h.jsxs)(j.a,{style:C.cols,children:[Object(h.jsx)(j.a,{style:C.col,children:Object(h.jsx)(b.a,{children:e.label})}),Object(h.jsxs)(j.a,{style:C.col,children:[Object(h.jsx)(v.a,{value:e.value?""+e.value:"",onChangeText:function(t){e.onChange(t)},style:C.input,keyboardType:"decimal-pad"}),e.value?Object(h.jsx)(d.a,{style:C.closeButtonParent,onPress:function(){return e.onChange("")},children:Object(h.jsx)(y.a,{style:C.closeButton,source:n(100)})}):null]})]})}var C=i.a.create({input:{height:40,margin:12,borderWidth:1,padding:10},cols:{flex:1,flexDirection:"row",flexWrap:"wrap",alignItems:"center"},col:{width:"50%"},closeButton:{height:20,width:20},closeButtonParent:{position:"absolute",right:15,top:21,justifyContent:"center",alignItems:"center",marginRight:5}});function w(e){return Object(h.jsxs)(j.a,{style:P.cols,children:[Object(h.jsx)(j.a,{style:P.col,children:Object(h.jsx)(b.a,{children:e.label})}),Object(h.jsx)(j.a,{style:P.col,children:Object(h.jsx)(b.a,{children:e.value})})]})}var P=i.a.create({cols:{flex:1,flexDirection:"row",flexWrap:"wrap",alignItems:"center"},col:{width:"50%"}});function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return Object(o.useEffect)((function(){x.a.getItem(e).then((function(e){return n(e)}))}),[e,t]),{value:t,onChange:function(t){x.a.setItem(e,""+t),n(t)}}}function B(e,t){return parseFloat(e.toFixed(t))}function D(){var e=Object(o.useState)(1e3),t=l()(e,2),n=t[0],c=t[1],r=Object(o.useState)(1),a=l()(r,2),i=a[0],x=a[1],O=Object(o.useState)(),d=l()(O,2),g=d[0],f=d[1],p=Object(o.useState)(),v=l()(p,2),y=v[0],C=v[1],P=Object(o.useState)(),S=l()(P,2),D=S[0],U=S[1],F=parseFloat(n),z=parseFloat(i),I=parseFloat(g),J=parseFloat(y),R=parseFloat(D),W=J<I?"LONG":"SHORT",M=B(Math.abs(F*(z/100)/(I-J)),8),V=B(M*I,4),X=B(Math.abs(I*M-J*M),0),L=B(Math.abs(R*M-I*M),0),Y=B(L/X,2);return Object(h.jsxs)(u.a,{style:E.container,children:[Object(h.jsxs)(j.a,{style:E.block,children:[Object(h.jsx)(m,k({label:"Account size ($)"},T("accountSize",n,c))),Object(h.jsx)(m,{label:"Risk per trade (%)",value:i,onChange:x}),z%1===0&&z>=1&&z<=5?Object(h.jsx)(A,{min:1,max:5,value:z,onChange:x}):null]}),Object(h.jsxs)(j.a,{style:E.block,children:[Object(h.jsx)(m,k({label:"Entry"},T("entryPrice",g,f))),Object(h.jsx)(m,k({label:"Stop loss"},T("slPrice",y,C))),Object(h.jsx)(m,k({label:"Take Profit"},T("tpPrice",D,U)))]}),F&&z&&I&&J&&R?Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(j.a,{style:E.block,children:[Object(h.jsx)(w,{label:"Trade direction",value:W}),Object(h.jsx)(w,{label:"Risk/Reward",value:Y})]}),Object(h.jsxs)(j.a,{style:E.block,children:[Object(h.jsx)(w,{label:"Max risk",value:X+" USD"}),Object(h.jsx)(w,{label:"Possible gain",value:L+" USD"})]}),Object(h.jsxs)(j.a,{style:E.resultsBlock,children:[Object(h.jsx)(w,{label:"Position size",value:M}),Object(h.jsx)(w,{label:"Position size",value:V+" USD"})]})]}):Object(h.jsx)(b.a,{style:E.resultPlaceholder,children:"Please enter values."}),Object(h.jsx)(s.a,{style:"auto"})]})}var E=i.a.create({container:{backgroundColor:"#fff",paddingTop:50,paddingLeft:40,paddingRight:40},inputsBlock:{borderWidth:1,borderColor:"#333333",marginBottom:40},block:{marginBottom:40},resultsBlock:{borderWidth:1,borderColor:"#333333",marginBottom:40,backgroundColor:"#f3f3f3",padding:20},resultPlaceholder:{textAlign:"center",marginTop:20,fontWeight:"bold"}})},82:function(e,t,n){e.exports=n(111)}},[[82,1,2]]]);
//# sourceMappingURL=app.376b4395.chunk.js.map