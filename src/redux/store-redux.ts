import {combineReducers, createStore} from "redux";
import dialogsReducer, {
  DialogsPageType,
  SendMessageActionType,
  UpdateTypedMessageTextActionType
} from "./dialogs-reducer";
import profileReducer, {AddPostActionType, ProfilePageType, UpdateTypedPostTextActionType} from "./profile-reducer";
import sidebarReducer, {SidebarType} from "./sidebar-reducer";

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  getState: () => StateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | UpdateTypedPostTextActionType |
                           UpdateTypedMessageTextActionType | SendMessageActionType

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store