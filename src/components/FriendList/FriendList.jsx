import PropTypes from "prop-types";

export function FriendList ({friends}) {
 return (
    <ul>
        {friends.map(({id, avatar, name}) => (
            <li key={id} class="item">
                <span class="status"></span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
          </li>
        ))}
    </ul>
 )
};


FriendList.prototype = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline:PropTypes.bool,
  };