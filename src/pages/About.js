import React from 'react';
import Layout from './Layout';
import {Image} from "react-bootstrap";
import Moment from "moment";

const About = () => {

    return (
        <>
        <Layout title="About" description="This is the About page" />

            <div className="row">
                <div className="col">
                    <img className="img-fluid" src='https://firebasestorage.googleapis.com/v0/b/raouiya-store.appspot.com/o/raouia.PNG?alt=media&token=1f99dbd8-f00f-4b32-995b-3fe7b066bc6a' alt=""/>

                </div>
                <div className="col" style={{textAlign : 'center'}}>
                    <p>I'm baby heirloom gentrify coloring book lumbersexual. Af photo booth bicycle rights hella fanny pack, 8-bit fixie slow-carb skateboard. Kitsch hell of fixie, pickled farm-to-table locavore authentic brooklyn palo santo typewriter tumeric meh thundercats wolf glossier. Typewriter shaman vinyl, sriracha chartreuse man bun fanny pack. Listicle meggings microdosing you probably haven't heard of them glossier.</p>
                <p>Flexitarian humblebrag kogi, readymade squid asymmetrical woke sriracha lumbersexual normcore brooklyn art party chillwave. Edison bulb actually af semiotics blog heirloom, air plant iPhone tofu coloring book keffiyeh ugh flannel live-edge portland. Subway tile truffaut hashtag edison bulb tumblr authentic lomo poke keffiyeh succulents four loko church-key iceland. Tbh jean shorts pickled freegan tousled, celiac lo-fi messenger bag. Meditation deep v prism mixtape cray food truck freegan put a bird on it bespoke migas. Pug actually bicycle rights, tacos twee blue bottle scenester. Everyday carry before they sold out meh man braid chillwave ennui retro prism actually beard mixtape vinyl enamel pin.</p>
                <p>Coloring book cred echo park, gentrify pickled taxidermy craft beer man bun selfies irony hell of. Health goth yuccie chia, marfa vinyl truffaut tacos hexagon tumblr cliche taxidermy. 90's drinking vinegar blog pok pok brooklyn literally fixie. Godard jean shorts normcore deep v skateboard.</p>
                </div>
            </div>
        </>
    );
}

export default About;