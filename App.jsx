import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Login from './screen/Login'
import home from './screen/home'
import InwardGatePass from './screen/InwardGatePass'
import Login from './screen/Login'
import Signup from './screen/Signup'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './screen/NoPage'
import Users from './screen/Users'
import StaffGatePass from './screen/StaffGatePass'
import List_staff_data from './screen/list_staff_data'
import TestScreen from '../src/screen/TestScreen'
import List_inwardgatepass_data from './screen/list_InwardGatePass_data'
import UpdateModal from './componant/UpdateModal'
// import Layout from './componant/Layout1'
//  import Layout1 from './componant/Layout1'



// import home from './screen/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <InwardGatePass/> */}

      {/* { home() } */}

      {/* <Signup/>  */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/users" element={<Users />}></Route> */}
          <Route path="/*" element={<NoPage />}></Route>
          <Route path="/home" element={<InwardGatePass />}></Route>
          <Route path='/staff-gate-pass' element={<StaffGatePass />}></Route>
          <Route path="/staff-data" element={<List_staff_data />}></Route>
          {/* <Route path='/layout' element={< Layout />} ></Route> */}
          <Route path='/inward_data' element={<List_inwardgatepass_data />} ></Route>
          <Route path='/test-screen' element={<TestScreen />} ></Route>
          <Route path='/test-sc' element={<UpdateModal/>} ></Route>
          {/* <Route path='/layout1' element={< Layout1/>}  ></Route> */}
          {/* <Route path='/header' element={<Header/>} > </Route>
          <Route path='sidebar' element={<Sidebar/>} > </Route>
          <Route path='/SidebarLinkGroup' element={<SidebarLinkGroup/>} > </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
