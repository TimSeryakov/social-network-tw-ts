import React, {FC} from 'react';
import ninjacat from './../../assets/img/ninjacat.png'

export const Footer: FC = () => (
    <footer className="h-14 bg-theme-bg-primary text-center border-t border-theme-border">
      <p className="text-theme-text p-4">
        Shuh Shuh Training Project © 2020 <img className="w-5 h-5 inline-block mb-1 mx-1" src={ninjacat} alt="ninja cat emoji"/>

        <a
            className="hover:text-white"
            href="https://it-incubator.by" target="_blank" rel="noopener noreferrer">it-incubator.by
        </a>
      </p>
    </footer>
)

