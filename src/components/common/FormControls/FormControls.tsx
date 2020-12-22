import React, {FC} from 'react';


export const CustomTextarea: FC = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error
    const inputStyle = `flex-grow px-3 py-1 mr-2 text-white placeholder-gray-700 border rounded-md resize-none 
                        border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline`

    const errorSpanStyle = `text-red-400 pl-3 text-sm`

    return (
        <div className="inline-block text-left">
            <textarea
                className={inputStyle}
                {...props.input}
            />

            { hasError && <><br/><span className={errorSpanStyle}>{meta.error}</span></>}
        </div>
    )
}
