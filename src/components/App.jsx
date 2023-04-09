import React from "react";
import PageTitle from 'components/PageTitle/PageTitle';
import Profile from 'components/Profile/Profile';

import FriendsList from 'components/FriendsList/FriendsList';
import Statistics from 'components/Statistics/Statistics';
import TransactionsHistory from 'components/TransactionsHistory/TransactionsHistory';

import data from 'utils/data.json';
import friends from 'utils/friends.json';
import transactions from 'utils/transactions.json';
import users from 'utils/users.json';

export const App = () => {
  return (
    <div>
        <PageTitle title="Profile"/>
        <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
        />
        <PageTitle title="Statistics"/>
        <Statistics text="Upload stats" data={data}/>

        <PageTitle title="Friends list"/>
        <FriendsList friends={friends}/>

        <PageTitle title="Transactions history"/>
        <TransactionsHistory items={transactions}/>
    </div>
  );
};
