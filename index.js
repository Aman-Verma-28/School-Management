const app = require("./app");
const { PORT } = require("./config/index.config");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
