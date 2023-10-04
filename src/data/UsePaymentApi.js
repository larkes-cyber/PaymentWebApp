import { useState, useEffect } from "react";
import Service from "./Service";

const service = new Service();

function usePaymentApi(pro){
    const [paymentUrl, setPaymentUrl] = useState("");

    useEffect(()=>{
        service.getRandomNum().then(it => {
            setPaymentUrl(it);
        });
    },[])

    return num
}

export default useRandomCounterApi;