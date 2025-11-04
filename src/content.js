import React from "react";
import ReactPlayer from "react-player";
import {Text, StyleSheet} from "react-native";
import Embed from 'react-embed';
import { Link } from "react-router-dom";
import Iframe from 'react-iframe';
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import ReactMediumImg from "react-medium-zoom";
import curr_pic from "./pictures/chaos_space2.jpg"; 
import SharedPlayer from "./SharedPlayer";

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>


let defaultContent = (
    <div>
    <p>
        Error 404: You are somewhere where I did not expect to you to be... very suspicious of me AND you
    </p>
    </div>
);
let content = {
    info: {
        body: (
            <div style={{maxWidth: "800px", width: "100%"}}>
                <img
                    src={curr_pic}
                    style={{
                        width: "100%",
                        maxWidth: "800px",
                        minWidth: "250px",                                
                        marginTop: "20px",
                        maxHeight: "auto",
                        display: "block",
                        }}/>

                <p style={{ marginTop: "40px" }}>
                    Trevor Van de Velde (he/him) is an experimental composer, sound artist, instrument builder, and creative programmer based in NYC. His practice is oriented toward exploring the relationship between technology, play, and hybridity through electroacoustic composition, custom-built electronics, and mixed-media. He is the recipient of the Nicola De Lorenzo Prize, Eisner Prize, Hopkins Center for the Arts Art+Technology grant, and the Rhizome Micro Grant. He has presented work internationally at festivals, institutions, and galleries such as MICF, Darmstadt Ferienkurse, DNMA, Fridman Gallery, Water Street Art Projects. In addition, he has collaborated with a variety of performers and ensembles such as JACK Quartet, Chromic Duo, Bergamot Quartet, Alarm Will Sound, Thin Edge Collective, Aksiom Ensemble, Tak Ensemble, and Jennifer Mong. He was previously an Art+Code Fellow at NEW INC. He is currently a doctoral candidate at NYU.
                </p>
 
                <center style={{ marginTop: "40px", fontSize: "1.2em" }}>
                    <p> <a href="mailto:trevorvandevelde@gmail.com">TREVORVANDEVELDE@GMAIL.COM</a></p>
                    <p> <a href="https://instagram.com/vantrevor" target="_blank" rel="noopener noreferrer"> INSTAGRAM</a></p>


                </center>

            </div>
        ),
    },
    news: {
        body: (
            <div>
                <h3>Upcoming Events</h3>
                <p>New York City, NY: 04/11/2025: Premiere of <em>Eating Silica</em> for Tak Ensemble at Center for Performance Research</p>
                <h3>Past Events</h3>
                <p>Montreal, CA: 10/28/2025: Premiere of <em>COCKPIT</em> for Jennifer Mong at Floating Opera</p>
                <p>Baltimore, MD: 10/23/2025: Performance of <em>SUPERLUBRICITY</em> at Peabody Conservatory</p>
                <p>New York City, NY: 01/31/2025: Hacking Grains x Food Mahjong x New Inc at Ace Hotel Brooklyn</p>
                <p>New York City, NY: 11/21/2025: Solo Electronics at Center for Performance Research</p>
                <p>Aarhus, Denmark: 06/11/2024: <em>SUPERLUBRICITY</em> for Aksiom Ensemble at the Danish New Music Academy</p>
                <p>Chicago, IL: 05/15/2024: Electronics Duo with Dorothy Carlos as part of Locus Collective</p>
                <p>New York City, NY: 05/05/2024: Premiere of <em>SUPERLUBRICITY</em> for Tilt Brass at Dimenna Center</p>
                <p>Darmstadt, Germany: 08/17/2023: Premiere of <em>i eat electric sheep</em> for modified saxophone and electronics</p>
                <p>Columbia, MO: 07/29/2023: Premiere of <em>u can be anything</em> for Alarm Will Sound at the Mizzou New Music Festival</p>
                <p>New York City, NY: 04/30/2023: Premiere of <em>...I...Like...Stringssss... V2</em> for Bergamot Quartet at the NYU Waverly Labs</p>
                <p>Oberlin, OH: 04/28/2023: Tyler Smith performs <em>Singing</em> at Oberlin College</p>
                <p>Lawrence, KS: 04/22/2023: Luke Helker premieres <em>Bubble Music</em> for modified bubble machine as part of the Ears to the Earth Festival</p>
                <p>Toronto, Canada: 02/24/2023: Thin Edge New Music Collective performs <em>Let's Move Forward with It</em> and <em>Singing</em>. I also perform a solo and duo set with Suzanne Kite.</p>
                <p>Cambridge, MA: 10/08/2022: Chromic Duo performs <em>Hacking Grains</em> at the MIT Museum</p>
                <p>New York City, NY: 06/25/2022: Premiere of <em>Let's Move Forward with It</em> at The Dimenna Center at the Yarn/Wire Institute</p>
                <p>Hanover, NH: 04/30/2022: Chromic Duo premieres <em>Hacking Grains</em> at Dartmouth College</p>
            </div>
        ),
    },
    contact: {
        body: (
            <div style={{marginTop: "20px", maxWidth: "350px", width: "100%", fontSize: "1.2em" }}>
                <p><a href="mailto:trevorvandevelde@gmail.com">TREVORVANDEVELDE@GMAIL.COM</a></p>
                <p> <a href="https://instagram.com/vantrevor" target="_blank" rel="noopener noreferrer"> INSTAGRAM</a></p>
            </div>
        ),
    },
  
    
    projects: {

         "hacking-grains" : {
            path: "/projects/hacking-grains",
            hashtags: ["rice", "chromic duo"],
            year: 2022,
           
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
                   
                    
                    <p>Hacking Grains is broken down into 4 movements：</p>
                    <p><em>i. rice as ritual</em></p>
                    <p><em>ii. feeding the machine</em></p>
                    <p><em>iii. ddr</em></p>
                    <p><em>iv. 吃饭</em></p>

                    <SharedPlayer url ="https://vimeo.com/705643225/e1284564be" controls = "true"></SharedPlayer>

                    <p>This project was supported by the Hopkins Center for the Arts: Arts+Technology Integration Grant. </p>
                    <p>Hacking Grains premiered April 30th, at the Hopkins Center for the Arts at Dartmouth College by Chromic Duo (Lucy Yao & Dorothy Chan)</p>
                    <p>Further details can be found at{" "} <a target="_blank" href="https://hop.dartmouth.edu/arts-at-the-core/arts-integration-initiative"> https://hop.dartmouth.edu/arts-at-the-core/arts-integration-initiative</a></p>
               

                </div>
            ),
        },

        "fwd-fwd-fwd-viral-zoom-video": {
            path: "/projects/fwd-fwd-fwd-viral-zoom-video",
            hashtags: ["video", "zoom", "poetry project"],
            year: 2021,
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

                    <SharedPlayer url ="https://vimeo.com/490207816" controls = "true"></SharedPlayer>
                </div>
            ),
        },
       
        "the-body-you-dream-of-is-your-own": {
            path: "/projects/the-body-you-dream-of-is-your-own",
            hashtags: ["theater", "installation", "vaporwave"],
            year: 2020,
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
                    <SharedPlayer url ="https://vimeo.com/378136571" controls = "true"></SharedPlayer>
                    
                    <p></p>
                    <p>This project was supported by the Department of Music at UC Berkeley and CNMAT under the guidance of Ed Campion, Ken Ueno, and Jeremy Wagner. Special thanks to Philip Canoza for technical support. </p>
                    <p>Further details can be found at{" "} <a target="_blank" href="https://cnmat.berkeley.edu/projects/body-you-dream-your-own"> https://cnmat.berkeley.edu/projects/body-you-drea-your-own</a></p>
                </div>
            ),
        },

        "the-air-we-breathe-in-intimate-spaces": {
            path: "/projects/the-air-we-breathe-in-intimate-spaces",
            hashtags: ["orchestra", "breath", "intimacy"],
            year: 2021,
            body: (
                <div>
                    <p>orchestra</p>
                    <p>3(3=afl).2+ca.2+bcl.2+cbsn.2.2.2.1 + 2p + strings</p>
                    <p>I had the idea to compose this piece after having a rather intense yet intimate conversation with someone in public. For some reason, we kept everything to a whisper, perhaps to not disturb others around us or perhaps to keep our conversation and our lives private. Despite our restraint our whispers became visceral and our breathing became erratic.</p>
                    <p>“the air we breathe in intimate spaces” is an exploration of these sounds. It’s about the things we hear within close proximity to others: their gasps, panting, sighs, and the calmnness of a synchronized inhale. </p>
                    <p>This piece was read by the UC Berkeley Symphony Orchestra under the direction of David Milnes</p> 

                    <SharedPlayer url ="https://soundcloud.com/trevor-van-de-velde/the-air-we-breathe-in-intimate-spaces" controls = "true"></SharedPlayer>               
                </div>
            ),
        },

        "u-can-be-anything" : {  
            path: "/projects/u-can-be-anything",
            hashtags: ["sinfonietta", "alarm will sound", "festival"],
            year: 2023,
            body: (
                <div>
                    <p>
                    u can be anything is about beginnings - about how to start a piece, and how sustaining that start might lead somewhere. 
                    </p>
                    Written for Alarm Will Sound for the Mizzou Internatinoal Composers Festival 2023. Premiered at Mizzou Theater.  

                    <p><SharedPlayer url ="https://soundcloud.com/trevor-van-de-velde/u-can-be-anything" controls = "true"></SharedPlayer></p>
                </div>
            ),
        },

    

        "singing" : {
            path: "/projects/singing",
            hashtags: ["snare drum"],
            year: 2021,
            body: (
            
                <div>
                    <p>for solo snare drum and electronics</p>
                    <p>
                        A main gesture for playing a snare drum is typically a snare hit. There is an initial onset/contact
                        (the hit) followed by a sonic and physical offset. This onset-offset relationship between gesture
                        and sound act as a form of binary.
                        The heart of singing is this relationship – on and off. However instead, the drum is modified
                        with these tiny special type of contact speakers known as transducers. These transducers
                        coupled with an ordinary microphone turn the drum into a vessel for feedback. This on-off
                        relationship takes on a whole new meaning with the drum. Subtle changes in skin pressure can
                        create complex screeching or sonorous textures. In this way, the snare drum can achieve a type
                        of singing that was not present before.
                    </p>
                    <p>written for the Summer Institute for Contemporary Performance Practice</p>
                    <SharedPlayer url ="https://vimeo.com/566741660" controls = "true"></SharedPlayer>
                </div>
            ),
            
        },

    


        "i-like-stringssss" : {  
            path: "/projects/i-like-stringssss",
            hashtags: ["string quartet", "jack quartet", "bergamot quartet"],
            year: 2024,
            body: (
                <div>
                    <p> for amplified string quartet and voices </p>

                    <p>i...like...stringssss... is a piece about the material history of strings and how its related to the creation of the universe </p>

                    <p> v1 was workshopped and premiered by the Jack Quartet for New Music on the Point 2021 </p>
                    <SharedPlayer url ="https://vimeo.com/569095481" controls = "true"></SharedPlayer>

                    <p> v2 was workshopped and premiered by the Bergamot Quartet at NYU Waverly Labs 2023</p>


                    <p> If you would like the perform a specific version of the piece, just let me know! I hope to keep this page updated with all versions as a living archive.</p>
                </div>
            ),
        },

        "pull-スレッド" : {  
            path: "/projects/pull-スレッド",
            hashtags: ["cello"],
            year: 2021,
            body: (
                <div>
                    <p> for solo cello and electronics </p>
                    <p> Written and Premiered by Robert Hurley at UC Berkeley, 2021 </p>
                    <SharedPlayer url ="https://vimeo.com/562077371" controls = "true"></SharedPlayer>
                </div>
            ),
        },



        "let's-move-forward-with-it" : {
            path: "/projects/let's-move-forward-with-it",
            hashtags: ["percussion", "office", "duo"],
            year: 2022, 
            body: (
                <div>
                    <p> for 2 performers, qwerty keyboards and mice, and percussion</p>
                    <p>
                        I wrote Let’s Move Forward with it or LMFWI to contemplate the sound of the office
                            environment and its physical and time-based idioms. Phrases like syncing, circling, moving
                            forward have such an interesting connection to time and self that I thought it should be
                            explored in a time-based performance practice. The mechanical keyboard and mice become
                            more than a communication technology, they become their own sonic characters.

                    </p>
                    <p>
                    In short, LMFWI is an exploration of these sounds and relationships formed by contemporary office culture.
                    </p>
                    <p><em>Let's Move Foward with it was written and premiered at the 2022 Yarn/Wire Institute.</em></p>

                    <SharedPlayer url ="https://www.youtube.com/watch?v=rGY9Qf2sN38" controls = "true"></SharedPlayer>
                </div>
            )


        },

        "SUPERLUBRICITY" : {
            path: "/projects/superlubricity",
            hashtags: ["melodica", "balloon"],
            year: 2024,
            body: (
                <div>
                    <p> for melodicas, balloons, and electronics</p>
                    
                    <p>
                    Superlubricity is the state between sliding systems where friction is or is close to absolute zero. This piece is almost everything but that. 
                    Performers are tasked with communicating each other via modified melodicas powered by foot pumps. The players must use these external lungs to communicate with one another in a banter thats anything but smooth. 
                    </p>
                    <p><em>Superlubricity is for any # of performers. It was premiered as a trio by Tilt Brass at the Dimenna Center</em></p>

                    <SharedPlayer url ="https://vimeo.com/1008050435/6918a3e32a" controls = "true"></SharedPlayer>
                </div>
            )


        },

         "EATING-SILICA" : {
            path: "/projects/eating-silica",
            hashtags: ["silica", "tak ensemble"],
            year: 2025,
            body: (
                <div>
                    <p> piccolo, contrabass clarinet, percussion, violin, voice</p>
                    
                    <p>
                    Silica gel is generally considered non-toxic, however, swallowing silica gel packets (especially those containing cobalt chloride) can cause dehydration and an aggravated stomach. I once had a dream where I'd eaten a lot of it--little bubbles and foam seeped out of my body and it was really gross. In EATING SILICA, performers dive into the gut and swim through bubbly and grotesque sonic material; squeaking, popping, and sliding around. 
                    </p>
                    <p><em>Eating Silica was premiered by Tak Ensemble at the Center for Performance Research</em></p>

                    <SharedPlayer url ="https://vimeo.com/1097643303?share=copy#t=0" controls = "true"></SharedPlayer>
                </div>
            )


        },

         "COCKPIT" : {
            path: "/projects/cockpit",
            hashtags: ["cockpit", "jenn mong", "keyboards", "sampler"],
            body: (
                <div>
                    <p> solo sampler + electronics</p>
                    
                    <p>
                    TBD
                    </p>
                    <p><em>COCKPIT is made possible by the generous support of RHIZOME</em></p>

                    
                </div>
            )


        },


        body: (
            <div>   

                <h3>solos/duos</h3>
                <p><Link to="/projects/cockpit">COCKPIT</Link> (2025) <em> for Solo Sampler + Electronics</em></p>
                <p><Link to="/projects/let's-move-forward-with-it">let's move forward with it</Link> (2022) <em> for 2 percussionists</em></p>
                <p><Link to="/projects/pull-スレッド">pull.スレッド</Link> (2021) <em>for solo cello and electronics</em></p>
                <p><Link to="/projects/singing">singing</Link> (2021) <em> for solo snare drum and electronics</em></p>


                <h3>chamber works</h3>
                <p><Link to="projects/Eating-Silica">Eating Silica</Link> (2025) <em> for flute, contrabass clarinet, percussion, violin, voice</em></p>
                <p><Link to="projects/superlubricity">SUPERLUBRICITY</Link> (2024) <em> for melodicas, balloons, and electronics</em></p>
                <p><Link to="projects/i-like-stringssss">i like stringssss</Link> v1 (2021), v2 (2023) <em> for amplified string quartet and voice</em></p>
    

                <h3>installation + performance</h3>
                <p><Link to="/projects/hacking-grains"> hacking grains </Link> (2022) <em> for rice cooker synthesizers, amplified rice, percussion and electronics</em></p>
                <p><Link to="/projects/the-body-you-dream-of-is-your-own"> the body you dream of is your own</Link> (2020) <em> for alto flute and 8-channel video installation</em></p> 


                <h3>fixed media</h3>
                <p><Link to="/projects/fwd-fwd-fwd-viral-zoom-video">fwd:fwd:fwd viral zoom video</Link> (2020) <em>fixed media</em></p>

                <h3>orchestra/large ensemble</h3>
                <p><Link to="/projects/u-can-be-anything"> u can be anything </Link> (2023) <em> for amplified sinfonietta</em></p>
                <p><Link to="/projects/the-air-we-breathe-in-intimate-spaces"> the air we breathe in intimate spaces</Link> (2019) <em>for symphony orchestra</em></p>

            </div>
        ),
    },
    
    press: {
        body: (
            <div>
                <p> <a target="_blank" href="https://sinetheta.net/23.html"> Sine Theta Interview</a></p>
                <p> <a target="_blank" href="https://home.dartmouth.edu/news/2022/04/cooking-concert-rice"> Cooking Up a Concert - with Rice</a></p>
                <p> <a target="_blank" href="https://www.youtube.com/watch?v=inowSGLzq6A"> Dartmouth Alumni Research Award</a></p>



                
            </div>
        )
            
        ,
    },

    
    
    
};

export default content;
