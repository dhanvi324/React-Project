import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://react-project-1-00o7.onrender.com/user-api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data.message);

      setFormData({
        name: "",
        age: "",
        email: "",
      });

      navigate("/UserList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center m-10">
      <h1 className="text-2xl font-bold mb-6">Add User</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded block mx-auto"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 rounded block mx-auto"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded block mx-auto"
          required
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;