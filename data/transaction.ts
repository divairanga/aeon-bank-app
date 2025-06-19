import { Transaction } from '../types/Transaction';

export const mockTransactions: Transaction[] = 
[
    {
        "id":"1",
        "refId": "123ABC",
        "transferDate": "2024-10-15T12:34:56Z",
        "recipientName": "John Doe",
        "transferName": "Salary Payment",
        "amount": 1500.00
    },
    {
        "id":"2",
        "refId": "456DEF",
        "transferDate": "2024-09-21T09:12:45Z",
        "recipientName": "Jane Smith",
        "transferName": "Invoice Payment",
        "amount": 2300.75
    },
    {
        "id":"3",
        "refId": "789GHI",
        "transferDate": "2024-10-05T16:18:30Z", 
        "recipientName": "Robert Brown",
        "transferName": "Refund",
        "amount": -500.00
    },
    {
        "id":"4",
        "refId": "101JKL",
        "transferDate": "2024-08-30T11:47:22Z",
        "recipientName": "Emily Davis",
        "transferName": "Bonus Payment",
        "amount": 1200.00
    }
]