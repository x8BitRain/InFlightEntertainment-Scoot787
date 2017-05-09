	
	/**
	 * Default Software module to load
	 * Will be overriden by the ifapi-avod-software content loadable
	 */
	window.InFlight.define('avod/v1/software', function()
	{
		/** @type {ifapi.avod.v1.support.SoftwareLocation} */
		var softwareLocation = /** @type {ifapi.avod.v1.support.SoftwareLocation} */ ({
			plugin: /** @type {ifapi.avod.v1.support.SoftwareLocation.PluginDictionary} */ ({
				flash: /** @type {ifapi.avod.v1.support.SoftwareLocation.FlashPlugin} */ ({
					version: null,
					windows: /** @type {ifapi.avod.v1.support.SoftwareLocation.FlashPluginWindows} */ ({
						activex: null,
						npapi: null
					}),
					mac: null
				}),
				drm: /** @type {ifapi.avod.v1.support.SoftwareLocation.DRMPlugin} */ ({
					version: null,
					windows: /** @type {ifapi.avod.v1.support.SoftwareLocation.DRMPluginLocation} */ ({
						software: null,
						software_and_extension: null
					}),
					mac: /** @type {ifapi.avod.v1.support.SoftwareLocation.DRMPluginLocation} */ ({
						software: null,
						software_and_extension: null
					})
				})
			}),
			mobile: /** @type {ifapi.avod.v1.support.SoftwareLocation.Mobile} */ ({
				android: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileAndroid} */ ({
					shellApp: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileShellApp} */ ({
						osVersion: null,
						sdkVersion: null,
						appVersion: null,
						url: null
					})
				}),
				ios: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileIOS} */ ({
					shellApp: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileShellApp} */ ({
						osVersion: null,
						sdkVersion: null,
						appVersion: null,
						url: null
					})
				})
			})
		});
		
		softwareLocation.plugin.drm.version = '3.0.1.1';
		softwareLocation.plugin.drm.mac.software = 'PanasonicDrmPlugin.dmg';
		softwareLocation.plugin.drm.mac.software_and_extension = 'PanasonicDrmPlugin_Extension.dmg';
		softwareLocation.plugin.drm.windows.software = 'PanasonicDrmPlugin.msi';
		softwareLocation.plugin.drm.windows.software_and_extension = 'PanasonicDrmPlugin_Extension.msi';
		softwareLocation.plugin.flash.version = '11.5';
		softwareLocation.plugin.flash.mac = softwareLocation.plugin.flash.mac;
		softwareLocation.plugin.flash.windows.activex = softwareLocation.plugin.flash.windows.activex;
		softwareLocation.plugin.flash.windows.npapi = softwareLocation.plugin.flash.windows.npapi;
		softwareLocation.mobile.ios.shellApp.osVersion = '5';
		softwareLocation.mobile.ios.shellApp.sdkVersion = softwareLocation.mobile.ios.shellApp.sdkVersion;
		softwareLocation.mobile.ios.shellApp.appVersion = softwareLocation.mobile.ios.shellApp.appVersion;
		softwareLocation.mobile.ios.shellApp.url = softwareLocation.mobile.ios.shellApp.url;
		softwareLocation.mobile.android.shellApp.osVersion = '4.0';
		softwareLocation.mobile.android.shellApp.sdkVersion = '01.03.0.34';
		softwareLocation.mobile.android.shellApp.appVersion = '01.03.0.34';
		softwareLocation.mobile.android.shellApp.url = 'ScooTVMediaPlayer.apk';
		
		return softwareLocation;
	});
	