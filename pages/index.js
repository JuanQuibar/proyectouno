import Layout from '@/layout/layout'
import Principales from '@/components/principales'
import UltimasNoticias from '@/components/ultimas-noticias'
import HomePolitica from '@/components/home-politica'
import Zona from '@/components/zona'

export default function Home({principales, politicas, manuel, series, libros, protagonistas, ultimasNoticias}) {

  
  
  return (
    
    <>
      <Layout>
        <Principales
          principales={principales} 
        />

        <UltimasNoticias
          ultimasNoticias={ultimasNoticias}
        >
        </UltimasNoticias>

        <HomePolitica 
         politicas={politicas}
        />

        <Zona 
          manuel={manuel}
          series={series}
          libros={libros}
          protagonistas={protagonistas}
        />
        
        
        
      </Layout> 
    </>
  )
}

export async function getServerSideProps() {

  const { signal } = new AbortController()
  
  const urlPrincipales = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=8&id=10&selectors=authors'
  const urlPolitica = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=12&id=105&selectors=authors'
  const urlOpinion = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=4&id=364&selectors=authors'
  const urlSeries = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=3&id=1183&selectors=authors'
  const urlLibros = 'https://api.diariouno.com.ar/2.0/public/articles/searchByTag?q=libros&size=2'
  const urlProtagonistas = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=5&id=1166&selectors=authors'
  const urlUltimasNoticias = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=30&id=351&selectors=authors'

  const [resPrincipales, resPolitica, resOpinion, resSeries, resLibros, resProtagonistas, resUltimasNoticias] = await Promise.all([
    fetch(urlPrincipales, { cache: 'no-store' }),
    fetch(urlPolitica, { next: { revalidate: 0 } }),
    fetch(urlOpinion, { signal }),
    fetch(urlSeries, { signal }),
    fetch(urlLibros, { signal }),
    fetch(urlProtagonistas, { signal }),
    fetch(urlUltimasNoticias, { signal })
  ])

  const [{"10":dataPrincipales}, {"105":dataPoliticas}, {"364":dataOpinion}, {"1183":dataSeries}, dataLibros, {"1166":dataProtagonistas}, {"351":dataUltimasNoticias} ] = await Promise.all([
    resPrincipales.json(),
    resPolitica.json(),
    resOpinion.json(),
    resSeries.json(),
    resLibros.json(),
    resProtagonistas.json(),
    resUltimasNoticias.json()
  ])

  const principales = dataPrincipales.newsArticles


  const principalesID = dataPrincipales.newsArticles.map((e) => e.id)
  console.log(principalesID)
  
  const politicas = dataPoliticas.newsArticles.filter(
    elemento => !principalesID.includes(elemento.id)
  ).slice(0, 4);

  const manuel = dataOpinion.newsArticles.filter(
    elemento => !principalesID.includes(elemento.id) && elemento.authors[0].id === 20).slice(0, 1)[0];
  
  const series= dataSeries.newsArticles.filter( elemento => !principalesID.includes(elemento.id)).slice(0,1)[0]

  const libros = dataLibros.newsArticles.filter( elemento => !principalesID.includes(elemento.id)).slice(0,1)[0]
  
  const protagonistas = dataProtagonistas.newsArticles.filter( elemento => !principalesID.includes(elemento.id)).slice(0,1)[0]
  
  const ultimasNoticias = dataUltimasNoticias.newsArticles.filter(
    elemento => !principalesID.includes(elemento.id)
  ).slice(0, 6);
 
  return{
    props:{
      principales,
      politicas,
      manuel,
      series,
      libros,
      protagonistas,
      ultimasNoticias
    }
  }
}
