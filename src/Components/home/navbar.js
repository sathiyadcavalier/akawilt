export default function Navbar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">WILT</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">MemeGen</a>
                        <a class="nav-link" href="#">InvitationTemplate</a>
                        <a class="nav-link" href="http://wilt-blog.herokuapp.com">Blog</a>
                        <a class="nav-link" aria-current="page" href="#">About Me</a>
                    </div>
                </div>
            </div>
        </nav>

    )

}