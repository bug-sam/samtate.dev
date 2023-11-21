import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

const Credits = () => {
    return (
        <FadeInSection>
            <div id="credits">
                <div className="ending-credits">
                    <div>Built by me, Sam.</div>
                    <div>
                        Original Design by
                        <a href="https://github.com/gazijarin"> Gazi Jarin.</a>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
}

export default Credits;
