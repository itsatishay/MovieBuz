import styled from 'styled-components';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("https://www.joblo.com/wp-content/uploads/2014/09/interstellar-banner-1.jpg");
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: 70px;
  }
`;
export const FeatureButton = styled.button`
  margin-top: 5rem;
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #FF0000;
  color: #FFF;
  font-weight: bold;
  transition: 0.2s ease-out;

  &:hover {
    color: #000;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
