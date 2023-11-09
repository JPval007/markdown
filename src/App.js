
import './App.css';
import MarkDownRender from './components/MarkDownRender.js';

function App() {
  // State variables (user data in this case)

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
      <div className='container-sm text-center'>
        <div className='row bg-primary-subtle'>
          <h1>Markdown renderer page</h1>
        </div>
        <div className='row h-100'>
          <div className='col-sm border'>
            <h3 for="editor" className="form-label">Editor</h3>
            <textarea className="form-control" id="editor" rows={31} ></textarea>
          </div>
          <div className='col-sm border shadow' id="preview">
            <h2>Preview</h2>
            <MarkDownRender text="# A demo of `react-markdown` " />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
