import { Images } from '../assets';
import Strings from '../constants/Strings';
const StaticData = {
  gameData: [
    {
      id: 0,
      title: Strings.yourGames,
      data: [
        {
          id: 1,
          userType: Strings.organizer,
          pitchType: '7 vs 7',
          pitchTypeValue: 7,
          date: 'August 13th, 2021',
          time: '5:00 pm',
          location: 'London',
          isJoined: true,
          availablePlace: 0,
          price: 15,
          users: [
            {
              id: 1,
              userName: 'emily',
              profilePic: Images.user1,
            },
            {
              id: 2,
              userName: 'mandy',
              profilePic: Images.user2,
            },
            {
              id: 3,
              userName: 'carly',
              profilePic: Images.user3,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: Strings.recommendation,
      data: [
        {
          id: 3,
          userType: Strings.player,
          pitchType: '7 vs 7',
          pitchTypeValue: 7,
          date: 'August 13th, 2021',
          time: '5:00 pm',
          location: 'London',
          isJoined: true,
          availablePlace: 2,
          price: 15,
          users: [
            {
              id: 1,
              userName: 'emily',
              profilePic: Images.user1,
            },
            {
              id: 2,
              userName: 'mandy',
              profilePic: Images.user2,
            },
            {
              id: 3,
              userName: 'carly',
              profilePic: Images.user3,
            },
          ],
        },
        {
          id: 4,
          userType: Strings.player,
          pitchType: '7 vs 7',
          pitchTypeValue: 7,
          date: 'August 13th, 2021',
          time: '5:00 pm',
          location: 'London',
          isJoined: true,
          availablePlace: 2,
          price: 15,
          users: [
            {
              id: 1,
              userName: 'emily',
              profilePic: Images.user1,
            },
            {
              id: 2,
              userName: 'mandy',
              profilePic: Images.user2,
            },
            {
              id: 3,
              userName: 'carly',
              profilePic: Images.user3,
            },
            {
              id: 4,
              userName: 'emily',
              profilePic: Images.user4,
            },
            {
              id: 5,
              userName: 'mandy',
              profilePic: Images.user5,
            },
            {
              id: 6,
              userName: 'carly',
              profilePic: Images.user1,
            },
            {
              id: 7,
              userName: 'mandy',
              profilePic: Images.user2,
            },
            {
              id: 8,
              userName: 'carly',
              profilePic: Images.user3,
            },
            {
              id: 9,
              userName: 'emily',
              profilePic: Images.user4,
            },
          ],
        },
      ],
    },
  ],
};

export default StaticData;
