import PropTypes from "prop-types";
import css from "./Statistics.css";

export function Statistics ({ title, stats
}) {
    return (
        <div class="stat_card">
        <h2 class="title">{title}</h2>
        <ul className={css.stat} class="stat-list">
            {stats.map(({id, label, percentage}) => (
                <li className={css.item} key={id} class="item_stat">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
        </div>
    );
};


Statistics.prototype = {
    percentage: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
  };
