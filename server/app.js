import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import fs from "fs-extra";
import { uploadImage } from "./cloudinary/cloudinary.js";
import { v4 as uuidv4 } from 'uuid';
import fileUpload from "express-fileupload";


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "./upload",
}))

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});

const getPosts = (req, res) => {
  const query = "SELECT * FROM posts";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al obtener los posts:", error);
      res.sendStatus(500);
    } else {
      console.log("Posts obtenidos correctamente");
      console.log(results);
      res.json(results);
    }
  });
};

const getPost = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = "SELECT * FROM posts WHERE id = ?";
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error al obtener el id:", error);
      res.sendStatus(500);
    } else {
      console.log("id obtenido correctamente");
      console.log(results);
      res.json(results);
    }
  });
};

const newPost = async (req, res) => {
  const { title, description, author } = req.body;
  const id = uuidv4();
  const query =
    "INSERT INTO posts (id, title, description, author) VALUES (?, ?, ?, ?)";

  let image;

  if (req.files?.image) {
    const result = await uploadImage(req.files.image.tempFilePath);
    console.log("Result from uploadImage:", result);
    await fs.remove(req.files.image.tempFilePath);
    image = {
      url: result.secure_url,
      public_id: result.public_id,
    };
  }

  connection.query(
    query,
    [id, title, description, author],
    (error, results) => {
      if (error) {
        console.error("Error al crear el post:", error);
        res.sendStatus(500);
      } else {
        console.log("Post creado correctamente");
        console.log(results);
        res.json(results);
      }
    }
  );
};


export const deletePost = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM posts WHERE id = ?";

  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error al eliminar el post:", error);
      res.sendStatus(500);
    } else {
      console.log("Post eliminado correctamente");
      console.log(results);
      res.json(results);
    }
  });
};


app.get("/", getPosts);

app.get("/posts/:id", getPost);

app.post("/create", newPost);

app.delete("/posts/:id", deletePost);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
