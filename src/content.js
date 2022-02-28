import React from "react";
import ReactPlayer from "react-player";
import Embed from 'react-embed';
import { Link } from "react-router-dom";
import Iframe from 'react-iframe';
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import ReactMediumImg from "react-medium-zoom";
import curr_pic from "./pictures/profile_pic_1.jpg"; 


let defaultContent = (
    <div>
    <p>
        Error 404: You are somewhere where I did not expect to you to be... very suspicious of me AND you
    </p>
    </div>
);
let content = {
    
    about: {
        cv: {
            body: (
                <div>
                <p>
                    <a target="_blank" href="https://drive.google.com/file/d/123mwLe1gK87s8fEtubKCy_hHmhqbkmVi/view?usp=sharing"> CV pdf</a>
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

    applications:{

        "stanford" : { body: (
            <div>
                <h3>Portfolio for Stanford University for D.M.A in Music Composition</h3>
                <p>Thank you for your consideration!!</p>
                <p>
                    <a target="_blank" href="https://drive.google.com/file/d/123mwLe1gK87s8fEtubKCy_hHmhqbkmVi/view?usp=sharing"> CV </a> --
                    <a target="_blank" href="https://drive.google.com/file/d/17e2yYwvYYxSUYrGga0jW_LFT1-NupqgO/view?usp=sharing"> Writing Sample</a> --
                    <a target="_blank" href="https://drive.google.com/file/d/1JEIcD0QD8H1OTm0kOhMmT-zkSh636ADF/view?usp=sharing"> SOP  </a>
                </p>
        
                <div>
                <h3>Hacking Grains, for 2 performers & multi-channel hacked rice cookers</h3>
                <p>
                    h a c k i n g - g r a i n s is an installation & performance project that explores the web of relationships
                    between technology, ritual, Asian-Identity, and Asian-Futurity.         
                </p>
                <p>recommended excerpts: 0:00 – 2:00, 8:00-11:00, 14:00 – 16:00</p>

                <ReactPlayer url ="https://vimeo.com/646697399" controls = "true"></ReactPlayer>
                <Iframe url="https://e.issuu.com/embed.html?d=hackinggrains_fullscorefinalv1&u=trevorvandevelde"
                    width="640px"
                    height="360px"
                    id="myIssuuHackingGrains"
                    className="myIssuuDoc"
                    display="initial"
                    position="relative"/>
                </div>

                <div>
                <h3>slf-ctrl, video game for solo player & QWERTY keyboard</h3>
                <p>
                    slf-ctrl is a video game created in Unity & MaxMSP that deconstructs the video game genre as a form of 
                    cybernetic training through internet, game, and classical music references.        
                </p>
                <p>recommended excerpts: 0:30 – 2:20, 3:50-5:00, 9:15-END :: FLASHING LIGHTS WARNING</p>

                <ReactPlayer url ="https://vimeo.com/565026902" controls = "true"></ReactPlayer>
                <Iframe url="https://e.issuu.com/embed.html?d=slf.ctrl&u=trevorvandevelde"
                    width="640px"
                    height="360px"
                    id="myIssuuSlfCtrl"
                    className="myIssuuDoc"
                    display="initial"
                    position="relative"/>
                </div>

                <div>
                <h3>...i...like...stringssss... (ILS), for amplified string quartet & voices</h3>
                <p>
                    ILS is an exploration of inately ASMR-like qualities of contemporary music 
                    and ponders the secretive question, "do they like strings?" 
                </p>
                <p>recommended excerpts: 0:30 – 2:30, 4:00-END</p>

                <ReactPlayer url ="https://vimeo.com/569095481" controls = "true"></ReactPlayer>
                <Iframe url="https://e.issuu.com/embed.html?d=vandeveldetrevor_ilikestringsfullscore&u=trevorvandevelde"
                    width="640px"
                    height="360px"
                    id="myIssuuILS"
                    className="myIssuuDoc"
                    display="initial"
                    position="relative"/>
                </div>

                <div>
                <h3>automata, for solo snare drum</h3>
                <p>
                    automata explores the effects of automation technology within the labors of classical music production
                    and more importantly, the prevalence of ad-technology within sites of pleasure and music streaming. 
                </p>
                <p>recommended excerpts: 0:00 – 1:00, 1:50-END</p>

                <ReactPlayer url ="https://vimeo.com/605293646" controls = "true"></ReactPlayer>
                <Iframe url="https://e.issuu.com/embed.html?d=automatafullscore&u=trevorvandevelde"
                    width="640px"
                    height="360px"
                    id="myIssuuAUTAMATA"
                    className="myIssuuDoc"
                    display="initial"
                    position="relative"/>
                </div>

                <div>
                <h3>[singing], for feedback snare drum</h3>
                <p>
                    [singing] is a companion piece for autamata with similar instrumentation. Transducers and a microphone create a feedback loop controlled by the performer. 
                    The percussionist is then dealt perform choreograph gestures to activate different resonant spaces of the snare head and let the noise take over. 
                </p>
                <p>recommended excerpts: 0:00 – 1:00, 1:50-3:00</p>

                <ReactPlayer url ="https://vimeo.com/566741660" controls = "true"></ReactPlayer>
                <Iframe url="https://e.issuu.com/embed.html?d=singing_1_1_&u=trevorvandevelde"
                    width="640px"
                    height="360px"
                    id="myIssuuSinging"
                    className="myIssuuDoc"
                    display="initial"
                    position="relative"/>
                </div>

                <div>
                <h3>the air we breathe in intimate spaces</h3>
                <p>
                I had the idea to compose this piece after having a rather intense yet intimate conversation with someone in public. For some reason, we kept everything to a whisper, perhaps to not disturb others around us or perhaps to keep our conversation and our lives private. Despite our restraint our whispers became visceral and our breathing became erratic.
                “the air we breathe in intimate spaces” is an exploration of these sounds. It’s about the things we hear within close proximity to others: their gasps, panting, sighs, and the calmnness of a synchronized inhale.
                </p>
                <p>recommended excerpts: 0:00 – END </p>

                <ReactPlayer url ="https://soundcloud.com/trevor-van-de-velde/the-air-we-breathe-in-intimate-spaces" controls = "true"></ReactPlayer>
                <Iframe url="https://e.issuu.com/embed.html?d=theairwebreathe_score&u=trevorvandevelde"
                    width="640px"
                    height="360px"
                    id="myIssuuAIR"
                    className="myIssuuDoc"
                    display="initial"
                    position="relative"/>
                </div>

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

        "hacking-grains" : {
            body: (
                <div>
                    <p>
                        h a c k i n g - g r a i n s is an installation & performance project that explores the web of relationships
                        between technology, ritual, Asian-Identity, and Asian-Futurity.         
                    </p>

                    <p>
                        During the pandemic, I like many students moved back in with my parents - It was at home I
                        was re-acquainted with the familial object, the rice cooker. It was then I started self-reflflecting,
                        how come my appliance, like most Pan-Asian appliances plays classical music as a jingle?
                        How come the rice cooker, an object deeply rooted in my Asian identity, is fundamental
                        programed and designed to sound European? This project then came out of a desire to rip
                        the piezo buzzers out of these appliances to liberate it from its own consumer purpose and
                        create a new sonic identity - one that represents cultural resistance.
                    </p>

                    <p>
                        Instead of obedient beeps, the seemingly docile appliances dominate the space with harsh
                        yet meditative electric drones. This combined with the smell of rice cooking turns the space
                        and listeners into ritual. LED lights are embedded within the units and activated halfway
t                       hrough, creating a lightshow reminiscent of neon restaurant signs & and edm raves.
                    </p>
                    <ReactPlayer url ="https://vimeo.com/646697399" controls = "true"></ReactPlayer>
                    
                    <p></p>
                    <p>This project was supported by the Hopkins Center for the Arts: Arts+Technology Integration Grant. </p>
                    <p>Further details can be found at{" "} <a target="_blank" href="https://hop.dartmouth.edu/arts-at-the-core/arts-integration-initiative"> https://hop.dartmouth.edu/arts-at-the-core/arts-integration-initiative</a></p>
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
                    <p>ILS is an exploration of inately ASMR-like qualities of contemporary music 
                    and ponders the secretive question, "do they like strings?" </p>
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
                    <p>
                    slf-ctrl is a video game created in Unity & MaxMSP that deconstructs the video game genre as a form of 
                    cybernetic training through internet, game, and classical music references.        
                    </p>
                    <ReactPlayer url ="https://vimeo.com/565026902" controls = "true"></ReactPlayer>
                </div>
            ),
        },

        "automata" : {
            body: (
                <div>
                    <p> for no performer & snare drum</p>
                    <p> automata is a piece about the role of automation in Music reproduction. A transducer is attached to a snare drum and plays the infamous opening to Bolero. 
                        Half-way through we see the limits, realities, and repercussions (haha) of such realities. </p>
                    <p>This piece can either be designed for live performance or as a set sculpture.</p>
                    <ReactPlayer url ="https://vimeo.com/605293646" controls = "true"></ReactPlayer>
                </div>
            )
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

                <h3>installation + performance</h3>
                <p><Link to="/projects/hacking-grains"> hacking grains </Link>-2021 </p>
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
                <p><Link to="/projects/automata">automata</Link>2021</p>
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
