import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #666;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>우리의 결혼식에 초대합니다</Title>
      <SubTitle>2024년 00월 00일</SubTitle>
      {/* 여기에 추가 컨텐츠가 들어갈 예정입니다 */}
    </HomeContainer>
  );
};

export default Home; 