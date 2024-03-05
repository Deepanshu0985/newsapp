import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Newspage from "./components/Newspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



const App = () => {
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API_KEY;

  const setProg = (progress) => {
    setProgress(progress);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route exact path="/" element={<Newspage apikey={apikey} setprog={setProg} key="general" category="general" />} />
        <Route exact path="/sports" element={<Newspage apikey={apikey} setprog={setProg} key="sports" category="sports" />} />
        <Route exact path="/science" element={<Newspage apikey={apikey} setprog={setProg} key="science" category="science" />} />
        <Route exact path="/health" element={<Newspage apikey={apikey} setprog={setProg} key="health" category="health" />} />
        <Route exact path="/technology" element={<Newspage apikey={apikey} setprog={setProg} key="technology" category="technology" />} />
        <Route exact path="/entertainment" element={<Newspage apikey={apikey} setprog={setProg} key="entertainment" category="entertainment" />} />
        <Route exact path="/general" element={<Newspage apikey={apikey} setprog={setProg} key="general" category="general" />} />
        <Route exact path="/business" element={<Newspage apikey={apikey} setprog={setProg} key="business" category="business" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


