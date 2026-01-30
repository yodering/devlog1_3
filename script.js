console.log("test")


const cron = require('node-cron')

cron.schedule('*/10 * * * *', () => {
  console.log('Task running every 10 minutes:', new Date().toLocaleString());
  doSomething();
});

function doSomething() {
  console.log('Doing something useful...');
}
