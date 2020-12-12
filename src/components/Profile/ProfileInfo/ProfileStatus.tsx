import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusType = {
    userStatus: string
    updateUserStatus: (userProfileStatus: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState("Loading...")

    useEffect(() => {
        setStatus(props.userStatus)
    }, [props.userStatus])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    return (
        <div>
            <div className={`${editMode ? "hidden" : "block"}`}>
                  <span onDoubleClick={activateEditMode}
                        className="text-theme-text"
                  >
                    {status || 'You can change status by double click...'}
                  </span>
            </div>

            <div className={`${editMode ? "block" : "hidden"}`}>
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setStatus(e.currentTarget.value)
                }}
                       onBlur={deactivateEditMode}
                       autoFocus={true}
                       value={status}
                       className="bg-theme-bg-third border border-theme-border px-3 py-1 rounded-md"
                />
            </div>
        </div>
    )
}