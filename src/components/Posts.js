import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/profile.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Bilal Ahmad</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @bilalkhan <span>1m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
        "Nature's tranquil beauty whispers stories of eternity through every rustling leaf."
        </div>
        <div className="postss__details__img">
          <img src="/images/post.jpg" alt="post" />
        </div>
      
      </div>
    </div>
  );
};

export default Posts;