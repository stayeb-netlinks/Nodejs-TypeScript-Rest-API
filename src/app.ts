import connect from "./utils/connect";
import logger from "./utils/logger";
import config from "config";
import createServer from "./utils/server";

const port = config.get<number>("port");
const app = createServer();

app.listen(port, async () => {
  logger.info("App Listening on http://localhost:1337");
  await connect();
});
