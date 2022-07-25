const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://JorgeRaton:nI2mRyHTqHIohFth@jorgecrash.gpmgecy.mongodb.net/?retryWrites=true&w=majority',{
    /*useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false*/
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
})
    .then(db=>console.log('DB is connected'))
    .catch(err=> console.error(err));