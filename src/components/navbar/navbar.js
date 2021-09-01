import './navbar.css';

export const Navbar = () => {
    return (
        <nav className=" navbar navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand">Reddit<a className="minimal">Minimal</a></a>
                <form className="d-flex">
                    <input className="searchbar form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );

}