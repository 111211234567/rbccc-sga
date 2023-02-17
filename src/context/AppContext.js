import axios from "axios";
import React, { useReducer, useContext, createContext } from "react";
import {
    REGISTER, LOGIN, LOGOUT, SHOW_ALERT, CLEAR_ALERT,
    GET_ALL_NEWS,GET_ONE_NEWS
} from "./action";
import reducer from "./reducer";

const user = localStorage.getItem('user')

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    openBar: false,
    user: user ? JSON.parse(user) : null,
    pageName: '',
    subPageName: '',
    news: [],
    new: {}
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

    const clearALert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
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
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
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
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
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
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }

    const getAllNews = async () => {
        try {
            const response = await axios.get(`${url}/news`)
            const news = response.data
            dispatch({ type: GET_ALL_NEWS, payload: news })
        } catch (error) {
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }
    const getOneNews = async (NewsId) => {
        try {
            const response = await axios.get(`${url}/news/new/${NewsId}`)
            const news = response.data
            dispatch({ type: GET_ONE_NEWS, payload: news })
        } catch (error) {
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }

    return (
        <AppContext.Provider value={{
            ...state, register, generalPost, login,
            logout, getAllNews,getOneNews
        }}  >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { initialState, AppContext, useAppContext, AppProvider, }