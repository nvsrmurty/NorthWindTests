/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/its/north/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/its/north/test/integration/pages/App",
	"com/its/north/test/integration/pages/Browser",
	"com/its/north/test/integration/pages/Master",
	"com/its/north/test/integration/pages/Detail",
	"com/its/north/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.its.north.view."
	});

	sap.ui.require([
		"com/its/north/test/integration/NavigationJourneyPhone",
		"com/its/north/test/integration/NotFoundJourneyPhone",
		"com/its/north/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});