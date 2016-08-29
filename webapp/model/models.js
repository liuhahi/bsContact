sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createBSModel: function() {
			var oModel = new JSONModel({
				items:[{
						title: "MountWalk",
						itemID: 0, 
						fileName: "MountWalk"},
					  {
					  	title: "torus",
					  	itemID: 1,
					  	fileName: "torus"},					  
					  {
					  	title: "shapemod-accelerate",
					  	itemID: 1,
					  	fileName: "shapemod-accelerate"
					  },					  
					  {
					  	title: "CoordinateAxes",
					  	itemID: 1,
					  	fileName: "CoordinateAxes"
					  }]
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};

});