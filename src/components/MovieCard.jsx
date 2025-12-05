// src/components/MovieCard.jsx
import { Link } from 'react-router-dom'

function MovieCard({ id, titulo, imagem }) {
  return (
    <div style={{ 
        width: '200px', 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '10px',
        transition: 'transform 0.2s'
    }}>
      <div style={{ position: 'relative' }}>
          <img src={imagem} alt={titulo} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </div>
      
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '16px', margin: '0 0 10px 0', height: '40px', overflow: 'hidden' }}>{titulo}</h3>
        
        <Link to={`/movie/${id}`}>
            <button style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#2c3e50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                Ver Detalhes
            </button>
        </Link>

      </div>
    </div>
  )
}

export default MovieCard