import React, {useState} from 'react';
import CheckboxList from "./CheckboxList";
import CustomCartItem from "./CustomCartItem";
import SummaryCountList from "./SummaryCountList";
import {Checkbox} from "@salutejs/plasma-ui";
import {Counter} from "./Counter";
import SoloCounter from "./SoloCounter";

const CartLine = ({item}) => {
    const [checkBox, setCheckBox] = useState(false)
    const [value, setValue] = useState(item.quantity)
    const [sumValue, setSumValue] = useState(item.quantity)
    console.log(value)

    return (
        <div className='cart-check-box'>
            <div className='checkbox-list'>
                <Checkbox onChange={() => {
                    setCheckBox(!checkBox)
                    if (!checkBox) {
                        setSumValue(value)
                        console.log(checkBox)
                        console.log(value)
                    } else {
                        setSumValue(100)
                    }
                    console.log(checkBox)
                }
                }/>
            </div>
            <div className='cart-item-list'>
                <CustomCartItem item={item}/>
            </div>
            <SoloCounter value={value} setValue={setValue} sumValue={sumValue}/>
            {checkBox &&
                <div className='summary-count'>
                    <h4> /{sumValue}</h4>
                </div>
            }
        </div>
    )
}

export default CartLine;