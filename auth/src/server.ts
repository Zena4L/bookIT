import app from ".";
import {createServer} from "http";

const server = createServer(app);



server.listen(3000,()=>{
    console.log('server is live on port 3000')
})
