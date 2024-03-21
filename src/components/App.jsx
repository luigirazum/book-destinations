import { Routes, Route } from "react-router-dom";
import Links from "./Links";
import Login from "./Login";
import Signup from "./Signup";
import Reservations from "./Reservations";
import OffcanvasLayout from "./OffcanvasLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDestinations } from "../redux/destinations/destinationsSlice";
import Destinations from "./main-pages.jsx";
import AddDestinations from "./add-destinations.jsx";
import DeleteDestinations from "./delete-destinations.jsx";
import "../App.css";
import DestinationDetails from "./details_page.jsx";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);
  return (
    <>
      <OffcanvasLayout>
        <Routes>
          <Route element={<h2>Splash Screen</h2>} />
          <Route element={<Links />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route index path="/destinations" element={<Destinations />} />
          <Route path="/destinations:id" element={<DestinationDetails />} />
          <Route path="/add-destinations" element={<AddDestinations />} />
          <Route path="/delete-destinations" element={<DeleteDestinations />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </OffcanvasLayout>
    </>
  );
};


export default App;
