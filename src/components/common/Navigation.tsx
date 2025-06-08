import styled from 'styled-components';

interface NavigationProps {
  onTabClick: (section: 'home' | 'gallery' | 'guestbook' | 'location') => void;
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  flex: 1;
  text-align: center;
`;

const NavButton = styled.button<{ $isActive?: boolean }>`
  width: 100%;
  height: 60px;
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ $isActive }) => ($isActive ? '#4a90e2' : '#666')};
  font-size: 0.8rem;
  transition: color 0.2s;
  cursor: pointer;
  position: relative;
`;

// 아이콘 크기 고정
const Icon = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

const Navigation = ({ onTabClick }: NavigationProps) => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavButton onClick={() => onTabClick('home')}>
            <Icon>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </Icon>
            홈
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => onTabClick('gallery')}>
            <Icon>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            </Icon>
            갤러리
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => onTabClick('guestbook')}>
            <Icon>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
            </Icon>
            방명록
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => onTabClick('location')}>
            <Icon>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </Icon>
            오시는 길
          </NavButton>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation; 