const randomNumber = (max) => Math.floor(Math.random() * max);

export const TrendingUsersFakeData = [
  {
    photo:
      'https://www.fakepersongenerator.com/Face/male/male20121086111759979.jpg',
    email: 'gustave2003@hotmail.com',
    followers: randomNumber(100000),
    name: 'Robert J Thompson',
    profile: 'https://github.com',
    project: {
      name: 'React 0 to avanced',
      stars: randomNumber(100000),
      desc: 'Learn react.',
    },
  },
  {
    photo:
      'https://www.fakepersongenerator.com/Face/female/female2016102480735950.jpg',
    email: 'nathen_beat@hotmail.com',
    followers: randomNumber(100000),
    name: 'Vera C Ferrell',
    profile: 'https://github.com',
    project: {
      name: 'CSS Template',
      stars: randomNumber(100000),
      desc: 'Personal Template',
    },
  },
  {
    photo:
      'https://www.fakepersongenerator.com/Face/male/male20141083545234070.jpg',
    email: 'scot.dubuqu8@gmail.com',
    followers: randomNumber(100000),
    name: 'Peter J Thorton',
    profile: 'https://github.com',
    project: {
      name: 'React Native Challenge',
      stars: randomNumber(100000),
      desc: '-',
    },
  },
];

export const MostActiveUsersFakeData = [
  {
    photo:
      'https://www.fakepersongenerator.com/Face/female/female1022156373566.jpg',
    email: 'grayce2002@yahoo.com',
    followers: randomNumber(999999),
    name: 'Rosa B Hair',
    profile: 'https://github.com',
    project: {
      name: 'projetorosies',
      stars: randomNumber(999999),
      desc: 'Wordpress Rosies Theme',
    },
  },
  {
    photo:
      'https://www.fakepersongenerator.com/Face/female/female1022242636810.jpg',
    email: 'reymundo.bernha@yahoo.com',
    followers: randomNumber(999999),
    name: 'Jenine G Carrico',
    profile: 'https://github.com',
    project: {
      name: 'free-curriculum-template',
      stars: randomNumber(999999),
      desc: 'Free Curriculum Template',
    },
  },
  {
    photo:
      'https://www.fakepersongenerator.com/Face/female/female20161025825191895.jpg',
    email: 'winston1975@yahoo.com',
    followers: randomNumber(999999),
    name: 'Melanie Miranda',
    profile: 'https://github.com',
    project: {
      name: 'mylouder',
      stars: randomNumber(999999),
      desc: '-',
    },
  },
];

export const TopRepositoriesFakeData = [
  {
    name: 'ruoyi-vue-pro',
    desc: '基于SpringBoot，Spring Security，JWT，Vue & Element 的前后端分离权限管理系统',
    star: 1100,
  },
  {
    name: 'muzic',
    desc: 'Muzic: Music Understanding and Generation with Artificial Intelligence ',
    star: 767,
  },
  {
    name: 'free',
    desc: '翻墙、免费翻墙、免费科学上网、免费节点、免费梯子、免费ss/v2ray/trojan节点、蓝灯、谷歌商店、翻墙梯子',
    star: 13500,
  },
  {
    name: 'MockingBird',
    desc: '🚀AI拟声: 5秒内克隆您的声音并生成任意语音内容 Clone a voice in 5 seconds to generate arbitrary speech in real-time',
    star: 600,
  },
];
