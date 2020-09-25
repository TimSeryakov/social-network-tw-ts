import React from 'react';
import samurai from '../../../assets/img/samurai.png';

export const ProfileInfo = () => {
  return (
      <section className="">

        <div>
          <img className="rounded-full w-16 h-16"
               src={samurai}
               alt=""
          />

          <h4>Profile info goes here</h4>
        </div>
      </section>
  )
}