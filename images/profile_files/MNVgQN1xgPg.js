;/*FB_PKG_DELIM*/

__d("BTManifestName",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({MAIN:"main",LONGTAIL:"longtail"});c=a;f["default"]=c}),66);
__d("BaseAccessibleElement_DEPRECATED.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children;a=a.id;return i.jsx("span",{className:"xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s","data-html2canvas-ignore":"true",id:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BtLongtailHashFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5779");b=d("FalcoLoggerInternal").create("bt_longtail_hash",a);e=b;g["default"]=e}),98);
__d("CometBTManifestLoader",["BootloaderEvents","BtLongtailHashFalcoEvent","ClientConsistencyEventEmitter","FBLogger","ODS","Promise","SiteData","XHRRequest","asyncToGeneratorRuntime","err","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=new Set();function k(a,b,c,d){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,d,e,f){var g=(yield new(i||(i=b("Promise")))(function(b,g){new(c("XHRRequest"))(a+"/btmanifest/"+e+"/"+d+"/"+f).setMethod("GET").setResponseHandler(function(a){return b(a.toString())}).setErrorHandler(function(a){return g(a)}).send()}));if(typeof g!=="string")throw c("FBLogger")("binary_transparency","bt_invalid_manifest_response").mustfixThrow("Invalid response from BT manifest endpoint");return g});return l.apply(this,arguments)}function m(a,b){(h||(h=d("ODS"))).bumpEntityKey(454,"obc.www.all","bt.comet_manifest_loader."+Number(d("SiteData").compose_bootloads)+"."+d("SiteData").pkg_cohort+"."+a+"."+b)}function n(a,b,d){var e;if(d instanceof Error)e=d;else if(typeof d==="object"){var f=JSON.stringify(d);e=c("err")("(XHRRequest): %s",f.slice(0,300)+(f.length>300?"...":""))}else e=c("err")(d);c("FBLogger")("binary_transparency","bt_download_manifest_error").catching(e).mustfix('Unable to download and inject BT manifest "%s" for version: %s',b,a)}function o(a,b){return p.apply(this,arguments)}function p(){p=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){if(!d("SiteData").manifest_origin||d("SiteData").manifest_version_prefix==null||d("SiteData").manifest_base_uri==null)return;var c=a+"_"+b;a=""+d("SiteData").manifest_version_prefix+a;if(j.has(c))return;m(b,"start");j.add(c);try{var e,f=document.createElement("script");f.innerText=(yield k(d("SiteData").manifest_base_uri,d("SiteData").manifest_origin,a,b));f.type="application/json";f.setAttribute("name","binary-transparency-manifest");f.dataset.manifestRev=a;f.dataset.manifestType=b;(e=document.head)==null?void 0:e.appendChild(f);m(b,"complete")}catch(d){m(b,"failed"),n(a,b,d),j["delete"](c)}});return p.apply(this,arguments)}function a(){c("promiseDone")(o(d("SiteData").client_revision,"main")),d("BootloaderEvents").onResourceInLongTailBTManifest(function(a){c("promiseDone")(o(d("SiteData").client_revision,"longtail")),a.hashes.forEach(function(b){c("BtLongtailHashFalcoEvent").log(function(){return{client_revision:String(d("SiteData").client_revision),compose_bootloads:d("SiteData").compose_bootloads,ef_page:d("SiteData").ef_page||"",hash:b,pkg_cohort:d("SiteData").pkg_cohort,reference:a.source,rls_id:d("SiteData").hsi}})})}),c("ClientConsistencyEventEmitter").addListener("newRevision",function(a){c("promiseDone")(o(a,"main")),c("promiseDone")(o(a,"longtail"))})}g.init=a}),98);
__d("CometEntityHeaderFacepileProfileIcon.react",["BaseImage.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={image:{borderTopColor:"xsdn2ir",borderEndColor:"x16rfsbj",borderBottomColor:"x13awxeq",borderStartColor:"x16sykr7",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",display:"x1lliihq",$$css:!0}};function a(a){var b=a.alt,d=a.size;d=d===void 0?32:d;a=a.src;return i.jsx("div",{className:"x1rg5ohu",children:i.jsx(c("BaseImage.react"),{alt:b,height:d,src:a,width:d,xstyle:j.image})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderFacepile.react",["fbt","CometEntityHeaderFacepileProfileIcon.react","CometLink.react","FDSTooltip.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l=8,m={facepile:{display:"x1rg5ohu",$$css:!0},left:{marginStart:"xbmpl8g",$$css:!0}};function a(a){a=a.profiles;var b=a;a.length>l&&(b=a.slice(0,l));a=b.map(function(a,b){var d=a.name,e=a.pictureURI,f=a.profileURL;a=a.size;return k.jsx("div",{className:(i||(i=c("stylex")))(m.facepile,b>0&&m.left),style:{zIndex:b},children:k.jsx(c("FDSTooltip.react"),{align:"middle",position:"below",tooltip:h._("__JHASH__cIw3E4_ka0G__JHASH__",[h._param("user's name",d)]),children:k.jsx(c("CometLink.react"),{href:f,children:k.jsx(c("CometEntityHeaderFacepileProfileIcon.react"),{alt:d,size:a,src:e})},b)})},b)});return k.jsx("div",{children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometRecordProductUsageMutationMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6318727871580191"}),null);
__d("CometRecordProductUsageMutationMutation.graphql",["CometRecordProductUsageMutationMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"productID"},{defaultValue:null,kind:"LocalArgument",name:"productIdentifier"}],c=[{kind:"Literal",name:"app_id",value:2220391788200892},{kind:"Variable",name:"product_id",variableName:"productID"},{kind:"Variable",name:"product_identifier",variableName:"productIdentifier"}],d={alias:null,args:null,kind:"ScalarField",name:"product_identifier",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"last_used_time",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometRecordProductUsageMutationMutation",selections:[{alias:null,args:c,concreteType:"ProductUsageRecord",kind:"LinkedField",name:"update_last_used_time_for_product",plural:!1,selections:[d,e],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometRecordProductUsageMutationMutation",selections:[{alias:null,args:c,concreteType:"ProductUsageRecord",kind:"LinkedField",name:"update_last_used_time_for_product",plural:!1,selections:[d,e,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:b("CometRecordProductUsageMutationMutation_facebookRelayOperation"),metadata:{},name:"CometRecordProductUsageMutationMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometRecordProductUsageMutation",["CometRecordProductUsageMutationMutation.graphql","CometRelay","CometRelayErrorHandling","JSScheduler"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h!==void 0?h:h=b("CometRecordProductUsageMutationMutation.graphql");function a(a,b,e){(i||(i=c("JSScheduler"))).scheduleLoggingPriCallback(function(){d("CometRelay").commitMutation(a,{mutation:j,onError:function(a){d("CometRelayErrorHandling").markErrorAsHandled(a)},variables:{productID:e,productIdentifier:b}})})}e={updateProductUsage:a};f=e;g["default"]=f}),98);
__d("CometToastCard.react",["fbt","ix","CometAccessibilityAnnouncement.react","CometCard.react","CometPressable.react","FDSIcon.react","FDSTextPairing.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useId;function a(a){var b=a.accessibilityAnnouncement,e=a.content,f=a.headline,g=a.onCloseClick;a=a.onMouseEnter;var j=l();return k.jsx(c("CometCard.react"),{background:"white",dropShadow:2,children:k.jsxs("div",{"aria-labelledby":j,className:"x1lq5wgf xgqcy7u x30kzoy x9jhf4c xh5kl08 x9f619 x78zum5 xdt5ytf x6prxxf xi55695",onMouseEnter:a,role:"complementary",children:[k.jsx("div",{className:"x14vqqas",children:k.jsxs("div",{className:"x6s0dn4 x78zum5 x1qughib xexx8yu x1pi30zi x18d9i69 x1swvt13",children:[k.jsx("div",{id:j,children:k.jsx(c("FDSTextPairing.react"),{headline:f,isSemanticHeading:!0,level:4})}),k.jsx(c("CometPressable.react"),{display:"inline",label:h._("__JHASH__tnRfHlva-bL__JHASH__"),onPress:g,overlayDisabled:!0,children:k.jsx("span",{className:"x6s0dn4 x1qhmfi1 xnwf7zb x40j3uw x1s7lred x15gyhx8 x78zum5 xxk0z11 xl56j7k xvy4d1p",children:k.jsx(c("FDSIcon.react"),{color:"primary",icon:d("fbicon")._(i("478231"),12),size:12})})})]})}),k.jsx("div",{className:"x1sqdly8 xwib8y2 x1iorvi4",children:e}),b!=null&&k.jsx(c("CometAccessibilityAnnouncement.react"),{children:b.text},b.id)]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("ServiceWorkerCacheManagement",["regeneratorRuntime"],(function(a,b,c,d,e,f){function a(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:if(!("caches"in self)){a.next=3;break}a.next=3;return b("regeneratorRuntime").awrap(caches["delete"]("sr-cache-1"));case 3:case"end":return a.stop()}},null,this)}f.manageCache=a}),66);
__d("logCometWatchTabSelectedEvent",["VideoHomeTypedLiteLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d){c("VideoHomeTypedLiteLogger").log({click_point:a,entry_point_type:d,event:"video_tab_selected",event_target:"watch_home_www",tab_selection_type:"user_initiated_click",was_badged:b})}g["default"]=a}),98);