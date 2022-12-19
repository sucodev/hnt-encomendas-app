import { NextApiRequest, NextApiResponse } from "next";

/**
 * 
**/

const users = [
    { 
        id: 1, 
        customerName: 'Marcos Del Valle',
        customerCPF: '00000000000',
        customerJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6eyJpZCI6MSwiY3VzdG9tZXJOYW1lIjoiTWFyY29zIERlbCBWYWxsZSIsImN1c3RvbWVyQ1BGIjoiMDAwMDAwMDAwMDAiLCJqd3QiOiIiLCJvcmRlcnMiOlt7Im9yZGVyTnVtYmVyIjoiIzEyMzQ1NjciLCJvcmRlclN0YXR1cyI6ImNvbmNsdcOtZG8iLCJvcmRlckl0ZW1zIjpbeyJpZCI6MTQsIm5hbWUiOiJQw6NvIGNvbSBvdm8ifSx7ImlkIjoxOCwibmFtZSI6IkHDp2FpIGNvbSBXaGV5IFByb3RlaW4ifV0sIk9yZGVyU3RvcmUiOnsibmFtZSI6IlVydWd1YWkiLCJhZGRyZXNzIjoiUnVhIFVydWd1YWkifX1dfSwiaWF0IjoxNTE2MjM5MDIyfQ.yaBNU3fx_0Lo1Rhqv2ISusEiEsaAK8BwF2bHbgnbPGg',
        orders: [
            {  
                orderNumber: '#1234567',
                orderStatus: 'concluído',
                orderItems: [
                    { id: 14, name: 'Pão com ovo'},
                    { id: 18, name: 'Açai com Whey Protein'},
                ],
                OrderStore: {
                    name: 'Uruguai',
                    address: 'Rua Uruguai'
                }
            }
        ]
    }
] 

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const { customerName, customerCPF, orders: customerOrders, customerJWT } = users[0]
    console.log(request.body);
        
    if(request.method === "POST") {
        if(request.body.customerCPF !== customerCPF) {
           setTimeout(() => {
            response.status(401).json({
                error: true,
                payload: null,
                message: 'Não autorizado.'
            });
           }, 3500)
           return;
        }

      setTimeout(() => {
        response.status(201).json({
            error: null,
            payload: { 
                customerName,
                customerJWT,
                customerCPF,
                customerOrders
            },
            message: ''
        });
      }, 3500)
    }
}