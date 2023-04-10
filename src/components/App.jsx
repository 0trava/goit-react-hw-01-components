import {UserProfile} from './SocialProfile/UserProfile';
import user from "../data/user.json";


export function App () {
  return (
    <div>
          <UserProfile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
    </div>
  );
};



