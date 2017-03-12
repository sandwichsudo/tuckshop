import React from 'react';

export default function(props) {
    return (
        <div className="main-container">
            <h2>What is this all about</h2>
            <p>The TuckShop used to be a box in a fridge. That stopped working,
            because no one carries cash. </p>
        <p>We started by trying to build an app whose mission was 'make that
                model of a box of stuff in the fridge self-sustaining'.</p>
            <p>V1 was a app that let you build up a tab. The idea being, it would
                be easy to track down where any missing money went. But because
                everything was so cheap, people had to build up a big tab to make it
                worth paying it off. The suggestion came that people should be able
                to pay off an arbitary about from their tab.
            </p>
            <p>V2 introduced the idea that you add 'Credit' to your account, in a
            pay-as-you-go style model. This worked much better, as people could
            put money in the cash box up front so stock could be bought.</p>
            <p>V3 with the TuckShop self-sustaining, it needed a new mission.
            Raising money for charity seemed like a good goal. That's where we are now :) </p>
        <h2 id="which-charity">What charity are we supporting? </h2>
        <p>For the first few months, I'll be donating money raised to the <a href="http://www.specialeffect.org.uk/">Special Effect</a>, a
            UK based charity which helps people with disabilities enjoy
            playing video games. In future, I hope to add features to the app
            to let people choose the charity we donate to.
            </p>
            <h2>Feedback, suggestions, complaints.</h2>
            <p>There are a few ways you can get involved:</p>
            <ul>
                <li>Send an email to <a href="gilly.ames@travelex.com">Gilly Ames</a>, or slack to @games</li>
                <li>Raise an issue on <a href="https://github.com/sandwichsudo/react-todo/issues">React-ToDo GitHub</a>.</li>
            </ul>

        </div>
    );
}