import csv
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.requests import Request
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import json
import requests
import urllib3
import uuid
from yookassa import Configuration, Payment

app = FastAPI()

urllib3.disable_warnings()
origins = ["*"]
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"],
                   allow_headers=["*"])






class PaymentClass(BaseModel):
    value:str
    currency:str
    type:str
    return_url:str
    capture:bool
    description:str

@app.post("/payment")
async def root(payment:PaymentClass):
    Configuration.account_id = "262763"
    Configuration.secret_key = "test_iL7UIdjxP6Kn9WYWn_SLsvNj0AS3vs9TxBn7JwAla7c"
    payment = Payment.create({
        "amount": {
            "value": payment.value,
            "currency": payment.currency
        },
        "confirmation": {
            "type": "redirect",
            "return_url": payment.return_url
        },
        "capture": payment.capture,
        "description": payment.description
    }, uuid.uuid4())

    return payment.confirmation.confirmation_url
