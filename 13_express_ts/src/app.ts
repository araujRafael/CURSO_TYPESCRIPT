import express, { NextFunction, Request, Response } from "express";
// instance of app and config
const PORT = 3000;
const APP = express();
// Middleware
const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Its a middleware 🖕😃");
  console.log("Path: " + req.path);
  return next();
};
APP.use(express.json());
APP.use(middleware);

// Routes
const users = [
  {
    name: "rafael",
    email: "rafael@email.com",
    comments: [
      {
        content: "1",
      },
      {
        content: "2",
      },
      {
        content: "3",
      },
    ],
  },
  {
    name: "gabriel",
    email: "gabriel@email.com",
    comments: [
      {
        content: "1",
      },
      {
        content: "2",
      },
      {
        content: "3",
      },
    ],
  },
  {
    name: "daniel",
    email: "daniel@email.com",
    comments: [
      {
        content: "1",
      },
      {
        content: "2",
      },
      {
        content: "3",
      },
    ],
  },
];
// types and interfaces
type Methods = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS";
interface User {
  name: string;
  email: string;
  password: string;
  comments: any[];
}
interface ReqData {
  user: User;
}

interface RespData {
  message?: string;
  data?: object;
}

APP.post(
  "/",

  (req: Request<any, any, User>, res: Response<RespData>) => {
    const user = req.body;
    //
    users.push(user);
    console.log(user);
    //
    res.json({
      message: "User created succefully!",
      data: user,
    });
  }
);

APP.get("/", (req: Request, res: Response<RespData>) => {
  res.json({
    message: !users ? "Not have users" : "This is all users",
    data: users,
  });
});
APP.get("/:id", (req: Request<{ id: string }>, res: Response<RespData>) => {
  const userId = req.params.id;
  const user = users[userId as any];
  res.json({
    message: "This is your user",
    data: user,
  });
});
APP.get(
  "/:id/:commentId",
  (
    req: Request<{ id: string; commentId: string }>,
    res: Response<RespData>
  ) => {
    // just instance a property of params
    const userId = req.params.id;
    const commentId = req.params.commentId;
    const user = users[userId as any];
    const comment = user.comments[commentId as any];
    res.json({
      message: "This is your comment",
      data: { user: user.email, comment },
    });
  }
);

APP.all("/all/methods", (req: Request, res: Response<RespData>) => {
  switch (req.method as Methods) {
    case "GET": {
      res.json({
        message: "Hello world from get!",
      });
      break;
    }
    case "POST": {
      const anything = req.body;
      console.log(anything);
      res.json({
        message: "Hello world from post!",
        data: anything,
      });
      break;
    }
  } //
});

// Listen your server
APP.listen(PORT, () => {
  console.log(`🔥 Server is running on http://localhost:${PORT} 🔥`);
});
