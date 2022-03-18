import React, {useEffect, useState} from 'react';
import classes from './App.module.css';
import {Board} from "./components/Board/Board";
import {Button} from "./components/Button/Button";
import {SetBoard} from "./components/SetBoard/SetBoard";

type OptionsItemType = {
    name: string,
    value: any
}

export type OptionsType = OptionsItemType[]

export const  App = () => {

    const optionsKit: OptionsType = [
        {name: 'Max value:', value: 10},
        {name: 'Min value:', value: 0},
        {name: 'Count step:', value: 2}
    ]

    const [options, setOptions] = useState(optionsKit)

    const setToLS = (name: string, value: number) => {
        localStorage.setItem(name, JSON.stringify(value))
    }

    let maxValue = options[0].value
    let minValue = options[1].value
    let countStep = options[2].value

    const getFromLS = () => {
        setOptions(options.map<any>((item) => {
            let newItem = localStorage.getItem(item.name)
            if (newItem) {
                let newValue = JSON.parse(newItem)
                setOptions([...options, {...item, value: newValue}])
            }
        }))
    }

    // useEffect(() => {
    //     getFromLS()
    // },[])

    const optionsValueChange = (name: string, value: any) => {
        setOptions(options.map(item => item.name === name ? {...item, value: value} : item))
            setToLS(name, value)
    }

    const [value, setValue] = useState(minValue)
    const [mode, setMode] = useState(false)


    const buttonsKit = [
        {name: 'inc', isDisabled: value >= maxValue || mode, callBack: () => setValue(value + countStep)},
        {name: 'reset', isDisabled: value === minValue || mode,callBack: () => setValue(minValue)},
        {name: 'dec', isDisabled: value === minValue || mode, callBack: () => setValue(value - countStep)},
        {name: 'set', isDisabled: false, callBack: () => setMode(!mode)}
    ]

    const buttons = buttonsKit.map((item, index) => {
        return (
            <Button key={index}   {...item}/>
        )
    })

    return (
        <div className={classes.app}>
            {mode ? <SetBoard onChange={optionsValueChange} options={options}/> : <Board maxValue={maxValue} value={value}/> }
            <div>
                {buttons}
            </div>
        </div>
    );
}

export default App;
