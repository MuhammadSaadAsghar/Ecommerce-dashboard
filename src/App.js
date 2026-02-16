import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/sideBar1/Sidebar';

function App() {
  return (

<BrowserRouter>
<Header/>
<div className="main d-flex">
  <div className="sidebar-wrapper">
  <Sidebar/>
</div>

<div className="content">
<Routes>
  <Route path={'/'} exact={true} element={<Dashboard/>} />
  <Route path={'/Dashboard'} exact={true} element={<Dashboard/>} />
</Routes>
</div>
</div>
</BrowserRouter>
  );
}

export default App;
