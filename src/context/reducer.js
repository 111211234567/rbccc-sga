import { REGISTER, LOGIN, LOGOUT, SHOW_ALERT, CLEAR_ALERT } from "./action";
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
    }
}

export default reducer