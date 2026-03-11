import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchinput] = useState("");

  const navigate = useNavigate();

  // navigate to product component
  const gotoproduct = (obj) => {
    navigate("/productobj", { state: { productobj: obj } });
  };

  // filter products using search input
  const filteredproduct = products.filter((obj) =>
    obj.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        let res = await fetch("https://fakestoreapi.com/products?limit=20");

        if (res.status === 200) {
          let productsData = await res.json();
          setProducts(productsData);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading === true) {
    return <p className="text-red-500 text-center text-2xl">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-center text-2xl">{error.message}</p>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="items-center text-center mt-6">
        <input
          type="search"
          placeholder="Search by category..."
          value={searchInput}
          onChange={(e) => setSearchinput(e.target.value)}
          className="border p-2 rounded w-64"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center mt-10">
        {filteredproduct.map((obj) => {
          return (
            <div
              onClick={() => gotoproduct(obj)}
              key={obj.id}
              className="cursor-pointer"
            >
              <img
                src={obj.image}
                alt=""
                className="h-44 object-contain block mx-auto mb-10"
              />
              <p>{obj.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

