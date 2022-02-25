import React, {useState} from 'react';
import classes from './App.module.css';
import {Board} from "./components/Board/Board";
import {Button} from "./components/Button/Button";

function App() {
    const options = {
        maxValue: 5,
        minValue: 0,
        countStep: 1
    }

    const {maxValue, minValue, countStep} = options

    const [value, setValue] = useState(minValue)

    const buttonsKit = [
        {name: 'inc', isDisabled: value >= maxValue, callBack: () => setValue(value + countStep)},
        {name: 'reset', isDisabled: value === minValue,callBack: () => setValue(minValue)},
        {name: 'dec', isDisabled: value >= maxValue, callBack: () => setValue(value - countStep)},
    ]

    const buttons = buttonsKit.map((item, index) => {
        return (
            <Button key={index}   {...item}/>
        )
    })

    return (
        <div className={classes.app}>
            <Board maxValue={maxValue} value={value}/>
            <div>
                {buttons}
            </div>
        </div>
    );
}

export default App;
