import { useRouter } from "next/router";
import { StyledNavButton } from "../../styles/NavButton.styled";

export const NavBar = () => {
  const router = useRouter();
  router.push("/pokemon");

  return (
    <StyledNavButton>
      <div></div>
    </StyledNavButton>
  );
};
