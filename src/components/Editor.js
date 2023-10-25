import React, {useState} from 'react';

const Editor = ({onMarkdownChange}) => {
  const [markdown, setMarkdown] = useState("");

  const handleInputChange = (e) => {
    const newMarkdown = e.target.value
    setMarkdown(newMarkdown);
    onMarkdownChange(newMarkdown)
  };

  return (
    <div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Escribe tu Markdown aquí..."
      />
    </div>
  );
};

export default Editor;
