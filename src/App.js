import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards--list">{cards}</section>
      <Footer />;
    </div>
  );
}
