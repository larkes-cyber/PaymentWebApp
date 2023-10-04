import React, { useCallback } from "react";
import './payment_view.scss';
import Service from "../../data/Service";
import { useState } from "react";


const Remote = new Service();

const PaymentView = () => {


    const [curValue, setCurValue] = useState("");
    const [curKind, setCurKind] = useState("");

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
                        <option className="payment_view__item_currency__selector__title"  value="USD">Доллары</option>
                        <option className="payment_view__item_currency__selector__title"  value="EU">Евро</option>
                    </select>
                </div>
                <div className="payment_view__item_currency">
                   <div className="payment_view__item_currency__title">Введите сумму</div>
                   <input value={curValue} onChange={
                        (text) => {
                            setCurValue(text.target.value);
                        }
                   } className="payment_view__item_currency__value_form payment_view__item_currency__title" />
                </div>
            </div>
            <button className="payment_view__button" onClick={ e => {
                
                Remote.paymentRequest({
                    "amount": {
                        "value": curValue,
                        "currency": curKind
                    },
                    "confirmation": {
                        "type": "redirect",
                        "return_url": "http://localhost:3001/"
                    },
                    "capture": true,
                    "description": "order 1"
                }).then()

            }}>Продолжить</button>
        </div>
    )

}

export default PaymentView;