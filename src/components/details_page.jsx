import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { fetchDestinations } from "../redux/destinations/destinationsSlice";
import image from "../assets/images/destination.png";
import "../stylesheets/details-page.css";

const DestinationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isDestinationFetched = useSelector(
    (state) => state.destinations.isDestinationFetched
  );

  const allDestinations = useSelector(
    (state) => state.destinations.allDestinations
  );

  useEffect(() => {
    if (
      !isDestinationFetched ||
      !allDestinations.find((pkg) => pkg.id === id)
    ) {
      dispatch(fetchDestinations());
    }
  }, [dispatch, id, isDestinationFetched, allDestinations.length]);

  const selected = useSelector((state) =>
    state.destinations.allDestinations.find((pkg) => pkg.id == id)
  );

  return (
    <>
      <div className="details-wrap">
        <div className="img-wrap">
          <img src={image} alt="location" className="loc-img" />
        </div>
        <div className="details">
          <div className="details-container">
            <h2 className="headline">{selected.name}</h2>
            <ul className="details-list">
              <li className="list-item">
                <strong>Finance fee:</strong> $100
              </li>
              <li className="list-item">
                <strong>Meals:</strong> ${selected.price_per_meal}
              </li>
              <li className="list-item">
                <strong>Nights:</strong> ${selected.price_per_night}
              </li>
              <li className="list-item">
                <strong>Total:</strong> $1000
              </li>
            </ul>
          </div>
          <div className="reserve-btn">
            <NavLink to="/add_reservations">
              <button type="button" className="btn btn-lg">
                Book
                <IoIosArrowDropright className="btn-icon text-white" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="back-btn">
        <NavLink to="/packages">
          <button type="button" className="btn btn-lg" aria-label="Go Back">
            <IoIosArrowDropleft className="back-btn-icon text-white" />
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default DestinationDetails;
