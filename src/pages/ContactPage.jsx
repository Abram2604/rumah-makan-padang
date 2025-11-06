import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactPage.css'; // Pastikan file CSS ini diimpor

function ContactPage() {
  return (
    <div className="contact-bg"> {/* Ganti <section> dengan <div> */}
      <Container className="contact-container">
        <div className="text-center mb-5">
          <h2 className="contact-title">Hubungi Kami</h2>
          <p className="contact-subtitle">
            Punya pertanyaan, kritik, atau saran? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <Row>
          <Col lg={5} md={12} className="mb-5 mb-lg-0">
            <h3 className="info-title">Informasi Kontak</h3>
            <div className="info-block">
              <p><strong>Alamat:</strong>Jl. Imanan Residence, Serang, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530</p>
              <p><strong>Telepon:</strong> +62 812-1234-5678</p>
              <p><strong>Email:</strong> info@rmputrisulung.com</p>
            </div>
            <h3 className="info-title mt-4">Jam Buka</h3>
            <div className="info-block">
              <p><strong>Senin - Jumat:</strong> 10:00 - 22:00</p>
              <p><strong>Sabtu - Minggu:</strong> 09:00 - 23:00</p>
            </div>

          </Col>

          {/* ========== KOLOM KANAN: FORM ========== */}
          <Col lg={7} md={12}>
            <Form className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Nama Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Email Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" rows={6} placeholder="Pesan Anda" />
              </Form.Group>
              
              <Button variant="warning" type="submit" className="submit-button">
                Kirim Pesan
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;