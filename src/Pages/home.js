import React from "react";
import "../style/home/my-style.css";
import "../style/fontawesome.css";
import TypingEffect from "../Components/home/header";
import headerimg from "../img/S2.jpg";
import Box from "../Components/home/box";
import Footer from "../Components/home/footer";




class Home extends React.Component {

    constructor(props) {

        super();

        this.state = {

            text: "",
            width: "300px",
            height: "300px",
            topText: "Top Text",
            bottomText: "Bottom Text",

        }

    }

    render() {

        return (

            <>


                {/*Header*/}

                <div className="container-fluid">
                    <div className="row m-3">
                        <div className="col-md-6 col-xs-12 boxeffect">
                            <img src={headerimg} className="imgmystyle d-block w-100" alt="myImage" />
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <TypingEffect />
                        </div>
                    </div>
                </div>

                {/*Content*/}

                <div className="container-fluid">

                    <Box />

                </div>

                <Footer />

            </>
        )

    }

}

export default Home;