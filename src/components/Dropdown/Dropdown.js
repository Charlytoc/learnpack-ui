/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import { DropdownContainer } from './DropdownStyles';

export const Dropdown = props => {
  const active = Array.isArray(props.content) && props.content.filter(obj => obj.selected === true);

  return (
    <>
      <DropdownContainer>
        <div className='inner-text'>{active[0]?.name || ''}</div>
        <svg
          className='lang-chevron'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9 12.375L3.375 6.75002L4.1625 5.96252L9 10.8L13.8375 5.96252L14.625 6.75002L9 12.375Z'
            fill='#001133'
            fillOpacity='0.6'
          />
        </svg>
        <div className='list-container'>
          <div className='list-wrap'>
            {Array.isArray(props.content) &&
              props.content.map((item, index) => {
                return (
                  <Link key={`Menu-${index}`} role='button' to={item.link}>
                    <span className='item'>{item.name}</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </DropdownContainer>
    </>
  );
};
