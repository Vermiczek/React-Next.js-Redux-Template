import { useRouter } from "next/router";
import { StyledNavBar } from "../../styles/NavBar.styled";

export const NavBar = ({ screenSetter }: any) => {
  return (
    <StyledNavBar>
      <div
        className="option"
        onClick={() => {
          screenSetter(0);
        }}
      >
        Pokemon
      </div>
      <div
        className="option"
        onClick={() => {
          screenSetter(1);
        }}
      >
        xd 2
      </div>
      <div
        className="option"
        onClick={() => {
          screenSetter(2);
        }}
      >
        xd 3
      </div>
    </StyledNavBar>
  );
};
