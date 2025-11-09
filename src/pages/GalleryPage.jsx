import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./GalleryPage.css"; 

function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  
  const photos = [
    {
      src: "https://cdn0-production-images-kly.akamaized.net/msy8OctlAp0x0F83cSb8558rSU4=/1x16:1000x579/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3386754/original/012310700_1614242493-shutterstock_1688670580.jpg",
    },
    {
      src: "https://akcdn.detik.net.id/visual/2021/05/17/ayam-bakar-padang_169.jpeg?w=750&q=90",
    },
    {
      src: "https://katasumbar.com/wp-content/uploads/2022/06/043061400_1600750232-shutterstock_1786027046.webp",
    },
    {
      src: "https://buckets.sasa.co.id/v1/AUTH_Assets/Assets/p/website/medias/page_medias/Screen_Shot_2021-11-29_at_16_40_14.png",
    },
    {
      src: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/995/2025/01/25/Resep-Gulai-Kepala-Ikan-3868526217.jpg",
    },
    {
      src: "https://3.bp.blogspot.com/-YAqU5JO3sAo/XL56umIAsiI/AAAAAAAAFmo/_frpLhy7wa8S7AXlXexd5vkiBUJwy_pUgCK4BGAYYCw/s1600/resep-paru-goreng.JPG",
    },
    {
      src: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/247/2025/05/06/Gulai-Cincang-1625896331.jpg",
    },
    {
      src: "https://asset.kompas.com/crops/T-xKoNscDfJL6D9yvC9pPpd4YnI=/0x333:1000x1000/1200x800/data/photo/2020/08/02/5f26b02a99288.jpg",
    },
    {
      src: "https://pict.sindonews.net/dyn/732/pena/news/2020/11/12/185/229188/bingung-makan-apa-siang-ini-bikin-aja-ikan-pindang-asam-padeh-fkg.jpg",
    },
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
            Lihat lebih dekat kelezatan masakan kami dan suasana hangat di
            Padang Delights.
          </p>

          <Row xs={1} sm={2} lg={3} className="g-4">
            {photos.map((photo, idx) => (
              <Col
                key={idx}
                onClick={() => handleImageClick(idx)}
                className="gallery-col"
              >
                <Image
                  src={photo.src}
                  thumbnail
                  fluid
                  className="gallery-thumbnail"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

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
