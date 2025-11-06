import { Container, Row, Col, Card } from 'react-bootstrap';
// Impor ikon yang kita butuhkan
import { FaUtensils, FaShoppingBag, FaStar } from 'react-icons/fa';
import './ServicesPage.css'; // Impor CSS kita

function ServicesPage() {
  // Data untuk setiap layanan. Ini membuat kode lebih bersih dan mudah dikelola.
  const services = [
    {
      icon: <FaUtensils className="service-icon" />,
      title: "Makan di Tempat",
      description: "Nikmati suasana nyaman dan pelayanan ramah di restoran kami. Sempurna untuk makan bersama keluarga dan teman."
    },
    {
      icon: <FaShoppingBag className="service-icon" />,
      title: "Bawa Pulang",
      description: "Sibuk? Bawa pulang kelezatan Padang Delights. Kami pastikan pesanan Anda dikemas dengan cepat dan rapi."
    },
    {
      icon: <FaStar className="service-icon" />,
      title: "Katering Acara",
      description: "Meriahkan acara spesial Anda dengan hidangan istimewa dari kami. Siap melayani untuk berbagai acara besar maupun kecil."
    }
  ];

  return (
    <section className="services-section">
      <Container>
        <h2 className="section-title">Layanan Kami</h2>
        <p className="section-subtitle">
          Kami menyediakan berbagai layanan untuk memenuhi kebutuhan kuliner Anda, baik di restoran maupun di lokasi Anda.
        </p>

        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col key={index}>
              <Card className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <Card.Body>
                  <Card.Title as="h3">{service.title}</Card.Title>
                  <Card.Text>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default ServicesPage;