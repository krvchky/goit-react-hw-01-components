import FriendsListItem from "./FriendsListItem";
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

const FriendsList = ({friends}) => {
return (
<ul className={css.friendslist}>
{friends.map(friend => {
return <FriendsListItem key={friend.id} {...friend} />;
})}
</ul>
);
};

FriendsList.propTypes = {
friends: PropTypes.arrayOf(
PropTypes.shape({
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
id: PropTypes.number.isRequired,
})
),
};

export default FriendsList;