import { REGISTER, LOGIN, LOGOUT } from "./action";
import { initialState } from "./AppContext";

const reducer = (state, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload.user }
            case LOGOUT:
                return {...initialState,user:null}
    }
}

export default reducer