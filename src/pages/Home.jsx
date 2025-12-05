import { useState, useEffect } from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'

function Home() {
  const [filmes, setFilmes] = useState([])
  const [termoBusca, setTermoBusca] = useState('')

  const carregarPopulares = () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=5487f25f9b1317a16aa20bd4a1df148d&language=pt-BR"
    fetch(url)
      .then(response => response.json())
      .then(data => setFilmes(data.results))
      .catch(erro => console.log(erro))
  }

  useEffect(() => {
    carregarPopulares()
  }, [])

  const buscarFilmes = (e) => {
    e.preventDefault()
    if(termoBusca === '') {
      carregarPopulares()
      return
    }
    const urlBusca = `https://api.themoviedb.org/3/search/movie?api_key=5487f25f9b1317a16aa20bd4a1df148d&query=${termoBusca}&language=pt-BR`
    fetch(urlBusca)
      .then(response => response.json())
      .then(data => setFilmes(data.results))
      .catch(erro => console.log(erro))
  }

  return (
    <div>
      <Header />
      <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={buscarFilmes} style={{ marginBottom: '30px', width: '100%', maxWidth: '600px', display: 'flex' }}>
            <input 
                type="text" 
                placeholder="Pesquise um filme..." 
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                style={{ flex: 1, padding: '10px', fontSize: '16px', borderRadius: '5px 0 0 5px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer' }}>
                Buscar
            </button>
        </form>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filmes.map(filme => (
            <MovieCard 
                key={filme.id} 
                id={filme.id}
                titulo={filme.title} 
                imagem={filme.poster_path ? `https://image.tmdb.org/t/p/w500${filme.poster_path}` : 'https://placehold.co/500x750?text=Sem+Imagem'} 
            />
            ))}
        </div>
      </main>
    </div>
  )
}

export default Home