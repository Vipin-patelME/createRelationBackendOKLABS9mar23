
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LayOut from './components/ui/LayOut';
import CreateStudent from './pages/CreateStudent';
import CreateTeacher from './pages/CreateTeacher';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path='/teacher/create' element={<CreateTeacher />} />
            <Route path='/student/create' element={<CreateStudent />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
