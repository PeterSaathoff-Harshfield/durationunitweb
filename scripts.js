function getDUTime() {
	var d = new Date();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();
	var ms = d.getMilliseconds();
	
	var elapsed_ms = (hour * 60 * 60 * 1000) + (minute * 60 * 1000) + (second * 1000) + ms
	var ms_in_day = 24 * 60 * 60 * 1000;
	
	var progress = elapsed_ms / ms_in_day;
	
	var du_hour = parseInt(progress * 10);
	var du_minute = parseInt((progress * 1000) % 100);
	var du_second = parseInt((progress * 100000) % 100);
	
	return {du_hour, du_minute, du_second};
}
function getTextDUTime(timeDict) {
	var m = ("00" + timeDict["du_minute"]).slice(-2); 
	var s = ("00" + timeDict["du_second"]).slice(-2); 
	return timeDict["du_hour"] + ":" + m + ":" + s;
}
