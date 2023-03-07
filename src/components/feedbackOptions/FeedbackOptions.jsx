import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions (props) {
  const { options, onIncrementStat } = props;
  return ( 
    <div className={styles.fog}>
      {options.map(name => (
        <button className={styles.feedbackBtn}
          key={name}
          onClick={() => onIncrementStat(name)}
          type="button"
        >
          {name}
        </button>
      ))}
    </div>
  );
}


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onIncrementStat: PropTypes.func.isRequired,
};

export default FeedbackOptions;
