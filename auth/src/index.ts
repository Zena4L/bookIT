import express, {json} from "express"


const app = express();

app.use(json())


app.get('/api/users/currentuser',(req,res)=>{
    res.send('welcome')
})


export default app;