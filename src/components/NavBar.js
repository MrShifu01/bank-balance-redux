import '../index.css'

function NavBar() {
  return (
    <div className='nav'>
        <div>Kwik.</div>
        <ul className='nav-list'>
            <li className='nav-item'>Share</li>
            <li className='nav-item'>Shopping</li>
            <li className='nav-item'>Log In</li>
            <li className='nav-item'>Sign Up</li>
        </ul>
    </div>
  )
}

export default NavBar