import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutPage.css'; // Impor file CSS yang baru kita buat

function AboutPage() {
  return (
    <section className="about-section">
      <Container>
        {/* `align-items-center`: Membuat kedua kolom sejajar di tengah secara vertikal */}
        <Row className="align-items-center">
          
          {/* Kolom Kiri untuk Teks */}
          {/* `lg={6}`: Di layar besar, kolom ini akan memakan 6 dari 12 grid (setengah layar) */}
          {/* `md={12}`: Di layar medium, kolom ini akan memakan 12 grid (lebar penuh) */}
          {/* `mb-4 mb-lg-0`: Memberi margin-bottom 4, tapi dihilangkan di layar besar */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <p className="about-subtitle">TENTANG KAMI</p>
            <h2 className="about-title">Kisah Dibalik Rasa Otentik RM Putri Sulung</h2>
            <p className="about-text">
              Berawal dari kecintaan kami terhadap masakan Minang yang kaya akan rempah dan rasa, <b>RM Putri Sulung</b> lahir untuk menyajikan hidangan otentik yang diwariskan dari generasi ke generasi. Kami berkomitmen untuk menggunakan bahan-bahan segar berkualitas terbaik dan resep asli untuk menghadirkan pengalaman kuliner yang tak terlupakan bagi Anda.
            </p>
            <p className="about-text mt-3">
              Setiap hidangan di Padang Delights adalah cerminan dari dedikasi dan passion kami dalam melestarikan warisan kuliner Nusantara. Selamat menikmati!
            </p>
          </Col>
          
          {/* Kolom Kanan untuk Gambar */}
          {/* `lg={6}`: Di layar besar, kolom ini juga memakan setengah layar */}
          {/* `md={12}`: Di layar medium, kolom ini juga akan menjadi lebar penuh dan berada di bawah teks */}
          <Col lg={6} md={12}>
            {/* Ganti dengan URL gambar Anda sendiri */}
            <Image 
              src="/images/abang2.jpg"
              alt="Pemilik Padang Delights" 
              className="about-image"
              fluid 
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default AboutPage;