import {ActionsTypes} from "./store-handmade";

const initialState = {}

export type SidebarType = typeof initialState

const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {

      return state
}

export default sidebarReducer