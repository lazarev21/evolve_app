export const evolve_data: any = {
  challengeID: 12345,
  content: {
    battery: {
      currentValue: 56,
      growth: 9,
      amountOfDays: 14,
    },
    participants: {
      count: 187,
      gender: {
        male: 100,
        female: 87,
      },
      activeUsers: [
        {
          userName: "DashikMe",
          userProfilePhotoURL: "/photo-1438761681033-6461ffad8d80.jfif",
        },
        {
          userName: "Apolog_Oleg7",
          userProfilePhotoURL: "/photo-1438761681033-6461ffad8d80.jfif",
        },
        {
          userName: "Julia_1984",
          userProfilePhotoURL: "/photo-1438761681033-6461ffad8d80.jfif",
        },
        {
          userName: "Andrew3",
          userProfilePhotoURL: "/photo-1438761681033-6461ffad8d80.jfif",
        },
      ],
    },
    indicators: {
      engagementIndex: {
        value: 12,
        growth: 7,
      },
      activityIndex: {
        value: 7,
        growth: 4,
      },
      confidenceGrowthIndex: {
        value: 5,
        growth: 2,
      },
    },
    recommendations: {
      burnoutIndex: {
        users: [
          {
            userName: "DashikMe",
            userProfilePhotoURL: "/photo-1438761681033-6461ffad8d80.jfif",
            userRecomendations: ["выгорание", "усталость на работе"],
          },
          {
            userName: "Serk",
            userProfilePhotoURL: "/photo-1438761681033-6461ffad8d80.jfif",
            userRecomendations: ["лишняя нагрузка", "усталость на работе"],
          },
        ],
      },
      teamWorkIndex: {
        users: [
          {
            userName: "Andrew86",
            userProfilePhotoURL: "/photo-1438761681033-6461ffad8d80.jfif",
            userRecomendations: ["низкая социализация"],
          },
        ],
      },
    },
    popularTasks: [
      {
        taskName: "Мой первый распорядок дня",
        taskDateBegin: "2022, 7, 8",
        taskDateEnd: "2022, 7, 11",
        membersCount: 336,
      },
      {
        taskName: "Командная работа",
        taskDateBegin: "2022, 8, 1",
        taskDateEnd: "2022, 8, 3",
        membersCount: 314,
      },
    ],
    pulseSurveysResult: [
      {
        surveyID: 1,
        results: {
          conclusionFirst: {
            text: "Не слышит руководство",
            percent: 34,
          },
          conclusionSecond: {
            text: "Отсутствует мотивация к работе",
            percent: 27,
          },
          conclusionThird: {
            text: "Проблемы в семье мешают на работе",
            percent: 19,
          },
          conclusionFourth: {
            text: "Тяжело работать в текущей команде",
            percent: 31,
          },
        },
      },
    ],
    lastSevenDaysVisitsCount: [
      {
        date: "2022, 5, 22",
        value: 40,
      },
      {
        date: "2022, 5, 23",
        value: 40,
      },
      {
        date: "2022, 5, 24",
        value: 40,
      },
      {
        date: "2022, 5, 25",
        value: 40,
      },
      {
        date: "2022, 5, 26",
        value: 40,
      },
      {
        date: "2022, 5, 27",
        value: 40,
      },
      {
        date: "2022, 5, 28",
        value: 40,
      },
    ],
  },
};
