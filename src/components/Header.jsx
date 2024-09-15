import { AppBar, Toolbar, styled } from "@mui/material";

const Style = styled(AppBar)`
  background: #060606;
  position: static;
  height: 9vh;
  border-bottom: 1px solid #2f2f2f;
`;

const Header = () => {
  return (
    <>
      <Style>
        <Toolbar></Toolbar>
      </Style>
    </>
  );
};

export default Header;
