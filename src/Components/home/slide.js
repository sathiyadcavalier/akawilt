import S2 from "../Pages/img/S2.jpg"
import Pro from "../Pages/img/DSC_1152.jpg"
import Pro1 from "../Pages/img/ballUp.jpg"

export default function Slide() {


    return (


        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={S2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Pro} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Pro1} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    )

}