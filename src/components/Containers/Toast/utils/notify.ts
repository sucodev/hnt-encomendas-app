import { toast, ToastOptions } from "react-toastify";

type ToastType = 'error' | 'sucess' | 'warn'

const notify = (message: string, type: ToastType) => {

    const toastConfig = {
        position: 'top-right',
        style: { width: '70%', float: 'right', margin: '1rem 1rem 1rem' },
        className: type, // add this class in a global component?
    } as ToastOptions

    switch (type) {
        case 'error':
            toast.error(message, toastConfig)
            break;
        case 'sucess':
            toast.success(message, toastConfig)
            break
        case 'warn':
            toast.warning(message, toastConfig)
            break
        default:
            break;
    }
}

export { notify }
