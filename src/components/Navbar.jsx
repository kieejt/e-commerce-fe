import { NavLink } from "react-router-dom"
const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Home</div></NavLink>
      <NavLink to={'/mens'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Mens</div></NavLink>
      <NavLink to={'/womens'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Womens</div></NavLink>
      <NavLink to={'/kids'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Kids</div></NavLink>
    </nav>
  )
}

export default Navbar