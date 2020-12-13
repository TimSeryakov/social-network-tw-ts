import React from 'react';
import ninjacat from './../../assets/img/ninjacat.png'
import {BordersPropsType, parseBordersProps} from "../common/utils/parseBordersProps";

type FooterPropsType = {
    borders: BordersPropsType
}

export function Footer(props: FooterPropsType) {

    const footerStyle = `${parseBordersProps(props.borders)} h-14 bg-theme-bg-primary text-center`

    return (
        <footer className={footerStyle}>
            <p className="p-4 text-theme-text">
                <span className="hidden sm:inline">Shuh Shuh Training Project © 2020</span>
                <img className="inline-block w-5 h-5 mx-1 mb-1"
                     src={ninjacat}
                     alt="ninja cat emoji"/>

                <a
                    className="hover:text-white"
                    href="https://it-incubator.by" target="_blank" rel="noopener noreferrer">it-incubator.by
                </a>
            </p>
        </footer>
    )
}
