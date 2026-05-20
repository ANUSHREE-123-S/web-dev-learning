import { useState, useEffect } from "react";
import { getUsers } from "./services/userService";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    

        async function fetchUsers() {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                setError("Something went wrong");
            } finally {
                setLoading(false);
            }
        }
      useEffect(() => {

        fetchUsers();

    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <button onClick={fetchUsers}>
                Refresh Users
            </button>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default App;