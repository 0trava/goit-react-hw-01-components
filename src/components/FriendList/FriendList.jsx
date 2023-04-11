import PropTypes from "prop-types";
import css from './FriendList.style.css';

export function FriendList ({friends}) {
 return (
    <ul className={css.friend_list} class="friend_list">
        {friends.map(({id, avatar, name, isOnline}) => (
            <li className={css.item} key={id} class="item">
                <span 
                style={{ background: (isOnline? "green" : "red") }}
                className={css.status} class="status"></span>
                <img className={css.avatar_friend} class="avatar_friend" src={avatar} alt="Useravatar" width="48" />
          </li>
        ))}
    </ul>
 )
};


FriendList.prototype = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
  };