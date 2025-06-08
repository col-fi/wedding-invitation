import styled from 'styled-components';
import { useState } from 'react';

const GalleryContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const GalleryTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const images = [
  {
    src: '/images/gallery/wedding1.jpeg',
    alt: '웨딩 포토 1'
  },
  {
    src: '/images/gallery/wedding2.jpeg',
    alt: '웨딩 포토 2'
  }
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <GalleryContainer>
      <GalleryTitle>우리의 소중한 순간들</GalleryTitle>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', position: 'relative' }}>
        <button onClick={goPrev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', fontSize: 32, background: 'none', border: 'none', color: '#888', cursor: 'pointer', zIndex: 2 }}>&lt;</button>
        <img
          src={images[current].src}
          alt={images[current].alt}
          style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', background: '#000', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        />
        <button onClick={goNext} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: 32, background: 'none', border: 'none', color: '#888', cursor: 'pointer', zIndex: 2 }}>&gt;</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: 16, color: '#888' }}>{current + 1} / {total}</div>
    </GalleryContainer>
  );
};

export default Gallery; 