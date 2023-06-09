// import fs from "fs";

// export const getPosts = (req, res) => {
//   const query = "SELECT * FROM posts";
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Error al obtener los posts:", error);
//       res.sendStatus(500);
//     } else {
//       console.log("Posts obtenidos correctamente");
//       res.json(results);
//     }
//   });
// };

// export const createPosts = (req, res) => {
//   const newPost = {
//     name: "",
//     email: "",
//     username: "",
//     password: "",
//   };

//   const query = "INSERT INTO posts SET ?";
//   connection.query(query, newPost, (error, results) => {
//     if (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ message: "Error al insertar el post en la base de datos" });
//     } else {
//       res.status(201).json({ message: "Post insertado correctamente" });
//     }
//   });
// };
