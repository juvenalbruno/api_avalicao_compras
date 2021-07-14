import { app } from "./app";

import './database/connect';

app.listen(3333, () => console.log(">>> Server started at http://localhost:3333"))