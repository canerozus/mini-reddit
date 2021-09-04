
import SearchBar from '../searchBar/searchBar';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className=" navbar navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand">Reddit<a className="minimal">Minimal</a></a>
                <SearchBar/>
            </div>
        </nav>
    );

}