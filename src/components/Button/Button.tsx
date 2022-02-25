import React from "react";

type PropsType = {
    name: string,
    isDisabled: boolean,
    onChangeValue: (name: string) => void
}

export const Button = (props: PropsType) => {
    const {name, isDisabled, onChangeValue} = props

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onChangeValue(e.currentTarget.name)
    }

    const BtnStyle = {
        margin: '0 5px 20px 5px',
        width: '90px',
        height: '40px',
        border: 'none',
        borderRadius: '3px',
        backgroundColor: 'grey',
        fontSize: '20px',
        fontWeight: '900',
        boxShadow: 'inset 1px 1px 5px white, 2px 2px 5px black'
    }

    return <button style={BtnStyle}
                   disabled={isDisabled}
                   name={name}
                   onClick={onClickHandler}>{name.toUpperCase()}</button>
}