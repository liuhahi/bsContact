sap.ui.define([
	"bsContact/controller/BaseController"],
	function (Controller){
		"use strict";
		return Controller.extend("bsContact.controller.ItemDetails",{
			
			onInit : function () {  
				this.getRouter().getRoute("itemDetails").attachPatternMatched(this.onRouteMatched, this);  
			},  
			
			onAfterRendering: function(){
				// this.getRouter().getRoute("itemDetails").attachPatternMatched(this._onRouteMatched, this);  
			},
			
			// onRouteMatched : function(oEvent) {		

			// },
				
			onRouteMatched: function(oEvent){  
				var sName = oEvent.getParameter("name");
			
				if (sName !== "itemDetails") {
					return;
				}				
				var title = oEvent.getParameter("arguments").title;
				this._loadFile(title);
				// this.getModel("bsModel").getData().items
				// this.getView().setModel("amodel");
				// this.byId("title").setText(itemID);
				this.byId("embedParam");
				// ./src/Experiment5.wrl
			},
			
			_loadFile: function(sTitle){
				// var img = this.byId("testImg");
				this._replaceString(sTitle);
				// img.setSrc("./img/"+sTitle+".jpg");
			},
			
			_replaceString: function(sTitle){
				var embedObj = document.CC3D;
				if(embedObj){
					var regex = /\/src\/(.*?)\./;
					var matched = regex.exec(embedObj.src)[1];
					var oldEmbedObjPath = embedObj.src;
					var newStr = oldEmbedObjPath.replace(matched, sTitle);
					embedObj.src = newStr;
					
				}
			},
			
			handleNextVPButton: function(oEvent){
				document.CC3D.OnNextViewpoint();
			},
			
			handlePrevVPButton: function(oEvent){
				document.CC3D.OnPrevViewpoint();
			},
			
			_loadControlPanel: function(sTitle){
				
			}
		}); 
	}
);