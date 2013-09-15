// (c) 2010 CodePlex Foundation
(function(){var b="ExtendedRating";function a(){var f="EndClientCallback",e="MouseOut",d="MouseOver",c="Rated",h="mouseout",g="mouseover",b=false,a=null;Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.RatingBehavior=function(d){var c=this;Sys.Extended.UI.RatingBehavior.initializeBase(c,[d]);c._starCssClass="rating_star";c._filledStarCssClass="rating_filled";c._emptyStarCssClass="rating_empty";c._waitingStarCssClass=a;c._isServerControl=b;c._readOnly=b;c._ratingValue=0;c._currentRating=0;c._maxRatingValue=5;c._tag="";c._ratingDirection=0;c._stars=a;c._callbackID=a;c._mouseOutHandler=Function.createDelegate(c,c._onMouseOut);c._starClickHandler=Function.createDelegate(c,c._onStarClick);c._starMouseOverHandler=Function.createDelegate(c,c._onStarMouseOver);c._keyDownHandler=Function.createDelegate(c,c._onKeyDownBack);c._autoPostBack=b};Sys.Extended.UI.RatingBehavior.prototype={initialize:function(){var a=this;Sys.Extended.UI.RatingBehavior.callBaseMethod(a,"initialize");var c=a.get_element();a._stars=[];for(var b=1;b<=a._maxRatingValue;b++){starElement=$get(c.id+"_Star_"+b);starElement.value=b;Array.add(a._stars,starElement);$addHandler(starElement,"click",a._starClickHandler);$addHandler(starElement,g,a._starMouseOverHandler)}$addHandler(c,h,a._mouseOutHandler);$addHandler(c,"keydown",a._keyDownHandler);a._update()},dispose:function(){var b=this,e=b.get_element();if(b._stars){for(var c=0;c<b._stars.length;c++){var d=b._stars[c];$removeHandler(d,"click",b._starClickHandler);$removeHandler(d,g,b._starMouseOverHandler)}b._stars=a}$removeHandler(e,h,b._mouseOutHandler);$removeHandler(e,"keydown",b._keyDownHandler);Sys.Extended.UI.RatingBehavior.callBaseMethod(b,"dispose")},_onError:function(a){alert(String.format(Sys.Extended.UI.Resources.Rating_CallbackError,a))},_receiveServerData:function(c,a){a._waitingMode(b);a.raiseEndClientCallback(c)},_onMouseOut:function(){var a=this;if(a._readOnly)return;a._currentRating=a._ratingValue;a._update();a.raiseMouseOut(a._currentRating)},_onStarClick:function(){var a=this;if(a._readOnly)return;a._ratingValue!=a._currentRating&&a.set_Rating(a._currentRating)},_onStarMouseOver:function(b){var a=this;if(a._readOnly)return;if(a._ratingDirection==0)a._currentRating=b.target.value;else a._currentRating=a._maxRatingValue+1-b.target.value;a._update();a.raiseMouseOver(a._currentRating)},_onKeyDownBack:function(b){var a=this;if(a._readOnly)return;var c=b.keyCode?b.keyCode:b.rawEvent.keyCode;if(c==Sys.UI.Key.right||c==Sys.UI.Key.up){a._currentRating=Math.min(a._currentRating+1,a._maxRatingValue);a.set_Rating(a._currentRating);b.preventDefault();b.stopPropagation()}else if(c==Sys.UI.Key.left||c==Sys.UI.Key.down){a._currentRating=Math.max(a._currentRating-1,1);a.set_Rating(a._currentRating);b.preventDefault();b.stopPropagation()}},_waitingMode:function(d){var a=this;for(var c=0;c<a._maxRatingValue;c++){var b;if(a._ratingDirection==0)b=a._stars[c];else b=a._stars[a._maxRatingValue-c-1];if(a._currentRating>c){if(a._waitingStarCssClass)if(d){Sys.UI.DomElement.removeCssClass(b,a._filledStarCssClass);Sys.UI.DomElement.addCssClass(b,a._waitingStarCssClass)}else{Sys.UI.DomElement.removeCssClass(b,a._waitingStarCssClass);Sys.UI.DomElement.addCssClass(b,a._filledStarCssClass)}}else{a._waitingStarCssClass&&Sys.UI.DomElement.removeCssClass(b,a._waitingStarCssClass);Sys.UI.DomElement.removeCssClass(b,a._filledStarCssClass);Sys.UI.DomElement.addCssClass(b,a._emptyStarCssClass)}}},_update:function(){var a=this,d=a.get_element();$get(d.id+"_A").title=a._currentRating;for(var c=0;c<a._maxRatingValue;c++){var b;if(a._ratingDirection==0)b=a._stars[c];else b=a._stars[a._maxRatingValue-c-1];if(a._currentRating>c){Sys.UI.DomElement.removeCssClass(b,a._emptyStarCssClass);Sys.UI.DomElement.addCssClass(b,a._filledStarCssClass)}else{Sys.UI.DomElement.removeCssClass(b,a._filledStarCssClass);Sys.UI.DomElement.addCssClass(b,a._emptyStarCssClass)}}},add_Rated:function(a){this.get_events().addHandler(c,a)},remove_Rated:function(a){this.get_events().removeHandler(c,a)},raiseRated:function(b){var a=this.get_events().getHandler(c);a&&a(this,new Sys.Extended.UI.RatingEventArgs(b))},add_MouseOver:function(a){this.get_events().addHandler(d,a)},remove_MouseOver:function(a){this.get_events().removeHandler(d,a)},raiseMouseOver:function(b){var a=this.get_events().getHandler(d);a&&a(this,new Sys.Extended.UI.RatingEventArgs(b))},add_MouseOut:function(a){this.get_events().addHandler(e,a)},remove_MouseOut:function(a){this.get_events().removeHandler(e,a)},raiseMouseOut:function(b){var a=this.get_events().getHandler(e);a&&a(this,new Sys.Extended.UI.RatingEventArgs(b))},add_EndClientCallback:function(a){this.get_events().addHandler(f,a)},remove_EndClientCallback:function(a){this.get_events().removeHandler(f,a)},raiseEndClientCallback:function(b){var a=this.get_events().getHandler(f);a&&a(this,new Sys.Extended.UI.RatingCallbackResultEventArgs(b))},get_AutoPostBack:function(){return this._autoPostBack},set_AutoPostBack:function(a){this._autoPostBack=a},get_Stars:function(){return this._stars},get_Tag:function(){return this._tag},set_Tag:function(a){if(this._tag!=a){this._tag=a;this.raisePropertyChanged("Tag")}},get_CallbackID:function(){return this._callbackID},set_CallbackID:function(a){this._callbackID=a},get_RatingDirection:function(){return this._ratingDirection},set_RatingDirection:function(b){var a=this;if(a._ratingDirection!=b){a._ratingDirection=b;a.get_isInitialized()&&a._update();a.raisePropertyChanged("RatingDirection")}},get_EmptyStarCssClass:function(){return this._emptyStarCssClass},set_EmptyStarCssClass:function(a){if(this._emptyStarCssClass!=a){this._emptyStarCssClass=a;this.raisePropertyChanged("EmptyStarCssClass")}},get_FilledStarCssClass:function(){return this._filledStarCssClass},set_FilledStarCssClass:function(a){if(this._filledStarCssClass!=a){this._filledStarCssClass=a;this.raisePropertyChanged("FilledStarCssClass")}},get_WaitingStarCssClass:function(){return this._waitingStarCssClass},set_WaitingStarCssClass:function(a){if(this._waitingStarCssClass!=a){this._waitingStarCssClass=a;this.raisePropertyChanged("WaitingStarCssClass")}},get_Rating:function(){var b=this,c=Sys.Extended.UI.RatingBehavior.callBaseMethod(b,"get_ClientState");if(c!==a&&c.length)b._ratingValue=c;if(b._ratingValue=="")b._ratingValue=a;return b._ratingValue},set_Rating:function(b){var a=this;if(a._ratingValue!=b){a._ratingValue=b;a._currentRating=b;if(a.get_isInitialized()){if(b<0||b>a._maxRatingValue)return;a._update();Sys.Extended.UI.RatingBehavior.callBaseMethod(a,"set_ClientState",[a._ratingValue]);a.raisePropertyChanged("Rating");a.raiseRated(a._currentRating);if(a._isServerControl){a._waitingMode(true);var c=a._currentRating+";"+a._tag,d=a._callbackID;if(a._autoPostBack)__doPostBack(d,c);else WebForm_DoCallback(d,c,a._receiveServerData,a,a._onError,true)}}}},get_MaxRating:function(){return this._maxRatingValue},set_MaxRating:function(a){if(this._maxRatingValue!=a){this._maxRatingValue=a;this.raisePropertyChanged("MaxRating")}},get_ReadOnly:function(){return this._readOnly},set_ReadOnly:function(a){if(this._readOnly!=a){this._readOnly=a;this.raisePropertyChanged("ReadOnly")}},get_StarCssClass:function(){return this._starCssClass},set_StarCssClass:function(a){if(this._starCssClass!=a){this._starCssClass=a;this.raisePropertyChanged("StarCssClass")}}};Sys.Extended.UI.RatingBehavior.registerClass("Sys.Extended.UI.RatingBehavior",Sys.Extended.UI.BehaviorBase);Sys.registerComponent(Sys.Extended.UI.RatingBehavior,{name:"rating"});Sys.Extended.UI.RatingEventArgs=function(a){Sys.Extended.UI.RatingEventArgs.initializeBase(this);this._rating=a};Sys.Extended.UI.RatingEventArgs.prototype={get_Rating:function(){return this._rating}};Sys.Extended.UI.RatingEventArgs.registerClass("Sys.Extended.UI.RatingEventArgs",Sys.EventArgs);Sys.Extended.UI.RatingCallbackResultEventArgs=function(a){Sys.Extended.UI.RatingCallbackResultEventArgs.initializeBase(this);this._result=a};Sys.Extended.UI.RatingCallbackResultEventArgs.prototype={get_CallbackResult:function(){return this._result}};Sys.Extended.UI.RatingCallbackResultEventArgs.registerClass("Sys.Extended.UI.RatingCallbackResultEventArgs",Sys.EventArgs)}if(window.Sys&&Sys.loader)Sys.loader.registerScript(b,["ExtendedBase"],a);else a()})();