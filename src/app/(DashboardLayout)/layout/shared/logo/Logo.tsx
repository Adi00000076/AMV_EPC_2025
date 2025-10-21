import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="https://stem.no/wp-content/uploads/2022/07/wwl-case-placeholder.png" alt="login page logo" height={70} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
