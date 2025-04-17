import { app } from "./src/app.mjs";
import { connectDB } from "./src/database/database.config.mjs";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server is running on port ${process.env.PORT || 3001}`);
    });
  })
  .catch((error) => {
    console.error("Connection Failed", error);
  });
