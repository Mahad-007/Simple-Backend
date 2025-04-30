const express=require("express");
const userRoutes = require('./routes/userRoutes');
const app=express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/', (req,res)=>{
    res.send("Server is Runnin..");

});
const PORT=5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));


const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/simple-backend-db', {
    useNewurlParser:true,
    useUnifiedTopology:true,

}

)
.then(()=>console.log("MongoDb Connected!"))
.catch((err)=>console.error('MongoDB Connection Error', err));



