import React, {useState} from 'react';
import CustomCartItem from "./CustomCartItem";
import {Checkbox} from "@salutejs/plasma-ui";
import SoloCounter from "./SoloCounter";

const CartLine = ({item, counterValues, setCounterValues, index}) => {
    console.log(counterValues);
    console.log(index);
    console.log(item);
    const [deleateFlag, setDeleateFlag] = useState(true)
    const [checkBox, setCheckBox] = useState(false)
    const [sumValue, setSumValue] = useState(counterValues[index])
    const [maxValue, setMaxValue] = useState(100)

    return (
        <>
            { deleateFlag &&
                <>
                <div className='cart-check-box'>
            <div className='checkbox-list'>
                <Checkbox onChange={() => {
                    setCheckBox(!checkBox)
                    if (!checkBox) {
                        setSumValue(counterValues[index])
                        setMaxValue(counterValues[index])
                    } else {
                        setCounterValues([...counterValues.slice(0, index), sumValue,...counterValues.slice(index + 1)]);
                        setMaxValue(100)
                    }
                    console.log(checkBox)
                }
                }/>
            </div>
            <div className='cart-item-list'>
                <CustomCartItem item={item.dishDto}/>
            </div>
            <div className='solo-counter'>
                <SoloCounter values={counterValues}
                             setValues={setCounterValues}
                             index={index}
                             maxValue={maxValue}
                             setDeleateFlag={setDeleateFlag}
                             item={item}
                             checkBox={checkBox}
                />
            </div>
            {checkBox &&
                <div className='summary-count'>
                    <h4> /{sumValue}</h4>
                </div>
            }
        </div>
        <div className="white-stripe"></div>
        </>
            }
        </>
    )
}

export default CartLine;