import React, { useState } from "react";

function NewMovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newMovie = {
      title: formData.title,
      releaseDate: formData.releaseDate,
      image: formData.image,
    };
    onAddMovie(newMovie);
    setFormData({ title: "", releaseDate: "", image: "" });
  }

  return (
    <section className="form-section">
      <form className="NewMovie" onSubmit={handleSubmit}>
        <legend className="title">Add Movie</legend>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </label>

        <label>
          Release Date:
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={(e) => setFormData({...formData, releaseDate: e.target.value})}
            required
          />
        </label>

        <label>
          Image URL:
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            required
          />
        </label>

        <button type="submit">Add Movie</button>
      </form>
    </section>
  );
}

export default NewMovieForm;