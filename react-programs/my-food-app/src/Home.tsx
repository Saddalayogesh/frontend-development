import "./Home.css";
import { Link } from "react-router-dom";
import { GiCarrot, GiChickenLeg, GiMilkCarton } from "react-icons/gi";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            🌿 100% Fresh • Premium Quality
          </div>

          <h1>
            Fresh <span>Products</span>
            <br />
            Delivered To Your <span>Doorstep</span>
          </h1>

          <p>
            Shop farm-fresh <strong className="veg-text">Vegetables</strong>,
            premium <strong className="nonveg-text"> Non-Veg</strong>, and pure
            <strong className="milk-text"> Dairy Products</strong> delivered
            to your home with freshness guaranteed.
          </p>

          <div className="hero-features">
            <div className="feature">🌱 Farm Fresh</div>
            <div className="feature">🚚 Fast Delivery</div>
            <div className="feature">⭐ Premium Quality</div>
            <div className="feature">🥛 Fresh Dairy</div>
          </div>

          <button className="shop-btn">🛒 Shop Now</button>

        </div>
      </section>

      {/* Category Cards */}
      <section className="menu">

        <Link to="/veg" className="menu-btn veg-card">
          <GiCarrot className="menu-icon" />
          <h2 className="card-title">Vegetables</h2>
          <p className="card-text">
            Fresh vegetables directly from farms with rich nutrition and premium quality.
          </p>
          <span className="explore-btn">Explore →</span>
        </Link>

        <Link to="/nonveg" className="menu-btn nonveg-card">
          <GiChickenLeg className="menu-icon" />
          <h2 className="card-title">Non Veg</h2>
          <p className="card-text">
            Premium chicken, mutton, seafood and fresh meat delivered every day.
          </p>
          <span className="explore-btn">Explore →</span>
        </Link>

        <Link to="/milk" className="menu-btn milk-card">
          <GiMilkCarton className="menu-icon" />
          <h2 className="card-title">Dairy Products</h2>
          <p className="card-text">
            Pure milk, butter, cheese, curd and healthy dairy products.
          </p>
          <span className="explore-btn">Explore →</span>
        </Link>

      </section>

    </div>
  );
}

export default Home;