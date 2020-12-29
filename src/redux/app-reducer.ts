import {requestAuthUserDataTC} from "./auth-reducer";
import {ThunkDispatchType} from "./store-redux";

// ---------------------------------------------------------------------------------------------------------------------
// Init State
// ---------------------------------------------------------------------------------------------------------------------

const initialState: AppStateType = {
    initialized: false
}

// ---------------------------------------------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------------------------------------------

export type AppStateType = {
    initialized: boolean
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type AppActionTypes =
    | ReturnType<typeof setInitializedSuccessfullyAC>


// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

export enum APP {
    SET_INITIALIZED_SUCCESSFULLY = "SET_INITIALIZED_SUCCESSFULLY",
}

// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

const appReducer = (state: AppStateType = initialState, action: AppActionTypes): AppStateType => {
    switch (action.type) {
        case APP.SET_INITIALIZED_SUCCESSFULLY: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators
// ---------------------------------------------------------------------------------------------------------------------

export const setInitializedSuccessfullyAC = () =>
    ({ type: APP.SET_INITIALIZED_SUCCESSFULLY } as const)

// ---------------------------------------------------------------------------------------------------------------------
// Thunk Creators
// ---------------------------------------------------------------------------------------------------------------------

export const initializeAppTC = (): ThunkDispatchType => async (dispatch/*, getState*/) => {
    let requestResult = dispatch(requestAuthUserDataTC())
    // Тут могут быть и другие шаги инициализации

    Promise.all([requestResult])
        .then(() => {
            dispatch(setInitializedSuccessfullyAC())
        })
}


export default appReducer


