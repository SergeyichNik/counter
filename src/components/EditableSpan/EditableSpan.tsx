import React, {ChangeEvent, useEffect, useState} from "react";
import classes from "./EditableSpan.module.css";

type EditableSpanType = {
    value: number,
    onChange: (value: any) => void
}

export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const {value, onChange} = props

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputVal, setInputVal] = useState(value)

    const editModeLaunch = () => {
        setEditMode(!editMode)
    }

    useEffect(() => {
        onChange(inputVal)
    },[inputVal])

    const onEnterPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setEditMode(false)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputVal(+e.currentTarget.value)
    }
    return editMode
    ? <input className={classes.input}
             type={'number'}
             onChange={onChangeHandler}
             onKeyPress={onEnterPress}
             value={inputVal}/>
    : <span onDoubleClick={editModeLaunch}>{value}</span>
}