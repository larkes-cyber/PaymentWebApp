import React, { useCallback } from "react";
import './payment_view.scss';
import { useState, useEffect } from "react";
import UsePaymentRequest from "../../data/UsePaymentRequest";

const usePaymentRequest = new UsePaymentRequest();


function checkOneDot(string){

    var count = 0;

    for(var char in string){
        if(char == '.')count++;
        if(count > 1) return false;
    }

    return true
}



const PaymentView = () => {


    const [curValue, setCurValue] = useState("");
    const [curKind, setCurKind] = useState("RUB");
    const [hasBeenDone, setHasBeenDone] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if(hasBeenDone){
            usePaymentRequest.execute({
                "currency":curValue,
                "curKind":curKind
            }).then(it => {
                if(it == null){setError("Некорректная сумма!")}
                else {window.location.href = it;}
            })
        }
        setHasBeenDone(false);
    },[hasBeenDone]);


    return(
        <div className="payment_view">
            <div className="payment_view__title">Payment view</div>
            <div className="payment_view__description" > Fill in the data for profile. It will take a couple of minutes. You only need a passport</div>
            <div className="payment_view__wrapper_currency">
                <div className="payment_view__item_currency">
                    <div className="payment_view__item_currency__title">Выберете валюту</div>
                    <select 
                     className="payment_view__item_currency__selector payment_view__item_currency__selector__title"
                     name="currency"
                     onChange={e => {
                        setCurKind(e.target.value);
                      }
                     }
                     >
                        <option className="payment_view__item_currency__selector__title" value="RUB">Рубли</option>
                        <option className="payment_view__item_currency__selector__title"  value="RUB">Рубли</option>
                        <option className="payment_view__item_currency__selector__title"  value="RUB">Рубли</option>
                    </select>
                </div>
                <div className="payment_view__item_currency">
                   <div className="payment_view__item_currency__title">Введите сумму</div>
                   <input
                   placeholder = "100.00"
                   value={curValue} 
                   onChange={
                        (text) => {
                            setCurValue(text.target.value);
                        }
                   } className="payment_view__item_currency__value_form payment_view__item_currency__title" />
                    {error.length != 0 ? 
                        <div className="payment_view__error">
                        {error}
                        </div>
                        : null
                    }
                </div>
            </div>
            

            <button className="payment_view__button" onClick={ e => {
                setHasBeenDone(true);

            }}>Продолжить</button>
        </div>
    )

}

export default PaymentView;