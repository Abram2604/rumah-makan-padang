import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard.jsx";
import "./BestSeller.css";

function BestSeller() {
  // Data produk (nanti bisa diambil dari API)
  const products = [
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
      image: "./images/ikan.jpg",
      title: "Ikan Goreng",
      price: "Rp 12.000",
      rating: 5,
    },
    {
      id: 4,
      image: "./images/telur.jpg",
      title: "Telur Dadar",
      price: "Rp 10.000",
      rating: 4,
    },
  ];

  return (
    <section className="bestseller-section">
      <Container>
        <h2 className="section-title">Produk Terlaris Minggu Ini!</h2>
        <p className="section-subtitle">
          Cicipi hidangan favorit pelanggan kami yang disajikan dengan bumbu
          otentik dan resep turun-temurun, menghadirkan cita rasa Padang asli ke
          meja Anda.
        </p>

        {/* Membuat Grid untuk Produk */}
        <Row xs={1} md={2} lg={4} className="g-4">
          {/* `xs={1}`: 1 kolom di layar extra small */}
          {/* `md={2}`: 2 kolom di layar medium */}
          {/* `lg={4}`: 4 kolom di layar large */}
          {/* `g-4`: gap (jarak) antar kolom sebesar 4 unit */}

          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BestSeller;
