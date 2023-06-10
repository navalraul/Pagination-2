import express from "express";
import morgan from "morgan";
import router, {} from './routes/UserRoutes.js';
import mongoose from "mongoose";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', router);
// app.use('api/v2',router);

mongoose.connect('mongodb+srv://raul123:navalraul1@cluster0.k0bgc2r.mongodb.net/navalDB?retryWrites=true&w=majority')
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB Error =>", err));


app.listen(8001,() => console.log("Working on port 8001"));