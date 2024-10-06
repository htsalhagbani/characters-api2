import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: 'male',
        image: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const characterData = {
            name: formData.name,
            gender: formData.gender,
            image: formData.image, // Directly use the image URL
        };

        try {
            const response = await fetch('https://66e7e69db17821a9d9da6ed1.mockapi.io/Blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(characterData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Character added:', data);
                navigate('/'); 
            } else {
                console.error('Failed to add character:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding character:', error);
        }
    };

    return (
        <div className='flex justify-center items-center bg-[lightblue] w-full h-screen'>
        <div className=" md:w-[50%]  max-sm:w-full p-6 border bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[darkblue]">Add New Character</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-[darkblue] font-bold">Character Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-[darkblue] font-bold">Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-2"
                    >
                        <option value="male">Male</option>
                        <option value="female ">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-[darkblue] font-bold">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        className="border rounded-lg w-full p-2"
                        required
                    />
                </div>
                {formData.image && (
                    <div className="mb-4">
                        <img src={formData.image} alt="downimage" className="w-full h-48  rounded mb-2" />
                    </div>
                )}
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Add Character
                </button>
            </form>
        </div>
        </div>
    );
};

export default Add;
