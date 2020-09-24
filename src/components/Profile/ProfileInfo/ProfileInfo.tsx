import React from 'react';

export const ProfileInfo = () => {
  return (
      <section className="">
        <div>
          <h2 className="text-white text-3xl font-bold">Profile info</h2>
        </div>
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