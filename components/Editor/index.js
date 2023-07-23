import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ setBody, body }) => {
  const handleTextChange = (event, editor) => {
    const data = editor.getData();
    setBody(data);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={body}        
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          editor.editing.view.change(writer => {
            writer.setStyle('height', '300px', editor.editing.view.document.getRoot())
          })
        }}
        onChange={handleTextChange}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
        style={{
          innerHeight: 500,
        }}
      />
    </div>
  );
};

export default Editor;
