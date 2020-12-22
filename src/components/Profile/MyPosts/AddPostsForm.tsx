import React, {FC, KeyboardEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength} from "../../../helpers/validators/validators";


type AddPostsFormPropsType = {}

export type AddPostsFormDataType = {
    addPostTextareaValue: string
}


const AddPostsForm: FC<InjectedFormProps<AddPostsFormDataType, AddPostsFormPropsType> & AddPostsFormPropsType> = (props) => {

    const buttonRef = React.createRef<HTMLButtonElement>()

    const onAddPostTextareaKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            buttonRef.current?.click()
        }
    }

    const maxLength10 = maxLength(10)

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="flex px-4 py-4 pb-3 border-b border-theme-border">
                <Field
                    component="textarea"
                    name="addPostTextareaValue"
                    className="flex-grow px-3 py-1 mr-2 text-white placeholder-gray-700 border rounded-md resize-none border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline"
                    placeholder="What's new..."
                    onKeyPress={onAddPostTextareaKeyPress}
                    validate={[maxLength10]}
                />
                <button
                    className="px-4 py-2 text-white rounded-md bg-theme-accent-alternative focus:outline-none focus:shadow-outline
                               hover:bg-theme-accent-alternative-hover hover:border-theme-accent-alternative"
                    ref={buttonRef}
                >
                    Post
                </button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<AddPostsFormDataType, AddPostsFormPropsType>({form: "AddPostForm"})(AddPostsForm)

export default AddPostFormRedux
