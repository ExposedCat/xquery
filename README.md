# XQuery
[![Visits Badge](https://badges.pufler.dev/visits/exposedcat/xquery)](https://github.com/ExposedCat/xquery)  

[XQuery](https://github.com/ExposedCat/xquery/blob/main/xquery.js) is lightweight JQuery replacement  

## API

### XQuery
You can use `$` function to create new XQuery instance.  
Using `XQuery` you can access one or more HTML elements and/or do any stuff with it.  
```js
$(selector)
```
#### Parameters
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `selector` | `string` | **Required**. Element(s) selector |
#### Methods
- `do(func)` - Execute function for each selected element.
 
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `func` | `Function<element: HTMLElement>` | **Required**. Function to be executed |

- `unwrap()` - Returns selected element(s).