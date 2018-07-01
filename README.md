# Node client for exchangeratesapi.io

## Get all the rates on current date
```javascript
let exchange = require('@abskmj/exchangeratesapi').getClient();

exchange({}, function(error, response){
    if(error){
        return console.error(error.stack || error);
    }
    
    console.log(response);
});
```
## Get all the rates on a particular date
```javascript
let exchange = require('@abskmj/exchangeratesapi').getClient();

exchange({ date:"2018-01-01" }, function(error, response){
    if(error){
        return console.error(error.stack || error);
    }
    
    console.log(response);
});
```

## Get all the rates of a particular currency
```javascript
let exchange = require('@abskmj/exchangeratesapi').getClient();

exchange({ base:"USD" }, function(error, response){
    if(error){
        return console.error(error.stack || error);
    }
    
    console.log(response);
});
```

## Get specific rates of a particular currency
```javascript
let exchange = require('@abskmj/exchangeratesapi').getClient();

exchange({ 
    base:"USD",
    symbols: "GBP,AUD"
}, function(error, response){
    if(error){
        return console.error(error.stack || error);
    }
    
    console.log(response);
});
```
## Supports callbacks and promises
```javascript
exchange().then(response =>{
    console.log(response);
});
```