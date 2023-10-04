class Service{

    _api = "http://127.0.0.1:8000/"
    
    paymentRequest = async(props) => {

        const response = await fetch( this._api,{
                method:'POST', 
                headers: {"Accept": "application/json", "Content-type": "application/json"},
                body: JSON.stringify({"name":JSON.stringify(props)})
                }
             );

        if(response.ok){
            return await response.json();
        }

    }


}

export default Service;
