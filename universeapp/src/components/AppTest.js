//import React, { Suspense } from "react";
import { useFetch } from "../services/useFech";
import { fetchData } from "../services/fetchData";
import React, { useState, useEffect } from "react";
import ConsolidateTableTSU from "./ConsolidateTableTSU";
import TrajectoryForm from "./TrajectoryForm";
import InputTable from "./InputTable";

 //useFetch hook version
//  function AppTest() {
//    const { data, loading, error, handleCancelRequest } = useFetch(
//      "https://jsonplaceholder.typicode.com/todos"
//    );

//   return (
//     <div className="App">
//       <h1>Fetch like a Pro</h1>

//       <button onClick={handleCancelRequest}>Cancel Request</button>
//       <ul className="card">
//         {error && <li>Error: {error}</li>}
//         {loading && <li>Loading...</li>}
//         {data?.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// --------------------------------------------
// Pro Version - Render as you fetch
//const apiDatatodos = fetchData("https://jsonplaceholder.typicode.com/todos");

// function AppTest() {
//   const data = apiData.read();

//   return (
//     <div className="App">
//       <h1>Fetch like a Pro</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <ul className="card">
//           {data?.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       </Suspense>
//     </div>
//   );
// }
// export default AppTest;

// --------------------------------------------
// Consolidate Table Test

// const AppTest = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://cities-qd9i.onrender.com/agents");
//       const agents = await response.json();
//       setData(agents);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       <h1 style={{textAlign: "center"}}>Concentrado de Trayecto de Estudiantes</h1>
//       <ConsolidateTableTSU data={data} />
//     </div>
//   );
// };

// export default AppTest;

// --------------------------------------------
// Pro Version - Render as you fetch
// const apiData1 = fetchData("https://cities-qd9i.onrender.com/agents");
// const data1 = apiData1.read();
const apiData = fetchData("https://localhost:7119/api/UniVerse/AllTrajectory"); 

function AppTest() {
  const data = apiData.read();  
  console.log(data)
  
  return (
    <div>
      <div style={{marginTop: "20px"}}>
        <h1 style={{textAlign: "center", color: "#86868B"}}>Concentrado de Trayecto de Estudiantes</h1>
        <ConsolidateTableTSU data={data} />
        {/* <TrajectoryForm />  */}
      </div>
    </div>
  );
}
export default AppTest;
