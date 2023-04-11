import PropTypes from "prop-types";
import css from "./Transactions.css";


export function TransactionHistory ({transactions}) {
    return (
        <table class="transaction-history">
        <thead class="transaction-head">
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody class="transaction_body">
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