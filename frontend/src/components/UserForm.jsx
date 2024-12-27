import React, { useState } from 'react';

function UserForm({ fetchUsers }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, edad }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      await response.json();
      fetchUsers(); // Llama a fetchUsers después de agregar el nuevo usuario
      setNombre('');
      setApellido('');
      setEdad('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={nombre}
          name="nombre"
          // autoComplete="name"
          required
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input 
          type="text" 
          value={apellido}
          name="apellido"
          // autoComplete="name"
          required
          onChange={(e) => setApellido(e.target.value)} 
        />
      </div>
      <div>
        <label>Edad:</label>
        <input 
          type="number" 
          value={edad}
          name="edad"
          // autoComplete="bday"
          required
          onChange={(e) => setEdad(e.target.value)} 
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default UserForm;