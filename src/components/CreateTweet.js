import React from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
import { useState ,useRef} from "react";


const CreateTweet = () => { 

    const [uploadedImage, setUploadedImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [postedContent, setPostedContent] = useState([]);
    const [postCount, setPostCount] = useState(0);
    const [profilePicture, setProfilePicture] = useState("/images/profile.jpg");
    const [currentUser, setCurrentUser] = useState({ name: "Bilal Ahmad",user:"@bilalkhan 1m", profilePicture: profilePicture });

    const handleImageUpload = (event) => {
        const image = event.target.files[0];
        const imageUrl = URL.createObjectURL(image);
        setUploadedImage(imageUrl);
    };

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    const handlePost = () => {
        if (uploadedImage || caption) {
            const newPostedContent = {
                caption: caption,
                image: uploadedImage,
            };
            setPostedContent([...postedContent, newPostedContent]);
            setUploadedImage(null);
            setCaption('');
            setPostCount(postCount + 1);
        }
    };

    const handleChangeProfilePicture = () => {
      alert("Do you want to  change profile picture")
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = handleProfilePictureUpload;
        input.click();
    };

    const handleProfilePictureUpload = (event) => {
        const image = event.target.files[0];
        const imageUrl = URL.createObjectURL(image);
        setProfilePicture(imageUrl);
        setCurrentUser({ ...currentUser, profilePicture: imageUrl });
    };

    const handlePickPictureClick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = handleImageUpload;
        input.click();
    };

    const isPostButtonDisabled = postCount >= 10;

    return (
        <div className="centre">
            <div className="create">
                <div className="create__first">
                    <div className="create__img" onClick={handleChangeProfilePicture}>
                        <img className="profile-pic" src={currentUser.profilePicture} alt="profile img" />
                    </div>
                    <div className="create__input">
                        <input
                            className="create__control"
                            placeholder="What's happening?"
                            value={caption}
                            onChange={handleCaptionChange}
                        />
                    </div>
                </div>
                <div className="create__second">
                    <div className="create__icons">
                        <FaRegImage className="icc" onClick={handlePickPictureClick} />
                        <FaRegListAlt className="ic" />
                        <FaRegSmile className="ic" />
                        <FaCalendarCheck className="ic" />
                    </div>
                    <div className="create__btn">
                        <button className="btnmain" onClick={handlePost} disabled={isPostButtonDisabled}>
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
            <div className="display-area">
                {postedContent.map((content, index) => (
                    <div key={index} className="posted-content">
                        <div className="user-info">
                            <img className="user-photo" src={currentUser.profilePicture} alt="User Profile"  width="50" height="50" />
                            <p className="user-name">{currentUser.name}</p>
                            <p className="user-user">{currentUser.user}</p>
                        </div>
                        {content.caption && <p className="text-posted">{content.caption}</p>}
                        {content.image && (
                            <img className="uploadedimg" src={content.image} alt={`Posted ${index}`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};




export default CreateTweet;
