import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import PropTypes from 'prop-types';

export const Recipe = ({
  item: { id, name, time, servings, calories, image, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width="240px" />
      <h2>{name}</h2>
      <ul>
        <li>
          <span>
            <BsAlarm /> {time} min
          </span>
        </li>
        <li>
          <span>
            <AiOutlinePieChart /> {servings} servings
          </span>
        </li>
        <li>
          <span>
            <HiOutlineChartBar /> {calories} calories
          </span>
        </li>
      </ul>

      <div>
        <h3>Difficulty</h3>
        <ul>
          <li>
            <span>Easy</span>
          </li>
          <li>
            <span>Medium</span>
          </li>
          <li>
            <span>Hard</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  items: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    // difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }),
};
