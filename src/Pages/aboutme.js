import mylogo from "../img/WILT1.png"
import "../style/aboutme.css"

export default function Aboutme() {

    return (

        <>

            <div class="container-fluid" style={{ marginTop: "50px" }}>

                <div class="row">

                    <div class="col-md-3">

                        <img src={mylogo} alt="profilepicture" width="100%" style={{ marginTop: "100px" }} />

                    </div>

                    <div class="col-md-8">

                        <h3>A story about my journey</h3>

                        <p class="alert alert-info justify">As a teenager at school, I was the kid other students approached about
                            issues with their phone or
                            laptop. I was the go-to guy for fixing resolving any technical problems.

                            Today, not much has changed. I’m still the first point of call for technical issues.

                            After completed my bachelor's degree I joined Agaram Infotech as ASP.net Developer. I quit that job
                            because I thought coding is not the right thing for me. I Realised later that decision was
                            completely wrong. So I went to Non-technical job at Mphasis(Currently working here). Couple of years
                            went. I enjoyed and learnt a lot in Mphasis. One day I thought why not we try to learn programming
                            languages? Then started to learn python since it's a popular programming language and easy to start.
                            I gave myself lot time to understand the basic thoroughly and started to solve some problems. Days
                            went slowly I'm started gaining confidence and clarity. Then again a thought came. what we can do
                            with python? see I was that dumb😂 don't know why I choose this language. somehow I
                            choose python. Ok what happened is happened. Let think what you can do with python? Then I started
                            reading some blogs. Then I come to know we can do web application using Django framework. Started
                            learning Django. Developed some simple web applications. After that my overconfidence reached the
                            Himalayan peak lol!!. Ok sathiya you are now the best developer in the world 😂. it's a time to
                            attend an interview. One of favourite experience in the technical and programming round of some xyz
                            company. An interviewer asked me to solve some problems I did it. my inner thought "comeon sathiya
                            you are selected" . Then the next question from the interviewer do you know Restful API. My reaction
                            was "what the hell is that 🙄"...lot of questions from recruiter what is serializer, JSON, Django rest
                            framework etc...Omg I'm not even know one percent of web development. After that interview I saw a
                            roadmap to become web developer. Then learnt RestAPI, Django rest framework. Also my friends told
                            something Interesting about javascript frameworks like React Js, Express Js, Mongo db, Node js(A
                            runtime environment). Cool!!
                            Currently I'm learning this as well.</p>

                    </div>

                    <div>

                        <i class="fa-brands fa-instagram"></i>

                    </div>

                </div>

            </div>

        </>

    )

}