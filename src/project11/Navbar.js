import {useGlobalContext} from './context'
import image from '../images/shopping-bag.png'

const Navbar = () => {
    const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()

    return (
        <>
            <nav className="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={image} alt="" width={20} />
                        <button className="btn toggle-btn" onClick={openSidebar}>
                            open Sidebar
                        </button>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <button className="link-btn">
                                products
                            </button>
                        </li>
                        <li>
                            <button className="link-btn">
                                developers
                            </button>
                        </li>
                        <li>
                            <button className="link-btn">
                                company
                            </button>
                        </li>
                    </ul>
                    <button className="btn signin-btn">Sign In</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar