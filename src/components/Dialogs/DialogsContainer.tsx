import {DialogDataType, MessageDataType, sendMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType} from "../../redux/store-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {Dialogs} from "./Dialogs";
import React from "react";
import {reset} from "redux-form";

type MapStatePropsType = {
    dialogsData: DialogDataType[] // Array<DialogDataType>
    messagesData: MessageDataType[] // Array<MessageDataType>
    isAuth: boolean
}

type MapDispatchPropsType = {
    sendMessage: (value: string) => void
}

// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return { // При изменении каждого будет производиться перерисовка
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MapDispatchPropsType => {
    return {
        sendMessage: (messageText: string) => {
            dispatch(reset("dialogSendMessageForm"))
            dispatch(sendMessageAC(messageText))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

