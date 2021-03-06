require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		"colorsv2": "modules/colors.0.0.2",
		"moduleObjectAnalyser" : "modules/moduleObjectAnalyser",
		"dataType": "modules/dataType",
		"typeCheck": "modules/typeCheck"
	},
	deps : [ "jquery",  "dataType", "typeCheck"],
	callback : function() {
		console.log( "assets downloaded should now be cache busted. please look at network tab" )
	},
	urlArgs: "bust=" +  ( new Date() ).getTime()
})