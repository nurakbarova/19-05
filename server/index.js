const express = require('express')
const app = express()
const dotenv=require("dotenv")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();



app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`we api ${PORT}`);
  });