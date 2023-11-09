
import './App.css';
import MarkDownRender from './components/MarkDownRender.js';
import { useState, useEffect } from 'react';


function App() {
  // State variables (user data in this case)
  const [markdown, setMarkdown] = useState('');

  let defaultText = `
# A demo of \`react-markdown\`

\`react-markdown\` is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`'h1'\`)
* Has a lot of plugins
`;

  // Render the page for the first time:
  useEffect(()=>{
    // Fetch a text from somewhere, try some github md
      setMarkdown(defaultText);
    }
    ,[defaultText]);

  //Change handler
  function changeHandler(event) {
    setMarkdown(event.target.value);
  } 



  // App behaviour:
  // On page load put a string of text in the textarea
  // Get the value of the textarea and put it via props inside the renderer
  // The renderer should return the markdown using a libary

  // Layout:
  // Divide the page in two columns
  // The left column is for the markdown text
  // The right column is the rendered version
  // Those columns have to be 100% of the view height
  // On mobile display one on top of another


  return (
    <>
      <div className='container-sm'>
        <div className='row bg-primary-subtle'>
          <h1 className='text-center'>Markdown renderer page</h1>
        </div>
        <div className='row h-100'>
          <div className='col-sm border'>
            <h3 for="editor" className="form-label text-center">Editor</h3>
            <textarea className="form-control" id="editor" rows={31} onChange={changeHandler} value={markdown}></textarea>
          </div>
          <div className='col-sm border shadow' id="preview">
            <h2 className='text-center'>Preview</h2>
            <MarkDownRender text={markdown} />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
