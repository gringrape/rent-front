import { useLayoutEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';

import {
  LEFT_ARROW_ICON, HOME_ICON_INACTIVE, THREE_DOT_ICON, UPLOAD_ICON, HEART_INACTIVE,
} from '../../assets';

import { useProduct } from '../hooks';

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  background-color: white;
`;

const Navigation = styled.nav`
  padding: 19px 16px;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
  }
`;

const RightIcons = styled.div`
  display: flex;
  gap: 29px;
`;

const Container = styled.div`
  margin-top: 59px;
  padding: 0 16px;
  padding-top: 3px;
  padding-bottom: 60px;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
`;

const TitleBlock = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 18px;
  line-height: 21px;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & > span {
    font-size: 12px;
    line-height: 14px;
  }
`;

const SubBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  .price-block {
    display: inline-block;
    padding: 3px;
    color: white;
    background-color: #ff5800;
    border-radius: 3px;

    .deposit {
      margin-right: 12px;
    }

    .price {
      margin-left: 12px;
      font-weight: bold;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 5px;
  border-bottom: 1px solid black;

  span {
    font-size: 10px;
    line-height: 18px;
  }
`;

const Description = styled.p`
  margin-top: 40px;
`;

const FloatButtonContainer = styled.div`
    padding: 0 16px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    background-color: white;
  
    button {
      width: 100%;
      padding: 14px 0;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: none;
      background-color: #FF5800;
      color: white;
      font-size: 18px;
      line-height: 21px;
      font-weight: bold;
    }
  `;

export default function ProductItemPage() {
  const { id } = useParams<{ id: string }>();
  const { product, loadProduct } = useProduct();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (id) {
      loadProduct(id);
    }
  }, []);

  const {
    name,
    description,
    deposit,
    price,
    images,
    tags,
  } = product;

  const handleClickGoBack = () => {
    navigate(-1);
  };

  const handleClickHome = () => {
    navigate('/');
  };

  if (!product.images) {
    return <p>loading...</p>;
  }

  return (
    <>
      <NavigationContainer>
        <Navigation>
          <button type="button" onClick={handleClickGoBack}>
            <img
              src={LEFT_ARROW_ICON}
              alt="goback"
            />
          </button>
          <RightIcons>
            <button type="button" onClick={handleClickHome}>
              <img src={HOME_ICON_INACTIVE} alt="home" />
            </button>
            <img src={UPLOAD_ICON} alt="upload" />
            <img src={THREE_DOT_ICON} alt="three-dot" />
          </RightIcons>
        </Navigation>
      </NavigationContainer>
      <Container>
        <MainImage src={images[0]} />
        <TitleBlock>
          <Title>{name}</Title>
          <Likes>
            <img src={HEART_INACTIVE} alt="heart" />
            <span>{50}</span>
          </Likes>
        </TitleBlock>
        <SubBlock>
          <p className="price-block">
            <span className="deposit">
              보증금
              {' '}
              {deposit}
              원
            </span>
            <span>|</span>
            <span className="price">
              {price}
              원/일
            </span>
          </p>
          <Tags>
            {tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </Tags>
        </SubBlock>
        <Description>{description}</Description>
        <FloatButtonContainer>
          <button type="button">
            빌리어 하기
          </button>
        </FloatButtonContainer>
      </Container>
    </>
  );
}
