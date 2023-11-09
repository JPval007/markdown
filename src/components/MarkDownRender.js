//IMPORT THE MARKDOWN COMPONENT
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkDownRender(props) {
    let text = props.text;

    return (
        <>
            <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </>
    );
}

export default MarkDownRender;