import { useEffect, useState,useRef } from 'react';
import ReactDOM from 'react-dom';

function NewWindow({ children }) {
    const [container, setContainer] = useState(null);
    const externalWindow = useRef(window.open("", "_blank", "width=600,height=400,left=200,top=200"));

    useEffect(() => {
        const div = document.createElement('div');
        externalWindow.current.document.body.appendChild(div);
        setContainer(div);

        return () => {
            externalWindow.current.close();
        };
    }, []);

    return container ? ReactDOM.createPortal(children, container) : null;
}

export default NewWindow;
