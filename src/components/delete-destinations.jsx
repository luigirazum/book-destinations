import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, deleteDestination } from '../redux/destinations/destinationsSlice'; // Adjust the path accordingly

const DestinationsWithDelete = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations.allDestinations);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const handleDelete = (id) => {
    // Confirm before deletion
    if (window.confirm("Are you sure you want to delete this destination?")) {
      dispatch(deleteDestination(id));
    }
  };

  return (
    <div>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h3>{destination.name}</h3>
          {/* Add more destination details here */}
          <button onClick={() => handleDelete(destination.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DestinationsWithDelete;
