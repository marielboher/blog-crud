import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import { format } from "date-fns";
import './postCreator.css'


const PostCreator = () => {

  const getCurrentDate = () => {
    const currentDate = new Date();
    return format(currentDate, "yyyy-MM-dd");
  };

  const initialValues = {
    title: "",
    author: "",
    description: "",
    image: null,
    date: getCurrentDate(),
  };

  const handleSubmit = async (values) => {
    try {
      const newData = {
        title: values.title,
        author: values.author,
        description: values.description,
        date: values.date,
        image: values.image,
      };

      console.log(newData);
      await axios.post("http://localhost:5000/create", newData);

      console.log("Post creado exitosamente");
    } catch (error) {
      console.error("Error al crear el post:", error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Please enter a title";
    }

    if (!values.author) {
      errors.author = "Please enter an author";
    }

    if (!values.description) {
      errors.description = "Please enter a description";
    }

    return errors;
  };

  return (
    <div className="formik-styles">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <Form>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && <div>{errors.title}</div>}
            </div>
  
            <div>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                value={values.author}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.author && <div>{errors.author}</div>}
            </div>
  
            <div>
              <label htmlFor="description">Description:</label>
              <input
                as="textarea"
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.description && <div>{errors.description}</div>}
            </div>
  
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(event) =>
                  handleChange({ target: { name: "image", value: event.target.files[0] } })
                }
                onBlur={handleBlur}
              />
              <ErrorMessage name="image" component="div" />
            </div>
  
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostCreator;




// import { Formik, Form, ErrorMessage } from "formik";
// import axios from "axios";
// import { format } from "date-fns";
// import "./postCreator.css";

// const PostCreator = () => {
//   const getCurrentDate = () => {
//     const currentDate = new Date();
//     return format(currentDate, "yyyy-MM-dd");
//   };

//   const initialValues = {
//     title: "",
//     author: "",
//     description: "",
//     image: null,
//     date: getCurrentDate(),
//   };


//   const handleSubmit = async (values) => {
//     try {
//       const newData = {
//         title: values.title,
//         author: values.author,
//         description: values.description,
//         date: values.date,
//         image: values.image,
//       };
  
//       if (values.image) {
//         const imageUrl = await uploadImage(values.image);
//         newData.image = imageUrl;
//       }
  
//       await axios.post("http://localhost:5000/create", newData);
  
//       console.log("Post creado exitosamente");
//     } catch (error) {
//       console.error("Error al crear el post:", error);
//     }
//   };
//   // const handleSubmit = async (values) => {
//   //   try {
//   //     const newData = {
//   //       title: values.title,
//   //       author: values.author,
//   //       description: values.description,
//   //       date: values.date,
//   //       image: values.image,
//   //     };

//   //     console.log(newData);
//   //     await axios.post("http://localhost:5000/create", newData);

//   //     console.log("Post creado exitosamente");
//   //   } catch (error) {
//   //     console.error("Error al crear el post:", error);
//   //   }
//   // };

//   const validateForm = (values) => {
//     const errors = {};

//     if (!values.title) {
//       errors.title = "Please enter a title";
//     }

//     if (!values.author) {
//       errors.author = "Please enter an author";
//     }

//     if (!values.description) {
//       errors.description = "Please enter a description";
//     }

//     return errors;
//   };

//   return (
//     <div className="formik-styles">
//         <Formik
//           initialValues={initialValues}
//           validate={validateForm}
//           onSubmit={handleSubmit}
//         >
//           {({ values, handleChange, handleBlur, errors }) => (
//             <Form>
//               <div>
//                 <label htmlFor="title">Title:</label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={values.title}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.title && <div>{errors.title}</div>}
//               </div>

//               <div>
//                 <label htmlFor="author">Author:</label>
//                 <input
//                   type="text"
//                   id="author"
//                   name="author"
//                   value={values.author}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.author && <div>{errors.author}</div>}
//               </div>

//               <div>
//                 <label htmlFor="description">Description:</label>
//                 <input
//                   as="textarea"
//                   id="description"
//                   name="description"
//                   value={values.description}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.description && <div>{errors.description}</div>}
//               </div>

//               <div>
//                 <label htmlFor="image">Image:</label>
//                 <input
//                   type="file"
//                   id="image"
//                   name="image"
//                   onChange={(event) => {
//                     handleChange({
//                       target: { name: "image", value: event.target.files[0] },
//                     });
//                   }}
//                   onBlur={handleBlur}
//                 />
//                 {values.image && (
//                   <Image
//                     cloudName="dl5kn2ywg"
//                     publicId={values.image}
//                     width="100"
//                     crop="scale"
//                   />
//                 )}
//                 <ErrorMessage name="image" component="div" />
//               </div>

//               <button type="submit">Enviar</button>
//             </Form>
//           )}
//         </Formik>
//     </div>
//   );
// };

// export default PostCreator;
