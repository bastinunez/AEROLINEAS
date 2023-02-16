import express from 'express'
import cors from 'cors'
//importamos la conexion a la bd
import db from './database/db.js'
//importamos nuestro enrutador
import {router1,router2, router3, router4, router5, router6} from './routes/routes.js'

const app = express()


app.use( cors())
app.use(express.json())
app.use("/pasajero",router1)
app.use("/aerolinea",router2)
app.use("/piloto",router3)
app.use("/ticket",router4)
app.use("/viaje",router5)
app.use("/vuelo",router6)

// const models = {
//     PasajeroModel: db.import("../models/Modelos.js"),
//     ViajeModel: db.import("../models/Modelos.js"),
//     TicketModel: db.import("../models/Modelos.js")
// }
// Object.keys(models).forEach((modelName) => {
//     if ('associate' in models[modelName]) {
//   // console.log(models[modelName]);
//   models[modelName].associate(models);
//     }
// });



// app.get("/", (req,res) => {
//     res.send("hola mundo")
// })

app.listen(8000, () => {
    console.log("Server up running in http://localhost:8000/")
})