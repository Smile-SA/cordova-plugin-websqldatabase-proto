cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.smile.websqldatabase.wpdb/www/wpOpenDatabase.js",
        "id": "org.smile.websqldatabase.wpdb.wpOpenDatabase",
        "clobbers": [
            "openDatabase"
        ]
    }
]
});