import "./NonVeg.css";
import { toast } from "react-toastify";

function NonVeg() {
  const addToCart = (item: string) => {
    toast.success(`${item} added to cart 🛒`);
  };

  return (
    <div className="nonveg-container">
      <h1>🍗 Fresh Non-Veg Items</h1>

      {/* First Row */}
      <div className="nonveg-row">
        {/* Chicken */}
        <div className="nonveg-card">
          <img src="/images/Nonveg/chicken.jpg" alt="Chicken" />
          <h3>Chicken</h3>
          <p className="description">
            Farm fresh chicken rich in protein and taste.
          </p>

          <div className="card-footer">
            <span className="price">₹220/kg</span>
            <button onClick={() => addToCart("Chicken")}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Mutton */}
        <div className="nonveg-card">
          <img src="/images/Nonveg/mutton.jpg" alt="Mutton" />
          <h3>Mutton</h3>
          <p className="description">
            Premium quality fresh mutton for delicious meals.
          </p>

          <div className="card-footer">
            <span className="price">₹750/kg</span>
            <button onClick={() => addToCart("Mutton")}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tuna */}
        <div className="nonveg-card">
          <img src="/images/Nonveg/tuna.jpg" alt="Tuna Fish" />
          <h3>Tuna Fish</h3>
          <p className="description">
            Fresh tuna fish packed with healthy omega-3.
          </p>

          <div className="card-footer">
            <span className="price">₹420/kg</span>
            <button onClick={() => addToCart("Tuna Fish")}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="nonveg-row second-row">
        {/* Prawns */}
        <div className="nonveg-card">
          <img src="/images/Nonveg/prawns.jpg" alt="Prawns" />
          <h3>Prawns</h3>
          <p className="description">
            Fresh prawns directly sourced from the coast.
          </p>

          <div className="card-footer">
            <span className="price">₹550/kg</span>
            <button onClick={() => addToCart("Prawns")}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Crab */}
        <div className="nonveg-card">
          <img src="/images/Nonveg/crab.jpg" alt="Crab" />
          <h3>Crab</h3>
          <p className="description">
            Fresh crab with rich flavor and premium quality.
          </p>

          <div className="card-footer">
            <span className="price">₹680/kg</span>
            <button onClick={() => addToCart("Crab")}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonVeg;