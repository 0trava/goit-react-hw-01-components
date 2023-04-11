import PropTypes from "prop-types";
import css from "./Transactions.css";


export function TransactionHistory ({transactions}) {
    return (
        <table className={css.transaction_history} class="transaction_history">
        <thead className={css.transaction_head} class="transaction_head">
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody className={css.transaction_body} class="transaction_body">
            {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};

TransactionHistory.prototype = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };