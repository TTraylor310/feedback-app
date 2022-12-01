import PropTypes from 'prop-types'

const Header = ({text}) => {
  return (
    <header >
      <div className='bg-blue-600 text-red-600'>
        <h2 className='text-2xl'>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header;
