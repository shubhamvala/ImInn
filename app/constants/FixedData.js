import Strings from './Strings';
import { SVG } from '../assets';

const { Organizer, Player } = SVG;

const FixedData = {
  loginTabData: [
    {
      id: 0,
      title: Strings.login,
    },
    {
      id: 1,
      title: Strings.signUp,
    },
  ],
  createGameTabData: [
    {
      id: 0,
      title: Strings.information,
    },
    {
      id: 1,
      title: Strings.details,
    },
    {
      id: 2,
      title: Strings.publish,
    },
  ],
  userType: [
    {
      id: 1,
      icon: Organizer,
      title: Strings.organizer,
      isSelected: false,
    },
    {
      id: 2,
      icon: Player,
      title: Strings.player,
      isSelected: false,
    },
  ],
  pitchData: [
    {
      id: 1,
      title: '5 vs 5',
      value: 5,
      isSelected: false,
    },
    {
      id: 2,
      title: '7 vs 7',
      value: 7,
      isSelected: false,
    },
    {
      id: 3,
      title: '11 vs 11',
      value: 11,
      isSelected: false,
    },
  ],
  locationData: [
    { label: 'Location 1', value: 'location1' },
    { label: 'Location 2', value: 'location2' },
    { label: 'Location 3', value: 'location3' },
  ],
  gameType: [
    {
      id: 1,
      title: Strings.public,
      desc: Strings.publicContent,
      isSelected: false,
    },
    {
      id: 2,
      title: Strings.private,
      desc: Strings.privateContent,
      isSelected: false,
    },
  ],
};

export default FixedData;
