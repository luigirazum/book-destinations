import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Login from './Login';
import Signup from './Signup';
import Reservations from './Reservations';
import OffcanvasLayout from './OffcanvasLayout';
import Destinations from './Destinations';


const App = () => (
  <BrowserRouter>
   <OffcanvasLayout>
    <Routes>
      <Route index element={<h2>Splash Screen</h2>} />
      <Route element={<Links />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="destinations" element={<Destinations />}>
      <Route path=":id" />
      </Route>
      <Route path="reservations" element={<Reservations />} />
    </Routes>
    </OffcanvasLayout>
    </BrowserRouter>
)

export default App;
