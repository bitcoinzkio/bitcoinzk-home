import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  color: #ffffff;
  justify-content: soace-between;
  background: #fc7823;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  width: auto;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  gap: 10px;
`;

export const Wrapper = styled.div(({}) => ({
  borderRadius: "10px",
  backgroundImage:
    "linear-gradient(to left, #000000 30%, transparent 10%), linear-gradient(to left, #000000 30%, transparent 10%), linear-gradient(to top, #000000 40%, transparent 10%), linear-gradient(to top, #000000 30%, transparent 10%)",
  backgroundPosition: "left top, left bottom, left top, right top",
  backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
}));
export const DivBox = styled(Wrapper)(({}) => ({
  backgroundSize: "10px 1px, 10px 1px, 1px 9px, 1px 9px",
}));

export const ContentBox = styled(Wrapper)(({}) => ({
  backgroundSize: "10px 1px, 10px 1px, 1px 9px, 1px 9px",
}));
