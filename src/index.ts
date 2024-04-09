import express from "express";
import setHeaders from "./config/headers";
import { httpLogger, logger } from "./logger";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(setHeaders);
app.use(httpLogger);

app.get("/", (req, res) => {
    res.send("Welcome to the api of template_express_pino ^_+");
});

app.listen(PORT, () => {
    logger.info(`-> now listening at https://localhost:${PORT}/`);
});
