import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LayoutComponent from './components/Layout';
import About from './pages/About/About';
import Main from './pages/Main/Main';
import CardWords from './pages/CardWords/CardWords';
import AddWords from './pages/AddWords/AddWords';
import Login from './pages/Login/Login';
import './App.css';

interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/card_words' element={<CardWords />} />
        <Route path='/add_words' element={<AddWords />} />
        <Route path='/login' element={<Login />} />

        <Route path='about' >
          <Route index element={<About />} />
          <Route path=':number' element={<About />} />
        </Route>

        <Route path='layout' element={<LayoutComponent />} >
          <Route index element={<About />} />
          <Route path=':number' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;

