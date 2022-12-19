import React from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'


const Toast = () => {

    return (
        <ToastContainer autoClose={2000} />
    )
}

export { Toast }