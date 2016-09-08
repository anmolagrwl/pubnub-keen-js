var pubnub = require("pubnub")({
    subscribe_key: 'demo', // always required
    publish_key: 'demo'	// only required if publishing
});
var cron = require('cron');

var events = ["Event1", "Event2", "Event3"]

function randomEvent(){
	var event = events[Math.floor(Math.random()*events.length)];
	return (event + "_data"); 
}

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

var cronJob = cron.job("*/1 * * * * *", function(){
    pubnub.publish({
        channel: "keen-pubnub",
        message: {"event": randomEvent(), "value": randomIntInc(0,9)},
        callback: function(m){console.log(m)}
    });
});

cronJob.start();

