# logger-example-app
Simple logger example app to show different ways to log info in a Node.js app

---

## Workflow
Simply comment and uncomment the code as you like to see how the behavior changes,
how the different debug logs are logged and how the different logging levels are displayed.

Enjoy.

---

### Debug

Switch between the following commands to see how it affects: 

```sh
DEBUG=my-logger-example node app.js
DEBUG=my-logger-example,worker node app.js
DEBUG=my-logger-example,worker,express* node app.js
```

### Logger

Comment and uncomment the following lines to enable different logging levels that we have enabled in the example: 
```js
// process.env.LOG_LEVEL = 'debug'
// process.env.LOG_LEVEL = 'silly'
winston.level = process.env.LOG_LEVEL
```
