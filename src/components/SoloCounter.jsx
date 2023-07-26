import React, {useState} from 'react';
import {Stepper} from "@salutejs/plasma-ui";
import PostService from "../API/PostService";

const SoloCounter = ({item, values, setValues, maxValue, index, setDeleateFlag, checkBox}) => {
    console.log(item)
    const [showRemoveFlag, setShowRemoveFlag] = useState(true)

    return (
        <Stepper
            step={1}
            onRemove={() => {
                setDeleateFlag(false);
                PostService.deleteDishCount(item.dishId, 1)}
        }
            value={values[index]}
            max={maxValue}
            showRemove={!checkBox}
            pin="circle-circle"
            onChange={(num) => {
                setValues([...values.slice(0, index), num,...values.slice(index + 1)]);
                console.log(item)
                console.log(checkBox)
                if (!checkBox) {
                    console.log(item.dishId)
                    setShowRemoveFlag(false)
                    PostService.ChangeDishCount(item.dishId, 1, num)
                } else {
                    setShowRemoveFlag(true)
                }
                console.log(values)
            }}
            onClick={(event) => event.stopPropagation()}
            ariaLabelRemove="Удалить"
            ariaLabelDecrement="Уменьшить значение"
            ariaLabelIncrement="Увеличить значение"
        />
    );
}

export default SoloCounter;