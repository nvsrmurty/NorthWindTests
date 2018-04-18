/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

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
		"com/its/north/test/integration/MasterJourney",
		"com/its/north/test/integration/NavigationJourney",
		"com/its/north/test/integration/NotFoundJourney",
		"com/its/north/test/integration/BusyJourney",
		"com/its/north/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});