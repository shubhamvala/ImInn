import React from 'react';
import { Svg, G, Path, Rect } from 'react-native-svg';
import IconList from './IconList';

const iconObj = {};

iconObj[`${IconList.appLogo}`] = {
  svg: (
    <Svg width="21" height="40">
      <Rect
        y="0.84375"
        width="20.7753"
        height="38.204"
        rx="10.3877"
        fill="white"
      />
      <Rect
        id="content1"
        x="6.23242"
        y="17.2148"
        width="8.31014"
        height="15.6909"
        rx="4.15507"
      />
      <Rect
        id="content2"
        x="6.23242"
        y="6.98242"
        width="8.31014"
        height="6.13992"
        rx="3.06996"
      />
    </Svg>
  ),
  viewBox: '0 0 21 40',
};

iconObj[`${IconList.email}`] = {
  svg: (
    <G>
      <Path
        d="M22 5H2V19H22V5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <Path
        d="M3 6L12 13L21 6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </G>
  ),
  viewBox: '0 0 24 24',
};

iconObj[`${IconList.password}`] = {
  svg: (
    <G>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6V7H4V6ZM2 7V6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6V7H15C15.5523 7 16 7.44772 16 8V18C16 18.5523 15.5523 19 15 19H1C0.447715 19 0 18.5523 0 18V8C0 7.44772 0.447715 7 1 7H2ZM2 17V9H14V17H2Z"
      />
    </G>
  ),
  viewBox: '0 0 16 19',
};

iconObj[`${IconList.google}`] = {
  svg: (
    <Svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.4 10.7344C20.4 10.0031 20.3344 9.3 20.2125 8.625H10.5V12.6141H16.05C15.8109 13.9031 15.0844 14.9953 13.9922 15.7266V18.3141H17.325C19.275 16.5188 20.4 13.875 20.4 10.7344Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4998 20.8125C13.2842 20.8125 15.6186 19.8891 17.3248 18.314L13.992 15.7265C13.0686 16.3453 11.8873 16.7109 10.4998 16.7109C7.81388 16.7109 5.54044 14.8969 4.7295 12.4594H1.28418V15.1312C2.98106 18.5015 6.46856 20.8125 10.4998 20.8125Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.72969 12.4594C4.52344 11.8407 4.40626 11.1797 4.40626 10.5C4.40626 9.82034 4.52344 9.1594 4.72969 8.54065V5.86877H1.28438C0.585938 7.26096 0.1875 8.83597 0.1875 10.5C0.1875 12.1641 0.585938 13.7391 1.28438 15.1313L4.72969 12.4594Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4998 4.28907C12.0139 4.28907 13.3733 4.80938 14.442 5.83126L17.3998 2.87344C15.6139 1.20938 13.2795 0.1875 10.4998 0.1875C6.46856 0.1875 2.98106 2.49844 1.28418 5.86876L4.7295 8.54064C5.54044 6.10313 7.81388 4.28907 10.4998 4.28907Z"
        fill="#EA4335"
      />
    </Svg>
  ),
  viewBox: '0 0 21 21',
};

iconObj[`${IconList.facebook}`] = {
  svg: (
    <Svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.8325 14.0469L13.4975 9.59961H9.27V6.69922C9.27 5.44238 9.84 4.28223 11.74 4.28223H13.6875V0.463379C13.6875 0.463379 11.93 0.125 10.2675 0.125C6.8 0.125 4.52 2.30029 4.52 6.16748V9.59961H0.625V14.0469H4.52V24.875H9.27V14.0469H12.8325Z"
        fill="white"
      />
    </Svg>
  ),
  viewBox: '0 0 14 25',
};

iconObj[`${IconList.back}`] = {
  svg: (
    <Svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.8325 14.0469L13.4975 9.59961H9.27V6.69922C9.27 5.44238 9.84 4.28223 11.74 4.28223H13.6875V0.463379C13.6875 0.463379 11.93 0.125 10.2675 0.125C6.8 0.125 4.52 2.30029 4.52 6.16748V9.59961H0.625V14.0469H4.52V24.875H9.27V14.0469H12.8325Z"
        fill="white"
      />
    </Svg>
  ),
  viewBox: '0 0 14 25',
};

export default iconObj;
