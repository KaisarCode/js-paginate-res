# PaginateRes
[js] Paginate results array.

### Install
```
npm install kc-paginate-res
```

### Use
```js
var paginateRes = require('kc-paginate-res');
var arr = [];
for (var i = 0; i < 100; i++) {
    arr.push(i);
}
var res = paginateRes(arr, 20, 1);
console.log(res);
```
