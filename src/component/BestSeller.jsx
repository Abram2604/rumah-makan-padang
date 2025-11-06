import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';
import './BestSeller.css';

function BestSeller() {
  // Data produk (nanti bisa diambil dari API)
  const products = [
    { id: 1, image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/31040437/ini-resep-bumbu-rendang-daging-sapi-untuk-acara-spesial.jpg', title: 'Rendang Sapi', price: 'Rp 13.000', rating: 5 },
    { id: 2, image: 'https://buckets.sasa.co.id/v1/AUTH_Assets/Assets/p/website/medias/page_medias/Screen_Shot_2021-11-29_at_16_40_14.png', title: 'Ayam Pop', price: 'Rp 12.000', rating: 5 },
    { id: 3, image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/247/2025/05/06/Gulai-Cincang-1625896331.jpg', title: 'Gulai Cincang', price: 'Rp 12.000', rating: 5 },
    { id: 4, image: 'https://asset.kompas.com/crops/T-xKoNscDfJL6D9yvC9pPpd4YnI=/0x333:1000x1000/1200x800/data/photo/2020/08/02/5f26b02a99288.jpg', title: 'Dendeng Balado', price: 'Rp 10.000', rating: 4 },
  ];

  return (
    <section className="bestseller-section">
      <Container>
        <h2 className="section-title">Produk Terlaris Minggu Ini!</h2>
        <p className="section-subtitle">
          Cicipi hidangan favorit pelanggan kami yang disajikan dengan bumbu otentik dan resep turun-temurun, menghadirkan cita rasa Padang asli ke meja Anda.
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