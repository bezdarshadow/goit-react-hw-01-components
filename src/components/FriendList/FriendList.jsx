import styles from './friend-list.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    const elements = friends.map(friend => <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}  />);
    return (<ul className={styles.friendList}>
        {elements}
    </ul>
    )
}

export default FriendList;

FriendList.defaultProps = {
    friends: []
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}