import PropTypes from 'prop-types';

function Screen({ displayValue }) {
  return (
    <div className="screen">
      <p>{displayValue}</p>
    </div>
  );
}

Screen.propTypes = {
  displayValue: PropTypes.string,
};
Screen.defaultProps = {
  displayValue: '0',
};

export default Screen;
