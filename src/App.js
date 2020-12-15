import './App.css';

import "antd/dist/antd.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Thumbnailist from './components/thumbnaillist'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <Switch>
      
             <Route path="/" component={Thumbnailist}  exact/>
      
   
           </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
