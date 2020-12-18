import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsPageType, SendMessageActionType,} from "./dialogs-reducer";
import profileReducer, {
    AddPostActionType,
    GetProfileUserStatusActionType,
    ProfileDataFetchingActionType,
    ProfilePageType,
    SetCurrentUserProfileActionType,
    SetProfileUserStatusActionType
} from "./profile-reducer";
import sidebarReducer, {SidebarType} from "./sidebar-reducer";
import usersReducer, {
    FollowActionType,
    SetCurrentPageActionType,
    SetTotalUsersCountActionType,
    SetUserFollowStatusFetchingActionType,
    SetUsersDataActionType,
    SetUsersFetchingActionType,
    UnfollowActionType,
    UsersPageType,
} from "./users-reducer";
import authReducer, {AuthDataFetchingActionType, AuthStateType, SetUserDataActionType} from "./auth-reducer";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {Dispatch} from "react";
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

export type GetStateType = () => RootStateType
export type DispatchType = Dispatch<ActionsTypes>

export type ActionsTypes = AddPostActionType | SendMessageActionType | FollowActionType |
            UnfollowActionType | SetUsersDataActionType |
            SetCurrentPageActionType | SetTotalUsersCountActionType |
            SetUsersFetchingActionType | SetCurrentUserProfileActionType |
            SetUserDataActionType | AuthDataFetchingActionType |
            SetUserFollowStatusFetchingActionType | ProfileDataFetchingActionType |
            GetProfileUserStatusActionType | SetProfileUserStatusActionType


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: reduxFormReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

// @ts-ignore
window.state = store.getState()

export default store