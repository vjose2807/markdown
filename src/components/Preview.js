import ReactMarkdown, {} from 'react-markdown';

const Preview = ({markdown}) => {

    return (
      <div id="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    );
  
};

export default Preview;
