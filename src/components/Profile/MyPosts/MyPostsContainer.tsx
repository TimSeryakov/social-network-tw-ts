import {addPost, PostDataType, updateTypedPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../../redux/store-redux";
import {BordersPropsType} from "../../common/utils/parseBordersProps";

type MapStatePropsType = {
  borders: BordersPropsType
  postsData: PostDataType[] // Array<PostDataType>
  typedPostText: string
}

type MapDispatchPropsType = {
  updateTypedPostText: (newValue: string) => void
  addPost: () => void
}

// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: StateType): MapStatePropsType => {
  return { // При изменении каждого будет производиться перерисовка
    borders: "t",
    postsData: state.profilePage.postsData,
    typedPostText: state.profilePage.typedPostText
  }
}

const mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MapDispatchPropsType => {
  return {
    updateTypedPostText: (newValue: string) => {dispatch(updateTypedPostText(newValue))},
    addPost: () => {dispatch(addPost())}

  }
}

// --------- Новая контейнерная компонента
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
