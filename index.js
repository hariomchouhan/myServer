import 'dotenv/config';
import express from 'express';
import employeeRouter from './src/Routers/EmployeeRouter.js';
import numberRouter from './src/Routers/NumberRouter.js';

const app = express();
app.use(express.json());
app.use(numberRouter);
app.use(employeeRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT}`);
})