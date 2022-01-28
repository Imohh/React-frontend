function Header() {
    return (
        <>
            <header>
                <nav className="nav">
                    <ul className="menu-nav">
                        <li className="menu-nav__item active">
                            <a href="index.html" className="menu-nav__link">
                                Home
                            </a>
                        </li>
                        <li className="menu-nav__item">
                            <a href="index.html" className="menu-nav__link">
                                About
                            </a>
                        </li>
                        <li className="menu-nav__item">
                            <a href="index.html" className="menu-nav__link">
                                Services
                            </a>
                        </li>
                        <li className="menu-nav__item">
                            <a href="index.html" className="menu-nav__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header