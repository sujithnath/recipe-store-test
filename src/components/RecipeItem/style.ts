import styled from 'styled-components';

export const ItemInfo = styled.div`
  background-color: #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 22px 20px 10px;
  min-height: 80px;
  margin-top: -10px;
  position: relative;
`;

export const TagHolder = styled.div`
  margin: 10px 0;
`;

export const PictureHolder = styled.picture`
  border-radius: 6px;
  overflow: hidden;
  @media (min-width: 1024px) {
    min-height: 300px;
    max-height: 300px;
  }
  @media (max-width: 1024px) {
    min-height: 200px;
    max-height: 200px;
  }
  display: block;
`;

export const ItemHolder = styled.div`
  cursor: pointer;
  border: 1px solid #eaeaea;
  &:hover {
    box-shadow: 6px 3px 13px rgba(0, 0, 0, 0.1);
  }
`;
