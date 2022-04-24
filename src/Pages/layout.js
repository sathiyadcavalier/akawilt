import { Outlet, Link } from "react-router-dom"

export default function Layout() {

    return (
        <div className="container-fluid p-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">WILT</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">

                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/experiments">Experiments</Link>
                            <Link className="nav-link" to="/blog">Blog</Link>
                            <Link className="nav-link" to="/aboutme">About Me</Link>

                        </div>

                    </div>

                </div>



            </nav>

            <Outlet />
        </div>
    )

}