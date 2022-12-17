import { useSelector } from 'react-redux'
import { User } from '../models/User'

const useSelectorAuth = () => {
    const state = useSelector((state: User) => state.user)
    return state;
}

export { useSelectorAuth }