import { useRef } from "react";
import Message from "./Message";

function Father() {
    const messageRef = useRef();
    const onClickHandler = () => {
        console.log(messageRef.current.getText());
    };
    return (
        <>
            <Message ref={messageRef} />
            <button onClick={onClickHandler}>button</button>
        </>
    );
}

export default Father;