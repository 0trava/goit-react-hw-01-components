import PropTypes from "prop-types";
import css from "./Transactions.module.css";


export function TransactionHistory ({transactions}) {
    return (
        <table className={css.transaction_history}>
        <thead className={css.transaction_head}>
            <tr>
            <th className={css.transaction_th}>Type</th>
            <th className={css.transaction_th}>Amount</th>
            <th className={css.transaction_th}>Currency</th>
            </tr>
        </thead>
        <tbody className={css.transaction_body}>
            {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td className={css.transaction_td}>{type}</td>
                <td className={css.transaction_td}>{amount}</td>
                <td className={css.transaction_td}>{currency}</td>
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