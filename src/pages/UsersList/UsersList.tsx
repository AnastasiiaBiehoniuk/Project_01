import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">
              {user.name} ({user.email})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;