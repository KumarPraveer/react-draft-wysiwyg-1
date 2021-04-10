import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "tachyons";
class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const html = "<p>Hey this is <strong>Praveer</strong> Kumar 😀</p>";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleSubmit = () => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="tc">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button
          onClick={console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-navy tc"
        >
          Submit
        </button>
        {/* {console.log(
          draftToHtml(convertToRaw(editorState.getCurrentContent()))
        )} */}
      </div>
    );
  }
}
export default EditorConvertToHTML;
