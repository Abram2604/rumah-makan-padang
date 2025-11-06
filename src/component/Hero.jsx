import React, { useState } from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const slides = [
    {
      image: "/images/image.png",
      subtitle: "RUMAH MAKAN PADANG TERBAIK",
      title: "Masakan Asli dari<br/>Dapur Minang<br/>Terbaik",
    },
    {
      image: "/images/nasi.jpg",
      subtitle: "RESEP WARISAN LELUHUR",
      title: "Rasa Otentik<br/>Turun Temurun<br/>Sejak Dulu",
    },
    {
      image: "/images/Nasi-Padang.jpg",
      subtitle: "BAHAN-BAHAN KUALITAS TERBAIK",
      title: "Selalu Segar<br/>Setiap Hari<br/>Untuk Anda",
    },
  ];

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={3000}
        controls={false}
        indicators={true}
        className="hero-carousel"
      >
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div
              className="carousel-image-container"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <Carousel.Caption className="hero-caption">
              <Container>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <h1
                  className="hero-title"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <Button
                  as={NavLink}
                  to="/contact"
                  variant="warning"
                  size="lg"
                  className="hero-button"
                >
                  Pesan Sekarang
                </Button>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Pindahkan social icons keluar dari Carousel supaya bukan dianggap slide */}
      <div className="social-icons">
        <a href="#twitter">
          <FaTwitter />
        </a>
        <a href="#instagram">
          <FaInstagram />
        </a>
        <a href="#linkedin">
          <FaLinkedinIn />
        </a>
      </div>
    </>
  );
}

export default Hero;
