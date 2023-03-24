import React, { useState } from "react";



function Images() {
  const [images, setImages] = useState([]);
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImages((prevImages) => [...prevImages, reader.result]);
    };
  };

  const handleDelete = (index) => {
    setImages((prevImages) =>
      prevImages.filter((image, i) => i !== index)
    );
  };

  return (
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      <div className="upload-container">
        <label htmlFor="file-upload" className="upload-label">
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleUpload}
        />
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index}`} />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Images