import React from 'react';
import samurai from '../../../assets/img/samurai.png';

export const ProfileInfo = () => {
  return (
      <section className="">

        <div>
          <img className="w-32 h-32 bg-theme-bg-secondary rounded-full border border-theme-border flex items-center justify-center"
               src={samurai}
               alt={`${samurai} avatar`}
          />

        </div>
      </section>
  )
}