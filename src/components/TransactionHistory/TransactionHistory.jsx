import styles from './transaction-history.module.css'
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    const elements = items.map(item =>  {
        return (
            <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            </tr>
        )
    } )
    return (
<table className="transaction-history">
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {elements}
    </tbody>
</table>
    )

};

export default TransactionHistory;

TransactionHistory.defaultProps = {
    items: [],
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}

