import React from "react";
import styled from "styled-components";
import IconEmotionAwkward from "../assets/IconEmotionAwkward.svg";
import IconEmotionBad from "../assets/IconEmotionBad.svg";
import IconEmotionBlankface from "../assets/IconEmotionBlankface.svg";
import IconEmotionDepression from "../assets/IconEmotionDepression.svg";
import IconEmotionDizzy from "../assets/IconEmotionDizzy.svg";
import IconEmotionGood from "../assets/IconEmotionGood.svg";
import IconEmotionHappy from "../assets/IconEmotionHappy.svg";
import IconEmotionSad from "../assets/IconEmotionSad.svg";
import IconEmotionSick from "../assets/IconEmotionSick.svg";
import IconEmotionThoughtless from "../assets/IconEmotionThoughtless.svg";

const BlankFaceEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const AwkWardEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const DepressionEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const ThoughtlessEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const SickEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const BadEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const GoodEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const SadEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const HappyEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const DizzyEmotion = styled.img`
  /* 스타일을 여기에 추가하세요 */
`;

const Emotion = ({ emotion }) => {
    return (
        <div>
            {emotion === "무표정" && <BlankFaceEmotion src={IconEmotionBlankface} alt="무표정" />}
            {emotion === "머쓱" && <AwkWardEmotion src={IconEmotionAwkward} alt="머쓱" />}
            {emotion === "우울 " && <DepressionEmotion src={IconEmotionDepression} alt="우울" />}
            {emotion === "무념무상" && <ThoughtlessEmotion src={IconEmotionThoughtless} alt="무념무상" />}
            {emotion === "아픔" && <SickEmotion src={IconEmotionSick} alt="아픔" />}
            {emotion === "삐침" && <BadEmotion src={IconEmotionBad} alt="삐침" />}
            {emotion === "기분좋음" && <GoodEmotion src={IconEmotionGood} alt="기분좋음" />}
            {emotion === "슬픔" && <SadEmotion src={IconEmotionSad} alt="슬픔" />}
            {emotion === "행복" && <HappyEmotion src={IconEmotionHappy} alt="행복" />}
            {emotion === "헤롱헤롱" && <DizzyEmotion src={IconEmotionDizzy} alt="헤롱헤롱" />}

        </div>
    );
};

export default Emotion;
