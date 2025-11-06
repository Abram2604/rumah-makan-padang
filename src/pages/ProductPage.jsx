import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard.jsx";
// Ganti nama file CSS yang diimpor
import "./ProductPage.css";

// Ganti nama fungsinya
function ProductPage() {
  const menuItems = [
    {
      id: 1,
      image:
        "https://katasumbar.com/wp-content/uploads/2022/06/043061400_1600750232-shutterstock_1786027046.webp",
      title: "Rendang Sapi",
      price: "Rp 13.000",
      rating: 5,
    },
    {
      id: 2,
      image:
        "https://buckets.sasa.co.id/v1/AUTH_Assets/Assets/p/website/medias/page_medias/Screen_Shot_2021-11-29_at_16_40_14.png",
      title: "Ayam Pop",
      price: "Rp 12.000",
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/247/2025/05/06/Gulai-Cincang-1625896331.jpg",
      title: "Gulai Cincang",
      price: "Rp 12.000",
      rating: 5,
    },
    {
      id: 4,
      image:
        "https://asset.kompas.com/crops/T-xKoNscDfJL6D9yvC9pPpd4YnI=/0x333:1000x1000/1200x800/data/photo/2020/08/02/5f26b02a99288.jpg",
      title: "Dendeng Balado",
      price: "Rp 10.000",
      rating: 4,
    },
    {
      id: 5,
      image:
        "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/03/Resep-Gulai-tunjang.jpg?fit=500%2C500&ssl=1",
      title: "Gulai Tunjang",
      price: "Rp 13.000",
      rating: 4,
    },
    {
      id: 6,
      image:
        "https://akcdn.detik.net.id/visual/2021/05/17/ayam-bakar-padang_169.jpeg?w=750&q=90",
      title: "Ayam Bakar",
      price: "Rp 8.000",
      rating: 5,
    },
    {
      id: 7,
      image:
        "https://pict.sindonews.net/dyn/732/pena/news/2020/07/04/185/90120/tips-mudah-bikin-gulai-nangka-padang-ext.jpg",
      title: "Sayur Nagka",
      price: "Rp 5.000",
      rating: 4,
    },
    {
      id: 8,
      image:
        "https://pict.sindonews.net/dyn/732/pena/news/2020/11/12/185/229188/bingung-makan-apa-siang-ini-bikin-aja-ikan-pindang-asam-padeh-fkg.jpg",
      title: "Ikan Asam Padeh",
      price: "Rp 12.000",
      rating: 5,
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

        <Row xs={1} sm={2} lg={4} className="g-4">
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
