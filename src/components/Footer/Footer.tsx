import React, {FC} from 'react';


export const Footer: FC = () => (
    <footer className="h-12 bg-theme-bg-primary text-center border-t border-theme-border">
      <p className="text-theme-text p-3">
        Swish Swish Training Project © 2020 <span role="img" aria-label="samurai-cat">🐱‍👤</span>
        <a
            className="hover:text-white"
            href="https://it-incubator.by" target="_blank" rel="noopener noreferrer">it-incubator.by
        </a>
      </p>
    </footer>
)

