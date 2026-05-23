import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://react-project-1-00o7.onrender.com/user-api/users"
      );

      console.log("STATUS:", response.status);

      const data = await response.json();

      console.log("DATA:", data);

      setUsers(data.payload || []);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold mb-4">User List</h2>

      {users.length === 0 ? (
        <p>No users added yet</p>
      ) : (
        <table className="border-collapse border w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.age}</td>
                <td className="border p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
