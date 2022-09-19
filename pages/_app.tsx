import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const [color, setColor] = useState();

    useEffect(() => {
        fetch('http://www.colr.org/json/color/random', {
            mode: 'no-cors',
            cache: 'no-cache',
        })
            .then(res => console.log(res))
    }, []);

    return <Component {...pageProps} />
}

export default MyApp
