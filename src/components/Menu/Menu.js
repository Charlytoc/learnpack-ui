import { useState } from 'react';
import { Dropdown } from '../Dropdown';

import { LeftWrap, RightWrap, NavContainer, SectionContainer, BoxButton } from './MenuStyles';
import useStore from '../../store';

export const Menu = () => {
  const [langToggle, setLangToggle] = useState(false);

  const state = useStore();
  const { setExercise, selected, files, contentSelected } = state;

  const languageAction = [
    { name: 'ENG', link: '', selected: true },
    { name: 'ESP', link: '', selected: false },
  ];

  const HandlerState = (action) => {

    const position = selected?.position || 0
    // console.log('position = ', position)


    if (action === "prev" && position !== 0) setExercise(files[position - 1]);
    // console.log('selected.position - 1 = ', position - 1)

    if (action === "next") setExercise(files[position + 1]);
    // console.log('selected.position + 1 = ', position + 1)

    // }
  };


  const handleFeedback = () => {
    console.log(contentSelected.body);
  }
  return (
    <NavContainer>
      <SectionContainer id='secondNav'>
        {/* MOBILE */}

        <LeftWrap style={{ marginLeft: '12px' }}>
          <span onClick={() => HandlerState("prev")}>
            <BoxButton>
              <svg
                width='30'
                height='30'
                viewBox='0 0 21 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='10.5' cy='10.5' r='10.5' fill='#EFF1F4' />
                <path
                  d='M16.3332 10.4556H8.21984L11.9465 7.28365L10.9998 6.48356L5.6665 11.023L10.9998 15.5625L11.9398 14.7624L8.21984 11.5905H16.3332V10.4556Z'
                  fill='#3F4C5A'
                />
              </svg>
            </BoxButton>
          </span>
          <span onClick={() => HandlerState("next")}>
            <BoxButton>
              <svg
                width='30'
                height='30'
                viewBox='0 0 21 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='10.5' cy='10.5' r='10.5' fill='#EFF1F4' />
                <path
                  d='M5.66634 10.8882L13.7797 10.8882L10.053 14.0602L10.9997 14.8603L16.333 10.3208L10.9997 5.7813L10.0597 6.58139L13.7797 9.75335L5.66634 9.75335V10.8882Z'
                  fill='#3F4C5A'
                />
              </svg>
            </BoxButton>
          </span>
  
          <span onClick={() => handleFeedback()}>
            <BoxButton>
              Get help
            </BoxButton>
          </span>
        </LeftWrap>

        <RightWrap style={{ marginRight: '12px' }}>
          <BoxButton>
            <Dropdown content={[...languageAction]} />
          </BoxButton>
        </RightWrap>
      </SectionContainer>
    </NavContainer>
  );
};
