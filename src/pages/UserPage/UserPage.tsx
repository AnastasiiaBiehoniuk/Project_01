import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
};

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading user...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mb-4" />
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default UserPage;