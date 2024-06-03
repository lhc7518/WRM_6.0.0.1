"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[8672],{8672:function(t,e,i){i.r(e),i.d(e,{mapchart:function(){return u}});var o=i(2284),a=i(467),r=i(4756),s=i.n(r),n=i(5461),l=i(8971),c=i(2338),p=i(1204),h=i(3406),d=i(2406),u=function(t,e,i){d.q.call(this,t,e,i)};u.prototype.initAsync=(0,a.A)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u.isImported){t.next=8;break}return t.next=3,inquires("externalJS/mapchart/d3.min.js");case 3:return t.next=5,inquires("externalJS/mapchart/topojson.min.js");case 5:return t.next=7,inquires("externalJS/mapchart/textures.min.js");case 7:u.isImported=!0;case 8:case"end":return t.stop()}}),t)}))),n.q.extend(u.prototype,d.q.prototype),u.prototype.defaultOptions={pluginType:"uiplugin.mapchart",pluginName:"mapchart",useConfig:!0,userEvents:["onbeforemapchange","onaftermapchange","onmapmouseover","onmapmouseout","onmapclick","onmapdblclick","onmapmousemove","onmapdatachange"],dataMapPath:"",dataMapRatio_level0:"simp1",dataMapRatio_level1:"simp1",dataMapRatio_level2:"simp1",startMap:"0",dataLists:"",zoomMin:"0.2",zoomMax:"5",maxDepth:-1,usePattern:!0,useMarker:!1,markerPositionX:0,markerPositionY:0,markerImage:"",contextFormatter:"",markerDefiner:"",markerClassDefiner:"",showMunicipalityLabel:!0,setTooltipStrFunc:"",event_drillup:"oncontextmenu",event_drilldown:"onclick",event_select:"onmouseover",event_deselect:"onmouseout",event_tooltipon:"onmouseover",event_tooltipoff:"onmouseout",event_zoom:"onzoom",event_drag:"ondrag",accessibility:!1,calloutOverlappedLabel:!1,calloutLabelExceptionHandler:"",calloutLineClass:"",calloutCircleClass:"",hideOverlappedLabel:!1,hideLabelExceptionHandler:""},u.prototype.initialize=function(t){try{if(!this.options.dataMapPath){var e=location.pathname.lastIndexOf("/");this.options.dataMapPath=e>=0?location.pathname.slice(0,e)+"/_websquare_/externalJS/mapchart":"/_websquare_/externalJS/mapchart"}this.currentMap="",this._dataListsObj={},this._load=!1,this.patternList=[],this._colorScales={}}catch(t){l.Y.printStackTrace(t)}},u.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2mapchart "+this.options.className+"'>"),t.push("<div id='"+this.id+"_tooltip' class='w2mapchart_tooltip' style='position:absolute;border:1px solid black;display:none;z-index:10;'></div>"),t.push("<div id='"+this.id+"_marker_tooltip' class='' style='position:absolute;display:none;z-index:10;'></div>"),1==this.options.accessibility&&(t.push("<div id='"+this.id+"_accessibilityZone' class='w2mapchart_accessibility'>"),t.push("<select id='"+this.id+"_level1' class='w2mapchart_accessibility_select'><option value='LEVEL1'>LEVEL1</options></select>"),t.push("<select id='"+this.id+"_level2' class='w2mapchart_accessibility_select'><option value='LEVEL2'>LEVEL2</options></select>"),t.push("<select id='"+this.id+"_level3' class='w2mapchart_accessibility_select'><option value='LEVEL3'>LEVEL3</options></select>"),t.push("</div>")),t.push("</div>"),t.join("")}catch(t){l.Y.printStackTrace(t)}},u.prototype.setAction=function(){try{d.q.addCheckResize(this.uuid,"checkResize"),this.render&&this.render.offsetWidth>0&&this.render.offsetHeight>0&&(this._marker_tooltip=this.getElementById(this.id+"_marker_tooltip"),this._tooltip=this.getElementById(this.id+"_tooltip"),this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})),this.event.addListener(this.render,"onmouseleave",this.event.bindAsEventListener(this,(function(t){this._marker_tooltip.style.display="none"})))}catch(t){l.Y.printStackTrace(t)}},u.prototype.refreshItemset=function(){},u.prototype.finalize=function(){},u.prototype.createMap=function(t){try{var e=this;this.currentMap=t.topoObj
;var i=d3.select("#"+this.id).append("svg").attr("width",t.width).attr("height",t.height).attr("id",this.id+"_svg").style("overflow","hidden"),o=i.append("g").attr("class","w2mapchart_map").attr("id",this.id+"_map"),a=i.append("g").attr("class","w2mapchart_places").attr("id",this.id+"_places"),r=this.id,s=this.uuid,d=t.width,u=t.height,f=parseFloat(this.options.zoomMin),v=parseFloat(this.options.zoomMax),m=this.options.event_drillup.replace(/^on/,""),y=this.options.event_drilldown.replace(/^on/,""),k=this.options.event_select.replace(/^on/,""),g=this.options.event_deselect.replace(/^on/,""),_=this.options.event_tooltipon.replace(/^on/,""),B=this.options.event_tooltipoff.replace(/^on/,""),D=this.options.event_drag.replace(/^on/,""),b=this.options.event_zoom.replace(/^on/,""),S=this.patternList,x=null,z=null,M=null,E=null;this.options.setTooltipStrFunc&&(x=p.Z.getGlobalFunction(this.options.setTooltipStrFunc,this.scope_id)),this.options.contextFormatter&&(z=p.Z.getGlobalFunction(this.options.contextFormatter,this.scope_id)),this.options.markerDefiner&&(M=p.Z.getGlobalFunction(this.options.markerDefiner,this.scope_id)),this.options.markerClassDefiner&&(E=p.Z.getGlobalFunction(this.options.markerClassDefiner,this.scope_id));var W=this.options.markerImage||"m0.99,-32a10.982,10.982 0 0 0 -10.99,10.99c0,8.242 10.99,20.41 10.99,20.41s10.99,-12.168 10.99,-20.41a10.982,10.982 0 0 0 -10.99,-10.99zm0,14.915a3.925,3.925 0 1 1 3.925,-3.925a3.926,3.926 0 0 1 -3.925,3.925z";d3.json(t.topoFile,(function(l,w){e._mapData=w;var L,C=d/w.transform.scale[0],q=u/w.transform.scale[1]*.8,O=Math.min(C,q)/180,A=Math.min(1.25*C*w.transform.scale[1],u),T=Math.min(Math.min(C,q)*w.transform.scale[0],d),Y=A+(u-A)/2-u/100,P=(d-T)/2+d/100,j=d3.geo.mercator().center(w.transform.translate).scale(O).translate([P,Y]);if(i.on(m+".drillup",(function(){d3.event.preventDefault(),WebSquare.idCache[s].drillup()})),parseFloat(f)==parseFloat(v)||"none"===b){if("none"!==D){var F=d3.behavior.drag().on(D+".drag",(function(t,e){var i=d3.transform(o.attr("transform")),r=d3.transform(a.attr("transform")),s=[i.translate[0]+d3.event.dx,i.translate[1]+d3.event.dy].toString(),n=[r.translate[0]+d3.event.dx,r.translate[1]+d3.event.dy].toString(),l=[i.scale[0],i.scale[1]].toString(),c=[r.scale[0],r.scale[1]].toString();o.attr("transform",(function(){return"translate("+s+")scale("+l+")"})),a.attr("transform",(function(){return"translate("+n+")scale("+c+")"}))}));i.call(F)}}else"none"===D?((L=d3.behavior.zoom()).scaleExtent([f,v]),L.on(b+".zoom",(function(){o.attr("transform","scale("+d3.event.scale+")"),a.attr("transform","scale("+d3.event.scale+")")})),i.call(L),i.call(L.event)):((L=d3.behavior.zoom()).scaleExtent([f,v]),L.on(b+".zoom",(function(){o.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")"),a.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")")})),i.call(L),i.call(L.event));var R=d3.geo.path().projection(j),I=topojson.feature(w,w.objects[t.topoObj]).features;if(0!=S.length)for(var H in S)i.call(S[H]);var Z=o.selectAll("path").data(I).enter().append("path").attr("class",(function(t){return"municipality c"+t.properties.code})).attr("d",R);if(0!=S.length&&Z.style("fill",(function(t,e){return S[e%S.length].url()})),"none"!==_&&Z.on(_+".tooltipon",(function(t){var i="";if(i+='<div class="kv">',i+='<span class="key">',"function"==typeof x){var a=x(t.properties.name,t.properties.code);i+=null!=a?a:t.properties.name+"("+t.properties.code+")"}else i+=t.properties.name+"("+t.properties.code+")";i+="</span>",i+="</div>",d3.select("#"+r+"_tooltip").html(i).style("display","block").style("pointer-events","none");var s,n,l=R.centroid(t),c=d3.transform(o.attr("transform"));"31"==t.properties.code||"23"==t.properties.code?(s=(1.1*l[1]+10)*c.scale[1]+c.translate[1],n=(1.1*l[0]+10)*c.scale[0]+c.translate[0]):(s=(l[1]+10)*c.scale[1]+c.translate[1],n=(l[0]+10)*c.scale[0]+c.translate[0]),s+=e.render.offsetTop+window.scrollY,
n+=e.render.offsetLeft+window.scrollX,d3.select("#"+r+"_tooltip").style("top",s+"px").style("left",n+"px")})),"none"!==k&&Z.on(k+".select",(function(t){this.setAttribute("fill-opacity","0.6")})),"none"!==B&&Z.on(B+".tooltipoff",(function(){d3.select("#"+r+"_tooltip").style("display","none")})),"none"!==g&&Z.on(g+".deselect",(function(){this.setAttribute("fill-opacity","1.0")})),"none"!==y&&Z.on(y+".drilldown",(function(t){WebSquare.idCache[s].changeMap(t.properties.code)})),Z.on("click.onmapclick",(function(t){c.f.fireEvent(WebSquare.idCache[s],"onmapclick",n.q.extend({},t.properties))})).on("dblclick.onmapdblclick",(function(t){c.f.fireEvent(WebSquare.idCache[s],"onmapdblclick",n.q.extend({},t.properties))})).on("mouseover.onmapmouseover",(function(t){c.f.fireEvent(WebSquare.idCache[s],"onmapmouseover",n.q.extend({},t.properties))})).on("mouseout.onmapmouseout",(function(t){c.f.fireEvent(WebSquare.idCache[s],"onmapmouseout",n.q.extend({},t.properties))})).on("mousemove.onmapmousemove",(function(t){c.f.fireEvent(WebSquare.idCache[s],"onmapmousemove",n.q.extend({},t.properties))})),e.options.useMarker){o.selectAll("text").data(I).enter().append("svg:path").attr("d",(function(t){return M&&"function"==typeof M?!0===M(t.properties.name,t.properties.code)?W:void 0:W})).attr("class",(function(t){if(!E||"function"!=typeof E)return"w2mapchart_marker";var e=E(t.properties.name,t.properties.code);return e||void 0})).attr("transform",(function(t){var i=R.centroid(t);return"31"==t.properties.code?"translate("+[1.1*i[0]+e.options.markerPositionX,1.1*i[1]-e.options.markerPositionY]+") scale(0)":"translate("+[i[0]+e.options.markerPositionX,i[1]-e.options.markerPositionY]+") scale(0)"})).transition().ease("elastic").attr("transform",(function(t){var i=R.centroid(t);return"31"==t.properties.code||"23"==t.properties.code?"translate("+[1.1*i[0]+e.options.markerPositionX,1.1*i[1]-e.options.markerPositionY]+") scale(1.25)":"translate("+[i[0]+e.options.markerPositionX,i[1]-e.options.markerPositionY]+") scale(1.25)"}));var V=".w2mapchart_marker";if(e.options.markerClass){var G=e.options.markerClass.split(",");for(H=0;H<G.length;H++)V+=",."+G[H]}o.selectAll(V).on("mouseover",(function(t){})).on("mouseleave",(function(t){})).on("click",(function(t){var i="";if(i+='<div class="w2mapchart_marker_tooltip">',i+='<span class="key">',z&&"function"==typeof z){var a=z(t.properties.name,t.properties.code);i+=null!=a?a:t.properties.name+"("+t.properties.code+")"}else i+=t.properties.name+"("+t.properties.code+")";i+="</span>",i+="</div>",d3.select("#"+r+"_marker_tooltip").html(i).style("display","block").style("pointer-events","none");var s,n,l=R.centroid(t),c=d3.transform(o.attr("transform"));"31"==t.properties.code||"23"==t.properties.code?(s=(1.1*l[1]+5)*c.scale[1]+c.translate[1],n=(1.1*l[0]+5)*c.scale[0]+c.translate[0]):(s=(l[1]+5)*c.scale[1]+c.translate[1],n=(l[0]+5)*c.scale[0]+c.translate[0]),s+=e.render.offsetTop+window.scrollY,n+=e.render.offsetLeft+window.scrollX,d3.select("#"+r+"_marker_tooltip").style("top",s+"px").style("left",n+"px")}))}var X=[],J=[],N=[],U=0;o.selectAll("text").data(I).enter().append("text").attr("transform",(function(t){if(1==e.options.accessibility){var i=t.properties.code;i.length>=7?(U=3,N.push({text:t.properties.name,value:t.properties.code})):i.length>=5?(U=2,J.push({text:t.properties.name,value:t.properties.code})):i.length>=2&&(U=1,X.push({text:t.properties.name,value:t.properties.code}))}var o=R.centroid(t);return"31"==t.properties.code||"23"==t.properties.code?"translate("+[1.1*o[0],1.1*o[1]]+")":"translate("+o+")"})).attr("dy",".35em").attr("class",(function(t){return"municipality-label c"+t.properties.code})).style("font-size",(function(t){if(!1===e.options.showMunicipalityLabel)return"0px"})).text((function(t){var i;if(e.options.regionNameShort){var o="Map_name_"+t.properties.code;i=h.B.getMessage(o)}return i||t.properties.name})),
1==e.options.accessibility&&(1==U?e.setSelectOptions(X,U):2==U?e.setSelectOptions(J,U):3==U&&e.setSelectOptions(N,U));var K=WebSquare.idCache[s].options.csvFileName;if(WebSquare.idCache[s].options.csvHandler)var Q=p.Z.getGlobalFunction(WebSquare.idCache[s].options.csvHandler);if(K&&"function"==typeof Q&&d3.csv(WebSquare.idCache[s].getURL(K),(function(t){Q.call(WebSquare.idCache[s],a,t,j)})),c.f.fireEvent(WebSquare.idCache[s],"onaftermapchange"),!WebSquare.idCache[s]._load){WebSquare.idCache[s]._load=!0;var $=WebSquare.idCache[s].options.dataLists.split(",");for(H=0;H<$.length;H++){var tt=$[H].wq_trim(),et=p.Z.getComponentById(tt,WebSquare.idCache[s].scope_id);null!=et&&(et.addChild(WebSquare.idCache[s]),WebSquare.idCache[s].refreshDataLists(et.id))}}if(e.options.dataLists&&Object.keys(e._colorScales).length>0)for(var it in e._colorScales)e.setColorScale(e._colorScales[it]);e._textStyles&&e.setTextStyle(e._textStyles.attributeArr,e._textStyles.valueArr),e.options.calloutOverlappedLabel?e._calloutOverlappedLabel():e.options.hideOverlappedLabel&&e._hideOverlappedLabel()}))}catch(t){l.Y.printStackTrace(t)}},u.prototype.setSelectOptions=function(t,e){try{var i=document.getElementById(this.id+"_level"+e);if(1==e)for(var o=1;o<3;o++){for(var a=(r=document.getElementById(this.id+"_level"+(e+o))).options.length;a>=0;a--)r.remove(a);(s=document.createElement("option")).text="LEVEL"+(e+o),s.value="",r.options[0]=s}else if(2==e){var r;for(o=(r=document.getElementById(this.id+"_level"+(e+1))).options.length;o>=0;o--)r.remove(o);(s=document.createElement("option")).text="LEVEL3",s.value="",r.options[0]=s}for(o=0;o<t.length;o++){var s;(s=document.createElement("option")).text=t[o].text,s.value=t[o].value,i.options[o]=s}}catch(t){l.Y.printStackTrace(t,null,this)}},u.prototype.drillup=function(){try{if("0"===this.currentMap)return;var t="0";this.currentMap.length>2&&(t=this.currentMap.slice(0,2)),this.changeMap(t)}catch(t){l.Y.printStackTrace(t)}},u.prototype.changeMap=function(t){try{var e;if(this._marker_tooltip.style.display="none",this._tooltip.style.display="none",1==this.options.accessibility)t.length>=7?e=document.getElementById(this.id+"_level3"):t.length>=5?e=document.getElementById(this.id+"_level2"):t.length>=2&&(e=document.getElementById(this.id+"_level1")),e&&(e.value=t);if(t.length<=5){if(!1===c.f.fireEvent(this,"onbeforemapchange",{oldMapCode:this.currentMap,newMapCode:t}))return;d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove();var i=t,o=this.getDataMapPath(i);this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:o,topoObj:i})}}catch(t){l.Y.printStackTrace(t)}},u.prototype.changeMapPath=function(t){try{d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove(),this.options.dataMapPath=t,this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})}catch(t){l.Y.printStackTrace(t)}},u.prototype.getCurrentMap=function(){try{return this.currentMap}catch(t){l.Y.printStackTrace(t)}},u.prototype.getParentMap=function(){try{return this.currentMap.length>2?this.currentMap.slice(0,2):"0"}catch(t){l.Y.printStackTrace(t)}},u.prototype.addMapEvent=function(t,e){try{for(var i=!1,o=0;o<this.options.userEvents.length;o++)if(this.options.userEvents[o]===t){i=!0;break}i||this.options.userEvents.push(t);var a=t.replace("on",""),r=this.uuid;d3.select("#"+this.id+"_svg").select(".w2mapchart_map").selectAll("path").on(a+".onmap"+a,(function(t){c.f.fireEvent(WebSquare.idCache[r],"onmap"+a,n.q.extend({},t.properties))})),this.bind("onmap"+a,e)}catch(t){l.Y.printStackTrace(t)}},u.prototype.setScale=function(t){try{d3.select("#"+this.id+"_map").attr("transform",(function(e){return"scale("+t+")"})),d3.select("#"+this.id+"_places").attr("transform",(function(e){return"scale("+t+")"}))}catch(t){l.Y.printStackTrace(t)}},
u.prototype.getDataMapPath=function(t){try{var e=0,i=this.options.dataMapRatio_level0;t.length>=5?(e=2,i=this.options.dataMapRatio_level2):t.length>=2&&(e=1,i=this.options.dataMapRatio_level1);var o=this.options.dataMapPath+"/level"+e+"/"+i+"/"+t+".json";return o=WebSquare.BootLoader.getResourcePostfix(o)}catch(t){l.Y.printStackTrace(t)}},u.prototype.createPattern=function(t,e){try{var i=[{type:"line",size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["vertical"],size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.7},{type:"line",orientation:["vertical","horizontal"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["1/8","6/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8","7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.6},{type:"line",orientation:["3/8","7/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:2,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","5/8"],size:5,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8","8/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:2,radius:.5,fill:"#BDBDBD"},{type:"circle",size:5,radius:2,fill:"#BDBDBD"},{type:"circle",size:8,radius:2,fill:"#BDBDBD",strokeWidth:.5},{type:"circle",size:3,radius:.4,fill:"#BDBDBD"},{type:"circle",size:10,radius:2,fill:"#BDBDBD"},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:10,radius:4,fill:"#BDBDBD"},{type:"circle",size:6,radius:2,fill:"transparent",stroke:"#BDBDBD",strokeWidth:1},{type:"circle",size:8,radius:4,fill:"transparent",stroke:"#BDBDBD",strokeWidth:2},{type:"circle",size:5,radius:1.5,fill:"#EAEAEA",stroke:"#BDBDBD",strokeWidth:2},{type:"path",d:"hexagons",size:3.5,strokeWidth:2,stroke:"#BDBDBD"},{type:"path",d:"crosses",size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"caps",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"waves",size:5,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"nylon",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"squares",size:5,stroke:"#BDBDBD",strokeWidth:.7},{type:"path",d:"waves",size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"caps",size:4,stroke:"#BDBDBD",strokeWidth:.3},{type:"path",d:"nylon",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:6,stroke:"#BDBDBD",strokeWidth:1.5},{type:"path",d:"squares",size:2,stroke:"#BDBDBD",strokeWidth:.5}];t&&"object"===(0,o.A)(t)?0!=e&&void 0!==e||(i=t):0!=e&&void 0!==e||(i=[]);for(var a=0;a<i.length;a++){var r=this.createPatternElement(i[a]);this.patternList.push(r);d3.select("#"+this.id).select("svg").call(r).select("pattern")}}catch(t){l.Y.printStackTrace(t)}},u.prototype.addPattern=function(t){try{if(this.options.usePattern){var e=this.createPatternElement(t);this.patternList.push(e);var i=d3.select("#"+this.id).select("svg").call(e).selectAll("pattern")[0];return i[i.length-1].getAttribute("id")}}catch(t){l.Y.printStackTrace(t)}},u.prototype.createPatternElement=function(t){try{var e;switch(t.type){case"line":e=textures.lines();break;case"circle":e=textures.circles();break;case"path":case"userDefine":e=textures.paths();break;default:return e}return t.orientation&&"line"==t.type&&e.orientation.apply(this,t.orientation),t.d&&"path"==t.type&&e.d(t.d),t.radius&&"circle"==t.type&&e.radius(t.radius),t.stroke&&e.stroke(t.stroke),
t.strokeWidth&&e.strokeWidth(t.strokeWidth),t.background&&e.background(t.background),t.size&&e.size(t.size),t.fill&&"circle"==t.type&&e.fill(t.fill),e}catch(t){l.Y.printStackTrace(t,null,this)}},u.prototype.checkResize=function(){try{if(this.render){var t=this.render.offsetWidth,e=this.render.offsetHeight;this.resizeObj&&t>0&&e>0&&""===this.currentMap&&0==this.resizeObj.width&&0==this.resizeObj.height&&(this._marker_tooltip=this.getElementById(this.id+"_marker_tooltip"),this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})),this.resizeObj={width:t,height:e}}}catch(t){l.Y.printStackTrace(t,null,this)}},u.prototype.setColorScale=function(t,e,i,o){try{t&&e&&i&&o&&(this._colorScales[t]={key:e,scale:d3.scale.linear().domain(i).range(o)});for(var a=this.options.dataLists.split(","),r=0;r<a.length;r++){var s=a[r].wq_trim();if(s){var n=p.Z.getComponentById(s).getAllJSON();for(r=0;r<n.length;r++){var c=0;5==n[r].code.length?c=1:n[r].code.length>5&&(c=2);var h=this._colorScales[c];if(h)d3.select("#"+this.id+"_map").select(".municipality.c"+n[r].code).style("fill",h.scale(n[r][h.key]))}}}}catch(t){l.Y.printStackTrace(t)}},u.prototype.setTextStyle=function(t,e){try{this._textStyles={attributeArr:t,valueArr:e};var i=d3.select("#"+this.id+"_svg").select(".w2mapchart_map");if(this._mapData)for(var o=this._mapData,a=topojson.feature(o,o.objects[this.currentMap]).features,r=i.selectAll("text").data(a),s=0;s<t.length;s++)r.style(t[s],e[s])}catch(t){l.Y.printStackTrace(t)}},u.prototype._calloutOverlappedLabel=function(){try{var t=this,e=d3.select("#"+this.id+"_svg").select(".w2mapchart_map"),i=e.selectAll(".municipality-label"),o=this._getOverlappedLabel(i);if(this.options.calloutLabelExceptionHandler){var a=p.Z.getGlobalFunction(this.options.calloutLabelExceptionHandler,this.scope_id);if("function"==typeof a){var r=a();if(r&&r.length>0){var s=[];o.forEach((function(t,e){var i=t.datum();-1===r.indexOf(i.properties.name)&&-1===r.indexOf(i.properties.code)&&s.push(t)})),o=s}}}if(o.length>0){var n=d3.select("#"+this.id+"_svg").node().getBoundingClientRect();o.sort((function(t,e){var i=t.node().getBoundingClientRect(),o=e.node().getBoundingClientRect();return Math.abs(i.top-o.top)>15?i.top-o.top:o.left-i.left}));var c=0;o.forEach((function(t,e){var i=t.node().getBoundingClientRect();c=Math.max(i.width,c)})),o.forEach((function(i,o){var a=i.node().getBoundingClientRect(),r=20+c/2,s=40+o*(1.5*a.height),l=a.left-n.left+a.width/2,p=a.top-n.top+a.height/2;i.attr("transform","translate("+r+","+s+")").classed("callout_label",!0),i.each((function(i){var o="M"+l+" "+p+" L"+(r+c/1.7)+" "+s+" H"+(r+a.width/1.7);e.append("path").attr("d",o).attr("fill","none").attr("class",(function(){var e=["callout_line","c"+i.properties.code];if(t.options.calloutLineClass){var o=t.options.calloutLineClass.split(",");e=e.concat(o)}return e.join(" ")})),e.append("circle").attr("cx",l).attr("cy",p).attr("r",3).attr("class",(function(){var e=["callout_circle","c"+i.properties.code];if(t.options.calloutCircleClass){var o=t.options.calloutCircleClass.split(",");e=e.concat(o)}return e.join(" ")}))}))}));var h=e.selectAll(".callout_label");h.on("mouseover",(function(t){e.selectAll(".c"+t.properties.code).classed("highlight",!0)})).on("mouseout",(function(t){e.selectAll(".c"+t.properties.code).classed("highlight",!1)}));var d=t.options.event_drilldown.replace(/^on/,"");"none"!==d&&h.on(d+".drilldown",(function(e){t.changeMap(e.properties.code)})),e.selectAll(".municipality").on("mouseover",(function(t){e.selectAll(".c"+t.properties.code).classed("highlight",!0)})).on("mouseout",(function(t){e.selectAll(".c"+t.properties.code).classed("highlight",!1)}))}}catch(t){l.Y.printStackTrace(t,null,this)}},u.prototype._hideOverlappedLabel=function(){try{var t=this,e=d3.select("#"+this.id+"_svg").select(".w2mapchart_map").selectAll(".municipality-label"),i=[]
;if(this.options.hideLabelExceptionHandler){var o=p.Z.getGlobalFunction(this.options.hideLabelExceptionHandler,this.scope_id);"function"==typeof o&&(i=o())}var a=this._getOverlappedLabel(e);if(a.length>0){var r=[];i.forEach((function(t){for(var e=a.length-1;e>=0;e--){var i=a[e],o=i.datum();o.properties.code!=t&&o.properties.name!=t||(r.push(i),a.splice(e,1))}})),(a=a.sort((function(t,e){var i=parseFloat(t.attr("data-area"));return parseFloat(e.attr("data-area"))-i}))).forEach((function(e){for(var i=!1,o=0;o<r.length;o++)if(t._isOverlapped(e,r[o])){i=!0;break}i?e.style("display","none"):r.push(e)}))}}catch(t){l.Y.printStackTrace(t,null,this)}},u.prototype._getOverlappedLabel=function(t){try{var e=this,i=[];return t.each((function(o,a){var r=d3.select(this);t.each((function(t,o){if(a!==o){var s=d3.select(this);if(e._isOverlapped(r,s)){for(var n=!1,l=!1,c=0;c<i.length;c++)i[c].node()===r.node()&&(n=!0),i[c].node()===s.node()&&(l=!0);n||i.push(r),l||i.push(s)}}}))})),i}catch(t){l.Y.printStackTrace(t,null,this)}},u.prototype._isOverlapped=function(t,e){try{var i=t.node().getBoundingClientRect(),o=e.node().getBoundingClientRect();return i.x<o.x+o.width&&i.x+i.width>o.x&&i.y<o.y+o.height&&i.y+i.height>o.y}catch(t){l.Y.printStackTrace(t,null,this)}},u.prototype.refreshDataLists=function(t){try{this._load&&c.f.fireEvent(this,"onmapdatachange",t)}catch(t){l.Y.printStackTrace(t)}}}}]);