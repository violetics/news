const { request } = require("../utils");
const plugins = require("./plugins");
const plugin = [];

function send(url, fn) {
    if (fn && typeof fn == "function") {
        return request(url)
            .then((data) => fn(null, data))
            .catch((error) => fn(error, null));
    }
    return request(url);
}

for (var i = 0; i < plugins.length; i++) {
	let plugin_ = plugins[i];
	plugin[plugin_] = function Violetics(self) {
		let { BASE, apikey } = self;
		return (fn) => send(BASE(plugin_, apikey), fn);
	};
}

module.exports = plugin;
