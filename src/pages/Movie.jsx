import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

function Movie() {
  const { id } = useParams()
  const [filme, setFilme] = useState(null)

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=5487f25f9b1317a16aa20bd4a1df148d&language=pt-BR`
    
    fetch(url)
      .then(res => res.json())
      .then(data => setFilme(data))
      .catch(erro => console.log(erro))

  }, [id])

  // Função para salvar o filme
  const salvarFilme = () => {
    const minhaLista = localStorage.getItem("@cineexplorer")
    let filmesSalvos = JSON.parse(minhaLista) || []

    // Verifica se já existe
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

    if (hasFilme) {
        alert("Esse filme já está na sua lista!")
        return
    }

    filmesSalvos.push(filme)
    localStorage.setItem("@cineexplorer", JSON.stringify(filmesSalvos))
    alert("Filme salvo com sucesso!")
  }

  // Se o filme ainda não carregou ou deu erro
  if (!filme) return <p>Carregando...</p>

  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            
            {/* Capa do Filme */}
            <img 
                src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} 
                alt={filme.title}
                style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }}
            />
            
            <h1 style={{ marginBottom: '10px' }}>{filme.title}</h1>
            <p style={{ color: '#666', fontStyle: 'italic' }}>"{filme.tagline}"</p>
            
            <div style={{ margin: '20px 0', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <span>📅 {filme.release_date}</span>
                <span>⭐ {filme.vote_average?.toFixed(1)}</span>
                
                {/* Botão Salvar */}
                <button 
                    onClick={salvarFilme}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#27ae60',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Salvar em Favoritos
                </button>
            </div>

            <h3>Sinopse</h3>
            <p style={{ lineHeight: '1.6' }}>{filme.overview}</p>
        </div>
      </main>
    </div>
  )
}

export default Movie