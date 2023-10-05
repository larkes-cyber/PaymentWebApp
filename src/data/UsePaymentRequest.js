import { useState, useEffect } from "react";
import Service from "./Service";

const service = new Service();

class UsePaymentRequest{

    async execute(props){
        try{
             const response = await service.paymentRequest(
                {
                    "value":props.currency,
                    "currency":props.curKind,
                    "type":"redirect",
                    "return_url":"http://localhost:3001/",
                    "capture":true,
                    "description":"order 1"
    
                }
            );
            return response;
        }catch{
            return null;

        }
    }

}


export default UsePaymentRequest;