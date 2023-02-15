import React from "react";
import ReactPlayer from "react-player";
import Embed from 'react-embed';
import { Link } from "react-router-dom";
import Iframe from 'react-iframe';
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import ReactMediumImg from "react-medium-zoom";
import curr_pic from "./pictures/profile_pic_2.jpg"; 


let defaultContent = (
    <div>
    <p>
        Error 404: You are somewhere where I did not expect to you to be... very suspicious of me AND you
    </p>
    </div>
);
let content = {
    
    info: {
        cv: {
            body: (
                <div>
                <p>
                    <a target="_blank" href="https://docs.google.com/document/d/1AKkTDqu8WOCnjsU00hHCLBnviSBkEC-CeATsZU-IUFs/edit?usp=sharing"> cv</a>
                </p>
                <p>
                    <a target="_blank" href="https://docs.google.com/document/d/1AA_na2MK1nYfslF59_MjgQyWIygjkt1hYWXWyz07LPk/edit?usp=sharing">resume</a> 
                </p>
                <p>
                    <a target="_blank" href="https://docs.google.com/presentation/d/1AeYbMGOraKZWORPgcB-WGXsX38CBDd60gdDGKMiD54k/edit?usp=sharing">portfolio</a>
                </p>
                </div>
                
            ),
        },

        resume: {
            body:(
                <div>
                    <p>
                    <a target="_blank" href="https://docs.google.com/document/d/1AA_na2MK1nYfslF59_MjgQyWIygjkt1hYWXWyz07LPk/edit?usp=sharing">resume</a> 
                    </p>
                </div>

            ),
        },

        portfolio: {
            body: (
                <p>
                    <a
                        target="_blank"
                        href="https://docs.google.com/presentation/d/1AeYbMGOraKZWORPgcB-WGXsX38CBDd60gdDGKMiD54k/edit?usp=sharing"
                    >
                        portfolio
                    </a>
                    .
                </p>
            ),
        },

        stuffs: {
            body: (
                <div>
                <p>
                    <a target="_blank" href="https://docs.google.com/document/d/1AKkTDqu8WOCnjsU00hHCLBnviSBkEC-CeATsZU-IUFs/edit?usp=sharing"> cv</a>
                </p>
                <p>
                    <a target="_blank" href="https://docs.google.com/document/d/1AA_na2MK1nYfslF59_MjgQyWIygjkt1hYWXWyz07LPk/edit?usp=sharing">resume</a> 
                </p>
                <p>
                    <a target="_blank" href="https://docs.google.com/presentation/d/1AeYbMGOraKZWORPgcB-WGXsX38CBDd60gdDGKMiD54k/edit?usp=sharing">portfolio</a>
                </p>
                </div>
                
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
                Trevor Van de Velde (he/him) is an experimental composer, sound artist, instrument builder, and creative programmer based in NYC/SF. 
 
                </p>
                <p>
                His practice is oriented toward exploring the relationship between technology, play, and hybridity through electroacoustic composition, custom-built electronics, and mixed-media.

                </p>
                <p>
                 He is the recipient of the 2018 Nicola De Lorenzo Prize in Music Composition, 2020 Eisner Prize for the Creative Arts, 2021 Guarini Alumni Award, and Hopkins Center for the Arts Art+Technology grant. He presented work at festivals such as New Music On the Point (2021), The Summer Institute of Contemporary Performance (2021), Labo Montreal (2021), Yarn/Wire Institute (2022) and Ensemble Evolution (2022) and has worked with a variety ensembles such as JACK Quartet, The Living Earth Show, Chromic Duo, Yarn/Wire, and the International Contemporary Ensemble.
                </p>
                <p>
                    He holds a Bachelor of Arts degrees in Computer Science and Music Composition from UC Berkeley and a Master of Arts in Digital Music from Dartmouth College. He is currently pursuing a Ph.D in Music Composition at NYU GSAS. 
                </p>

                <p>
                You can reach him via <a href="mailto:trevorvandevelde@gmail.com?body=hello">trevorvandevelde@gmail.com</a> or follow him on <a target="_blank" href="https://instagram.com/vantrevor"> Instagram</a>, <a target="_blank" href="https://twitter.com/trevandevelde"> Twitter</a>, and <a target="_blank" href="https://github.com/trevorvandevelde"> Github</a> if you are a nerd. 
                </p>

               
                <p><Link to="/info/cv">CV</Link></p>

                
                
            </div>
        ),
    },

    news: {
        body: (
            <div>
                <p>news for upcoming performances (if i have any)</p>

                <p1>19 Dec 2022</p1>
                <p>am excited to write a piece for Alarm Will Sound as part of the Mizzou New Music Festival 2023!  </p>

                <p1>24 Feb 2023</p1>
                <p>upcoming performances with Thin Edge Collective</p>
            </div>

        )

    },


    contact: {
        body: (
            <div>
                <p>for inquiries including press materials, information on ordering scores, parts, recordings, rentals or performance-related issues please include who/when/where</p>
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

                    <ReactPlayer url ="https://vimeo.com/490276819" controls = "true" align = "left"></ReactPlayer>
                </div>
            ),
        },

        "blossom-VR": {
            body: (
                <div>
                    <p>
                        Blossom-VR is a biofeedback game built in Unity at <a target="_blank" href="https://xr.berkeley.edu"> Extended Reality @ Berkeley</a> that aims to creatively enhance meditation and relaxation experiences in virtual reality. 
                        Inspired by the effectiveness of biofeedback treatments, we developed a minimal viable product that utilizes the users’ movements in VR and optionally Apple Watch biosensor data to provide feedback about how well the user is 
                        performing a relaxation technique as well as the users’ improvement over time.
                    </p>
                    <p>
                        My role in the Blossom VR Team was main Sound-Designer for both game-mechanic sounds as well as User Interface Sounds. 
                    </p>


                    <ReactPlayer url="https://vimeo.com/725677510/11ce798901" controls = "true" align = "left"></ReactPlayer>
                    <ReactPlayer url="https://vimeo.com/717750535/bf6532f5fe" controls = "true"></ReactPlayer>
                    <p>
                    <p>Further details can be found at{" "} <a target="_blank" href="https://blossomvr.com"> https://blossomvr.com</a></p>
                    </p>
                </div>

            ),

        },

        "2dim2sum": {
            body:(
                <div>
                    <p>
                        2dim2sum is an VR installation built in A-Frame for the Dias.Stories Future through Memory installation hosted at the Ontario College of Arts & Design. 
                    </p>
                    <p>Access the vr {" "} <a target="_blank" href="https://trevorvandevelde.com/2dim2sum/"> here </a></p>
                </div>
            )

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
                        Hacking Grains is an installation & performance project that explores the web of relationships
                        between technology, ritual, and Asian Futurity.         
                    </p>

        
                    <p>
                        The rice cooker is reimagined as a cultural synthesizer. The seemingly docile appliances dominate the space with harsh
                        yet meditative electric drones. This combined with the smell of rice cooking turns the space
                        and listeners into ritual. LED lights are embedded within the units and activated halfway
                        through, creating a lightshow reminiscent of neon restaurant signs & and edm raves. At the end of the piece, the rice is collected and served to the audience by the performers. We then partake in a collective meal. 
                    </p>
                    <ReactPlayer url ="https://vimeo.com/705643225/e1284564be" controls = "true"></ReactPlayer>
                    
                    <p></p>
                    <p>This project was supported by the Hopkins Center for the Arts: Arts+Technology Integration Grant. </p>
                    <p>Hacking Grains premiered April 30th, at the Hopkins Center for the Arts at Dartmouth College by Chromic Duo</p>
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

        "let's move forward with it" : {
            body: (
                <div>
                    <p> for 2 performers, qwerty keyboards and mice, and percussion</p>
                    <p>
                        written as part of the Yarn/Wire Institute 2022, LMFW-IT is theater piece that looks at the role of time
                        within office jargon. how come 

                    </p>
                </div>
            )


        },


        body: (
            <div>   
                {/*<h3>vr work</h3> */}
                {/*<p><Link to="/projects/blossom-vr"> blossom vr</Link>-curr</p>*/}

                <h3>installation + performance</h3>
                <p><Link to="/projects/hacking-grains"> hacking grains </Link>-2022 <em> for 2 performers, rice cooker synthesizers, amplified rice, feedback percussion and electronics</em></p>
                <p><Link to="/projects/the-body-you-dream-of-is-your-own"> the body you dream of is your own</Link>-2020 <em> for alto flute and 8-channel video installation</em></p>


                <h3>game performance</h3>
                <p><Link to="/projects/slf-ctrl"> slf-ctrl</Link>-2021</p>

                <h3>video projects</h3>
                <p><Link to="/projects/fwd-fwd-fwd-viral-zoom-video">fwd:fwd:fwd viral zoom video</Link>-2020 <em>fixed media</em></p>

                <h3>orchestra/large ensemble</h3>
                <p><Link to="/projects/the-air-we-breathe-in-intimate-spaces"> the air we breathe in intimate spaces</Link>-2019</p>
                <p>upcoming sinfonietta for Alarm Will Sound</p>

                <h3>chamber works</h3>
                <p><Link to="projects/i-like-stringssss">i like stringssss</Link>-2021 <em> for amplified string quartet and voice</em></p>
                {/*<p><Link to="projects/animal-farm">animal farm</Link>-2018</p> */}
                <p><Link to="projects/these-suck">these suck</Link>-2018</p>
                {/*<p><Link to="/projects/electric-vibratar">electric vibratar</Link>-2017</p>*/}
                {/*<p><Link to="/projects/sometimes-i-ponder-in-a-variety-of-colors">sometimes i ponder in a variety of colors</Link>-2016</p>*/}

                <h3>solos/duos</h3>
                <p><Link to="/projects/automata">automata</Link>-2021</p>
                <p><Link to="/projects/pull-スレッド">pull.スレッド</Link>-2021</p>
                <p><Link to="/projects/singing">singing</Link>-2021</p>
                {/*<p><Link to="/projects/this-cooks">this cooks</Link>-2020</p>*/}
                {/*<p><Link to="/projects/the-way-the-body-decays">the way the body decays</Link>-2019</p> */}
                {/*<p><Link to="/projects/one-point">one-point</Link>-2018</p>*/}
                {/*<p><Link to="/projects/zero-point">zero-point</Link>-2017</p>*/}

                <h3>web experiments</h3>
                <p><Link to="/projects/breathing-bells"> breathing bells </Link>-2021</p>
                <p><Link to="/projects/2dim2sum"> 2dim2sum </Link>-2022</p>
            
            
            </div>
        ),
    },
    
    publications: {
        body: (
            <div>
                <p>
                    things i didn't write
                </p>
                <p> 
                    <a target="_blank" href="https://sinetheta.net/23.html"> Sine Theta Interview</a>
                </p>
                <p> 
                    <a target="_blank" href="https://home.dartmouth.edu/news/2022/04/cooking-concert-rice"> Cooking Up a Concert - with Rice</a>
                </p>
                <p> 
                    <a target="_blank" href="https://www.youtube.com/watch?v=inowSGLzq6A"> Dartmouth Alumni Research Award</a>
                </p>



                
            </div>
        )
            
        ,
    },

    
    
    
};

export default content;
