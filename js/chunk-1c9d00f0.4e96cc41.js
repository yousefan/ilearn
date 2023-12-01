(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c9d00f0"],{"5c13":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("page-loading"):t._e(),t.loading||t.access?t._e():a("no-access",{attrs:{message:"You have no access to this service"}}),a("audio",{attrs:{id:"audioPlay",loop:""}}),!t.loading&&t.access?a("div",{staticClass:"row justify-content-center scoped-sticky-pos",staticStyle:{"z-index":"1000"}},[a("div",{staticClass:"col col-lg-6 col-md-6 col-sm-12 col-12",staticStyle:{direction:"ltr"}},[a("vx-card",[a("p",{staticClass:"text-center"},[t._v(t._s(t.podcast.item.title))]),a("div",{staticClass:"flex justify-between"},[a("h5",{staticClass:"font-bold"},[t._v(t._s(t.currentTimeText))]),a("h5",{staticClass:"font-bold"},[t._v(t._s(t.durationText))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-md-12"},[a("input",{ref:"slider",staticClass:"audio-slider",staticStyle:{width:"100%"},attrs:{type:"range",min:"0",max:"10000"},domProps:{value:t.currentTime},on:{input:function(e){return t.updateInputUi(1e4)}}})])]),a("div",{staticClass:"flex justify-between flex-wrap mt-3"},[null!==t.bookmark?a("vs-button",{attrs:{id:"remove-bookmark-btn","icon-pack":"feather",icon:"icon-bookmark"},on:{click:function(e){return t.removeFromBookmark()}}}):t._e(),null===t.bookmark?a("vs-button",{attrs:{id:"add-bookmark-btn",type:"border","icon-pack":"feather",icon:"icon-bookmark"},on:{click:function(e){return t.addToBookmark()}}}):t._e(),a("div",{staticClass:"flex"},[a("vs-button",{staticClass:"ml-4",attrs:{"icon-pack":"feather",icon:"icon-rotate-ccw"},on:{click:t.backward}}),a("vs-button",{staticClass:"ml-4",attrs:{disabled:t.playAudioLoading,"icon-pack":"feather",icon:t.playing?"icon-pause":"icon-play"},on:{click:t.playAudio}}),a("vs-button",{staticClass:"ml-4",attrs:{"icon-pack":"feather",icon:"icon-rotate-cw"},on:{click:t.forward}})],1),a("div",{staticClass:"flex"})],1)])],1)]):t._e(),!t.loading&&t.access?a("div",{staticClass:"row justify-content-center mt-8"},[a("div",{staticClass:"col col-lg-6 col-md-6 col-sm-12 col-12",staticStyle:{direction:"ltr"}},[a("vs-divider",{attrs:{position:"left"}},[t._v("Podcast Transcript")]),a("vx-card",{domProps:{innerHTML:t._s(t.transcriptContainer)}})],1)]):t._e()],1)},n=[],s=(a("28a5"),a("ac6a"),a("74f4")),o=a("9c9e"),r={mixins:[o["a"]],name:"PodcastItem",data:function(){var t=this;return{loading:!0,access:!0,playAudioLoading:!0,playing:!1,podcastItemFid:this.$route.params.itemFid,podcastId:null,productId:this.$route.params.productId,podcast:null,subject:null,bookmark:!1,audio:null,currentTime:0,currentTimeText:"00:00",durationText:"00:00",currentSegmentIndex:0,transcriptSegments:[],transcriptSegmentSpans:[],activeTranscriptSegmentStyle:"border-radius: 4px;background-color: rgba(0, 0, 0, 0.10);",lastTime:Date.now(),isSentPodcastPlayCount:!1,transcriptContainer:null,timePlayed:0,raf:null,whilePlaying:function(){Date.now()-t.lastTime>1e3&&(t.timePlayed++,t.lastTime=Date.now()),t.currentTime=Math.floor(t.audio.currentTime/t.audio.duration*1e4),t.currentTimeText=t.calculateTime(t.audio.currentTime);var e=1e3*t.audio.currentTime,a=t.transcriptSegments[t.currentSegmentIndex];if(null!=a){var i=a.start+a.duration,n=document.getElementById("tg-"+a.start);if(n.style=t.activeTranscriptSegmentStyle,e>i){t.currentSegmentIndex++;var s=t.transcriptSegments[t.currentSegmentIndex-1],o=document.getElementById("tg-"+s.start);o.style=""}}else t.currentSegmentIndex=0,t.audio.currentTime=0;t.audio.currentTime>t.audio.duration-.5&&(t.currentSegmentIndex=0),t.updateInputUi(1e4),t.raf=requestAnimationFrame(t.whilePlaying)}}},mounted:function(){this.getPodcastItem()},methods:{getPodcastItem:function(){var t=this;this.loading=!0,s["a"].get("/api/store/products/".concat(this.productId,"/items/").concat(this.podcastItemFid),{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){t.loading=!1,200===e.status?e.data.no_access?(t.simpleNotify(t.NOTIFY_DANGER_TITLE,e.data.no_access,"danger"),t.access=!1):(t.access=!0,t.podcast=e.data,t.renderTranscript(t.podcast),t.podcastId=t.podcast.item.id,t.subject=t.podcast.item.subject.title,t.bookmark=t.podcast.bookmark,t.transcriptSegments=t.podcast.item.transcript_segments,t.setupAudio()):t.simpleNotify(t.NOTIFY_DANGER_TITLE,"something went wrong","danger")}))},forward:function(){this.currentSegmentIndex<this.transcriptSegments.length-1&&(this.clearHighlight(this.currentSegmentIndex),this.currentSegmentIndex++,this.audio.currentTime=this.transcriptSegments[this.currentSegmentIndex].start/1e3)},backward:function(){this.currentSegmentIndex>0&&(this.clearHighlight(this.currentSegmentIndex),this.currentSegmentIndex--,this.audio.currentTime=this.transcriptSegments[this.currentSegmentIndex].start/1e3)},playAudio:function(){this.playing?this.playing&&(this.audio.pause(),this.playing=!1,cancelAnimationFrame(this.raf),this.sendPodcastPlayTime()):(this.audio.play(),this.playing=!0,this.isSentPodcastPlayCount||this.sendPodcastPlayCount(),requestAnimationFrame(this.whilePlaying))},sendPodcastPlayCount:function(){var t=this;s["a"].post("/api/stats/podcast-playcount/",{podcast:this.podcastId},{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){t.isSentPodcastPlayCount=!!e.data.podcast}))},sendPodcastPlayTime:function(){var t=this;s["a"].post("/api/stats/podcast-playtime/",{podcast:this.podcastId,time:this.timePlayed},{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){e.data.podcast&&(t.timePlayed=0)}))},setupAudio:function(){var t=this;this.audio=document.getElementById("audioPlay"),this.audio.src=this.$podcastUrl+this.podcast.item.audio_url,this.playAudioLoading=!0,this.audio.onloadedmetadata=function(){t.duration=t.audio.duration,t.durationText=t.calculateTime(t.audio.duration),t.audio.currentTime=0,t.playAudioLoading=!1},setTimeout((function(){t.initSliderEvents()}),200)},initSliderEvents:function(){var t=this;this.$refs.slider.oninput=function(){t.currentTimeText=t.calculateTime(t.audio.currentTime),t.audio.paused||cancelAnimationFrame(t.raf)},this.$refs.slider.onchange=function(){t.audio.currentTime=t.$refs.slider.value/1e4*t.audio.duration,t.transcriptSegments.forEach((function(t){document.getElementById("tg-"+t.start).style=""}));for(var e=1e3*t.audio.currentTime,a=0;a<t.transcriptSegments.length;a++){var i=t.transcriptSegments[a];if(e>i.start&&e<i.start+i.duration){t.currentSegmentIndex=a;break}}t.audio.paused||requestAnimationFrame(t.whilePlaying)}},removeFromBookmark:function(){var t=this;this.startLoading("remove-bookmark-btn"),s["a"].delete("/api/bookmarks/".concat(this.bookmark),{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){t.stopLoading("remove-bookmark-btn"),204===e.status?t.bookmark=null:t.simpleNotify(t.NOTIFY_DANGER_TITLE,"something went wrong","danger")}))},addToBookmark:function(){var t=this;this.startLoading("add-bookmark-btn"),s["a"].post("/api/bookmarks/",{item_fid:this.podcastItemFid},{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){t.stopLoading("add-bookmark-btn"),201===e.status?t.bookmark=e.data.fid:t.simpleNotify(t.NOTIFY_DANGER_TITLE,"something went wrong","danger")}))},renderTranscript:function(t){var e=document.createElement("div");e.classList.add("text-justify"),e.style="font-size:1.25rem; padding: 15px";for(var a=t.item.transcript_segments,i=t.item.words,n=0;n<a.length;n++){var s=a[n],o=document.createElement("span");o.id="tg-"+s.start;for(var r=s.text.split(" "),c=0;c<r.length;c++){var d=r[c],u=(this.checkIfWordIsImportant(d,i),document.createElement("span"));u.innerText=" "+d+" ",o.appendChild(u)}e.appendChild(o)}var l=document.createElement("div");l.appendChild(e),this.transcriptContainer=l.innerHTML},checkIfWordIsImportant:function(t,e){for(var a=0;a<e.length;a++){var i=e[a];if(i.word===t)return i}return null},clearHighlight:function(t){var e=this.transcriptSegments[t];document.getElementById("tg-"+e.start).style=""}},beforeDestroy:function(){console.log("send played podcast stat")}},c=r,d=(a("cc23"),a("2877")),u=Object(d["a"])(c,i,n,!1,null,"312ad95b",null);e["default"]=u.exports},6273:function(t,e,a){},cc23:function(t,e,a){"use strict";a("6273")}}]);
//# sourceMappingURL=chunk-1c9d00f0.4e96cc41.js.map