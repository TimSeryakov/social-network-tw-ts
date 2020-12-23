import {RootActionsTypes} from "./store-redux";

const initialState = {}

export type SidebarType = typeof initialState

const sidebarReducer = (state: SidebarType = initialState, action: RootActionsTypes): SidebarType => {

    return state
}

export default sidebarReducer