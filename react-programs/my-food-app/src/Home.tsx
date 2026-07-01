import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>My Food App</h1>

      <Link to="/veg">Veg Items</Link>
      <br />
      <br />

      <Link to="/nonveg">NonVeg Items</Link>
      <br />
      <br />

      <Link to="/milk">Milk Items</Link>
    </div>
  );
}

export default Home;