type PropsType = {
    value: number,
    maxValue: number
}

export const Board = (props: PropsType) => {

    const ValueStyle = {
        width: '200px',
        height: '100px',
        margin: '20px 20px',
        backgroundColor: 'gray',
        fontSize: '80px',
        fontWeight: '900',
        textShadow: '1px 1px 2px black',
        borderRadius: '8px',
        color: props.value >= props.maxValue ? "red" : "black",
        boxShadow: '2px 2px 5px inset'
    }

    return (
        <div style={ValueStyle}>{props.value}</div>
    )
}