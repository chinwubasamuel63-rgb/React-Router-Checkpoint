import { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title && formData.posterURL) {
      onAdd(formData);

      setFormData({ title: '', description: '', posterURL: '', rating: 1 });
    }
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h3>Add a New Movie</h3>
      <input 
        type="text" placeholder="Movie Title" 
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})} 
      />
      <input 
        type="text" placeholder="Description" 
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})} 
      />
      <input 
        type="text" placeholder="Poster URL" 
        value={formData.posterURL}
        onChange={(e) => setFormData({...formData, posterURL: e.target.value})} 
      />
      <input 
        type="number" min="1" max="10" 
        value={formData.rating}
        onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})} 
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;