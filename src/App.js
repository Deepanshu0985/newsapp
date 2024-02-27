import Navbar from "./components/Navbar";
import { Component} from 'react'
import Newspage from "./components/Newspage";
// import Newsitem from "./components/Newsitem";
// import Spinner from "./components/Spinner";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render(){
    return(
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact  path="/" element={<Newspage key="general" category="general"/>} />
          <Route exact  path="/sports" element={<Newspage key="sports" category="sports"/>} />
          <Route exact  path="/science" element={<Newspage key="science" category="science"/>} />
          <Route exact  path="/health" element={<Newspage key="helath" category="health"/>} />
          <Route exact  path="/technology" element={<Newspage key="technology" category="technology"/>} />
          <Route exact  path="/entertainment" element={<Newspage key="entrtainment" category="entertainment"/>} />
          <Route exact  path="/general" element={<Newspage key="general" category="general"/>} />
          <Route exact  path="/buisness" element={<Newspage key="business" category="business"/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}





