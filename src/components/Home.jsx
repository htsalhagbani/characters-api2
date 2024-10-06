import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchCharacters = async () => {
            const response = await fetch('https://66e7e69db17821a9d9da6ed1.mockapi.io/Blog');
            const data = await response.json();
            setCharacters(data);
        };

    useEffect(() => {
        fetchCharacters();
    }, []);

    const onDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this character?');
        if (!confirmDelete) return;
            await fetch(`https://66e7e69db17821a9d9da6ed1.mockapi.io/Blog/${id}`, {
                method: 'DELETE',
            });
            fetchCharacters(); 
    };

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
   
   <header className="flex flex-col mb-6 bg-gradient-to-r from-[lightgray] to-blue-800 p-6 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-white mb-4 text-center">Character Gallery</h1>
    
    <div className="flex items-center justify-center mb-4">
        <label htmlFor="search" className="text-white text-3xl mr-3 ">Search :</label>
        <input
            id="search"
            type="text"
            placeholder="Type character name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    <div className="flex justify-center">
        <Link to="/add" className="bg-[darkblue] text-white font-semibold p-3 rounded-lg shadow-md hover:bg-blue-50 hover:text-[darkblue] transition duration-300 flex items-center">
            Add New Character
        </Link>
    </div>
</header>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
    {filteredCharacters.length > 0 ? (
        filteredCharacters.map(character => (
            <div key={character.id} className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4 bg-white">
                <img src={character.image} alt='image' className="w-full h-48  rounded mb-2" />
                <h2 className="text-xl font-semibold mb-1 text-gray-800">{character.name}</h2>
                <p className="text-gray-600">{character.gender}</p>
                <button
                    onClick={() => onDelete(character.id)}
                    className="bg-red-600 text-white p-2 rounded-lg mt-2 hover:bg-red-700 transition duration-300 shadow-md"
                >
                    Delete
                </button>
            </div>
        ))
    ) : (
        <p className="text-center text-gray-700">Oops ! no character found.</p>
    )}
</div>

        </>
    );
}

export default Home;
