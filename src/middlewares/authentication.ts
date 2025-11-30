// import { Request ,Response ,NextFunction} from 'express';
// import bcrypt from 'bcrypt'

// // mock user database

// const users= [
//     {username:'admin ', password:bcrypt.hashSync('password123',10), role:'admin'}
// ]


// //authentication middleware
//  export const authenticateUser =(req:Request,res:Response,next:NextFunction)=>{
//     const {username , password} = req.body
//     const user = users.find((u)=>u.username === username)

//     if(!user || !bcrypt.compareSync(password ,user.password)){
//         return res.status(401).json({error:'Invalid credentials'})
//     }
//     //attach user to the request
//     req.body.user = user
//     next();
//  }



//chajpt eg


// import express, { Request, Response, NextFunction } from "express";
// import bcrypt from "bcrypt";

// const app = express();
// app.use(express.json());

// // Mock database
// const users = [
//   { username: "admin", password: bcrypt.hashSync("password123", 10), role: "admin" },
//   { username: "user1", password: bcrypt.hashSync("pass123", 10), role: "user" }
// ];

// // -----------------------------
// // Authentication Middleware
// // -----------------------------
// export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
//   const { username, password } = req.body;

//   const user = users.find((u) => u.username === username);

//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   // Attach user to request
//   (req as any).user = user;
//   next();
// };

// // -----------------------------
// // Authorization Middleware
// // -----------------------------
// const authorizeRole = (roles: string[]) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const user = (req as any).user;

//     if (!roles.includes(user.role)) {
//       return res.status(403).json({ error: "Access Denied" });
//     }

//     next();
//   };
// };

// // -----------------------------
// // ROUTES
// // -----------------------------

// // POST LOGIN (authenticate user)
// app.post("/login", authenticateUser, (req: Request, res: Response) => {
//   const user = (req as any).user;

//   res.json({
//     message: "Login successful",
//     user: {
//       username: user.username,
//       role: user.role
//     }
//   });
// });

// // GET PROFILE (any authenticated user)
// app.get("/profile", authenticateUser, (req: Request, res: Response) => {
//   const user = (req as any).user;

//   res.json({
//     message: `Welcome ${user.username}`,
//     role: user.role
//   });
// });

// // GET ADMIN ONLY
// app.get("/admin", authenticateUser, authorizeRole(["admin"]), (req: Request, res: Response) => {
//   res.json({ message: "Welcome Admin!" });
// });

// // Start server
// app.listen(3000, () => console.log("Server running on port 3000"));
