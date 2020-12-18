import React, {FC, KeyboardEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type DialogsFormPropsType = {}

export type DialogsFormDataType = {
    newMessageTextareaValue: string
}

const DialogsForm: FC<InjectedFormProps<DialogsFormDataType, DialogsFormPropsType> & DialogsFormPropsType> = (props) => {

    const buttonRef = React.createRef<HTMLButtonElement>()

    const onMessageTextareaKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            buttonRef.current?.click()
        }
    }

    return (
        <div className="pt-3 border-t border-theme-border">

            <form onSubmit={props.handleSubmit}>
                <div className="flex mx-3 mb-3">
                    <Field
                        component="textarea"
                        name="newMessageTextareaValue"
                        className="flex-grow w-full px-3 py-1 mr-2 text-white placeholder-gray-700 border rounded-md resize-none border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline"
                        placeholder="Write message..."
                        onKeyPress={onMessageTextareaKeyPress}
                    />
                    <button
                        className="px-4 py-2 text-white rounded-md bg-theme-accent-alternative focus:outline-none focus:shadow-outline
                                   hover:bg-theme-accent-alternative-hover hover:border-theme-accent-alternative"
                        ref={buttonRef}
                    >
                        Send
                    </button>
                </div>
            </form>

        </div>
    )
}

const DialogsFormRedux = reduxForm<DialogsFormDataType, DialogsFormPropsType>({form: "dialogsSendMessageForm"})(DialogsForm)

export default DialogsFormRedux

