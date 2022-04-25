import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Applications from './routes/applications/application.component';
import Castings from './routes/castings/castings.component';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import ShowCasting from './routes/showCasting/showCasting.component';
import EditCasting from './routes/editCasting/editCasting.component';
import NewApplication from './routes/newApplication/newApplication.component';
import EditCastingRole from './routes/editCastingRole/editCastingRole.component'
import NewCasting from './routes/newCasting/newCasting.component'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={< Home />} />
        <Route path='applications' element={ <Applications />} />
        <Route path='castings' element={ <Castings />} />
        <Route path="castings/new" element={<NewCasting /> } />
        <Route path='castings/:castingId' element={<ShowCasting /> } />
        <Route path='castingRoles/:castingRoleId/edit' element={<EditCastingRole/>} /> 
        <Route path='castingRoles/:castingRoleId/applications/new' element={<NewApplication />} />
        <Route path='castings/:castingId/edit' element={<EditCasting />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
