import React from 'react';
import fuji from "../../../assets/img/fuji.png";

export const ProfileInfo = () => {
  return (
      <section className="">

        <div>
          <img className="w-32 h-32 bg-theme-bg-secondary rounded-full border border-theme-border flex items-center justify-center"
               src={fuji}
               alt={`${fuji} avatar`}
          />
        </div>
      </section>
  )
}