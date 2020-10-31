import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMediumImg from "react-medium-zoom";

/////////////////////////////////////////////////////////Photos/////////////////////////////////////////////////////////////
import curr_pic from "./pictures/profile_pic_1.jpg"; 


/////////////////////////////////////////////////////////Photos/////////////////////////////////////////////////////////////

let defaultContent = (
    <p>
        Error 404: Page under construction. I should probably fix this soon....
    </p>
);
let content = {
    about: {
        cv: {
            body: (
                <p>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1L-t0Zb3X_H-OKBwCJ0wmfx1LkBegsFWB/view?usp=sharing"
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
                    Trevor Van de Velde (b. 1998) is a multi-instrumentalist and composer 
                    from Fresno currently based in Berkeley, California. 
                </p>
                <p>
                    Trevor’s works are designed to explore the intrinsic relationships formed by performance practice. 
                    Often utilizing found objects and electronics, Trevor’s works aims to form an 
                    aspectual interface between performer, space, and source of sound. 
                </p>
                <p>
                    His works have been premiered at Hertz Hall at the University of California Berkeley, CSU Fresno, and the Center for New Music (SF). 
                </p>
                <p>
                    Trevor is currently a Masters student at Dartmouth College studying composition and sonic arts with Ash Fure and Michael Casey. 
                    He also holds a B.A. in Data Science and Music from UC Berkeley where he studied composition with Ken Ueno, Ed Campion, and Franck Bedrossian. 
                    He is the recipient of the 2018 Nicola De Lorenzo Prize in Music Composition, 2019 UC Berkeley Music Theater Prize, and the 2020 Eisner Prize for the Creative Arts. Trevor was also a selected participant in New Amsterdam Record’s Composer Lab Workshop.​He is currently the founder and keyboardist of the experimental music ensemble, drefor as well as Berkeley Noise, an undergraduate new music ensemble based at UC Berkeley.
                
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

        "screaming-when-im-alone" : {
            body: (
                <div>
                    <p>for solo snare drum and electronics</p>
                    <p>written for Benjamin Damann</p>
                </div>
            ),
        },

        body: (
            <div>    
                <h3>opera</h3>
                <p><Link to="/projects/the-body-you-dream-of-is-your-own"> the body you dream of is your own</Link>-2020</p>

                <h3>orchestra/large ensemble</h3>
                <p><Link to="/projects/the-air-we-breathe-in-intimate-spces"> the air we breathe in intimate spaces</Link>-2019</p>

                <h3>chamber works</h3>
                <p><Link to="projects/animal-farm">animal farm</Link>-2018</p>
                <p><Link to="projects/these-suck">these suck</Link>-2018</p>
                <p><Link to="/projects/electric-vibratar">electric vibratar</Link>-2017</p>
                <p><Link to="/projects/sometimes-i-ponder-in-a-variety-of-colors">sometimes i ponder in a variety of colors</Link>-2016</p>

                <h3>solos/duos</h3>

                <p><Link to="/projects/screaming-when-im-alone">screaming when im alone</Link>-2020</p>
                <p><Link to="/projects/the-way-the-body-decays">the way the body decays</Link>-2019</p>
                <p><Link to="/projects/one-point">one-point</Link>-2018</p>
                <p><Link to="/projects/zero-point">zero-point</Link>-2017</p>
            </div>
        ),
    },
    
    research: {
        body: (
            <div>
                <h3>publications</h3>
                <p>coming soon</p>
            </div>
        )
            
        ,
    },

    
    
    
};

export default content;
