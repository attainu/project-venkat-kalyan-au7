import express from "express"
import morgan from "morgan"
import cookie from "cookie-parser"
import cors from "cors"
import path from "path"
//importing routes
import userRoutes from "./routes/authRoutes"

import productRoutes from "./routes/productRoutes"

import customerRoutes from "./routes/customerRoutes"

const app = express()


app.use(morgan('tiny'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookie())


app.use("/api/users",userRoutes)
app.use("api/product",productRoutes)
app.use("api/customer",customerRoutes)





module.exports =app