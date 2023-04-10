
import PropTypes from "prop-types";

export function UserProfile ({  
    username = "User Name",
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    return (
        <div class="profile">
        <div class="description">
          <img
            src={avatar}
            alt="User {username}"
            class="avatar"
          />
          <p class="name">{username}</p>
          <p class="tag">{tag}</p>
          <p class="location">{location}</p>
        </div>
      
        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{views}</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    );
};

UserProfile.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  };