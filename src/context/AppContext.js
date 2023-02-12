import React, { useReducer, useContext, createContext } from "react";
import { REGISTER } from "./action";
import reducer from "./reducer";

const user=localStorage.getItem('user')

const initialState={
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    openBar: false,
    user: user ? JSON.parse(user) : null,
}


const AppContext=React.createContext()


const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)



    return (
        <AppContext.Provider value={{state}}  >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext=()=>{
    return useContext(AppContext)
}

export {initialState,AppContext,useAppContext,AppProvider,}