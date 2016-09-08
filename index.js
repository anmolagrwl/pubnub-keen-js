var Keen = require('keen.io');
var pubnub = require("pubnub")({
    subscribe_key: 'demo' // always required
});

// Configure instance. Only projectId and writeKey are required to send data.
var client = Keen.configure({
    projectId: "566bffa959949a2010f23a0b",
    writeKey: "6efc0a2b9e94d45ffde396d73cb17ed018fb77a50ec677fc8c54fbcd5a5db2aa64fe6bacd41bd781720db7226bf8801deaa3d93c08f1858524ad098cd0c99386b718c6563319b86bc8f5081efd9feddedefdf668b83adcc12d2a85b3cc42010a67d3a77107e8501ed9e65808b2e0cdcf",
    readKey: "48f02122934ba0adad549d848d5afd72a8fe4fe296b5cc81e5bce66d906c6ab0e01f5d9db1b7427be3ede62f3b56dcf939a41ee84b85d1dc65aab6fbc6f7af9ad70d9c163c4c2dc04834c8ecc48e482acd068e93e59282179d6b390fc4fa11207ff6743039da7d87db172ea6d6adf9f8",
    masterKey: "4ACCB2850421824E85A8C6D4C0DAC0DC"
});

pubnub.subscribe({
    channel : "keen-pubnub",
    message : function(message){
        client.addEvent(message.event, {"value": message.value}, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
    }
})
