import React from "react";
import classes from "./SetBoard.module.css";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {OptionsType} from "../../App";


type PropsType = {
    options: OptionsType
    onChange: (name: string, value: number) => void
}



export const SetBoard: React.FC<PropsType> = (props) => {

    const optionRender = props.options.map((item,index )=> {
        const onChangeHandler = (value: any) => {
            props.onChange(item.name, value)
        }

        return (
            <div key={index} className={classes.setItems}>
                <div>{item.name}</div>
                <EditableSpan value={item.value} onChange={onChangeHandler}/>
            </div>
        )
    })

    return (
        <div className={classes.setBoardStyle}>
            <div className={classes.set}>Double click to make changes</div>
            <div className={classes.values}>
                {optionRender}
            </div>
            <div className={classes.set}>Push SET to confirm</div>
        </div>
    )
}