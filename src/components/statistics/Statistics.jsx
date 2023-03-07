import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
    render() {
    const { 
      options, 
      stats, 
      total, 
      positiveRate, 
    } = this.props;
    return (
      <div className={styles.block}>
        {!!total && (
          <ul className={styles.list}>
            {options.map(option => (
              <li key={option}>
                <p className={styles.item}>{`${option}: ${stats[option]}`}</p>
              </li>
            ))}
            <li>
              <p className={styles.item}>{`Total: ${total}`}</p>
            </li>
            <li>
              <p
                className={styles.item}
              >{`Positive feedback: ${positiveRate}%`}</p>
            </li>
          </ul>
        )}
        {!total && <p className={styles.feedbackTitle}>No feedback given</p>}
      </div>
    );
  }
}

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  stats: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positiveRate: PropTypes.number.isRequired,
};

export default Statistics;
