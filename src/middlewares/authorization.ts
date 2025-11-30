// // This function checks if the user's role is allowed to access a specific route
// const authorizeRole = (roles: string[]) => {
//     // Return a middleware function that will check the user's role
//     return (req: Request, res: Response, next: Function) => {
//         // Check if the user's role (stored in req.user) is included in the allowed roles
//         if (!roles.includes(req.user.role)) {
//             // If the user's role is not allowed, return a 403 Forbidden response
//             return res.status(403).json({ error: 'Access Denied' });
//         }

//         // If the role is allowed, move to the next middleware or route handler
//         next();
//     };
// };

// // Example of protecting an admin-only route
// // The authenticateToken middleware checks if the user is authenticated
// // The authorizeRole middleware checks if the user has the 'admin' role
// app.get('/admin', authenticateToken, authorizeRole(['admin']), (req: Request, res: Response) => {
//     // If the user is authenticated and has the 'admin' role, send this response
//     res.json({ message: 'Welcome, Admin!' });
// });
