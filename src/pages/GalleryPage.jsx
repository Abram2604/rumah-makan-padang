import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// Impor komponen utama dari library baru
import Lightbox from "yet-another-react-lightbox";
// Impor juga CSS-nya
import "yet-another-react-lightbox/styles.css";

import './GalleryPage.css'; // Kita tetap pakai CSS ini untuk judul

function GalleryPage() {
  // State untuk mengontrol lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Data gambar. Sekarang hanya butuh 'src'.
  const photos = [
    { src: 'https://images.unsplash.com/photo-1563379926898-05f4575a457f?q=80&w=1931&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1598515214211-89d3c7373058?q=80&w=2070&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1599021430261-6927d78a8738?q=80&w=2070&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1626079739912-658155d50b73?q=80&w=2070&auto=format&fit=crop' },
    { src: 'https://images.unsplash.com/photo-1625944228741-cf3b5b1a455a?q=80&w=2070&auto=format&fit=crop' },
  ];
  
  const handleImageClick = (clickedIndex) => {
    setIndex(clickedIndex);
    setOpen(true);
  };

  return (
    <>
      <section className="gallery-section">
        <Container>
          <h2 className="section-title">Galeri Momen & Hidangan</h2>
          <p className="section-subtitle">
            Lihat lebih dekat kelezatan masakan kami dan suasana hangat di Padang Delights.
          </p>
          
          <Row xs={1} sm={2} lg={3} className="g-4">
            {photos.map((photo, idx) => (
              <Col key={idx} onClick={() => handleImageClick(idx)} className="gallery-col">
                <Image src={photo.src} thumbnail fluid className="gallery-thumbnail" />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Komponen Lightbox, hanya muncul saat `open` bernilai true */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos}
        index={index}
      />
    </>
  );
}

export default GalleryPage;