import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate, faCode, faHashtag, faSuitcase, faWrench, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn,} from '@fortawesome/free-brands-svg-icons'

export default function Box(){

    return(

        <div className="row justify-content-center m-3">

        <div className="col-md-3  col-xs-12 box-1 m-3 rounded">

            <div className="icon">

                <i className="fa" aria-hidden="true">
                    <FontAwesomeIcon icon={faBriefcase} />
                </i>

            </div>

            <div className="content">

                <h3>About me</h3>
                <p>Self Made Frontend Developer with expertise in Web Designing
                    and User Interface Development.</p>

            </div>

        </div>

        <div className="col-md-3  col-xs-12 box-1 m-3 rounded">

            <div className="icon">

                <i className="fa" aria-hidden="true">
                    <FontAwesomeIcon icon={faCode} />
                </i>

            </div>

            <div className="content text-start">

                <h3 className="">Programming</h3>
                <ul>
                    <li>Languages - Python</li>
                    <li>Web - HTML, CSS, Javascript, React</li>
                    <li>Data Structures and Algorithms</li>
                </ul>

            </div>
        </div>

        <div className="col-md-3  col-xs-12 box-1 m-3 rounded">

            <div className="icon">

                <i className="fa" aria-hidden="true">
                    <FontAwesomeIcon icon={faWrench} />
                </i>

            </div>

            <div className="content text-start">

                <h3 className="">Tools and Technologies</h3>
                <ul>
                    <li>ADOBE - Photoshop, Premium Pro</li>
                    <li>IDE - Visual Studio Code and PyCharm</li>
                    <li>Microsoft - Word, Excel, Powerpoint</li>
                </ul>

            </div>

        </div>

        <div className="col-md-3  col-xs-12 box-1 m-3 rounded">

            <div className="icon">

                <i className="fa" aria-hidden="true">
                    <FontAwesomeIcon icon={faSuitcase} />
                </i>

            </div>

            <div className="content text-start">

                <h4 className="">Processor Ass.| Mphasis</h4>
                <p>August 2018 - Present</p>
                <p>I'm a Passionate Professional. 3+ Years of experience in Us Mortgage Domain.</p>
            </div>

        </div>
        <div className="col-md-3  col-xs-12 box-1 m-3 rounded">

            <div className="icon">

                <i className="fa" aria-hidden="true">
                    <FontAwesomeIcon icon={faCertificate} />
                </i>

            </div>

            <div className="content text-start">

                <h4 className="text-center">Awards</h4>
                <ul>
                    <li>Rising star of Digital Risk Dec 2018</li>
                    <li>Top Performer Sep 2019</li>
                    <li>Top Performer Sep 2019</li>
                    <li>Rising star of Digital Risk Sep 2021</li>
                </ul>

            </div>

        </div>

        <div className="col-md-3  col-xs-12 box-1 m-3 rounded">

            <div className="icon">

                <i className="fa" aria-hidden="true">
                    <FontAwesomeIcon icon={faHashtag} />
                </i>

            </div>

            <div className="content text-start">

                <h4 className="text-center">Follow me on</h4>
                <ul>
                    <li className="fa m-2">
                        <a className="customDeco" href="https://www.linkedin.com/in/sathiyaseelanr/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li className="fa m-2">
                        <a className="customDeco" href="https://www.instagram.com/sathiya.ravi/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>

                    <li className="fa m-2">
                        <a className="customDeco" href="https://github.com/sathiyadcavalier/">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>

    </div>  

    )

}