import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfiles extends React.Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h3 style={{fontSize:"40px"}}>Contact with me</h3>
                {
                    SOCIAL_PROFILES.map(PROFILE => {
                        return <SocialProfile key={PROFILE.id} socialProfile={PROFILE}/>
                    })
                }
            </div>
        );
    }
}

class SocialProfile extends React.Component {
    render() {
        const {image, link} = this.props.socialProfile;
        return (
            <a href={link}>
                <img src={image} alt="Social" style={{width:70, margin:45,backgroundColor:"white"}}/>
            </a>
        );
    }
}

export default SocialProfiles;