import React, { useState } from "react";
import useStore from '../../store'

import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast'
import { Dropdown } from "../Dropdown";

import {
  MobileWrap,
  LeftWrap,
  RightWrap,
  NavContainer,
  SectionContainer,
  SidebarContainer,
  BoxButton,
  ButtonPrimary, ButtonSecondary, ButtonTertiary
} from "./HeaderStyles";




export const Header = ({
  header,
  pagename,
  activeDocMeta,
}) => {
  const [open, setOpen] = useState(true);
  const [langToggle, setLangToggle] = useState(false);

  const state = useStore()
  const { setState } = state;


  const contentAction = [
    { name: "Test", link: "uno", selected: true },
    { name: "Reset", link: "dos", selected: false },
  ]

  const HamburgerBehavior = () => {
    setOpen(!open);
    setLangToggle(false);
  };

  const HandlerState = (item) => {
    setOpen(!open);
    setLangToggle(false);
    setState({ selected: item })
  };

  return (
    <NavContainer>
      <SectionContainer id="navTop" >
        <LeftWrap>
          <picture>
            <source srcSet={"logo.png"} media="(max-width: 100px)" />
            <source srcSet={"logo.png"} media="(max-width: 160px)" />
            <img src={"logo.png"} alt="LearnPack" />
          </picture>
          <ButtonPrimary fullwidth onClick={() => toast.success('Build completed!')}>
            <svg width="15" height="13" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_544_516)">
                <path d="M2.10358 4.59753L0.8353 3.2226L2.10358 1.84767" stroke="white" stroke-width="0.505448" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.90039 4.59753L7.16867 3.2226L5.90039 1.84767" stroke="white" stroke-width="0.505448" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.94233 5.68985L5.06477 0.755509" stroke="white" stroke-width="0.505448" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_544_516">
                  <rect width="7.17446" height="5" fill="white" transform="translate(0.421326 0.72229)" />
                </clipPath>
              </defs>
            </svg>

            <p>Build</p>
          </ButtonPrimary>

          <ButtonSecondary>
            <Dropdown content={[...contentAction]} />
          </ButtonSecondary>
        </LeftWrap>

        <RightWrap>
          <a onClick={() => setOpen(!open)}>
            <BoxButton>
              <svg width="24" height="16" onClick={HamburgerBehavior} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M8 15.7979H24V13.1649H8V15.7979ZM0 0V2.63299H24V0H0ZM8 9.21546H24V6.58247H8V9.21546Z" fill="#3F4C5A" />
              </svg>
            </BoxButton>
          </a>

        </RightWrap>



        <SidebarContainer className={open && "on"}>

          {open && (
            <>
              <div className="header-container" id="NavMobile">
                <BoxButton>
                  <svg
                    className={`ham hamRotate ham8 ${open && "active"}`}
                    viewBox="0 0 100 100"
                    width="50"
                    onClick={HamburgerBehavior}
                  >
                    <path
                      className="line top"
                      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                    />
                    <path className="line middle" d="m 30,50 h 40" />
                    <path
                      className="line bottom"
                      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                    />
                  </svg>
                </BoxButton>
              </div>
              <div className="container">
                <ul>
                  <div className="box">
                    <span>{`01/${state.files.length} Solved exercise`}</span>
                    <BoxButton style={{ padding: 0, paddingRight: '10px' }}>
                      <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.5" cy="10.4999" r="10.5" transform="rotate(-180 10.5 10.4999)" fill="#EFF1F4" />
                        <path d="M14.7955 7.39493H6.20455C5.67477 7.39493 5.25 7.72635 5.25 8.13969V12.6082C5.25 13.0179 5.67477 13.353 6.20455 13.353H8.59091V14.0978H12.3091V13.353H14.7955C15.3205 13.353 15.7452 13.0179 15.7452 12.6082L15.75 8.13969C15.75 7.72635 15.3205 7.39493 14.7955 7.39493ZM14.7955 12.6082H6.20455V8.13969H14.7955V12.6082ZM12.3091 10.374L9.06818 11.8635V8.88445L12.3091 10.374Z" fill="#A3B5C9" />
                      </svg>
                    </BoxButton>

                    <BoxButton style={{ padding: 0 }}>
                      <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.5" cy="10.4999" r="10.5" transform="rotate(-180 10.5 10.4999)" fill="#EFF1F4" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4652 6.27779C12.6206 6.27779 14.3679 7.74623 14.3679 9.55763C14.3679 10.7275 13.6391 11.7544 12.5422 12.3349L12.2414 13.4904C12.174 13.75 11.9005 13.935 11.5843 13.935H9.34607C9.02989 13.935 8.75639 13.75 8.68895 13.4904L8.38889 12.3353C7.29163 11.7548 6.5625 10.7278 6.5625 9.55763C6.5625 7.74623 8.3098 6.27779 10.4652 6.27779Z" fill="#A3B5C9" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51832 8.26292C9.45916 8.52634 9.12193 10.0102 9.05265 10.3128C8.98337 10.6153 9.28031 10.8866 9.57185 10.8866C9.86338 10.8866 9.90192 10.8866 10.0216 10.8866C10.1412 10.8866 10.3194 10.9572 10.2523 11.2145C10.1853 11.4717 10.1159 11.7364 10.0478 11.9863C9.97961 12.2363 10.3212 12.3371 10.4693 12.1422C10.6174 11.9474 11.7232 10.4599 11.8505 10.2599C11.9778 10.0599 11.7693 9.75055 11.4556 9.75055C11.1418 9.75055 11.012 9.75055 10.8474 9.75055C10.6829 9.75055 10.6598 9.65181 10.7195 9.4484C10.7792 9.24499 10.851 8.97892 10.9621 8.58898C11.0731 8.19904 10.6256 7.98723 10.3899 7.98723C10.1541 7.98723 9.90053 7.98723 9.83064 7.98723C9.76074 7.98723 9.57749 7.99949 9.51832 8.26292Z" fill="white" />
                        <path d="M11.47 14.2134H9.45766C9.22836 14.2134 9.04248 14.3696 9.04248 14.5623C9.04248 14.755 9.22836 14.9112 9.45766 14.9112H11.47C11.6993 14.9112 11.8852 14.755 11.8852 14.5623C11.8852 14.3696 11.6993 14.2134 11.47 14.2134Z" fill="#979797" />
                        <path d="M11.3002 15.1896H9.62807C9.39877 15.1896 9.21289 15.3458 9.21289 15.5385C9.21289 15.7312 9.39877 15.8874 9.62807 15.8874H11.3002C11.5295 15.8874 11.7154 15.7312 11.7154 15.5385C11.7154 15.3458 11.5295 15.1896 11.3002 15.1896Z" fill="#979797" />
                      </svg>
                    </BoxButton>
                  </div>
                  {
                    state.files.map((item, index) => {
                      const titles = item.slug.split("-");
                      return (
                        <>
                          <li key={`file${index}`} onClick={() => HandlerState(item)}>
                            <span>
                              <p>{titles[0]}</p>
                              <b>Exercise:</b> {` ${titles[1]}`}
                            </span>
                            <svg width="22" height="22" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="6" cy="6" r="6" fill="#21B761" />
                              <path d="M4.54235 7.81183L2.64582 5.91529L2 6.55657L4.54235 9.09892L10 3.64127L9.35873 3L4.54235 7.81183Z" fill="white" />
                            </svg>
                          </li>
                        </>
                      )
                    }
                    )
                  }
                </ul>
              </div>
              <div className="footer-container">
                <BoxButton>

                  <svg width="26" height="26" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9386 12.2931L16.0404 11.3769H17.011C17.6957 11.3769 18.2605 10.7787 18.2605 10.0981V6.59072C18.4781 6.53077 18.9132 6.37039 18.9132 6.04409V5.71079C18.9132 5.44303 18.5729 5.14458 18.3289 5.14458H18.0123C17.7892 4.85449 17.4238 4.70947 17.011 4.70947H16.3444C16.0892 4.20185 15.7001 3.72908 15.2454 3.37765C15.3445 3.33582 15.4379 3.28701 15.5258 3.2368C16.1087 2.90629 16.4559 2.47397 16.5592 1.95658C16.7363 1.05709 16.1031 0.234288 16.0766 0.200818L15.919 0L15.8312 0.238472C15.8284 0.246839 15.4895 1.1296 14.2442 1.1296C14.1549 1.1296 14.0628 1.12542 13.968 1.11566C13.0825 1.03198 12.4716 0.836743 11.8246 0.630348C10.8512 0.320752 9.84426 0 7.80679 0C6.73579 0 5.79585 0.225921 5.01209 0.673579C4.38314 1.03198 3.85599 1.53263 3.44459 2.16019C2.81006 3.12802 2.65247 4.09307 2.62458 4.2911C2.53394 4.42498 2.45166 4.56444 2.38193 4.70947H1.7739C1.3611 4.70947 0.997117 4.85449 0.772594 5.14458H0.458814C0.188267 5.14458 0 5.46113 0 5.71079V6.04409C0 6.38575 0.435106 6.53777 0.652661 6.59351V10.0967C0.652661 10.43 0.747492 10.7536 0.952492 10.9864C1.16726 11.2305 1.44896 11.3769 1.77669 11.3769H2.68874L2.70547 11.5415L2.71941 11.667H2.72081L2.79054 12.2987C2.90489 13.1718 3.32466 13.8746 4.00103 14.3516C4.61464 14.7824 5.41929 15.0014 6.32717 15.0014H12.3992C13.2693 15.0014 14.0991 14.7532 14.7364 14.2846C15.417 13.7826 15.8312 13.1006 15.9386 12.2931ZM7.97139 10.0967C7.97139 10.2348 7.67015 10.4342 7.47629 10.4342H1.77669C1.75158 10.4342 1.73345 10.4286 1.72648 10.423C1.6944 10.391 1.68046 10.2459 1.68046 10.1511C1.68046 10.1343 1.66651 10.1162 1.66651 10.0981V5.9325C1.66651 5.91439 1.68046 5.89765 1.68046 5.88091C1.68046 5.79027 1.68604 5.63684 1.71532 5.60757C1.71951 5.60199 1.74461 5.57967 1.77529 5.57967H7.25595C7.71336 5.57967 7.96997 5.99108 7.96997 6.15147V10.0967H7.97139ZM11.3114 10.4342C11.1064 10.4342 11.0869 10.1316 11.0869 10.0967V6.15147C11.0869 5.76932 11.2249 5.57967 11.5303 5.57967H17.011C17.2132 5.57967 17.5367 5.80422 17.5367 5.9325V10.0967C17.5367 10.2278 17.209 10.4342 17.011 10.4342H11.3114Z"
                      fill="#616E7C" />
                  </svg>
                  <svg width="26" height="26" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM8.25 12.75H6.75V11.25H8.25V12.75ZM9.8025 6.9375L9.1275 7.6275C8.5875 8.175 8.25 8.625 8.25 9.75H6.75V9.375C6.75 8.55 7.0875 7.8 7.6275 7.2525L8.5575 6.3075C8.835 6.0375 9 5.6625 9 5.25C9 4.425 8.325 3.75 7.5 3.75C6.675 3.75 6 4.425 6 5.25H4.5C4.5 3.5925 5.8425 2.25 7.5 2.25C9.1575 2.25 10.5 3.5925 10.5 5.25C10.5 5.91 10.23 6.51 9.8025 6.9375Z"
                      fill="#616E7C" />
                  </svg>
                  <svg width="26" height="26" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10.2V8.53333H12.4417C12.4 8.20833 12.3417 7.89167 12.2583 7.58333L14.4083 6.34167L13.575 4.9L11.6 6.03333C11.3667 5.63333 11.0833 5.275 10.775 4.95833C10.8083 4.76667 10.8333 4.575 10.8333 4.36667C10.8333 3.7 10.6333 3.075 10.2917 2.55L11.6667 1.175L10.4917 0L9.05833 1.43333C7.65833 0.691667 6.475 1.15833 5.95 1.43333L4.50833 0L3.33333 1.175L4.70833 2.55C4.36667 3.075 4.16667 3.7 4.16667 4.36667C4.16667 4.575 4.19167 4.76667 4.225 4.96667C3.91667 5.28333 3.63333 5.64167 3.4 6.03333L1.425 4.89167L0.591667 6.33333L2.74167 7.575C2.65833 7.88333 2.6 8.2 2.55833 8.525H0V10.1917H2.55833C2.6 10.5167 2.65833 10.8333 2.74167 11.1417L0.591667 12.3833L1.425 13.825L3.4 12.7C4.3 14.2083 5.8 15.2 7.5 15.2C9.2 15.2 10.7 14.2083 11.6 12.7L13.575 13.8417L14.4083 12.4L12.2583 11.1583C12.3417 10.85 12.4 10.5333 12.4417 10.2083H15V10.2ZM8.33333 11.8667H6.66667V6.86667H8.33333V11.8667Z"
                      fill="#616E7C" />
                  </svg>

                </BoxButton>
                <svg width="28" height="28" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7157 13.8895C12.8809 11.8287 10.8602 10.375 8.5 10.375C6.13977 10.375 4.11906 11.8287 3.28433 13.8895M13.7157 13.8895C15.1243 12.526 16 10.6153 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 10.6153 1.87569 12.526 3.28433 13.8895M13.7157 13.8895C12.3659 15.196 10.5269 16 8.5 16C6.47315 16 4.63408 15.196 3.28433 13.8895M11 6C11 7.38071 9.88071 8.5 8.5 8.5C7.11929 8.5 6 7.38071 6 6C6 4.61929 7.11929 3.5 8.5 3.5C9.88071 3.5 11 4.61929 11 6Z"
                    stroke="#616E7C" stroke-width="1.2" stroke-linejoin="round" />
                </svg>

              </div>
            </>
          )}
        </SidebarContainer>

      </SectionContainer>

    </NavContainer >
  );
};
