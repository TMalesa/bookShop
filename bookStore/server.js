const mongoose = require("mongoose");
const app=require('./app');

port = process.env.PORT;
mongo_Url = process.env.MONGO_URL;

mongoose.connect(mongo_Url).then(() => 
{ 
    console.log("successfully connected to the db...!!!)")
 });
app.listen(port, () => console.log(`listening on port ${port}`)
);



