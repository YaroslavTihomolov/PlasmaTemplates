import React from 'react';
import {Stepper} from "@salutejs/plasma-ui";

export function Counter(props:any) {
    const values = props.props[0]
    const setValue = props.props[1]
    const index = props.props[2]
    const maxValue = props.props[3]
    console.log(props)
    console.log(setValue)

    return (
        <Stepper
            step={1}
            value={values[index]}
            min={1}
            max={maxValue}
            pin="circle-circle"
            onChange={(value) => {
                setValue([...values.slice(0, index), value,...values.slice(index + 1)]);
                console.log(value)
                console.log(maxValue)
            }}
            onClick={(event) => event.stopPropagation()}
            ariaLabelRemove="Удалить"
            ariaLabelDecrement="Уменьшить значение"
            ariaLabelIncrement="Увеличить значение"
        />
    );
}
