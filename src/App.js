import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Newspage from "./components/Newspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress:0
  }

  setprog = (progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}
        />
        <Routes>
          <Route exact path="/" element={<Newspage setprog ={this.setprog} key="general" category="general" />} />
          <Route exact path="/sports" element={<Newspage setprog ={this.setprog} key="sports" category="sports" />} />
          <Route exact path="/science" element={<Newspage setprog ={this.setprog} key="science" category="science" />} />
          <Route exact path="/health" element={<Newspage setprog ={this.setprog} key="health" category="health" />} />
          <Route exact path="/technology" element={<Newspage setprog ={this.setprog} key="technology" category="technology" />} />
          <Route exact path="/entertainment" element={<Newspage setprog ={this.setprog} key="entertainment" category="entertainment" />} />
          <Route exact path="/general" element={<Newspage setprog ={this.setprog} key="general" category="general" />} />
          <Route exact path="/business" element={<Newspage setprog ={this.setprog} key="business" category="business" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
