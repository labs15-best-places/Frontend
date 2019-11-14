import styled from "styled-components";
import theme from "../theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${theme.space[6]}px auto;
  width: 25rem;
  color: ${theme.colors.primary};
`;
