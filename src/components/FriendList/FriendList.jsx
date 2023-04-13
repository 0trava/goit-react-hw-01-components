import PropTypes from "prop-types";
import css from './FriendList.module.css';

export function FriendList ({friends}) {
 return (
    <ul className={css.friend_list} >
        {friends.map(({id, avatar, name, isOnline}) => (
            <li className={css.item} key={id}>
                <span
                className={css.status} 
                style={{ background: (isOnline? "green" : "red") }}
                ></span>
                <img className={css.avatar_friend} src={avatar} alt="User avatar" width="48" />
                <span className={css.name_friend}>{name}</span>
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