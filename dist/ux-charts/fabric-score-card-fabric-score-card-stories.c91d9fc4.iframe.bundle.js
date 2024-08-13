"use strict";(self.webpackChunkpowerbi_clients=self.webpackChunkpowerbi_clients||[]).push([[533],{"./trident/libs/ux-charts/src/lib/fabric-score-card/fabric-score-card.stories.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScoreCardOptions=void 0;const common_1=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.12_@angular+core@16.2.12_rxjs@6.6.7/node_modules/@angular/common/fesm2022/common.mjs"),angular_1=__webpack_require__("./node_modules/.pnpm/@storybook+angular@7.5.3_@angular-devkit+architect@0.1602.13_@angular-devkit+build-angular@16_evdpuco6fj25d2slin6wxkzyfy/node_modules/@storybook/angular/dist/index.mjs"),mock_data_1=__webpack_require__("./trident/libs/ux-charts/src/lib/mock-data.ts"),injec_load_script_1=__webpack_require__("./trident/libs/ux-charts/src/lib/injec-load-script.ts");(0,__webpack_require__("./trident/libs/ux-charts/src/lib/fabric-score-card/fabric-score-card.ts").registerFabricScoreCard)();const options={barChart1:{hideYAxisLine:!0},barChart2:{hideXLabels:!0},barChart3:{hideXLabels:!0,legend:{}},barChart4:{ticks:6},barChart5:{ticks:6,valueLines:6},barChart6:{ticks:6,valueLines:6},barChart7:{ticks:6,valueLines:6,grouped:!0,legend:{placeItems:"sequence"}}},datas={scoreCard1:mock_data_1.MockEndorsementData,scoreCard2:mock_data_1.MockEndorsementData,scoreCard3:mock_data_1.MockEndorsementData,scoreCard4:mock_data_1.MockEndorsementData,scoreCard5:mock_data_1.MockEndorsementData,scoreCard6:mock_data_1.MockTagsPerItem,scoreCard7:mock_data_1.MockLabelsPerItem},LoadComponent=(0,injec_load_script_1.injectLoadScript)((()=>{setTimeout((()=>{document.querySelectorAll("fabric-score-card").forEach(((fabricScoreCard,index)=>{fabricScoreCard.data=datas[fabricScoreCard.id],fabricScoreCard.options=options[fabricScoreCard.id],fabricScoreCard.redraw()}))}),100)}));exports.default={title:"Components/fabric-score-card",decorators:[(0,angular_1.moduleMetadata)({imports:[common_1.CommonModule,LoadComponent]})]};exports.ScoreCardOptions=()=>({template:'\n    <div style="display: flex; flex-direction: row; flex-wrap: wrap;">\n        <div>\n            <h3>Scorecard 1 value</h3>\n            <div>\n                <fabric-score-card id="scoreCard1" />\n            </div>\n        </div>\n    </div>\n    <load-script />\n    '})},"./trident/libs/ux-charts/src/lib/colors.ts":(__unused_webpack_module,exports)=>{var Colors;Object.defineProperty(exports,"__esModule",{value:!0}),exports.BarsDataRange=exports.Colors=void 0,function(Colors){Colors.PrimaryFluentDataVizSlot1="#637CEF",Colors.PrimaryFluentDataVizSlot2="#E3008C",Colors.PrimaryFluentDataVizSlot3="#2AA0A4",Colors.PrimaryFluentDataVizSlot4="#9373C0",Colors.PrimaryFluentDataVizSlot5="#3B52B4",Colors.PrimaryFluentDataVizSlot6="#B146C2",Colors.PrimaryFluentDataVizSlot7="#13A10E",Colors.PrimaryFluentDataVizSlot8="#14A3B3",Colors.PrimaryFluentDataVizSlot9="#689920",Colors.PrimaryFluentDataVizSlot10="#B27C00",Colors.PrimaryFluentDataVizNeutral1="#E0E0E0",Colors.PrimaryFluentDataVizNeutral2="#EBEBEB",Colors.NeutralWebGrey160="#323130"}(Colors||(exports.Colors=Colors={})),exports.BarsDataRange=[Colors.PrimaryFluentDataVizSlot1,Colors.PrimaryFluentDataVizSlot2,Colors.PrimaryFluentDataVizSlot3,Colors.PrimaryFluentDataVizSlot4,Colors.PrimaryFluentDataVizSlot5,Colors.PrimaryFluentDataVizSlot6,Colors.PrimaryFluentDataVizSlot7,Colors.PrimaryFluentDataVizSlot8,Colors.PrimaryFluentDataVizSlot9,Colors.PrimaryFluentDataVizSlot10]},"./trident/libs/ux-charts/src/lib/fabric-score-card/fabric-score-card.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.registerFabricScoreCard=exports.FabricScoreCard=void 0;const colors_1=__webpack_require__("./trident/libs/ux-charts/src/lib/colors.ts"),margins_1=__webpack_require__("./trident/libs/ux-charts/src/lib/positioning/margins.ts");class FabricScoreCard extends HTMLElement{constructor(){super(...arguments),this.margin=margins_1.Margins.ScoreCard,this._data=[],this._options={}}get widthMargin(){return this.margin.left+this.margin.right}get heightMargin(){return this.margin.top+this.margin.bottom}set data(value){this._data=value,this.redraw()}get data(){return this._data}get options(){return this._options}set options(options){this._options=options,this.redraw()}connectedCallback(){const style=document.createElement("style");style.textContent=`\n            .fabric-score-card {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                font-size: 12px;\n                font-weight: 400;\n                color: ${colors_1.Colors.NeutralWebGrey160};\n                margin: 0;\n                padding: 0;\n\n                display: flex;\n                flex-direction: row;\n                flex-wrap: wrap;\n            }\n\n            .fabric-score-card .score-card-item {\n                padding: 5px;\n                display: flex;\n                flex-direction: column;\n            }\n\n            .fabric-score-card .score-card-value {\n                font-size: 28px;\n                font-weight: 600;\n                line-height: 36px;\n            }\n\n            .fabric-score-card .score-card-separator {\n                width: 115px;\n                height: 12px;\n            }\n\n            .fabric-score-card .score-card-label {\n                font-size: 16px;\n                font-weight: 600;\n                line-height: 22px;\n        `,this.wrapper=document.createElement("figure"),this.wrapper.setAttribute("class","fabric-score-card"),this.appendChild(style),this.appendChild(this.wrapper),window.addEventListener("resize",(()=>this.redraw())),this.redraw()}redraw(){this.width=this.parentElement.clientWidth-this.widthMargin,this.height=this.parentElement.clientHeight-this.heightMargin,this.wrapper.innerHTML="",this.drawScorecard(this.data)}createElement(parent,tagName){const element=document.createElement(tagName);return parent.appendChild(element),element}drawScorecard(data){const color=d3.scaleOrdinal(colors_1.BarsDataRange);data.forEach((d=>{const scoreCardItem=this.createElement(this.wrapper,"div");scoreCardItem.setAttribute("class","score-card-item");const value=this.createElement(scoreCardItem,"span");value.setAttribute("class","score-card-value"),value.textContent=d.value;const separator=this.createElement(scoreCardItem,"span");separator.setAttribute("class","score-card-separator"),separator.style.backgroundColor=color(d.key);const key=this.createElement(scoreCardItem,"span");key.setAttribute("class","score-card-label"),key.textContent=d.key}))}}exports.FabricScoreCard=FabricScoreCard,exports.registerFabricScoreCard=function registerFabricScoreCard(){void 0===customElements.get("fabric-score-card")&&customElements.define("fabric-score-card",FabricScoreCard)}},"./trident/libs/ux-charts/src/lib/injec-load-script.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.injectLoadScript=void 0;const tslib_1=__webpack_require__("./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js"),common_1=__webpack_require__("./node_modules/.pnpm/@angular+common@16.2.12_@angular+core@16.2.12_rxjs@6.6.7/node_modules/@angular/common/fesm2022/common.mjs"),core_1=__webpack_require__("./node_modules/.pnpm/@angular+core@16.2.12_rxjs@6.6.7_zone.js@0.13.0/node_modules/@angular/core/fesm2022/core.mjs");exports.injectLoadScript=cb=>{let HeroListComponent=class HeroListComponent{constructor(){}ngOnInit(){cb()}};return HeroListComponent.ctorParameters=()=>[],HeroListComponent=tslib_1.__decorate([(0,core_1.Component)({standalone:!0,selector:"load-script",template:"",imports:[common_1.CommonModule]}),tslib_1.__metadata("design:paramtypes",[])],HeroListComponent),HeroListComponent}},"./trident/libs/ux-charts/src/lib/mock-data.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ItemsByType=exports.MockLabelsPerItem=exports.MockTagsPerItem=exports.MockEndorsementData=void 0,exports.MockEndorsementData=[{key:"Master Data",value:10,Released:"2014"},{key:"Certified",value:20,Released:"2013"},{key:"Promoted",value:38,Released:"2016"},{key:"None",value:100,Released:"2010"}],exports.MockTagsPerItem=[{key:"FY2025",value:2,Released:"2014"},{key:"L100",value:11,Released:"2013"},{key:"Q4-2024",value:8,Released:"2016"},{key:"Planning-Q3",value:17,Released:"2010"},{key:"Conf-OCt-2024",value:1,Released:"2010"},{key:"No tag",value:95,Released:"2010"}];exports.MockLabelsPerItem=[{key:"Semantic Model",group:"General",value:5},{key:"Semantic Model",group:"Confidential",value:1},{key:"Semantic Model",group:"Highly Confidential",value:1},{key:"Report",group:"General",value:3},{key:"Report",group:"Confidential",value:0},{key:"Report",group:"Highly Confidential",value:1},{key:"Lakehouse",group:"General",value:2},{key:"Lakehouse",group:"Confidential",value:5},{key:"Lakehouse",group:"Highly Confidential",value:1}].reduce(((acc,item)=>{const existing=acc.find((x=>x.key===item.key));return existing?existing.values.push({name:item.group,value:item.value}):acc.push({key:item.key,values:[{name:item.group,value:item.value}]}),acc}),[]),exports.ItemsByType=[{key:"Reports",value:50},{key:"Semantic models",value:35},{key:"Dashboard",value:15},{key:"Lakehouse",value:7},{key:"SQL analytics endpoint",value:5},{key:"Dataflows",value:5},{key:"Warehouse",value:3}]},"./trident/libs/ux-charts/src/lib/positioning/margins.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Margins=void 0,exports.Margins={BarChart:{top:10,right:0,bottom:20,left:30},PieChart:{top:10,right:0,bottom:20,left:30},ScoreCard:{top:10,right:0,bottom:10,left:0}}}}]);