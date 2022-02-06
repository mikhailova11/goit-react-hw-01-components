import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>

      <div className={s.conteiner}>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </div>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
};
