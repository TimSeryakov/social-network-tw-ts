import {DialogDataType, MessageDataType, sendMessageAC, updateTypedMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../redux/store-redux";

type MapStatePropsType = {
  dialogsData: DialogDataType[] // Array<DialogDataType>
  messagesData: MessageDataType[] // Array<MessageDataType>
  typedMessageText: string
}

type MapDispatchPropsType = {
  updateTypedMessageText: (newValue: string) => void
  sendMessage: () => void
}

// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: StateType): MapStatePropsType => {
  return { // При изменении каждого будет производиться перерисовка
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    typedMessageText: state.dialogsPage.typedMessageText
  }
}

const mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MapDispatchPropsType => {
  return {
    updateTypedMessageText: (newValue: string) => {dispatch(updateTypedMessageTextAC(newValue))},
    sendMessage: () => {dispatch(sendMessageAC())}
  }
}

// --------- Новая контейнерная компонента
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
