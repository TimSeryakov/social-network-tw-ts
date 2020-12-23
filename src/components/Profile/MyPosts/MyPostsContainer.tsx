import {addPostAC, PostDataType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store-redux";
import {BordersPropsType} from "../../common/helpers/parseBordersProps";
import {FormAction, reset} from "redux-form";

type MapStatePropsType = {
    borders: BordersPropsType
    postsData: PostDataType[] // Array<PostDataType>
}

type MapDispatchPropsType = {
    addPost: (newPost: string) => void
}

// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return { // При изменении каждого будет производиться перерисовка
        borders: "t",
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = (dispatch: (actions: FormAction) => void): MapDispatchPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
            dispatch(reset("AddPostForm"))
        }

    }
}

// --------- Новая контейнерная компонента
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
