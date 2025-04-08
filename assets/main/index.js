System.register("chunks:///_virtual/CTAbutton.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,e,i,r,c,u,l;return{setters:[function(t){n=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,c=t._decorator,u=t.Button,l=t.Component}],execute:function(){var a,s,p,f,y;r._RF.push({},"73a6dW6p65GCKvNFcvd7EAp","CTAbutton",void 0);var C=c.ccclass,h=c.property;t("CTAbutton",(a=C("CTAbutton"),s=h(u),a((y=n((f=function(t){function n(){for(var n,o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return n=t.call.apply(t,[this].concat(r))||this,e(n,"myButton",y,i(n)),n}o(n,t);var r=n.prototype;return r.start=function(){this.myButton.node.on("click",this.onClickCTA,this)},r.onClickCTA=function(){console.log("Call to Action Clicked!")},n}(l)).prototype,"myButton",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./CTAbutton.ts","./videostarter.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/videostarter.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,o,n,a,c,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,c=e.VideoPlayer,l=e.Component}],execute:function(){var s,u,p,y,d;n._RF.push({},"5e8c6ujBQZNvbmWXNz4QyK1","videostarter",void 0);var v=a.ccclass,f=a.property;e("VideoStarter",(s=v("VideoStarter"),u=f(c),s((d=r((y=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r=e.call.apply(e,[this].concat(n))||this,i(r,"videoPlayer",d,o(r)),r}return t(r,e),r.prototype.start=function(){this.videoPlayer.play()},r}(l)).prototype,"videoPlayer",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=y))||p));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});