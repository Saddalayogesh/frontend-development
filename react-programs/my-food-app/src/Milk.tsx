import "./Milk.css";
import { toast } from "react-toastify";

function Milk() {
  const addToCart = (item: string) => {
    toast.success(`${item} added to cart 🛒`);
  };

  return (
    <div className="milk-container">
      <h1>🥛 Fresh Dairy Products</h1>

      {/* First Row */}
      <div className="milk-row">
        {/* Milk */}
        <div className="milk-card">
          <img src="/images/Milk/milk.jpg" alt="Milk" />
          <h3>Milk</h3>
          <p className="description">
            Fresh farm milk rich in calcium and nutrition.
          </p>

          <div className="card-footer">
            <span className="price">₹60/L</span>
            <button onClick={() => addToCart("Milk")}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Curd */}
        <div className="milk-card">
          <img src="/images/Milk/curd.jpg" alt="Curd" />
          <h3>Curd</h3>
          <p className="description">
            Thick and creamy curd made from fresh milk.
          </p>

          <div className="card-footer">
            <span className="price">₹80/kg</span>
            <button onClick={() => addToCart("Curd")}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Butter */}
        <div className="milk-card">
          <img src="/images/Milk/buttur.jpg" alt="Butter" />
          <h3>Butter</h3>
          <p className="description">
            Pure butter with rich taste and smooth texture.
          </p>

          <div className="card-footer">
            <span className="price">₹250/kg</span>
            <button onClick={() => addToCart("Butter")}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="milk-row second-row">
        {/* Cheese */}
        <div className="milk-card">
          <img src="/images/Milk/cheese.jpg" alt="Cheese" />
          <h3>Cheese</h3>
          <p className="description">
            Fresh cheese perfect for sandwiches and pizza.
          </p>

          <div className="card-footer">
            <span className="price">₹450/kg</span>
            <button onClick={() => addToCart("Cheese")}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Ghee */}
        <div className="milk-card">
          <img src="/images/Milk/ghee.jpg" alt="Ghee" />
          <h3>Ghee</h3>
          <p className="description">
            Pure desi ghee made from high-quality milk.
          </p>

          <div className="card-footer">
            <span className="price">₹650/L</span>
            <button onClick={() => addToCart("Ghee")}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milk;