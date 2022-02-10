import styles from './profile.module.css';
import PropTypes from 'prop-types';


const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={styles.avatar}
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={styles.stats}>
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
};


export default Profile;

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired

}