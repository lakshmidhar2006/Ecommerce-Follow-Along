import React, { useState } from 'react';

function CreateProduct() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);

  const categoryData = [
    { title: 'Fashion' },
    { title: 'Electronics' },
    { title: 'Stationary' },
    { title: 'Home Appliance' },
    {title:'tikka manvitha'}
  ];

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImage((prev) => [...prev, ...newPreviews]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Product</h1>

      <form className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Name & Price in Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Product name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Product price"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write a brief product description..."
            rows={4}
          />
        </div>

        {/* Stock & Category in Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Available stock"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              {categoryData.map((cat, index) => (
                <option key={index} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Upload Images</label>
          <input type="file" multiple onChange={handleImage} className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        {/* Preview Images */}
        {previewImage.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-700 font-medium mb-2">Image Previews</p>
            <div className="grid grid-cols-3 gap-4">
              {previewImage.map((src, index) => (
                <img key={index} src={src} alt="Preview" className="w-full h-24 object-cover rounded-lg shadow-md border border-gray-200" />
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg w-full text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
