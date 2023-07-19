import React from 'react';
import {Stepper} from "@salutejs/plasma-ui";

export function Counter(props:any) {
    const values = props.props[0]
    const setValue = props.props[1]
    const index = props.props[2]
    console.log(props)
    console.log(setValue)

    return (
        <Stepper
            step={1}
            value={values[index]}
            min={1}
            max={99}
            pin="circle-circle"
            onChange={(value) => {
                setValue([...values.slice(0, index), value,...values.slice(index + 1)]);
            }}
            onClick={(event) => event.stopPropagation()}
            ariaLabelRemove="Удалить"
            ariaLabelDecrement="Уменьшить значение"
            ariaLabelIncrement="Увеличить значение"
        />
    );
}
