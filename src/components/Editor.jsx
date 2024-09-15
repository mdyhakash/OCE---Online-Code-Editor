import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, styled } from "@mui/material";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "../index.css";

const EditorHeading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;
const EditorHeader = styled(Box)`
  background: #060606;
  display: flex;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;
const EditorContainer = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 6px 6px;
`;

const Editor = ({ language, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <EditorContainer style={open ? null : { flexGrow: 0 }}>
      <EditorHeader>
        <EditorHeading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {language}
        </EditorHeading>
        <KeyboardArrowLeftIcon
        style={{alignSelf: 'center'}}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </EditorHeader>
      <CodeMirror
        options={{
          theme: "material",
          lineNumbers: true,
        }}
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
      />
    </EditorContainer>
  );
};

export default Editor;
