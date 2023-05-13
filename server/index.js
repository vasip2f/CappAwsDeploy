const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const path = require('path')

const corsOptions = {
  // origin: "https://conference-room-booking-fe.onrender.com", // frontend URI (ReactJS)

  origin: 'http://13.232.52.143:3000',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./router/user");
InitiateMongoServer();
app.use(express.json());
const EventRoute = require('./router/EventRoutes');
app.use('/', cors(corsOptions), EventRoute);
const EventTimeSlotRoute = require('./router/EventTimeSlotRoute');
app.use('/', EventTimeSlotRoute)


const _dirname = path.dirname("")
const builPath = path.join(_dirname, "../client/build");
// app.use(express.static(builPath))
app.use(express.static(path.join(builPath)));
app.get("/*", function (req, res) {
  res.sendFile('index.html',
    { root: path.join(_dirname, "../client/build") },
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  );
})



// middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// PORT
const PORT = 9001;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// router

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
