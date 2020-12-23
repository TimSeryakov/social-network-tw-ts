import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsActionTypes, DialogsPageType} from "./dialogs-reducer";
import profileReducer, {ProfileActionTypes, ProfilePageType} from "./profile-reducer";
import sidebarReducer, {SidebarType} from "./sidebar-reducer";
import usersReducer, {UserActionTypes, UsersPageType,} from "./users-reducer";
import authReducer, {AuthActionTypes, AuthStateType} from "./auth-reducer";
import logger from "redux-logger";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as reduxFormReducer} from 'redux-form';

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    sidebar: SidebarType
    auth: AuthStateType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ThunkDispatchType = ThunkAction<void, RootStateType, unknown, ActionsTypes>

export type ActionsTypes =
    | AuthActionTypes
    | UserActionTypes
    | ProfileActionTypes
    | DialogsActionTypes


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: reduxFormReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

export default store