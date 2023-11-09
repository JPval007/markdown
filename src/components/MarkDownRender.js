//IMPORT THE MARKDOWN COMPONENT
import Markdown from 'react-markdown';

function MarkDownRender(props) {
    let text = props.text;

    return (
        <>
            <Markdown>{text}</Markdown>
        </>
    );
}

export default MarkDownRender;