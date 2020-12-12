import {DialogDataType, MessageDataType, sendMessageAC, updateTypedMessageTextAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType} from "../../redux/store-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {Dialogs} from "./Dialogs";
import React from "react";

type MapStatePropsType = {
  dialogsData: DialogDataType[] // Array<DialogDataType>
  messagesData: MessageDataType[] // Array<MessageDataType>
  typedMessageText: string
  isAuth: boolean
}

type MapDispatchPropsType = {
  updateTypedMessageText: (newValue: string) => void
  sendMessage: () => void
}

// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return { // При изменении каждого будет производиться перерисовка
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    typedMessageText: state.dialogsPage.typedMessageText,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MapDispatchPropsType => {
  return {
    updateTypedMessageText: (newValue: string) => {dispatch(updateTypedMessageTextAC(newValue))},
    sendMessage: () => {dispatch(sendMessageAC())}
  }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

