// Installation
// $ npm install --save prop-types


import user from "../data/user.json";  // імпортуємо данні з бекенду user.json
import {UserProfile} from './SocialProfile/UserProfile';
import data from "../data/data.json";  // імпортуємо данні з бекенду data.json
import {Statistics} from './Statistics/Statistics';
import friends from "../data/friends.json";  // імпортуємо данні з бекенду friends.json
import {FriendList} from './FriendList/FriendList';
import transactions from '../data/transactions.json';// імпортуємо данні з бекенду transactions.json
import {TransactionHistory} from './Transaction/TransactionHistory';
import css from "./Section/Section.css";

// className={css.section}

export function App () {
  return (
    <div class="container">
      <section class="section task-1 Profile">
         <UserProfile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
      </section>
      <section class="section task-2 Statistics">
          <Statistics title="Upload stats" stats={data} />
      </section>

      <section class="section task-3 FriendList">
          <FriendList friends={friends} />
      </section>

      <section class="section task-4 Transactions">
          <TransactionHistory transactions={transactions} />
      </section>
    </div>
  );
};



