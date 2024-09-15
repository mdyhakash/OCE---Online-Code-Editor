import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Editor from "./Editor";

const Container = styled(Box)`
  display: flex;
  background: #060606;
  height: 50vh;
`;

const EContainer = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        language={"HTML"}
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language={"CSS"}
        icon="*"
        color="#0EbEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        language={"JS"}
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default EContainer;
