import '@/styles/globals.css'
import { Roboto, Source_Serif_Pro  } from 'next/font/google'

const roboto = Roboto ({ 
  weight: ['100','300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

  const serif = Source_Serif_Pro ({
    weight: ['200','300', '400', '600', '700', '900'],
    subsets: ['latin'],
  })

export default function App({ Component, pageProps }) {

  /* const [paginaLista, setPaginaLista] = useState(false)

    useEffect(() => {
        setPaginaLista(true)
    }, []) */

  return (
    <main className={serif.className}>

      <style jsx global>{`
        .roboto {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps } />

      {/* {paginaLista ? <Component {...pageProps} /> : null} */}
      
    </main>

  )
  
}
