import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';

const App = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchUsers(); // Actualiza la lista de usuarios después de eliminar
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <UserForm fetchUsers={fetchUsers} />
            {error && <p>Error: {error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.nombre} - {user.apellido} - {user.edad}
                        <button onClick={() => deleteUser(user._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;