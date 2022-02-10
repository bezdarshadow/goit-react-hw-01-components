import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({stats, title}) => {

    const elements = stats.map(item => {
        return (<li className={styles.item} key={item.id}>
                <span className="label">{item.label}</span>
                <span className="percentage">{item.percentage}%</span>
                </li>
        )
    }   
        
    )
    return (
    <section className={styles.section}>
        {title && <h2 className="title">{title}</h2>}
        <ul className={styles.statistics}>
            {elements}
        </ul>
    </section>
);
};


export default Statistics;

Statistics.defaultProps = {
    stats: [],
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))

}