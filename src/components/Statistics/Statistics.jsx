import PropTypes from "prop-types";
import css from "./Statistics.css"; // підключення стилів на картку

export function Statistics ({ title, stats
}) {
    return (
        <div className={css.stat_card} class="stat_card">
        {title && <h2 className={css.title} class="title">{title}</h2>}
        <ul className={css.stat_list} class="stat_list">
            {stats.map(({id, label, percentage}) => (
                <li className={css.item} key={id} class="item_stat">
                    <span className={css.label} class="label">{label}</span>
                    <span className={css.percentage} class="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
        </div>
    );
};


Statistics.prototype = {
    percentage: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };
