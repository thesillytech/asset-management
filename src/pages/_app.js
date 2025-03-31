import { Roboto, Roboto_Mono } from 'next/font/google'
import '../styles/globals.css'

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
})

export default function MyApp({ Component, pageProps }) {
    return (
      <div className={robotoMono.className}>
        <Component {...pageProps} />
      </div>
    )
}