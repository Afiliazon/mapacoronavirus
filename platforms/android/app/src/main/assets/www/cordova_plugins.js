cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-connectivity-monitor.connectivity",
      "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
      "pluginId": "cordova-connectivity-monitor",
      "clobbers": [
        "window.connectivity"
      ]
    },
    {
      "id": "cordova-admob.AdMobAds",
      "file": "plugins/cordova-admob/www/admob.js",
      "pluginId": "cordova-admob",
      "clobbers": [
        "window.admob",
        "window.tappx"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-connectivity-monitor": "1.2.2",
    "cordova-play-services-version-adapter": "1.0.2",
    "cordova-admob": "5.1.0",
    "onesignal-cordova-plugin": "2.8.4",
    "cordova-android-support-gradle-release": "3.0.1"
  };
});