import PropTypes from "prop-types";
import css from "./Statistics.module.css"; // підключення стилів на картку

export function Statistics ({ title, stats
}) {
    return (
        <div className={css.stat_card}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat_list}>
            {stats.map(({id, label, percentage}) => (
                <li className={css.item} key={id}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
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
