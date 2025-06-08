import { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Guestbook from './pages/Guestbook';
import Location from './pages/Location';
import Navigation from './components/common/Navigation';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    color: #333;
    padding-bottom: 70px; /* 네비게이션 바 높이만큼 패딩 추가 */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  background: #fff;
  box-shadow: 0 0 16px rgba(0,0,0,0.04);
  border-radius: 12px;
  padding: 0 8px 80px 8px;
`;

const Section = styled.section`
  scroll-margin-top: 70px;
  min-height: 100vh;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const guestbookRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (section: string) => {
    if (section === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'gallery') galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'guestbook') guestbookRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'location') locationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Section ref={homeRef}><Home /></Section>
        <Section ref={galleryRef}><Gallery /></Section>
        <Section ref={guestbookRef}><Guestbook /></Section>
        <Section ref={locationRef}><Location /></Section>
        <Navigation onTabClick={handleTabClick} />
      </AppContainer>
    </>
  );
}

export default App;
