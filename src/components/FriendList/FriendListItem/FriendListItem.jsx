import styles from './friend-list-item.module.css';
import PropTypes from 'prop-types';


const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={styles.item} >
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

export default FriendListItem;

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    // id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}