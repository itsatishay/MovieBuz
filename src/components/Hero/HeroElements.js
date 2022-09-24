import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("https://wallpaperaccess.com/full/5485715.jpg");
  height: 80vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
`;

export const HeroH1 = styled.h1`
  font-size: 70px;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: 20px;
  margin-bottom: 2rem;
  margin-left: 5px;
`;
