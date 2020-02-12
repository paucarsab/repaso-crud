const mongoose = require('mongoose')
const dbtitle = 'repaso-crud'

mongoose
  .connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => console.log(`Connected to Mongo! Database name: "${dbtitle}"`))
  .catch(err => console.error('Error connecting to mongo', err))