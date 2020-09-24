import React from 'react';

export const ProfileInfo = () => {
  return (
      <section className="border-2 rounded-md flex">
        <div>
          <img className="rounded-full w-16 h-16"
               src="https://avatars1.githubusercontent.com/u/109951?s=400&v=4"
               alt=""
          />

          <h2>Profile info goes here</h2>
        </div>
      </section>
  )
}