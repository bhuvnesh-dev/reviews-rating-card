import './App.css';
import styled from "styled-components";
import { reviews } from './utils/constants';
import ReviewCard from './components/ReviewCard';
import CardCarousel from './components/CardCarousel';
import themes from './themes/default';

const DivCardListWrapper = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  margin-top: 2rem;

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 35%;
  }

  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background: transparent;
    color: ${themes.colors.gray2};
    font-family: ${themes.fonts.title};
    font-size: 3rem;
    transition: all 0.3s ease-out;
  }
  .alice-carousel__next-btn-item.__inactive,
  .alice-carousel__prev-btn-item.__inactive {
    display: none;
  }
  .alice-carousel__next-btn-item:hover,
  .alice-carousel__prev-btn-item:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 980px) {
    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      display: block;
      align-items: flex-end;
      top: 35%;
    }
    .alice-carousel__prev-btn {
      margin-left: 1rem;
    }
    .alice-carousel__next-btn {
      margin-right: 1rem;
    }
    .alice-carousel__next-btn-item,
    .alice-carousel__prev-btn-item {
      font-size: 2.5rem;
      width: 45px;
      height: 45px;
    }
  }
`;
const items = reviews.map((review, idx) => {
  return <ReviewCard key={idx} review={review} />;
});

function App() {
  return (
    <DivCardListWrapper>
          <CardCarousel items={items} />
        </DivCardListWrapper>
  );
}

export default App;
