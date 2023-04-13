
import PropTypes from "prop-types";
import css from "./UserProfile.module.css"; // підключення стилів на картку

export function UserProfile ({  
    username = "User Name",
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    return (
        <div  className={css.profile}>
            <div className={css.description}>
              <img
                className={css.avatar_img}
                width="100px"
                height="100px"
                src={avatar}
                alt="User {username}"
              />
              <p className={css.name}>{username}</p>
              <p className={css.tag}>@{tag}</p>
              <p className={css.location}>{location}</p>
            </div>
      
            <ul className={css.stats}>
              <li>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
              </li>
              <li>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
              </li>
              <li>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
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