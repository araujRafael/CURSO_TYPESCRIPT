import express, { json, Request, Response, urlencoded } from "express";

// Config *****************************************************************
const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
// Middlewares ************************************************************

// Routes *****************************************************************
/**
 * @query = name
 * exemple => "/?name=rafael"
 */
app.get("/", (req: Request, res: Response) => {
  const name = req.query?.name;

  res.json({
    message: "Hello World, " + name,
  });
});

// Listen *****************************************************************
app.listen(3000, () => {
  console.log(`🔥 Server is running on http://localhost${PORT} 🔥`);
});
