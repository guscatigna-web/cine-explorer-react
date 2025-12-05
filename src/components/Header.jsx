import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ backgroundColor: '#2c3e50', padding: '20px', color: 'white', textAlign: 'center' }}>
   
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h1>CineExplorer 🍿</h1>
        </Link>
        
        <nav style={{ marginTop: '10px' }}>
        
            <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none', fontWeight: 'bold' }}>
                Início
            </Link>
            <Link to="/favorites" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
    Favoritos
</Link>
        </nav>
    </header>
  )
}

export default Header