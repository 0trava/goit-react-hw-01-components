import PropTypes from "prop-types";

export function Statistics ({ title, stats
}) {
    return (
        <>
        <h2 class="title">{title}</h2>
        <ul class="stat-list">
            {stats.map(item => (
                <li key={item.id} class="item">
                    <span class="label">{item.label}</span>
                    <span class="percentage">{item.percentage}%</span>
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
