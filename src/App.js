import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

import Cv from './components/Cv';
import Software from './components/Software';
import Details from './components/Details';

function App() {
  return (
    <div className="App">

      <Header />
      <hr />
      <HashRouter>
        <Menu />
        <Routes>


          <Route path='/cv' element={<Cv />} />
          <Route path='/software' element={<Software />} />

          <Route path='/details' element={<Details />} />



        </Routes>
      </HashRouter>




    </div>
  );
}

export default App;
