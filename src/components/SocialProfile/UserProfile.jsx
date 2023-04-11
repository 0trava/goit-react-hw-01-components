
import PropTypes from "prop-types";
import css from "./UserProfile.css"; // підключення стилів на картку

export function UserProfile ({  
    username = "User Name",
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    return (
        <div  className={css.profile} class="profile">
            <div class="description">
              <img
                className={css.avatar}
                src={avatar}
                alt="User {username}"
                class="avatar"
              />
              <p className={css.name} class="name">{username}</p>
              <p className={css.tag} class="tag">@{tag}</p>
              <p className={css.location} class="location">{location}</p>
            </div>
      
            <ul className={css.stats}  class="stats">
              <li>
                <span className={css.label}  class="label">Followers</span>
                <span className={css.quantity}  class="quantity">{followers}</span>
              </li>
              <li>
                <span className={css.label}  class="label">Views</span>
                <span className={css.quantity} class="quantity">{views}</span>
              </li>
              <li>
                <span className={css.label}  class="label">Likes</span>
                <span className={css.quantity} class="quantity">{likes}</span>
              </li>
            </ul>
      </div>
    );
};

UserProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};