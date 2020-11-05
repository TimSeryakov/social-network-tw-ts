import {addPostAC, PostsDataType, updateTypedPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store-redux";
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
  return {
    borders: "t",
    postsData: state.profilePage.postsData,
    typedPostText: state.profilePage.typedPostText
  }
}
const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => { // FIXME ANY
  return {
    updateTypedPostText: (newValue: string) => {dispatch(updateTypedPostTextAC(newValue))},
    addPost: () => {dispatch(addPostAC())}

  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
