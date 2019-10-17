import Link from 'next/link';

const Nav = () => (
    <nav className="navbar navbar-expand navbar-dark bg-info">
        <div className="container">
            <Link href="/"><a className="navbar-brand">AllBitcoin</a></Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">
                        <a className="nav-link">About</a>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav> 




)

export default Nav;