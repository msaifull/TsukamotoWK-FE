import React from "react";
import Categories from "./pages/Categories";
import PageSignin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Speakers from "./pages/Speakers";
import SpeakersCreate from "./pages/Speakers/create";
import SpeakersEdit from "./pages/Speakers/edit";
import CategoryCreate from "./pages/Categories/create";
import CategoryEdit from "./pages/Categories/edit";
import Events from "./pages/Events";
import EventsCreate from "./pages/Events/create";
import EventsEdit from "./pages/Events/edit";
import Transactions from "./pages/Transactions";
import Logout from "./pages/Logout";
import { listen } from "./redux/listener";

function App() {
  React.useEffect(() => {
    listen();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path="/login" element={<PageSignin />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/create" element={<CategoryCreate />} />
        <Route path="/categories/edit/:categoryId" element={<CategoryEdit />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="speakers/Create" element={<SpeakersCreate />} />
        <Route path="speakers/edit/:speakerId" element={<SpeakersEdit />} />
        <Route path="events" element={<Events />} />
        <Route path="events/create" element={<EventsCreate />} />
        <Route path="events/edit/:eventId" element={<EventsEdit />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   const [categories, setCategories] = useState([]);
//   const [speakers, setSpeakers] = useState([]);
//   const [keyword, setKeyword] = useState([]);

//   const getAllCategories = async () => {
//     const res = await axios.get(`http://localhost:4000/api/v1/categories`, {
//       headers: {
//         authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FpZnVsIiwidXNlcklkIjoiNjI0MjQxNWMyYTQ1MGRiOWFmMjllNWQ4Iiwicm9sZSI6InN1cGVyLWFkbWluIiwiZW1haWwiOiJhZG1pbjFAZ21haWwuY29tIiwiaWF0IjoxNjUyNTc5ODY1fQ.u7gYTAVNwhZilgf7rHYuk4UmNnoEkOPSvUKsbdCbrQU`,
//       },
//     });
//     setCategories(res.data.data);
//   };

//   const getAllSpeaker = async () => {
//     const res = await axios.get(
//       `http://localhost:4000/api/v1/speakers?keyword=${keyword}`,
//       {
//         headers: {
//           authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FpZnVsIiwidXNlcklkIjoiNjI0MjQxNWMyYTQ1MGRiOWFmMjllNWQ4Iiwicm9sZSI6InN1cGVyLWFkbWluIiwiZW1haWwiOiJhZG1pbjFAZ21haWwuY29tIiwiaWF0IjoxNjUyNTc5ODY1fQ.u7gYTAVNwhZilgf7rHYuk4UmNnoEkOPSvUKsbdCbrQU`,
//         },
//       }
//     );
//     setSpeakers(res.data.data);
//   };

//   React.useEffect(() => {
//     getAllSpeaker();
//   }, [keyword]);

//   React.useEffect(() => {
//     getAllCategories();
//   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         value={keyword}
//         name="keyword"
//         onChange={(e) => setKeyword(e.target.value)}
//       />
//       <h2>ini data categories</h2>
//       <ul>
//         {categories.map((category, index) => (
//           <li key={index}>{category.name}</li>
//         ))}
//       </ul>
//       <h2>ini data speakers</h2>
//       <ul>
//         {speakers.map((speaker, index) => (
//           <li key={index}>{speaker.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
