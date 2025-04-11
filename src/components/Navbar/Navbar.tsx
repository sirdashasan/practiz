import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

interface Category {
  id: number;
  name: string;
}

interface SubCategory {
  id: number;
  name: string;
  categoryId: number;
}

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, subRes] = await Promise.all([
          axios.get("http://localhost:8080/practiz/api/categories"),
          axios.get("http://localhost:8080/practiz/api/subcategories"),
        ]);
        setCategories(catRes.data);
        setSubCategories(subRes.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">🧠 Praktiz</div>

      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          Kategoriler ↓
        </div>

        {showDropdown && (
          <ul className="dropdown-menu">
            {categories.map((category) => (
              <div key={category.id}>
                <li className="dropdown-item">{category.name}</li>
                {subCategories
                  .filter((sub) => sub.categoryId === category.id)
                  .map((sub) => (
                    <li key={sub.id} className="dropdown-item-sub">
                      {sub.name}
                    </li>
                  ))}
              </div>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
