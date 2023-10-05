import { GlobalContainerStyled } from "./style";

export const GlobalContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <GlobalContainerStyled>{children}</GlobalContainerStyled>;
};
