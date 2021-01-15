import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
import serverRoutes from './routes/index.js'
const app = express()

const PORT = process.env.PORT ?? 3000
const __dirname = path.resolve()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
})

app.get('/',(req,res)=>{
  res.render('index', {title: 'Main page', active: 'main'})
})
app.get('/features',(req,res)=>{
  res.render('features', {title: 'Features page', active: 'features'})
})