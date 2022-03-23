const util = require("util");

module.exports = class VioleticsError extends TypeError {
	constructor(message, type, ...args) {
		super(message, type, ...args);
		this.name = type || "TypeError";
		this.message = util.format(message);
		this.error = {
			name: this.name,
			message: typeof message == "object" ? message : this.message,
			paths: [...this.stack.matchAll(/\((.+)\)/gim)].map(([, error]) => error),
		};
		this.date = new Date();
		this.isError = true;
	}
};
