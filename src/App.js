import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Components/Index';
import Add from './Components/Add';
import Delete from './Components/Delete';
import Search from './Components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
