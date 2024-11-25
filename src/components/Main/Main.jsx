import { Route, Routes, Navigate } from 'react-router-dom';
import Buscador from './Buscador/Buscador';


const Main = () => {

  return (
    <div>
      <main>
      <Routes>
          { <Route path='/' element={<Buscador/>} /> }
          { <Route path='/*' element={<Navigate to='/' />} /> }
        </Routes> 
      </main>
    </div>
  );
};



export default Main; 