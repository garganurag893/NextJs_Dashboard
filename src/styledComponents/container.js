import styled from "styled-components";
import { rotateAnimation } from "./animation";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-image: linear-gradient(#008080, #4bbd9c);
`;

const CardContainer = styled.div`
  display: flex;
  height: 500;
  width: 400;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const AnimatedCardContainer = styled.div`
  display: inline-block;
  animation: ${rotateAnimation};
  padding: 2rem 1rem;
  font-size: 1.2rem;
  background-color: white;
`;

export { MainContainer, CardContainer, AnimatedCardContainer };
