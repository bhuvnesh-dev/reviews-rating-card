import React from "react";
import { HiStar } from "react-icons/hi";
import { VscVerifiedFilled } from "react-icons/vsc";
import {
  DivCardHeader,
  DivNameBar,
  DivReviewCardContainer,
  DivProfileWrapper,
  DivStarsWrapper,
  ImgProfile,
  PReviewDate,
  PReviewText,
  PName,
  ImgLogo,
} from "./styles";

function ReviewCard(Props) {
    const {review} = Props;
  return (
    <DivReviewCardContainer>
      <DivCardHeader>
        <ImgProfile
          src={review.profileImage}
          alt="profile"
          width={40}
          height={40}
          quality={100}
          priority
          rel="dns-prefetch"
        />
        <DivProfileWrapper>
          <DivNameBar>
            <PName>{review.clientName}</PName>
            <ImgLogo
              src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
              alt="google icon"
              width={20}
              height={20}
              quality={100}
              priority
            />
          </DivNameBar>
          <PReviewDate>{review.date}</PReviewDate>
        </DivProfileWrapper>
      </DivCardHeader>

      <DivStarsWrapper>
        {Array(5)
          .fill(null)
          .map((_, idx) => (
            <HiStar
              key={idx}
              className={`star-icon ${review.rate > idx && "active"}`}
            />
          ))}

        <VscVerifiedFilled className="verify-icon" />
      </DivStarsWrapper>

      <PReviewText>{review.content}</PReviewText>
    </DivReviewCardContainer>
  );
}

export default ReviewCard;
