"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[6481],{8862:function(t,e,i){i.r(e),i.d(e,{image:function(){return l}});var n=i(5461),s=(i(5375),i(8971)),o=i(2338),r=i(1204),a=i(2256),c=i(2406),l=function(t,e,i){c.q.call(this,t,e,i)};n.q.extend(l.prototype,c.q.prototype),l.prototype.defaultOptions={useConfig:!0,pluginType:"uiplugin.image",pluginName:"image",systemEvents:["onabort","onerror","onblur","onclick","ondblclick","onfocus","onmousedown","onmouseup","onmouseout","onmouseover","onmousemove"],src:"",alt:"",usemap:"",title:"",longdesc:"",msaName:"",tabIndex:"",accessibility:!1},l.prototype.initialize=function(t){},l.prototype.toHTML=function(){try{var t=[],e=this.options.src?this.getImageURL(this.options.src):"",i=""==this.options.title?"":"title='"+this.options.title+"'",n=""==this.options.usemap?"":"usemap='"+this.options.usemap+"'",o=""==this.options.longdesc?"":"longdesc='"+this.options.longdesc+"'",r=""==this.options.style?"":"style='"+this.options.style+"'",a=this.options.accessibility||""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'",c="";if("$empty"==this.options.alt)var l="alt=''";else l=""==this.options.alt?"":"alt='"+this.options.alt+"'";return this.options.onerror&&(c=' onerror="('+this.options.onerror+').call(this,event);" '),t.push("<img id='"+this.id+"' src='"+e+"' "+r+" "+a+" class='w2image "+this.options.className+"' "+l+" "+i+" "+n+" "+o+" "+c+" />"),t.join("")}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.setAction=function(){try{r.Z.isIE(6)||r.Z.isIE(7)||r.Z.isIE(8)||r.Z.isIE(9)||(this.event.addListener(this.render,"ondragover",this.event.bindAsEventListener(this,this.handleDragOverEvent)),this.event.addListener(this.render,"ondrop",this.event.bindAsEventListener(this,this.handleDropEvent))),this.refresh()}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.modelControl.getData();this.setSrcNM(t)}}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.setSrc=function(t){try{var e="";t&&(e=this.getImageURL(t)),this.render.src=e}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.setSrcNM=function(t){try{return this.setSrc(t)}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.getSrc=function(){try{return this.render.src}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.setLongdesc=function(t){try{this.render.longDesc=t}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.getLongdesc=function(){try{return this.render.longDesc}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.setAlt=function(t){try{this.render.alt=t}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.getAlt=function(){try{return this.render.alt}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.onPropertyChange=function(t,e){try{if("disabled"===t)1==e?(this.setOpacity(.3),this.addClass(this.render,"w2image_disabled")):(this.setOpacity(1),this.removeClass(this.render,"w2image_disabled"))}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.getDataListInfo=function(){try{var t={};return this.modelControl.isDataCollectionRefBinded?(t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.ref=this.options.ref,t):null}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.handleDropEvent=function(t){try{o.f.stopEvent(t);var e=t.dataTransfer.files[0],i=new FileReader,n=this;i?(i.onload=function(t){n.setSrc(t.target.result)},i.readAsDataURL(e)):a.v.printLog("NOT SUPPORT HTML5 FILE API["+this.id+"]")}catch(t){s.Y.printStackTrace(t,null,this)}},l.prototype.handleDragOverEvent=function(t){try{o.f.stopEvent(t)}catch(t){s.Y.printStackTrace(t,null,this)}}}}]);