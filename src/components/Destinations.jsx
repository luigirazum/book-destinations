import { useState } from 'react';

const Destinations = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending the data to a server
    console.log('Form submitted:', { name, place, photo, location, description });
    // Reset form fields after submission
    setName('');
    setPlace('');
    setPhoto('null');
    setLocation('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Destination</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Photo URL:</label>
          <input
            type="file"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
};

export default Destinations;
