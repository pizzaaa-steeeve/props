import React from "react";
import PropTypes from "prop-types";
import steve from "./steve.png";

function Profile({ fullName, bio, profession, image, handleName }) {
    return (
        <div style={{ border: '1px solid gray', padding: '20px' }}>
            <img src={steve} alt={fullName} style={{ width: '100px' }}/>
            <h3>{fullName}</h3>
            <p>{bio}</p>
            <p>My profession is {profession}.</p>
            <button onClick={() => handleName(fullName)}>
                Click to show name
            </button>
        </div>
    );
}

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    image: PropTypes.string,
    handleName: PropTypes.func
};

Profile.defaultProps = {
    bio: '',
    profession: '',
    image: '',
    handleName:() => alert('Name not available')
};

export default Profile;
