const path = require('path')
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3002

const mainRoutes = require ("./routes/mainRoutes")
const notesRoutes = require ("./routes/notesRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/",mainRoutes)
app.use("/notes",notesRoutes)


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.ejs'))
 })
app.get('/login', function (req, res) {
      res.sendFile(path.join(__dirname, 'views/login.html'))
  })
app.get('/mis-notas', function (req, res) {
     res.sendFile(path.join(__dirname,"views/mis-notas.html"))
 })

app.listen(PORT, () => 
console.log("http://localhost:"+ PORT)
)
