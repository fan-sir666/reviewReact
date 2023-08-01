// 处理初始值
const inialState = () => {
    let inialState = 0;
    for (let i = 0; i < 100; i++) {
        // console.log(11111);
        inialState += i;
    }
    return inialState
}

export function reducer(state = inialState(), action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}