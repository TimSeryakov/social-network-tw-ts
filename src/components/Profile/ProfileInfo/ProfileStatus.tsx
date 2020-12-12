import React, {useState} from 'react'

type ProfileStatusType = {
  status: string
}

export const ProfileStatus = (props: ProfileStatusType) => {
  const [editMode, setEditMode] = useState(false)
  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  return (
      <div>
        <div className={`${editMode ? "hidden" : "block"}`}>
          <span onDoubleClick={activateEditMode}
                className="text-theme-text"
          >
            {props.status}
          </span>
        </div>

        <div className={`${editMode ? "block" : "hidden"}`}>
          <input onBlur={deactivateEditMode}
                 autoFocus={true}
                 value={props.status}
                 className="bg-theme-bg-third border border-theme-border px-3 py-1 rounded-md"
          />
        </div>
      </div>
  )
}