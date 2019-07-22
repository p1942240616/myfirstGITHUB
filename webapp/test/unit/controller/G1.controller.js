/*global QUnit*/

sap.ui.define([
	"test/GITHUB/controller/G1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("G1 Controller");

	QUnit.test("I should test the G1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});