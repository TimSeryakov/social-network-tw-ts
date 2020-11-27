import {combineReducers, createStore} from "redux";
import dialogsReducer, {
  DialogsPageType,
  SendMessageActionType,
  UpdateTypedMessageTextActionType
} from "./dialogs-reducer";
import profileReducer, {
  AddPostActionType,
  ProfilePageType,
  SetCurrentUserProfileActionType,
  UpdateTypedPostTextActionType
} from "./profile-reducer";
import sidebarReducer, {SidebarType} from "./sidebar-reducer";
import usersReducer, {
  FollowActionType, SetCurrentPageActionType, SetTotalUsersCountActionType,
  SetUsersDataActionType, SetUsersFetchingActionType,
  UnfollowActionType,
  UsersPageType,

} from "./users-reducer";
import authReducer, {AuthStateType, SetUserDataActionType} from "./auth-reducer";

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
                           SetUserDataActionType

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer
})

const store = createStore(reducers)

export default store