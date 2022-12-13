import { Header } from './header';
import './App.css';
import { Features } from './features';
import { Bookmark, Intelligent, Share } from './bookmark';
import { Extension } from './extension';
import { Faq } from './faq';
import { Form } from './form';
import { Footer } from './footer';
import {useState} from "react"

function App() {
const [features, setfeatures] = useState("bookmark");
console.log(features);
  return (
    <div className="App">
     <Header/>
     <Features features={features} setfeatures={setfeatures}/>
     {features == "bookmark" ? <Bookmark/> : features == "intelligent" ? <Intelligent/> : features == "share" ? <Share/>: null }
     <Extension/>
     <Faq/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
