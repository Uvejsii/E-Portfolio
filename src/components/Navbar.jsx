const Navbar = () => {

    const navbarItems = [
        {name: 'Top', id: '#top'},
        {name: 'Technologies', id: '#technologies'},
        {name: 'Projects', id: '#projects'},
        {name: 'Certificates', id: '#certificates'}
    ]

    return (
        <nav className="navbar navbar-expand-lg fixed-top px-5">
            <div className="container-fluid">
                <a href="#top">
                    <img src="/logo.jpg" alt="logo" className="logo border rounded-4"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {navbarItems.map((item) => (
                            <li className="nav-item" key={item.id}>
                                <a className="nav-link active text-light fw-medium fs-5" href={item.id}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;