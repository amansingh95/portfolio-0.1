import React from 'react';
import AboutUs from "./components/AboutUs";
import '../node_modules/papercss/dist/paper.min.css';
import './css/App.css';
import Projects from './components/Projects';
import Footer from './components/Footer';

let name = 'Aman Singh',
    photo1 = "",
    photo2 = "https://unsplash.it/200";

class App extends React.Component{
  render() {
    return (
      <div className="paper container">
        <div className="row">
          <h2 className="no-margin">Welcome here!</h2>
          <AboutUs name= {name} photo1={photo1} photo2={photo2}/>
          <Projects />
        </div>
        <div className="row">
          <div className="col-12 col">
            <h4 className="no-margin">My social networks:</h4>
          </div>
        </div>
        <Footer name={name} />
       </div>
    );
  }
}

export default App;
