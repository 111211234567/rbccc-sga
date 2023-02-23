
import axios from "axios";
import React, { useReducer, useContext, createContext } from "react";
import {
    REGISTER, LOGIN, LOGOUT, SHOW_ALERT, CLEAR_ALERT,
    GET_ALL_NEWS, GET_ONE_NEWS, GET_ALL_ANOUNCEMENT,
    GET_ONE_ANOUNCEMENT, GET_ALL_AGENDA, GET_ONE_AGENDA,GET_ALL_MEMBERS,
    GET_ONE_MEMBER
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
    new: {},
    anouncements: [],
    anouncement: {},
    agendas: [],
    agenda: {},
    members:[],
    member:{}
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

    const generalUpdate = async ({ endpoint, data }) => {
        try {
            const { mainPoint, secondePoint, mainId, subId, thirdId } = endpoint
            if (mainPoint && !secondePoint && !mainId && !mainId && !subId && !thirdId) {
                await axios.patch(`${url}/${mainPoint}`, data)
                console.log(`${url}/${mainPoint}`)

            }
            if (mainPoint && secondePoint && !mainId && !mainId && !subId && !thirdId) {
                await axios.patch(`${url}/${mainPoint}/${secondePoint}`, data)
                console.log(`${url}/${mainPoint}/${secondePoint}`)

            }
            if (mainPoint && secondePoint && mainId && mainId && !subId && !thirdId) {
                await axios.patch(`${url}/${mainPoint}/${secondePoint}/${mainId}`, data)
            }
            if (mainPoint && secondePoint && mainId && mainId && subId && !thirdId) {
                await axios.patch(`${url}/${mainPoint}/${secondePoint}/${mainId}/${subId}`, data)
            }
            if (mainPoint && secondePoint && mainId && mainId && subId && thirdId) {
                await axios.patch(`${url}/${mainPoint}/${secondePoint}/${mainId}/${subId}/${thirdId}`, data)
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }
    const generalDelete = async ({ endpoint }) => {
        try {
            const { mainPoint, secondePoint, mainId, subId, thirdId } = endpoint
            if (mainPoint && !secondePoint && !mainId && !mainId && !subId && !thirdId) {
                await axios.delete(`${url}/${mainPoint}`)
                console.log(`${url}/${mainPoint}`)
            }
            if (mainPoint && secondePoint && !mainId && !mainId && !subId && !thirdId) {
                await axios.delete(`${url}/${mainPoint}/${secondePoint}`)
                console.log(`${url}/${mainPoint}/${secondePoint}`)

            }
            if (mainPoint && secondePoint && mainId && mainId && !subId && !thirdId) {
                await axios.delete(`${url}/${mainPoint}/${secondePoint}/${mainId}`)
            }
            if (mainPoint && secondePoint && mainId && mainId && subId && !thirdId) {
                await axios.delete(`${url}/${mainPoint}/${secondePoint}/${mainId}/${subId}`)
            }
            if (mainPoint && secondePoint && mainId && mainId && subId && thirdId) {
                await axios.delete(`${url}/${mainPoint}/${secondePoint}/${mainId}/${subId}/${thirdId}`)
            }
        } catch (error) {
            console.log(error)
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

    const getAllAnouncemnt = async () => {
        try {
            const response = await axios.get(`${url}/anouncement`)
            const { Anouncement } = response.data
            dispatch({ type: GET_ALL_ANOUNCEMENT, payload: Anouncement })
        } catch (error) {
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }

    const getOneAnouncement = async (id) => {
        try {
            const response = await axios.get(`${url}/anouncement/get/${id}`)
            const anouncement = response.data
            dispatch({ type: GET_ONE_ANOUNCEMENT, payload: anouncement })
        } catch (error) {
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }

    const getAllAgenda = async () => {
        try {
            const response = await axios.get(`${url}/agenda`)
            const agendas = response.data
            dispatch({ type: GET_ALL_AGENDA, payload: agendas })
        } catch (error) {
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }

    const getOneAgenda = async(agendaId) => {
        try {
            const response = await axios.get(`${url}/agenda/get/${agendaId}`)
            const agenda = response.data
            dispatch({ type: GET_ONE_AGENDA, payload: agenda })
        } catch(error) {
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }

    const getMembers=async({type,data})=>{
        try {
            if(type==='all'){
                const response= await axios.get(`${url}/admin`)
                const users=response.data
                dispatch({type:GET_ALL_MEMBERS,payload:users})
            }
            if(type=='sga'){
                const response= await axios.get(`${url}/admin/sga`)
                const users=response.data
                dispatch({type:GET_ALL_MEMBERS,payload:users})
            }
            if(type=='name'){
                const response= await axios.get(`${url}/admin/get/${data}`)
                const users=response.data
                dispatch({type:GET_ALL_MEMBERS,payload:users})
            }
        } catch(error) {
            dispatch({ type: SHOW_ALERT, payload: { msg: error.response.data.msg } })
            clearALert()
        }
    }



    return (
        <AppContext.Provider value={{
            ...state, register, generalPost, login,
            logout, getAllNews, getOneNews, generalUpdate,
            generalDelete, getAllAnouncemnt, getOneAnouncement,
            getAllAgenda,getOneAgenda,getMembers
        }}  >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { initialState, AppContext, useAppContext, AppProvider, }