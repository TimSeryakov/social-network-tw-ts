import {combineReducers, createStore} from "redux";
import dialogsReducer, {
  DialogsPageType,
  SendMessageActionType,
  UpdateTypedMessageTextActionType
} from "./dialogs-reducer";
import profileReducer, {
  AddPostActionType, ProfileDataFetchingActionType,
  ProfilePageType,
  SetCurrentUserProfileActionType,
  UpdateTypedPostTextActionType
} from "./profile-reducer";
import sidebarReducer, {SidebarType} from "./sidebar-reducer";
import usersReducer, {
  FollowActionType, SetCurrentPageActionType, SetTotalUsersCountActionType, SetUserFollowStatusFetchingActionType,
  SetUsersDataActionType, SetUsersFetchingActionType,
  UnfollowActionType,
  UsersPageType,

} from "./users-reducer";
import authReducer, {AuthDataFetchingActionType, AuthStateType, SetUserDataActionType} from "./auth-reducer";

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

export type ActionsTypes = AddPostActionType | UpdateTypedPostTextActionType |
                           UpdateTypedMessageTextActionType | SendMessageActionType |
                           FollowActionType | UnfollowActionType | SetUsersDataActionType |
                           SetCurrentPageActionType | SetTotalUsersCountActionType |
                           SetUsersFetchingActionType | SetCurrentUserProfileActionType |
                           SetUserDataActionType | AuthDataFetchingActionType |
                           SetUserFollowStatusFetchingActionType | ProfileDataFetchingActionType

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer
})

const store = createStore(reducers)


// @ts-ignore
window.state = store.getState()

export default store