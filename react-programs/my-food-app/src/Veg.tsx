import "./Veg.css";
import { toast } from "react-toastify";

function Veg() {
  const addToCart = (item: string) => {
    toast.success(`${item} added to cart 🛒`);
  };

  return (
    <div className="veg-container">
      <h1>🥗 Fresh Vegetables</h1>

      {/* First Row */}
      <div className="veg-row">
        <div className="veg-card">
          <img src="images/Veg/tomato.jpg" alt="Tomato" />
          <h3>Tomato</h3>
          <p className="description">
            Fresh and juicy tomatoes directly from farms.
          </p>

          <div className="card-footer">
            <span className="price">₹40/kg</span>
            <button onClick={() => addToCart("Tomato")}>
              Add to Cart
            </button>
          </div>
        </div>

        <div className="veg-card">
          <img src="images/Veg/Potato.jpg" alt="Potato" />
          <h3>Potato</h3>
          <p className="description">
            Fresh potatoes rich in nutrients and taste.
          </p>

          <div className="card-footer">
            <span className="price">₹30/kg</span>
            <button onClick={() => addToCart("Potato")}>
              Add to Cart
            </button>
          </div>
        </div>

        <div className="veg-card">
          <img src="images/Veg/carrot.jpg" alt="Carrot" />
          <h3>Carrot</h3>
          <p className="description">
            Crunchy and healthy carrots full of vitamins.
          </p>

          <div className="card-footer">
            <span className="price">₹50/kg</span>
            <button onClick={() => addToCart("Carrot")}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="veg-row second-row">
        <div className="veg-card">
          <img src="images/Veg/onion.jpg" alt="Onion" />
          <h3>Onion</h3>
          <p className="description">
            Premium quality onions for every meal.
          </p>

          <div className="card-footer">
            <span className="price">₹35/kg</span>
            <button onClick={() => addToCart("Onion")}>
              Add to Cart
            </button>
          </div>
        </div>

        <div className="veg-card">
          <img src="images/Veg/broccoli.jpg" alt="Broccoli" />
          <h3>Broccoli</h3>
          <p className="description">
            Fresh broccoli packed with nutrition.
          </p>

          <div className="card-footer">
            <span className="price">₹80/kg</span>
            <button onClick={() => addToCart("Broccoli")}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Veg;