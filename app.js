import express from "express"
import morgan from "morgan"
import cookie from "cookie-parser"
//importing routes
import userRoutes from "./routes/userRoutes"

const app = express()


app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookie())


app.use("/api/users",userRoutes)





module.exports =app