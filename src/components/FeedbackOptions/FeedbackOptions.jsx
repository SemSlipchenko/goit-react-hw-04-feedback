import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(type => (
        <Button
          className={type}
          key={type}
          onClick={() => onLeaveFeedback(type)}
        >
          {type}
        </Button>
      ))}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
