import "./experiments.css"
import flexArchitecture from "../../img/architectureOfFlex.png";

export default function BoxModel() {

    return (

        <>

            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 col-xs-12">
                        <h1 className="text-center">Flex Box Experiment</h1>
                    </div>

                    <div className="col-12 col-xs-12">
                        <img className="img-fluid mx-auto d-block" src={flexArchitecture} alt="flexArchitecture" />
                    </div>

                </div>
            </div>

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className="col-3 bg-info m-1">
                        <h4>Flex Row</h4>
                        <div className="boxModel-row">
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                        </div>

                    </div>

                    <div className="col-3 bg-info m-1">
                        <h4>Flex Column</h4>
                        <div className="boxModel-column">
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                        </div>

                    </div>

                    <div className="col-3  bg-info m-1">

                        <h4>Flex Justify</h4>

                        <div className="boxModel-row boxModel-justify-start ">
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                        </div>

                        <div className="boxModel-row boxModel-justify-center">
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                        </div>

                        <div className="boxModel-row boxModel-justify-end">
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                            <div className="boxModel-box-1"></div>
                        </div>


                    </div>


                    



                </div>



            </div>


            <div className="bg-info m-1">

                        <h4>Flex Align</h4>

                        <div className="boxModel-row boxModel-justify-center boxModel-align-end ">
                            <div className="boxModel-box-1"></div>
                        </div>

                        <div className="boxModel-row boxModel-align-center">
                            <div className="boxModel-box-1"></div>
                        </div>

                        <div className="boxModel-row boxModel-align-end">
                            <div className="boxModel-box-1"></div>
                        </div>

                    </div>

        </>

    )

}