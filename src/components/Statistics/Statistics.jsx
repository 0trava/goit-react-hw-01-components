import PropTypes from "prop-types";

export function Statistics ({ title, stats
}) {
    return (
        <>
        <h2 class="title">{title}</h2>
        <ul class="stat-list">
            {stats.map(({id, label, percentage}) => (
                <li key={id} class="item">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>
            ))}
        </ul>
        </>
    );
};


Statistics.prototype = {
    percentage: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
  };
