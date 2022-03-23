let https = require("https");
const VioleticsError = require("./VioleticsError");

module.exports = function sendRequest(url) {
	return new Promise(async (resolve, reject) => {
		https
			.get(url, (response) => {
				let data = "";
				response.on("data", (chunk) => (data += chunk));
				response.on("end", () => resolve(JSON.parse(data)));
			})
			.on("error", reject);
	});
};
