import { styled } from "styled-components";

export const STTodoPageContainer = styled.div`
  width: 100vw;
  height: 120vh;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export const STFormFlex = styled.div`
  width: 80vw;
  height: 23vh;
  margin: 40px auto;
  display: flex;
  align-items: space-between;
  justify-content: center;
  gap: 50px;
`;

export const STInputTodoBoxStyle = styled.div`
  width: 65%;
  height: 100%;
  margin-left: -30%;
`;

export const STButtonContainer = styled.div`
  width: 250px;
  height: 100%;
  margin-right: -250px;
  position: relative;
`;

export const STButtonTextDiv = styled.div`
  font-size: 20px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
`;

export const STCatButtonDiv = styled.div`
  width: 250px;
  height: 100px;
  border-radius: 50px;
  margin-top: 30px;
  background-image: url(../public/catButtonImg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;

export const STmodalBox = styled.div`
  width: 30%;
  height: 300px;
  margin: 0 auto;
  border: 1px solid black;
  padding: 20px;
  border-radius: 30px;
`;

export const STmodalFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const STmodalContent = styled.div`
  margin-top: 10px;
`;
