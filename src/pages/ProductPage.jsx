import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard.jsx";
// Ganti nama file CSS yang diimpor
import "./ProductPage.css";

// Ganti nama fungsinya
function ProductPage() {
  const menuItems = [
    {
      id: 1,
      image: "./images/rendang.jpg",
      title: "Rendang Sapi",
      price: "Rp 15.000",
      rating: 5,
    },
    {
      id: 2,
      image: "./images/ayam.jpg",
      title: "Ayam Goreng",
      price: "Rp 12.000",
      rating: 5,
    },
    {
      id: 3,
      image: "./images/perkedel.jpg",
      title: "Perkedel",
      price: "Rp 10.000",
      rating: 4,
    },
    {
      id: 4,
      image: "./images/ikan.jpg",
      title: "Ikan Goreng",
      price: "Rp 12.000",
      rating: 5,
    },
    {
      id: 5,
      image: "./images/telur.jpg",
      title: "Telur Dadar",
      price: "Rp 10.000",
      rating: 4,
    },
    {
      id: 6,
      image: "./images/terong.jpg",
      title: "Terong Balado",
      price: "Rp 10.000",
      rating: 4,
    },
  ];

  return (
    // Ganti className section jika perlu, tapi ini opsional
    <section className="product-section">
      <Container>
        <h2 className="section-title">Jelajahi Menu Lengkap Kami</h2>
        <p className="section-subtitle">
          Dari rendang legendaris hingga gulai yang menggugah selera, temukan
          hidangan favorit Anda di sini.
        </p>

        <Row xs={1} sm={2} lg={3} className="g-5">
          {menuItems.map((item) => (
            <Col key={item.id}>
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

// Jangan lupa ganti nama di export
export default ProductPage;
