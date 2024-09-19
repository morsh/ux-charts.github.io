"use strict";(self.webpackChunkpowerbi_clients=self.webpackChunkpowerbi_clients||[]).push([[924],{"./trident/libs/ux-charts/src/lib/fabric-bar-chart/fabric-bar-chart.stories.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.BarChartOptions=void 0;const common_1=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.12_@angular+core@16.2.12_rxjs@6.6.7/node_modules/@angular/common/fesm2022/common.mjs"),angular_1=__webpack_require__("./node_modules/.pnpm/@storybook+angular@7.5.3_@angular-devkit+architect@0.1602.13_@angular-devkit+build-angular@16_evdpuco6fj25d2slin6wxkzyfy/node_modules/@storybook/angular/dist/index.mjs"),fabric_bar_chart_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-bar-chart/fabric-bar-chart.ts"),mock_data_1=__webpack_require__("./trident/libs/ux-charts/src/tests/mock-data.ts"),colors_1=__webpack_require__("./trident/libs/ux-charts/src/lib/properties/colors.ts");(0,fabric_bar_chart_1.registerFabricBarChart)();const options={barChart1:{axis:{y:{hideLine:!0}}},barChart2:{axis:{x:{hideLabels:!0}}},barChart3:{axis:{x:{hideLabels:!0}},legend:!0},barChart4:{axis:{y:{ticks:6}}},barChart5:{axis:{y:{ticks:6,valueLines:6}}},barChart6:{axis:{y:{ticks:6,valueLines:6,maxValue:100}}},barChart7:{axis:{y:{ticks:6,valueLines:6}},legend:{placeItems:"sequence"}},barChart8:{axis:{y:{ticks:6,valueLines:6},x:{tickWidth:40}},colors:[colors_1.Colors.PrimaryFluentDataVizSlot1]}};console.log(mock_data_1.MockLabelsPerItem);const data={barChart1:mock_data_1.MockEndorsementData,barChart2:mock_data_1.MockEndorsementData,barChart3:mock_data_1.MockEndorsementData,barChart4:mock_data_1.MockEndorsementData,barChart5:mock_data_1.MockEndorsementData,barChart6:mock_data_1.MockTagsPerItem,barChart7:mock_data_1.MockLabelsPerItem,barChart8:mock_data_1.ItemsByType};exports.default={title:"Components/fabric-bar-chart",decorators:[(0,angular_1.moduleMetadata)({imports:[common_1.CommonModule]})]};exports.BarChartOptions=()=>({template:'\n    <div style="display: flex; flex-direction: row; flex-wrap: wrap;">\n        <div>\n            <h3>Hide Y Axis</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart1" [data]=\'data.barChart1\' [options]=\'options.barChart1\' />\n            </div>\n        </div>\n        <div>\n            <h3>Hide X Labels</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart2" [data]=\'data.barChart2\' [options]=\'options.barChart2\' />\n            </div>\n        </div>\n        <div>\n            <h3>Show Legend</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart3" [data]=\'data.barChart3\' [options]=\'options.barChart3\' />\n            </div>\n        </div>\n        <div>\n            <h3>With 6 Ticks</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart4" [data]=\'data.barChart4\' [options]=\'options.barChart4\' />\n            </div>\n        </div>\n        <div>\n            <h3>With 6 Value lines</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart5" [data]=\'data.barChart5\' [options]=\'options.barChart5\' />\n            </div>\n        </div>\n        <div>\n            <h3>Grouped Bar Chart</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart6" [data]=\'data.barChart6\' [options]=\'options.barChart6\' />\n            </div>\n        </div>\n        <div>\n            <h3>Grouped Bar Chart</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart7" [data]=\'data.barChart7\' [options]=\'options.barChart7\' />\n            </div>\n        </div>\n        <div>\n            <h3>Single Color Chart</h3>\n            <div style="width: 383px; height: 180px;">\n                <fabric-bar-chart id="barChart8" [data]=\'data.barChart8\' [options]=\'options.barChart8\' />\n            </div>\n        </div>\n    </div>\n    ',props:{options,data}})},"./trident/libs/ux-charts/src/lib/d3-utils/text-wrap.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createTextWrap=void 0;exports.createTextWrap=(width,padding)=>function textWrap(){const self=d3.select(this),maxTextLength=width-2*padding;let text=self.text();for(;self.node().getComputedTextLength()>maxTextLength&&text.length>0;)text=text.slice(0,-1),self.text(text+"...")}},"./trident/libs/ux-charts/src/lib/fabric-axes/fabric-axes.svg.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAxesMethods=void 0;const text_wrap_1=__webpack_require__("./trident/libs/ux-charts/src/lib/d3-utils/text-wrap.ts"),colors_1=__webpack_require__("./trident/libs/ux-charts/src/lib/properties/colors.ts"),fabric_axes_types_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-axes/fabric-axes.types.ts");exports.createAxesMethods=function createAxesMethods({svg,width,groupedData,chartHeight,scaleType}){let x0,x1,xAxis,y;const{firstLevelKeys,secondLevelKeys,isGrouped}=groupedData,isLinear=scaleType===fabric_axes_types_1.ScaleType.Linear;return{createXAxis:()=>{const keys=isGrouped?secondLevelKeys:firstLevelKeys;if(isLinear){const groupedData=keys.map((d=>"number"==typeof d?d:parseInt(d,10)));x0=d3.scaleLinear().domain([Math.min(...groupedData),Math.max(...groupedData)]).range([0,width])}else x0=d3.scaleBand().domain(keys.map((key=>key.toString()))).range([0,width]).padding(.2);xAxis=d3.axisBottom(x0)},drawXAxis:(tickWidth,ticks)=>{svg.append("g").attr("class","x axis").attr("transform","translate(0,"+chartHeight+")").call(xAxis.ticks(ticks)).selectAll("text").each((0,text_wrap_1.createTextWrap)(tickWidth,.2))},createYAxis:(bottomYValue,topYValue)=>{y=d3.scaleLinear().domain([bottomYValue,topYValue]).range([chartHeight,0])},setupXGroupedDomains:()=>{x1=d3.scaleBand(),x1.domain(firstLevelKeys).rangeRound([0,x0.bandwidth()])},drawYAxis:ticks=>{const yAxis=d3.axisLeft(y);svg.append("g").attr("class","y axis").style("opacity",0).call(yAxis.ticks(ticks)).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").style("font-weight","bold").text("Value"),svg.select(".y").transition().duration(500).delay(1300).style("opacity","1")},addValueLines:(valueLines,bottomYValue,topYValue)=>{const values=[...Array(valueLines).keys()].map(((_,i)=>(topYValue-bottomYValue)/(valueLines-1)*i+bottomYValue));svg.selectAll(".value-line").data(values).enter().append("line").attr("class","value-line").style("stroke",colors_1.Colors.PrimaryFluentDataVizNeutral2).style("stroke-width",1).attr("x1",0).attr("y1",(d=>y(d))).attr("x2",width).attr("y2",(d=>y(d)))},getAxes:()=>({x0,x1,y})}}},"./trident/libs/ux-charts/src/lib/fabric-axes/fabric-axes.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAxesHandler=void 0;const get_grouped_data_1=__webpack_require__("./trident/libs/ux-charts/src/lib/types/get-grouped-data.ts"),fabric_axes_svg_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-axes/fabric-axes.svg.ts"),fabric_axes_types_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-axes/fabric-axes.types.ts");exports.createAxesHandler=function createAxesHandler({svg,options={},data,chartHeight,width,groupXInBands}){var _a,_b,_c,_d,_e,_f,_g,_h;const groupedData=(0,get_grouped_data_1.getGroupedData)(data),xTickWidth=(null===(_a=options.x)||void 0===_a?void 0:_a.tickWidth)||50,scaleType=(null===(_b=options.x)||void 0===_b?void 0:_b.scaleType)||fabric_axes_types_1.ScaleType.Band,{createXAxis,drawXAxis,createYAxis,drawYAxis,setupXGroupedDomains,addValueLines,getAxes}=(0,fabric_axes_svg_1.createAxesMethods)({svg,width,groupedData,scaleType,chartHeight});if(createXAxis(),!(null===(_c=options.x)||void 0===_c?void 0:_c.hideLabels)){drawXAxis(xTickWidth,(null===(_d=options.x)||void 0===_d?void 0:_d.ticks)||10)}const topYValue=(null===(_e=options.y)||void 0===_e?void 0:_e.maxValue)||Math.max(...groupedData.values);createYAxis(0,topYValue),groupXInBands&&setupXGroupedDomains();const ticks=(null===(_f=options.y)||void 0===_f?void 0:_f.ticks)||10;return(null===(_g=options.y)||void 0===_g?void 0:_g.hideLine)||drawYAxis(ticks),(null===(_h=options.y)||void 0===_h?void 0:_h.valueLines)&&addValueLines(options.y.valueLines,0,topYValue),getAxes()}},"./trident/libs/ux-charts/src/lib/fabric-axes/fabric-axes.types.ts":(__unused_webpack_module,exports)=>{var ScaleType;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScaleType=void 0,function(ScaleType){ScaleType.Band="Band",ScaleType.Linear="Linear"}(ScaleType||(exports.ScaleType=ScaleType={}))},"./trident/libs/ux-charts/src/lib/fabric-bar-chart/fabric-bar-chart.svg.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createBarChartSvgHandler=void 0,exports.createBarChartSvgHandler=function createBarChartSvgHandler({svg,axes,data,chartHeight}){return{drawOneDimentionalBars:color=>{svg.selectAll("bars").data(data).enter().append("rect").attr("class","bar").attr("x",(d=>axes.x0(d.key)||0)).attr("y",(d=>axes.y(0))).attr("width",axes.x0.bandwidth()).attr("height",(_=>chartHeight-axes.y(0))).attr("fill",(d=>color(d.key)))},drawGroupedBars:color=>{svg.selectAll(".slice").data(data).enter().append("g").attr("class","slice").style("fill",(d=>color(d.group))).attr("transform",(d=>"translate("+axes.x1(d.group)+",0)")).selectAll("rect").data((d=>d.values)).enter().append("rect").attr("class","bar").attr("width",axes.x1.bandwidth()).attr("x",(d=>axes.x0(d.key.toString()))).attr("y",(_d=>axes.y(0))).attr("height",(_d=>chartHeight-axes.y(0)))},animateBars:animationDuration=>{svg.selectAll("rect.bar").transition().delay((d=>Math.random()*animationDuration)).duration(animationDuration).attr("y",(d=>axes.y(d.value))).attr("height",(d=>chartHeight-axes.y(d.value)))}}}},"./trident/libs/ux-charts/src/lib/fabric-bar-chart/fabric-bar-chart.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.registerFabricBarChart=exports.FabricBarChart=void 0;const get_grouped_data_1=__webpack_require__("./trident/libs/ux-charts/src/lib/types/get-grouped-data.ts"),fabric_legend_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-legend/fabric-legend.ts"),margins_1=__webpack_require__("./trident/libs/ux-charts/src/lib/properties/margins.ts"),colors_1=__webpack_require__("./trident/libs/ux-charts/src/lib/properties/colors.ts"),fabric_base_chart_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-base-chart/fabric-base-chart.ts"),fabric_bar_chart_svg_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-bar-chart/fabric-bar-chart.svg.ts"),fabric_axes_1=__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-axes/fabric-axes.ts"),common_1=__webpack_require__("./trident/libs/ux-charts/src/lib/types/common.ts");class FabricBarChart extends fabric_base_chart_1.FabricBaseChart{constructor(){super(...arguments),this.margin=margins_1.ChartMargins.BarChart,this.customTagName="fabric-bar-chart",this.requireOptions=!1}redrawChart(){this.createSvg(),this.drawBars(this.data)}drawBars(data){var _a;const options=this.options,isGrouped=(0,get_grouped_data_1.isDataGrouped)(data),chartHeight=this.innerChartHeight,animationDuration=null!==(_a=options.animationDuration)&&void 0!==_a?_a:1e3,color=d3.scaleOrdinal(options.colors||colors_1.LightTheme),axes=(0,fabric_axes_1.createAxesHandler)({svg:this.svg,options:options.axis,data,chartHeight,width:this.innerChartWidth,groupXInBands:isGrouped}),{drawOneDimentionalBars,drawGroupedBars,animateBars}=(0,fabric_bar_chart_svg_1.createBarChartSvgHandler)({svg:this.svg,axes,data,chartHeight});isGrouped?drawGroupedBars(color):drawOneDimentionalBars(color),animateBars(animationDuration),options.legend&&(0,fabric_legend_1.createLegend)({svg:this.svg,data,offsetY:this.height-common_1.LegendBottomHeight,color,options:options.legend})}}exports.FabricBarChart=FabricBarChart,exports.registerFabricBarChart=function registerFabricBarChart(){void 0===customElements.get("fabric-bar-chart")&&customElements.define("fabric-bar-chart",FabricBarChart)}}}]);