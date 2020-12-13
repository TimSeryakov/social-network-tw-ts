import React from 'react';
import './../../../../styles/index.css'

type PostType = {
    text: string
    likesCount: number
}

export function Post(props: PostType) {
    return (
        <div className="px-6 pt-6 pb-3 mt-4 rounded-md bg-theme-bg-secondary text-theme-text">
            <div>
                <p>{props.text}</p>
            </div>
            <div className="flex justify-end mt-4">
                <i className="far fa-thumbs-up"/><span className="pl-1 text-xs font-bold">{props.likesCount}</span>
            </div>
        </div>
    )
}