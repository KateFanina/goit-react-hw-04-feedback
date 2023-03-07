import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';

class Section extends Component {
  render() {
    const {
      children,
      title,
    } = this.props;
    return (
      <div>
        <h2 className={styles.text}>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
