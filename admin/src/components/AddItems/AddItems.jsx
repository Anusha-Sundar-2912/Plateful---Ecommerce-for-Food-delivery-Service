import React, { useState } from 'react';
import axios from 'axios';
import { FiUpload, FiHeart, FiStar } from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';
import AdminNavbar from '../Navbar/Navbar';
import { styles } from '../../assets/dummyadmin';

const AddItems = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    rating: 0,
    hearts: 0,
    total: 0,
    image: null,
    preview: ''
  });

  const [categories] = useState([
    'Breakfast',
    'Lunch',
    'Dinner',
    'Mexican',
    'Italian',
    'Desserts',
    'Drinks'
  ]);

  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file)
      }));
    }
  };

  const handleRating = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating
    }));
  };

  const handleHearts = () => {
    setFormData((prev) => ({
      ...prev,
      hearts: prev.hearts + 1
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('API URL:', import.meta.env.VITE_API_URL);

      const payload = new FormData();

      payload.append('name', formData.name);
      payload.append('description', formData.description);
      payload.append('category', formData.category);
      payload.append('price', formData.price);
      payload.append('rating', formData.rating);
      payload.append('hearts', formData.hearts);

      if (formData.image) {
        payload.append('image', formData.image);
      }

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/items`,
        payload
      );

      console.log('Created Item:', res.data);

      alert('Item Added Successfully');

      setFormData({
        name: '',
        description: '',
        category: '',
        price: '',
        rating: 0,
        hearts: 0,
        total: 0,
        image: null,
        preview: ''
      });

    } catch (err) {
      console.error('Error uploading item:', err);
      alert('Upload Failed');
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className={styles.formWrapper}>
        <div className="max-w-4xl mx-auto">
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Add New Menu Item</h2>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

              <div className={styles.uploadWrapper}>
                <label className={styles.uploadLabel}>
                  {formData.preview ? (
                    <img
                      src={formData.preview}
                      alt="Preview"
                      className={styles.previewImage}
                    />
                  ) : (
                    <div className="text-center p-4">
                      <FiUpload className={styles.uploadIcon} />
                      <p className={styles.uploadText}>
                        Click to upload product image
                      </p>
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* rest of your JSX unchanged */}

              <button
                type="submit"
                className={styles.actionBtn}
              >
                Add to Menu
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;