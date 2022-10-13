const mongoose = require('mongoose');
mongoose.connect(
	'mongodb+srv://rahul_nushop:iIXjYpkggACAMivV@cluster0.u1h6vng.mongodb.net/test?retryWrites=true&w=majority')
	.then(()=>{
        console.log('MongoDB connected...')
    }).catch((err)=>console.log(`No connection`));

