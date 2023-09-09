const express = require('express');
const cors = require('cors');
const config = require('./shared/config');
const handleError = require("./shared/errors/handle");
const usersRoute = require('./modules/users/_api');
const guidesRoute = require('./modules/guides/_api');
const userGuidesRoute = require('./modules/user_guide/_api');
const { NotFoundError } = require('./shared/errors');

const app = express();

app.use(express.json());

// experiment boshlandi
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600,
};


app.use(cors(corsOptions));
// experiment tugadi

// tepasi o'chiriladi
// app.use(cors());

app.use(usersRoute);
app.use(guidesRoute);
app.use(userGuidesRoute);

app.get("/", (req, res) => {
  res.status(200).json({message: "Hello world"});
});

app.use('*', () => {
  throw new NotFoundError("Mavjud bo'lmagan yo'l");
});

app.use(handleError);

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda run bo'ldi`);
});