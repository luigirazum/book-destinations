import { useState } from 'react';
// import { postDestination } from '../redux/destinations/destinationsSlice';

const Destinations = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price_per_night, setPricePerNight] = useState('');
  const [price_per_meal, setPricePerMeal] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image_url', image_url);
    formData.append('price_per_night', price_per_night);
    formData.append('price_per_meal', price_per_meal);
    if (image_url) {
      formData.append('image', image_url);
    }

    try {
      const response = await fetch('http://127.0.0.1:4000/api/v1/destinations', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Destination added successfully!');
        setName('');
        setImageUrl('');
        setDescription('');
        setPricePerNight('');
        setPricePerMeal('');
      } else {
        console.error('Failed to add destination');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Add Destination</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setImageUrl(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="pricePerNight" className="form-label">Price per Night:</label>
          <input
            type="number"
            className="form-control"
            id="pricePerNight"
            value={price_per_night}
            onChange={(e) => setPricePerNight(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pricePerMeal" className="form-label">Price per Meal:</label>
          <input
            type="number"
            className="form-control"
            id="pricePerMeal"
            value={price_per_meal}
            onChange={(e) => setPricePerMeal(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Destination</button>
      </form>
    </div>
  );
};

export default Destinations;
