var Ls = require('lightstreamer-client-node');

var sub = new Ls.Subscription("MERGE",["item1","item2","item3"],["stock_name","last_price"]);
sub.setDataAdapter("QUOTE_ADAPTER");
sub.setRequestedSnapshot("yes");
sub.addListener({
    onItemUpdate: function(obj) {
      console.log(obj.getValue("stock_name") + ": " + obj.getValue("last_price"));
    }
});
var client = new Ls.LightstreamerClient("http://push.lightstreamer.com","DEMO");  
client.connect();
client.subscribe(sub);