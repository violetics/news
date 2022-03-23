## Violetics API News

> **_News API Wrapper for https://violetics.pw/api/news_**

```diff
@@ Created on 23-03-22 | Violetics @@
```

## Installation

<h4>
  using npm package manager
</h4>

> _npm install @violetics/news_

<h4>
  using yarn package manager
</h4>

> _yarn add @violetics/news_

## Example Request

```javascript
"use strict";
const Violetics = require("@violetics/news");
const v = new Violetics("API_KEY"); // register on https://violetics.pw/ to get your own apikey

/* then, catch */
v.antara()
	.then((data) => {
		console.log("data", data);
	})
	.catch(console.error);

/* callback */
v.antara((error, data) => {
	if (error) return console.error(error);
	console.log("data", data);
});
```

## Information

```diff
+ dont forget to star <3
! contribute to this project! ~~~
- please add issue if you having problem with installation

! github: https://github.com/Violetics/news
```
