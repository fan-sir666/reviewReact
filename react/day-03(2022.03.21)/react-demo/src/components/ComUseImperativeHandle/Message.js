import { forwardRef, useImperativeHandle, useState } from "react";

function Message(props, ref) {
    const [text, setText] = useState("");
    useImperativeHandle(ref, () => {
        return {
            getText() {
                return text;
            },
        };
    });
    return (
        <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
    );
}

export default forwardRef(Message);