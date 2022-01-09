import styled from 'styled-components';
import { BELL_ICON, HAMBURGER_ICON, SCOPE_ICON } from '../../assets';

const Container = styled.div``;

const Block = styled.div`
  position: relative;
  padding: 19px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #FF5800;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;

const SearchIcon = styled.img`
  width: 21px;
  height: 21px;
`;

const HamburgerIcon = styled.img`
  width: 20px;
  height: 14px;
`;

const BellIcon = styled.img`
  width: 18px;
  height: 21px;
`;

const RightSideBlock = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default function Navigation({ className }: {
  className?: string;
}) {
  return (
    <Container className={className}>
      <Block>
        <SearchIcon src={SCOPE_ICON} alt="scope" />
        <Title>
          VILLIAR
        </Title>
        <RightSideBlock>
          <HamburgerIcon src={HAMBURGER_ICON} alt="hamburger" />
          <BellIcon src={BELL_ICON} alt="bell" />
        </RightSideBlock>
      </Block>
    </Container>
  );
}
