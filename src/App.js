import Navbar from "./components/Navbar";
import { Component} from 'react'
import Newspage from "./components/Newspage";
import Newsitem from "./components/Newsitem";


export default class App extends Component {
  render(){
    return(
      <div>
        <Navbar/>
        <Newspage/>
      </div>
    )
  }
}



