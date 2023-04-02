import React from 'react';
import HomePage from './routes/Home';
import BookPage from './routes/Book';
import Submitted from './routes/Submitted';
import {Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function App(props){
  const navigate = useNavigate();

  if(props.url){
    navigate(props.url, {replace:true});
  }

  return(
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/book' element={<BookPage />} />
        <Route path='/submitted' element={<Submitted />} />
      </Routes>
    </>
  );
}

export default App;
