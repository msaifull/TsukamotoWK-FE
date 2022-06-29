import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "./form";
import { postData } from "../../utils/fetchData";
import AlertMessage from "../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

function PageSignin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    if (token) return navigate(-1);
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(`api/v1/auth/signin`, form);
      dispatch(userLogin(res.data.data.token, "role", "username"));
      setIsLoading(false);

      navigate("/categories");
    } catch (err) {
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err.response.data.msg,
      });
      setIsLoading(false);
    }
  };

  return (
    <Container md={12} className="vh-100">
      {alert.status && (
        <AlertMessage type={alert.type} message={alert.message} />
      )}
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signin</Card.Title>

          <Form
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            alert={alert}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;

// function PageSignin() {
//   // const [name, setName] = useState('');
//   // const [age, setAge] = useState('');
//   const [users, setUSers] = useState([{ id: 1, name: "elfin", age: 26 }]);
//   const [isBool, setIsBool] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [type, setType] = useState("save");
//   const [error, setError] = useState({
//     status: false,
//     message: "",
//   });

//   const [form, setForm] = useState({
//     age: "",
//     name: "",
//     id: 0,
//   });

//   const getOneUser = (data) => {
//     setForm({ name: data.name, age: data.age, id: data.id });
//     setType("update");
//   };

//   const handleUpdate = (data) => {
//     const _temp = [...users];

//     _temp.forEach((user) => {
//       if (user.id === data.id) {
//         user.name = data.name;
//         user.age = data.age;
//       }
//     });

//     setUSers(_temp);
//     setType("save");
//   };
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let error = false;

//     if (form.name === "") {
//       error = true;
//       setError({ status: true, message: "Nama tidak boleh kosong" });
//       return error;
//     }

//     if (form.age === "") {
//       error = true;
//       setError({ status: true, message: "Umur tidak boleh kosong" });
//     }
//     return error;
//   };

//   const onSubmit = () => {
//     setIsLoading(true);

//     if (!validate()) {
//       let _temp = [...users];
//       _temp.push({
//         name: form.name,
//         age: form.age,
//         id: _temp[_temp.length - 1].id + 1,
//       });
//       setUSers(_temp);
//       setForm({ name: "", age: "", id: 0 });
//       setIsLoading(false);
//     } else {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error.status && <Alert message={error.message} type="error" />}
//       <h1>Form Signin</h1>
//       <TextInput
//         placeholder="Masukan nama"
//         type="text"
//         value={form.name}
//         name="name"
//         onChange={(e) => handleChange(e)}
//       />
//       <br />
//       <br />
//       <TextInput
//         placeholder="Masukan umur"
//         type="number"
//         value={form.age}
//         name="age"
//         onChange={(e) => handleChange(e)}
//       />
//       <Button
//         name={`${type === "save" ? "Save" : "Update"}`}
//         loading={isLoading}
//         onClick={() => (type === "save" ? onSubmit() : handleUpdate(form))}
//       />

//       <table>
//         <thead>
//           <th>Name</th>
//           <th>age</th>
//           <th>Action</th>
//         </thead>

//         <tbody>
//           {users.map((user) => {
//             return (
//               <tr>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.age}</td>
//                 <td>
//                   <Button
//                     name="Edit"
//                     loading={isLoading}
//                     onClick={() => getOneUser(user)}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {/* {isBool ? (
//         <ul>
//           <li>{form.name}</li>
//           <li>{form.age}</li>
//         </ul>
//       ) : (
//         ""
//       )} */}
//     </div>
//   );
// }

// export default PageSignin;
