import styled from 'styled-components';

export const Information = styled.div`
  background-color: #fff;
  padding: 30px;
  z-index: 1;
  margin: -22px 0 100px 0;
  position: relative;
  & h3 {
    margin-bottom: 40px;
  }
  & h4 {
    padding-bottom: 10px;
  }
`;

export const PictureHolder = styled.picture`
  border-radius: 6px;
  overflow: hidden;
  margin-top: 20px;
  display: block;
  img {
    width: 100%;
  }
  @media (min-width: 1024px) {
    min-height: 442px;
    max-height: 442px;
  }
`;

export const ItemDescription = styled.p`
  font-weight: 100;
  line-height: 30px;
`;

export const TagHolder = styled.div`
  margin: 30px 0;
`;

export const ChefInfo = styled.div`
  display: flex;
  border-top: 1px solid #dadad9;
  margin-top: 30px;
  padding-top: 30px;
  align-items: center;
  padding-top: 30px;
  justify-content: center;
  & img {
    margin-right: 12px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  & ul li {
    list-style: none;
    margin-bottom: 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
