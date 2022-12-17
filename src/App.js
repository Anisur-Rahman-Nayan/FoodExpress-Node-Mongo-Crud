import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Adduser from './Components/AddUser/Adduser'
import Home from './Components/AddUser/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<Adduser></Adduser>}></Route>
        <Route path={`/update/:id`} element={<UpdateUser></UpdateUser>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
