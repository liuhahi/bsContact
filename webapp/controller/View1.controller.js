sap.ui.define([
	"bsContact/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("bsContact.controller.View1", {
		
		onInit: function(){
			
		},             
		
		onAfterRendering: function(oEvent){

		},
		
		goToItemDetail : function(oEvent){  
			var oContext = oEvent.getSource().getBindingContext("bsModel");
			var path = oContext.getPath(); 
			var oData = oContext.getProperty(path);
			// var sPOItemPos = oEvent.getSource().getBindingContext().getProperty("POItemPos");  
			this.getRouter().navTo("itemDetails", {  
				title : oData.title
		});
			// this.getRouter().navTo("itemDetails");
		}                
		
		// handleAnimateVP: function(oEvent){
		// 	document.CC3D.animate(true);
		// },
		
		// stopAnimateVP: function(oEvent){
		// 	animate(false);
		// }
	});

});