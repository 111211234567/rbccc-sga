import { REGISTER, LOGIN, LOGOUT, SHOW_ALERT, CLEAR_ALERT,GET_ALL_NEWS,GET_ONE_NEWS
    ,GET_ALL_ANOUNCEMENT,GET_ALL_AGENDA,GET_ONE_AGENDA,
    GET_ONE_ANOUNCEMENT } from "./action";
import { initialState } from "./AppContext";

const reducer = (state, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload.user }
        case LOGOUT:
            return { ...initialState, user: null }
        case SHOW_ALERT:
            return { ...state, showAlert: true, alertText: action.payload.msg }
        case CLEAR_ALERT:
            return { ...state, showAlert: false, alertText: "" }
        case GET_ALL_NEWS:
            return {...state, news:action.payload.news}
        case GET_ONE_NEWS:
            return {...state,new:action.payload.news}
        case GET_ALL_ANOUNCEMENT:
            return {...state,anouncements:action.payload }
        case GET_ONE_ANOUNCEMENT:
            return {...state,anouncement:action.payload.anouncement}
        case GET_ALL_AGENDA:
            return {...state,agendas:action.payload.ageandas}
        case GET_ONE_AGENDA:
            return {...state,agenda:action.payload.agenda}
    }
}

export default reducer