YUI.add("moodle-local_kaltura-ltipanel",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};e.extend(n,e.Base,{panelbodycontent:null,panelvisible:!1,panel:null,modulename:null,addvidbtnid:null,init:function(t){if("0"===t.addvidbtnid||"0"===t.ltilaunchurl||0===t.courseid||0===t.height||0===t.width){alert("Some parameters were not initialized.");return}this.modulename=t.modulename,this.addvidbtnid=t.addvidbtnid;var n=e.one("#"+t.addvidbtnid);n.on("click",this.open_panel_callback,this,t.ltilaunchurl,t.height,t.width)},open_panel_callback:function(t,n,r,i){var s=parseInt(r,10)+45,o=parseInt(i,10)+23+"px";i+="px";if(e.UA.ipod!==0||e.UA.ipad!==0||e.UA.iphone!==0||e.UA.android!==0||e.UA.mobile!==null)o="80%",i="100%";var u="<iframe id='panelcontentframe' height='"+r+"px' width='"+i+"' src='"+n+"'></iframe>";this.panelbodycontent=u;if(e.UA.ipod!==0||e.UA.ipad!==0||e.UA.iphone!==0)this.panelbodycontent="<div id='panelcontentframecontainer'>"+u+"</div>";null===this.panel?(this.panel=new e.Panel({srcNode:e.Node.create('<div id="dialog" />'),headerContent:"",bodyContent:this.panelbodycontent,width:o,height:s+"px",zIndex:6,centered:!0,modal:!0,visible:!1,render:!0,hideOn:[{node:e.one("input[id=closeltipanel]"),eventName:"click"}]}),this.panel.show(),e.one("input[id=closeltipanel]").on("click",this.lti_hide_panel_callback,this),this.panel.after("visibleChange",this.lti_panel_visible_change_callback,this)):this.panel.show()},lti_hide_panel_callback:function(){var t=e.one("img[id=video_thumbnail]");t.setStyle("display","none");var n=e.one("iframe[id=contentframe]");n.setAttribute("width",e.one("input[id=width]").getAttribute("value")),n.setAttribute("height",e.one("input[id=height]").getAttribute("value")),n.setStyle("display","inline");var r=e.one("input[name=modulename]");undefined!==r&&("kalvidres"===this.modulename||"kalvidpres"===this.modulename)&&this.lti_panel_change_add_media_button_caption()},lti_panel_change_add_media_button_caption:function(){var t=M.util.get_string("replace_video",this.modulename);t!==e.one("#"+this.addvidbtnid).getAttribute("value")&&e.one("#"+this.addvidbtnid).setAttribute("value",t)},lti_panel_visible_change_callback:function(){this.panelvisible=this.panel.get("visible"),!0===this.panelvisible?this.panel.set("bodyContent",this.panelbodycontent):this.panel.set("bodyContent","")}},{NAME:"moodle-local_kaltura-ltipanel",ATTRS:{addvidbtnid:{value:"0"},ltilaunchurl:{value:"0"},height:{value:0},width:{value:0},modulename:{value:""}}});var r=function(){r.superclass.constructor.apply(this,arguments)};e.extend(r,e.Base,{panelbodycontent:null,panelvisible:!1,panel:null,panelheight:0,panelwidth:0,init:function(t){if("0"===t.addvidbtnid||"0"===t.ltilaunchurl||0===t.courseid||0===t.height||0===t.width)return;var n=e.one("#"+t.addvidbtnid);n.on("click",this.open_panel_callback,this,t.ltilaunchurl,t.height,t.width)},open_panel_callback:function(t,n,r,i){var s=parseInt(r,10)+45,o=parseInt(i,10)+23+"px";i+="px";if(e.UA.ipod!==0||e.UA.ipad!==0||e.UA.iphone!==0||e.UA.android!==0||e.UA.mobile!==null)o="80%",i="100%";var u="<iframe id='panelcontentframe' height='"+r+"px' width='"+i+"' src='"+n+"'></iframe>";this.panelbodycontent=u;if(e.UA.ipod!==0||e.UA.ipad!==0||e.UA.iphone!==0)this.panelbodycontent="<div id='panelcontentframecontainer'>"+u+"</div>";null===this.panel?(this.panel=new e.Panel({srcNode:e.Node.create('<div id="dialog" />'),headerContent:"",bodyContent:this.panelbodycontent,width:o,height:s+"px",zIndex:6,centered:!0,modal:!0,visible:!1,render:!0,hideOn:[{node:e.one("input[id=closeltipanel]"),eventName:"click"}]}),this.panel.show(),e.one("input[id=closeltipanel]").on("click",this.lti_hide_panel_callback,this),this.panel.after("visibleChange",this.lti_panel_visible_change_callback,this)):this.panel.show()},lti_hide_panel_callback:function(){e.one("input[id=submit_video]").removeAttribute("disabled");var t=e.one("img[id=video_thumbnail]");t.setStyle("display","none");var n=e.one("iframe[id=contentframe]");n.setAttribute("width",e.one("input[id=width]").getAttribute("value")),n.setAttribute("height",e.one("input[id=height]").getAttribute("value")),n.setStyle("display","inline"),e.one("#id_add_video").set("value",M.util.get_string("replacevideo","kalvidassign"))},lti_panel_visible_change_callback:function(){this.panelvisible=this.panel.get("visible"),!0===this.panelvisible?(this.panel.set("bodyContent",this.panelbodycontent),this.panel.set("height",this.panelheight),this.panel.set("width",this.panelwidth),this.panel.set("centered",!0)):this.panel.set("bodyContent","")}},{NAME:"moodle-local_kaltura-ltipanel",ATTRS:{addvidbtnid:{value:"0"},ltilaunchurl:{value:"0"},height:{value:0},width:{value:0}}});var i=function(){i.superclass.constructor.apply(this,arguments)};e.extend(i,e.Base,{ltimediaassignment:null,init:function(t){this.ltimediaassignment=t,e.one("form[id=fastgrade]").delegate("click",this.review_submission,"a[name=submission_source]",this)},review_submission:function(e){e.preventDefault();var t,n,r;e.target.test("a")?(t=e.target.getAttribute("href"),n=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=height]").get("value"),r=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=width]").get("value")):(t=e.target.ancestor("a[name=submission_source]").getAttribute("href"),n=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=height]").get("value"),r=e.target.ancestor("div[name=media_submission]").get("childNodes").filter("input[name=width]").get("value")),this.ltimediaassignment.open_panel_callback(null,t,n,r)}},{NAME:"moodle-local_kaltura-ltipanel"}),M.local_kaltura=M.local_kaltura||{},M.local_kaltura.init=function(e){return new n(e)},M.local_kaltura.initmediaassignment=function(e){return new r(e)},M.local_kaltura.initreviewsubmission=function(){var e={addvidbtnid:"0",ltilaunchurl:"0",courseid:0,height:0,width:0},t=new r(e);return new i(t)}},"@VERSION@",{requires
:["base","node","panel","node-event-simulate"]});
