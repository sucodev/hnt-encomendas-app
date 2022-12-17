
class CustomerOrders { 
    orderNumber: string | number;
    orderStatus: string;
    orderItems: Array<{
        id: number;
        name: string;
    }>;
    orderStore: {
        name: string;
        address: string;
    };

    constructor(
        orderNumber: string | number, 
        orderStatus: string, 
        orderItems: Array<{id: number, name: string}>,
        orderStore: {name: string, address: string}
        ) { 
        
            this.orderNumber = orderNumber
            this.orderStatus = orderStatus
            this.orderItems = orderItems
            this.orderStore = orderStore

    }
}

class Customer { 
    customerCPF: string;
    customerName: string;
    customerOrders: CustomerOrders;

    constructor(
        customerCPF: string, 
        customerName: string,
        customerOrders: CustomerOrders
    ) {
        this.customerCPF = customerCPF
        this.customerName = customerName
        this.customerOrders = customerOrders
    }
}

class UserPayload {
    jwt: string;
    user: Customer;

    constructor(
        jwt: string, 
        user: Customer
    ) {
        this.jwt = jwt
        this.user = user
    }
}

class User {

    user!: {
        isLoading: boolean;
        isAuthenticating: boolean;
        isAuthenticated: boolean;
        authenticatedFailed: boolean;
        errorMessage: string;
        errorStatusCode: number | null;
        payload: Object
    }; 

    constructor(
        user: {
            isLoading: boolean;
            isAuthenticating: boolean;
            isAuthenticated: boolean;
            authenticatedFailed: boolean;
            errorMessage: string;
            errorStatusCode: number | null;
            payload: UserPayload
        }
    ) { 
        this.user.isLoading = user.isLoading
        this.user.isAuthenticating = user.isAuthenticating
        this.user.isAuthenticated = user.isAuthenticated
        this.user.authenticatedFailed = user.authenticatedFailed
        this.user.errorMessage = user.errorMessage
        this.user.errorStatusCode = user.errorStatusCode
        this.user.payload = user.payload
        
    }
}

export { User }
