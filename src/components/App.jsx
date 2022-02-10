
import dataBase from '../data';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import './reset.css'


export const App = () => {
  return (
    <>
      <Profile 
        username={dataBase.user.username}
        tag={dataBase.user.tag}
        location={dataBase.user.location}
        avatar={dataBase.user.avatar}
        stats={dataBase.user.stats}
      />

      <Statistics title="Upload stats" stats={dataBase.data} />
      <Statistics stats={dataBase.data} />

      <FriendList friends={dataBase.friends} />


      <TransactionHistory items={dataBase.transactions} />;
      
    </>    
  );
};
