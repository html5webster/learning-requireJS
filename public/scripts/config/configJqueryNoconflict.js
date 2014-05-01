require.config( {

	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",

		// define modules
		"jqueryPrivate": "modules/jqueryPrivate",

		// require modules
		"jqueryNoconflict": "modules/jqueryNoconflict"
	},
	map: {
		"*" : {
			"jquery": "jqueryPrivate"
		},
		"jqueryPrivate":{
			"jquery": "jquery"
		}
	}

} );