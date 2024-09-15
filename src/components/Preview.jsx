import { Box, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
//
import { DataContext } from "../context/DataProvider";
const PreviewContainer = styled(Box)`
  height: 41vh;
`;
const Preview = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);
  const sourceCode = `
  
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(sourceCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <PreviewContainer style={html || css || js ? null : {background: '#444857' }}>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </PreviewContainer>
  );
};

export default Preview;
