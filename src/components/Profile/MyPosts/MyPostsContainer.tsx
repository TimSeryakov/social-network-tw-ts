import {addPostAC, PostsDataType, updateTypedPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../../redux/store-redux";
import {BordersPropsType} from "../../common/utils/parseBordersProps";

type MapStatePropsType = {
  borders: BordersPropsType
  postsData: Array<PostsDataType>
  typedPostText: string
}

type MapDispatchPropsType = {
  updateTypedPostText: (newValue: string) => void
  addPost: () => void
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return { // При изменении каждого будет производиться перерисовка
    borders: "t",
    postsData: state.profilePage.postsData,
    typedPostText: state.profilePage.typedPostText
  }
}

const mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MapDispatchPropsType => {
  return {
    updateTypedPostText: (newValue: string) => {dispatch(updateTypedPostTextAC(newValue))},
    addPost: () => {dispatch(addPostAC())}

  }
}

// --------- Новая контейнерная компонента
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
