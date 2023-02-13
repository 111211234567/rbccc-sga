import axios from "axios";
import React, { useReducer, useContext, createContext } from "react";
import { REGISTER, LOGIN } from "./action";
import reducer from "./reducer";

const user = localStorage.getItem('user')

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    openBar: false,
    user: user ? JSON.parse(user) : null,
}


const AppContext = React.createContext()
const url = "http://localhost:5000/api/v1/"

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addUserToLocalStorage = ({ user }) => {
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user))
    }
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
    }

    const register = async ( currentUser ) => {
        try {
            const response=await axios.post(`${url}/auth/register`,currentUser)
            const user=response.data
            addUserToLocalStorage(user)
        } catch (error) {

        }
    }

    return (
        <AppContext.Provider value={{ state }}  >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { initialState, AppContext, useAppContext, AppProvider, }