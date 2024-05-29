import styled from "styled-components";
import {themes} from "../../themes/default"

export const DivReviewCardContainer = styled.div`
  padding: 1rem;
  background: ${themes.colors.gray4};
  position: relative;
  z-index: 9;
  transition: all 0.3s ease-out;
  cursor: initial;
  border-radius: 10px;
  &:hover {
    transform: translateY(-7px);
  }
`;

export const DivCardHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const DivProfileWrapper = styled.div`
  flex: 1;
`;

export const ImgProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
`;

export const DivNameBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PName = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const ImgLogo = styled.img`
  width: 20px;
`;

export const PReviewDate = styled.p`
  color: ${themes.colors.gray1};
  font-size: 0.8rem;
  font-weight: 300;
`;

export const DivStarsWrapper = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  .star-icon {
    color: ${themes.colors.gray2};
    &.active {
      color: ${themes.colors.yellow};
    }
  }
  .verify-icon {
    font-size: 1.1rem;
    margin-left: 5px;
    color: ${themes.colors.gray1};
  }
`;

export const PReviewText = styled.p`
  height: 82px;
  overflow-y: auto;
  font-weight: 300;
  line-height: 1.5;
  padding-right: 1rem;
  font-size: 0.9rem;
`;
