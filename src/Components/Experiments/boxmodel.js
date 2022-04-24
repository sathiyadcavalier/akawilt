import "./experiments.css"
import flexArchitecture from "../../img/architectureOfFlex.png";

export default function BoxModel() {

    return (

        <>

            <div className="parentContainerboxmodel">

                <div className="headingBoxmodel">

                    <div>
                    <h1 className="text-center">Flex Box Experiment</h1>
                    </div>
                    <div className="d-flex justify-content-center" >
                    <img src={flexArchitecture} className="mt-5 mb-5 flexArchitecture" alt="flexArchitecture" />
                    </div>

                </div>

                <div className="d-flex flex-row">

                    <div>
                        <h4>Display Flex Main Axis</h4>

                        <div className="d-flex flex-row mainBox">

                            <div className="boxModel-1 "></div>
                            <div className="boxModel-2"></div>
                            <div className="boxModel-3"></div>

                        </div>
                    </div>

                    <div className="border border-2 border-primary ms-5 me-5">

                    </div>

                    <div>
                        <h4>Display Flex Cross Axis</h4>
                        <div className="d-flex flex-column mainBox">

                            <div className="boxModel-1"></div>
                            <div className="boxModel-2"></div>
                            <div className="boxModel-3"></div>

                        </div>
                    </div>

                    <div className="border border-2 border-primary ms-5 me-5">

                    </div>

                    <div>

                        <h4>Display Flex align items cross axis</h4>

                        <div className="mainBox d-flex">

                            <div className="d-flex align-items-start">
                                <div className="boxModel-1"></div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="boxModel-2"></div>
                            </div>
                            <div className="d-flex align-items-end">
                                <div className="boxModel-3"></div>
                            </div>

                        </div>

                    </div>
                    <div className="border border-2 border-primary ms-5 me-5">

                    </div>
                    <div>

                        <h4>Display Flex justify-content main axis</h4>

                        <div className="mainBox d-flex flex-column flex-wrap">

                            <div className="d-flex justify-content-start">
                                <div className="boxModel-1"></div>
                            </div>

                            <div className="d-flex justify-content-center">

                                <div className="boxModel-2"></div>

                            </div>

                            <div className="d-flex justify-content-end">

                                <div className="boxModel-3"></div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>





        </>

    )

}