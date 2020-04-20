const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mesopotamia:potamia2@cluster0-vtwi9.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex: true

});
mongoose.connection.on('connected',function(){
  console.log("U lidh!");
});
