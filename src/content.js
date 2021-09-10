import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import ReactMediumImg from "react-medium-zoom";
import curr_pic from "./pictures/profile_pic_1.jpg"; 


let defaultContent = (
    <p>
        Error 404: You are somewhere where I did not expect to you to be... very suspicious of me AND you
    </p>
);
let content = {
    about: {
        cv: {
            body: (
                <div>
                <p>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1Gupj6G8ejUxQpbmu5oj3b-7eTUv7MlJY/view?usp=sharing"
                    >
                        resume pdf
                    </a>
                    .
                </p>
                <p>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1Q3W6itdT2O0EijM9fsY-NgE8QjDxz3H_/view?usp=sharing"
                    >
                        portfolio pdf
                    </a>
                    .
                </p>
                </div>
        
            
                
            ),
        },

        portfolio: {
            body: (
                <p>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1Q3W6itdT2O0EijM9fsY-NgE8QjDxz3H_/view?usp=sharing"
                    >
                        pdf
                    </a>
                    .
                </p>
            ),
        },
       
        
        body: (
            <div>
                <p>
                    <center>
                        <img
                            src={curr_pic}
                            //alt=""
                            style={{
                                width: "450px",
                                marginTop: "20px",
                            }}
                        />
                    </center>
                </p>
                <p> 
                    Trevor Van de Velde (b. 1998) is a composer and creative technologist currently based in Hanover, New Hampshire. 
                </p>
                <p>
                    His research is oriented towards electroacoustic composition, mixed-media installation, hacking appliances, as well as exploring the space between technology and self. Trevor’s works are designed to explore the intrinsic relationships formed between play and technology. 
                    Often utilizing mixed-media and electronics, Trevor’s works aims to form an 
                    aspectual interface between performer, space, and source of sound. 
                </p>
                <p>
                    He has worked with a variety of performers and ensembles such as JACK Quartet, The Living Earth Show, Lucy Dhegrae, as well as many other artists dedicated in blurring the lines between media. 
                </p>
                <p>
                    Trevor is currently a Masters student at Dartmouth College studying composition and sonic arts with Ash Fure, Michael Casey, and César Alvarez. 
                    He also holds a B.A. in Computer Science and Music from UC Berkeley where he studied composition with Ken Ueno, Ed Campion, and Franck Bedrossian. 
                    He is the recipient of the 2018 Nicola De Lorenzo Prize in Music Composition, and the Eisner Prize for the Creative Arts. 
                    Trevor has also attended festivals such as New Music On the Point (2021), The Summer Institute of Contemporary Performance (2021), Labo Montreal (2021), and a selected participant in the New Amsterdam Record's Composers Lab (2019). 
                
                </p>
                
                <p><Link to="/about/cv">Link to CV</Link></p>

                
                
            </div>
        ),
    },

    contact: {
        body: (
            <div>
                <p>email: trevorvandevelde (at) gmail (dot) com</p>
            </div>
        )
    },
    
    projects: {

        "fwd-fwd-fwd-viral-zoom-video": {
            body: (
                <div>
                    <p>
                        fwd:fwd:fwd:viral zoom video is a video piece made with Piper Hill and Hamed Sinno. 
                    </p>

                    <p>
                        This piece studies the different functions of the oral cavity, in a sequence that traverses the trajectory of a contagious infection through breath, infection, contagion, and suffocation. 
                        Using social isolation as a composition tool, the piece imagines breath as a shared resource, where what one exhales, the other must inhale, and so on, manufacturing a kind of shared intimacy to bridge the dark spaces in which the performers are isolated.     
                        When one person becomes infected, the sonic implications of that infection then virulently dictate changes  in the other two performers’ behavior, in the absence of adequate containment. 
                    </p>
                    <p>
                        This project was made for The Poetry Project's 47th Annual New Year's Day Marathon. Find more information at {" "} <a target="_blank" href="https://www.poetryproject.org/events/the-47th-annual-new-year-s-day-marathon"> https://www.poetryproject.org/events/the-47th-annual-new-year-s-day-marathon</a>
                    </p>

                    <ReactPlayer url ="https://vimeo.com/490207816" controls = "true"></ReactPlayer>
                </div>
            ),
        },
        
        "moss-gardens-VR": {
            body: (
                <div>
                    <p>
                        Inspired by David Bowie and Brian Eno's Moss Garden , moss gardens VR is a virtual reality environment in which users can create and sculpt their own audio spatialized ambient audio through the placement of 'sound flowers'. 
                        Each different type of flower contains its own unique sound attribute that plays when planted in the world. 
                    </p>
                    <p>    
                        This project was created in Unit for James Mahoney's AR/VR development class at Dartmouth College. 
                    </p>

                    <ReactPlayer url ="https://vimeo.com/490276819" controls = "true"></ReactPlayer>
                </div>
            ),
        },
       
        "the-body-you-dream-of-is-your-own": {
            body: (
                <div>
                    <p>
                        t h e b o d y y o u d r e a m o f i s y o u r o w n is a musical theater project that incorporates 
                        elements of video installation and live performance. Inspired by the aesthetics of vaporwave, the body you dream seeks to explore our bodies in 
                        relation to technology. The installation consists of video and audio of white noise eminating from these artefacts that slowly diverge into those 
                        of the corporeal body. Near the end, the performer enters sparking a confrontation between themself and their digital selves.
                    </p>

                    <p>
                        The work consists of 8 cathode ray tube (CRT) televisions, each connected to a Raspberry Pi 3 Model B+.  Each Pi was fitted with HPlayer2 (https://github.com/Hemisphere-Project/HPlayer2, 
                        developed by Thomas Bohl at Hemisphere-Project) and controlled over ethernet via Max. The piece consisted of various ‘scenes’ which certain videos with different probabilities of playing as 
                        represented as markov chains. Throughout the piece these probability distributions would change and new images or sounds would emerge among the televisions resulting in an ever changing cloud of white noise.

                    </p>
                    <ReactPlayer url ="https://vimeo.com/378136571" controls = "true"></ReactPlayer>
                    
                    <p></p>
                    <p>This project was supported by the Department of Music at UC Berkeley and CNMAT under the guidance of Ed Campion, Ken Ueno, and Jeremy Wagner. Special thanks to Philip Canoza for technical support. </p>
                    <p>Further details can be found at{" "} <a target="_blank" href="https://cnmat.berkeley.edu/projects/body-you-dream-your-own"> https://cnmat.berkeley.edu/projects/body-you-drea-your-own</a></p>
                </div>
            ),
        },

        "the-air-we-breathe-in-intimate-spaces": {
            body: (
                <div>
                    <p>orchestra</p>
                    <p>3(3=afl).2+ca.2+bcl.2+cbsn.2.2.2.1 + 2p + strings</p>
                    <p>I had the idea to compose this piece after having a rather intense yet intimate conversation with someone in public. For some reason, we kept everything to a whisper, perhaps to not disturb others around us or perhaps to keep our conversation and our lives private. Despite our restraint our whispers became visceral and our breathing became erratic.</p>
                    <p>“the air we breathe in intimate spaces” is an exploration of these sounds. It’s about the things we hear within close proximity to others: their gasps, panting, sighs, and the calmnness of a synchronized inhale. </p>
                    <p>This piece was read by the UC Berkeley Symphony Orchestra under the direction of David Milnes</p> 

                    <ReactPlayer url ="https://soundcloud.com/trevor-van-de-velde/the-air-we-breathe-in-intimate-spaces" controls = "true"></ReactPlayer>               
                </div>
            ),
        },
        "sometimes-i-ponder-in-a-variety-of-colors": {
            body: (
                <div>
                    <p>for electric bass, cello, piano, and amplified percussion</p>
                    <ReactPlayer url ="https://www.youtube.com/watch?v=Tg5FzrpwKWc" controls = "true"></ReactPlayer>
                </div>
            ),
        },
        "electric-vibratar": {
            body: (
                <div>
                    <p>for electric guitar and prepared vibraphone</p>
                    <p>read by The Living Earth Show</p>
                    <ReactPlayer url ="https://www.youtube.com/watch?v=uPn5Slq6Lz0" controls = "true"></ReactPlayer>
                </div>
            )
        },
        "these-suck": {
            body: (
                <div>
                    <p>for four differently sized vacuum cleaners</p>
                    <p>I wanted explore the domestic timbres of the vacuum cleaner yet also reflect on the sisyphean and absurd nature of cleaning. these suck is a piece about these relationships between consumer and appliance: humans and machines. The piece begins without onstage performers, with the vacuum cleaners performing and acting somewhat autonomously. Performers gradually enter throughout the piece and start the mimic the sounds of the vacuum cleaners. The piece ends with performers taking on these characteristics and becoming machines themselves.</p>
                    <p>Premiered at the Center for New Music SF, 2018</p>
                    <ReactPlayer url ="https://vimeo.com/379413020" controls = "true"></ReactPlayer>
                </div>
            ),
        },
        "animal-farm": {
            body: (
                <div>
                    <p>for string quartet and turntables</p>
                    <p>animal farm is an exploration between of timbres, pairings, and onomatopoeias. </p>
                    <p>performed at the 2018 Berkeley Composers Club Concert</p>
                    <ReactPlayer url ="https://www.youtube.com/watch?v=viTNtAOwA08" controls = "true"></ReactPlayer>
                </div>
            ),
        },
        "zero-point" : {
            body: (
                <div>
                    <p>for two pianos and electronics</p>
                    <p>zero-point is the first in a series of duos written for the same instrument and electronics.</p>
                    <p>performed by Bobby Ge and Dennis Nguyen as part of the 2017 Berkeley Composers Club Concert</p>
                    <ReactPlayer url ="https://www.youtube.com/watch?v=CYTAMPYQAiM" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        "one-point" : {
            body: (
                <div>
                    <p>for two alto saxophones and electronics</p>
                    <p>one-point is the second in a series of duos for two of the same instrument and electronics. In this piece I wanted to explore the role of the body in the production of music and as an interface for sound.  The piece begins with a relationship between both saxophonists in the form of a hocket. This relationship further develops when the electronics emerge. Two sensors that track instrument position are embedded within both saxophones and based on their state, sound is generated and outputted via a wireless speaker implanted in the opposite performer’s bell. This forms a  symbiotic relationship between both performers and sources of sound. These movements become loosely choreographed and by the end piece, the body becomes the sole producer of sonic material.</p>
                    <ReactPlayer url ="https://vimeo.com/379414116" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        "singing" : {
            body: (
                <div>
                    <p>for solo snare drum and electronics</p>
                    <p>written for the Summer Institute for Contemporary Performance Practice</p>
                    <ReactPlayer url ="https://vimeo.com/566741660" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        "this-cooks" : {
            body: (
                <div>
                    <p> for hacked rice cooker and electronics</p>
                    <p>Performed by Trevor Van de Velde and Robert Hurley</p>
                    <ReactPlayer url ="https://vimeo.com/490679062" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        "breathing-bells" : {  
            body: (
                <div>
                    <p> webgame utilizing various breath buffers and a meditation gong</p>
                    <p>Instructions: Click on the Mouse on various spots on the webpage to place a breathing bell. Reload page to clear. </p>
                    <p>This projected was developed using p5.js and Tone.js javascript libraries</p>
                    <p>Access the game {" "} <a target="_blank" href="https://trevorvandevelde.com/breathingBells/"> here </a></p>
                </div>
            ),
        },

        "i-like-stringssss" : {  
            body: (
                <div>
                    <p> for string quartet and amplified voices </p>
                    <p> workshopped and performed by the Jack Quartet for New Music on the Point 2021 </p>
                    <ReactPlayer url ="https://vimeo.com/569095481" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        "pull-スレッド" : {  
            body: (
                <div>
                    <p> for solo cello and electronics </p>
                    <p> Written and Premiered by Robert Hurley at UC Berkeley, 2021 </p>
                    <ReactPlayer url ="https://vimeo.com/562077371" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        "slf-ctrl" : {  
            body: (
                <div>
                    <p> for solo performer and game interface </p>
                    <p> Created using MaxMSP and Processing.js </p>
                    <ReactPlayer url ="https://vimeo.com/557884798" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        body: (
            <div>   
                {/*<h3>virtual reality</h3>
                <p><Link to="/projects/moss-gardens-vr"> moss gardens VR</Link>-2020</p>

                <h3>web games</h3>
                <p><Link to="/projects/breathing-bells"> breathing bells</Link>-2021</p> */}

                <h3>game performance</h3>
                <p><Link to="/projects/slf-ctrl"> slf-ctrl</Link>-2021</p>

                <h3>video projects</h3>
                <p><Link to="/projects/fwd-fwd-fwd-viral-zoom-video">fwd:fwd:fwd viral zoom video</Link>-2020</p>

                <h3>opera</h3>
                <p><Link to="/projects/the-body-you-dream-of-is-your-own"> the body you dream of is your own</Link>-2020</p>

                <h3>orchestra/large ensemble</h3>
                <p><Link to="/projects/the-air-we-breathe-in-intimate-spaces"> the air we breathe in intimate spaces</Link>-2019</p>

                <h3>chamber works</h3>
                <p><Link to="projects/i-like-stringssss">i like stringssss</Link> 2021</p>
                {/*<p><Link to="projects/animal-farm">animal farm</Link>-2018</p> */}
                <p><Link to="projects/these-suck">these suck</Link>-2018</p>
                {/*<p><Link to="/projects/electric-vibratar">electric vibratar</Link>-2017</p>*/}
                {/*<p><Link to="/projects/sometimes-i-ponder-in-a-variety-of-colors">sometimes i ponder in a variety of colors</Link>-2016</p>*/}

                <h3>solos/duos</h3>
                <p><Link to="/projects/pull-スレッド">pull.スレッド</Link>2021</p>
                <p><Link to="/projects/singing">singing</Link>-2021</p>
                {/*<p><Link to="/projects/this-cooks">this cooks</Link>-2020</p>*/}
                {/*<p><Link to="/projects/the-way-the-body-decays">the way the body decays</Link>-2019</p> */}
                <p><Link to="/projects/one-point">one-point</Link>-2018</p>
                <p><Link to="/projects/zero-point">zero-point</Link>-2017</p>
            </div>
        ),
    },
    
    research: {
        body: (
            <div>
                <h3>publications</h3>
                <p>coming soon - once i write something!</p>
            </div>
        )
            
        ,
    },

    
    
    
};

export default content;
