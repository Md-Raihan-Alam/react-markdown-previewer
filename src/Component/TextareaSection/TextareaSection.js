import useInput from "../Customhooks.js/useInput";
import ReactMarkdown from "react-markdown";
import PreviewHeader from "../Heading/PreviewHeader";
import TextHeader from "../Heading/TextHeader";
import "./style.css";
const TextareaSection = () => {
  const { input, updateInput } = useInput(
    "# Welcome to my React Markdown Previewer!"
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <TextHeader />
            <textarea
              id="editor"
              autoFocus
              className="textarea"
              value={input}
              onChange={(e) => updateInput(e)}
            ></textarea>
          </div>
          <div className="col-lg-6 col-md-12">
            <PreviewHeader />
            <ReactMarkdown
              className="previewer"
              children={input}
              id="preview"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default TextareaSection;
