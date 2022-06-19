import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LayoutComponent from './components/Layout';
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
        <Route path='/words/' element={<Main />} />
        <Route path='/words/card_words' element={<CardWords />} />
        <Route path='/words/add_words' element={<AddWords />} />
        <Route path='/words/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

