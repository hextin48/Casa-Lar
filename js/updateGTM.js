	var updateData = {"visitorLoginState":"No","visitorId":"qt212bumr9p2a0ldhmpj0b75i2","visitorSessionID":"qt212bumr9p2a0ldhmpj0b75i2","visitorType":"new customer","visitorLifetimeValue":0};

window.onload = function() {
	var eventObj = {
	"event": "tray.updateGTM"
	};
	updateData = jQuery.extend(updateData, {
		"siteSearchFrom": document.referrer
	});
	dataLayer.push(jQuery.extend(eventObj, updateData));

	console.info('[DataLayer] UpdateGTM executed.')
};
