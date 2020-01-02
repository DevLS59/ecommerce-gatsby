import React, {useState} from 'react' 
import logo from '../../images/dkk-color.png'
import  {Link} from 'gatsby'

import {FaCartArrowDown} from 'react-icons/fa'

const Navbar = () => {

const [navbarOpen, setNavbarOpen] = useState({open:false, css: 'collapse navbar-collapse' })
const [links, setLinks] = useState([{id:1, path : '/',text : 'home'},
                                    {id:2, path : '/about', text : 'about'},
                                    ])
// const [css, setCss] = useState('collapse navbar-collapse ')

const navbarHandler = () => {
    return (
        setNavbarOpen({css:'collapse navbar-collapse show', open : true})
        )
    }

return(
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <Link to="/" className="navbar-brand" >
        <img src={logo} alt="logo" style={{width : '50px'}}/>
    </Link>
    <button 
        className="navbar-toggler"
        type="button"
        onClick={navbarHandler}>
            <span className="navbar-toggler-icon"></span>
    </button>
    <div className={navbarOpen.css}>
        <ul className="navbar-nav mx-auto">
            {
                links.map( link => {
                    return(
                        <li key={link.id} className="nav-item">
                          <Link to={link.path} className="nav-link text-capitalize" > {link.text} </Link> 
                    </li>
                    )
                })
            }
            <li className="nav-item ml-sm-5">
                <FaCartArrowDown className='cart-icon'/>
            </li>
        </ul>
    </div>
</nav>
)
}
export default Navbar