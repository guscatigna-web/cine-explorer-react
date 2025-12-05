import { useState, useEffect } from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'

function Favorites() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem("@cineexplorer")
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  const excluirFilme = (id) => {
    const novaLista = filmes.filter((filme) => filme.id !== id)
    setFilmes(novaLista)
    localStorage.setItem("@cineexplorer", JSON.stringify(novaLista))
  }

  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Meus Favoritos ⭐</h2>

        {filmes.length === 0 && <p>Você ainda não salvou nenhum filme :(</p>}

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filmes.map(filme => (
                <div key={filme.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <MovieCard 
                        id={filme.id} 
                        titulo={filme.title} 
                        imagem={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} 
                    />

                    <button 
                        onClick={() => excluirFilme(filme.id)}
                        style={{ marginTop: '-5px', marginBottom: '20px', backgroundColor: '#c0392b', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Remover
                    </button>
                </div>
            ))}
        </div>
      </main>
    </div>
  )
}

export default Favorites