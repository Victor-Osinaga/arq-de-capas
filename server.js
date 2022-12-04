import {app} from './app.js';

const PORT = process.env.PORT || 8080

const connectServer = app.listen(PORT, ()=>{
    console.log(`Listening server on PORT ${connectServer.address().port}`);
})

connectServer.on('error', (error)=>{
    console.log(`Server error ${error}`);
})