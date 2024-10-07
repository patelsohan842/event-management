import app from "./app.js";
const PORT=3001

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
