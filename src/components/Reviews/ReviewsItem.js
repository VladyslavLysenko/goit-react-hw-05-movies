import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, content }) => {
  return (
    <>
      <h2>Author:{author}</h2>
      <p>{content}</p>
    </>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
