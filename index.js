require("dotenv/config");
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const router = require("./src/routes");

const app = express();

const { PORT } = process.env;

app.use(morgan('dev'))
app.use(cors({
    origin: [
        'http://localhost:5173'
    ]
}))
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
