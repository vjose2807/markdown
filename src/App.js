import React, {useState} from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

import './App.css';

const App = () => {
const [markdown, setMarkdown] = useState("")
const handleMarkdownChange = (newMarkdown) => {
  setMarkdown(newMarkdown)
}

  return (
      <div className="container">
        <div className="row">
          <Editor onMarkdownChange={handleMarkdownChange}/>
          <Preview markdown={markdown}/>
        </div>
      </div>
    
  );
};

export default App;