import React from 'react';
import {Stepper} from "@salutejs/plasma-ui";

const SoloCounter = ({value, setValue, sumValue}) => {
    console.log(value)

    return (
        <Stepper
            step={1}
            value={value}
            max={sumValue}
            pin="circle-circle"
            onChange={(num) => {
                setValue(num)
                console.log(value)
            }}
            onClick={(event) => event.stopPropagation()}
            ariaLabelRemove="Удалить"
            ariaLabelDecrement="Уменьшить значение"
            ariaLabelIncrement="Увеличить значение"
        />
    );
}

export default SoloCounter;