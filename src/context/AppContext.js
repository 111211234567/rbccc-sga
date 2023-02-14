import axios from "axios";
import React, { useReducer, useContext, createContext } from "react";
import { REGISTER, LOGIN, LOGOUT } from "./action";
import reducer from "./reducer";

const user = localStorage.getItem('user')

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    openBar: false,
    user: user ? JSON.parse(user) : null
}


const AppContext = React.createContext()
const url = "http://localhost:5000/api/v1"

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addUserToLocalStorage = ({ user }) => {
        localStorage.setItem('user', JSON.stringify(user))
    }
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
    }

    const logout = () => {
        removeUserFromLocalStorage()
        dispatch({ type: LOGOUT })
    }

    const register = async (currentUser) => {
        try {
            const response = await axios.post(`${url}/auth/register`, currentUser)
            const user = response.data
            addUserToLocalStorage(user)
            dispatch({ type: LOGIN, payload: user })
        } catch (error) {
            console.log(error)
        }
    }

    const login = async (currentUser) => {
        try {
            const { name, password } = currentUser
            const tryLogin = { name, password }
            const response = await axios.post(`${url}/auth/login`, tryLogin)
            const user = response.data
            addUserToLocalStorage(user)
            dispatch({ type: LOGIN, payload: user })

        } catch (error) {
            console.log(error)
        }
    }

    const generalPost = async ({ endpoint, data }) => {
        try {
            const { mainPoint, secondePoint, mainId, subId, thirdId } = endpoint
            if (mainPoint && !secondePoint && !mainId && !mainId && !subId && !thirdId) {
                await axios.post(`${url}/${mainPoint}`, data)
                console.log(`${url}/${mainPoint}`)

            }
            if (mainPoint && secondePoint && !mainId && !mainId && !subId && !thirdId) {
                await axios.post(`${url}/${mainPoint}/${secondePoint}`, data)
                console.log(`${url}/${mainPoint}/${secondePoint}`)

            }
            if (mainPoint && secondePoint && mainId && mainId && !subId && !thirdId) {
                await axios.post(`${url}/${mainPoint}/${secondePoint}/${mainId}`, data)
            }
            if (mainPoint && secondePoint && mainId && mainId && subId && !thirdId) {
                await axios.post(`${url}/${mainPoint}/${secondePoint}/${mainId}/${subId}`, data)
            }
            if (mainPoint && secondePoint && mainId && mainId && subId && thirdId) {
                await axios.post(`${url}/${mainPoint}/${secondePoint}/${mainId}/${subId}/${thirdId}`, data)
            }
        } catch (error) {

        }
    }

    return (
        <AppContext.Provider value={{
            ...state, register, generalPost, login,
            logout
        }}  >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { initialState, AppContext, useAppContext, AppProvider, }