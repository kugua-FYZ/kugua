const projectData = [
  {
    title: "线上轻食配送",
    subtitle: "其实“轻食”不是一种特定的食物，而是任意食物的一种形态，轻的不只是餐品，更是食用者的无负担，无压力，更营养，更享受，更美味，他一定是美食，一定很健康，也一定是一种积极阳光的生活态度",
    description: "可以说，轻食的另一个涵义则是指简易、不用花太多时间就能吃饱的食物。\n" + "果腹、止饥、分量不多，可说是「轻食」的原始概念，三明治是最佳代表。这几年因为健康风吹起，生菜色拉是最早登上健康轻食食谱的菜单，接着发烧的是汤品，低糖、低脂、低盐更是奉为准则。",
    image: require('@/static/food.jpg'),
    // link: "https://openreview.net/forum?id=SJeFNoRcFQ",
    // skills: [
    //   {
    //     name: 'Python',
    //     image: require('@/static/python.png'),
    //   },
    //   {
    //     name: 'PyTorch',
    //     image: require('@/static/pytorch.png')
    //   },
    // ],
    // links: [
    //   {
    //     target: "https://openreview.net/forum?id=SJeFNoRcFQ",
    //     icon: 'fas fa-globe',
    //   }
    // ]
  },
  {
    title: "免费瑜伽教学",
    subtitle: "瑜伽，不仅只是一套流行或时髦的健身运动这么简单。" +
        "瑜伽姿势运用古老而易于掌握的技巧，改善人们生理、心理、情感和精神方面的能力，是一种达到身体、心灵与精神和谐统一的运动方式，包括调身的体位法、调息的呼吸法等，以达至身心的合一",
    description: "瑜伽能加速新陈代谢，去除体内废物，形体修复、调理养颜从内及外；瑜伽能带给你优雅气质、轻盈体态，提高人的内外在的气质；瑜伽能增强身体力量和肌体弹性，身体四肢均衡发展，使你变得越来越开朗、活力、身心愉悦。\n"+
    "瑜伽与其他运动一样在不正确的练习下是会给身体带来一定伤害的，需在专业人士指导下练习瑜伽!!",
    image: require('@/static/yoga.jpg'),
  },
  {
    title: "免费舞蹈教学",
    subtitle: "舞蹈是一种表演艺术，使用身体来完成各种优雅或高难度的动作，一般有音乐伴奏，以有节奏的动作为主要表现手段的艺术形式。" +
        "在人类文明起源前，舞蹈在仪式，礼仪，庆典和娱乐方面都十分重要",
    description: "舞蹈可以让人身材曲线变得更美，大腿肌肉和手臂肌肉也更紧实。是纾解情绪的好方法。" +
        "舞蹈是一种有益身心健康活动，增强体质，性格变得开朗，身体变得柔软，全面刺激肌肉。" +
        "另外，舞蹈还具备有氧运动的效果，使练习者在提高主肺功能的同时，达到减肥的目的!!",
    image: require('@/static/dance.jpg'),
  },
  {
    title: "综艺节目展示",
    subtitle: "一般来说，综艺是一种娱乐性的电视节目形式，能够给大家带来很多欢乐，娱乐的节目" +
        "现在逐渐产生互联网综艺节目，脱胎于传统电视综艺节目依托于互联网的方式进行传播，是一种新兴的综艺形式",
    description: "随着5G网络的到来和技术环境的进一步优化，互联网和移动传媒等新媒体正呈现出爆炸式的发展态势。网络视频纷纷涉足网络自制综艺节目，" +
        "与传统媒体竞争综艺节目市场份额。对于95%以上收入依靠广告的视频网站而言，网络自制综艺节目成为其新的利润增长点!!\n" +
        "我们的APP平台上，将进行平民化的节目的展示，为您带来一定的欢乐",
    image: require('@/static/Variety.jpg'),
  }
]

const thumbnailData = [
  {
    title: "Sightecho",
    subtitle: "Summer Research Intern",
    description: "Developed core firmware and wireless firmware update for underwater diving goggles",
    image: require('@/static/sightecho.png'),
    date: "June - August 2018",
    skills: [
      {
        name: 'C',
        image: require('@/static/C++.png'),
      },
      {
        name: 'STM32',
        image: require('@/static/stm32.png')
      }
    ],
    links: [
      {
        target: "https://sightecho.com/",
        icon: 'fas fa-globe',
      }
    ]
  },
  {
    title: "Fashism",
    subtitle: "Big Datathon - 2nd Runner Up",
    description: "Website for fashion trend personal recommendation based on popular celebrities.",
    date: "December 2017",
    skills: [
      {
        name: 'React',
        image: require('@/static/react.png')
      },
      {
        name: 'Python',
        image: require('@/static/python.png'),
      },
      {
        name: 'Caffe',
        image: require('@/static/caffe.png'),
      },
    ],
    links: [
      {
        target: "https://github.com/KP-Kepra/Fashism",
        icon: 'fab fa-github'
      }
    ]
  },
  {
    title: "HueDash",
    subtitle: "Smart Lighting System",
    description: "Developed a dashboard in Raspberry Pi to control room lighting",
    image: require('@/static/huedash.png'),
    date: "September - December 2017",
    skills: [
      {
        name: 'Python',
        image: require('@/static/python.png'),
      },
      {
        name: 'RPi 3',
        image: require('@/static/pi.png')
      },
      {
        name: 'Hue',
        image: require('@/static/hue.png'),
      },
    ],
    links: [
      {
        target: "https://github.com/KP-Kepra/HCI/tree/master/HueDash",
        icon: 'fab fa-github'
      }
    ]
  },
  {
    title: "Auto-Food Service",
    subtitle: "Nao-Robot Food Cashier",
    description: "Implemented an automatic fast food cashier system with built-in NAO speech recognition module and body gestures.",
    image: require('@/static/autofood.png'),
    date: "September - December 2017",
    skills: [
      {
        name: 'Nao',
        image: require('@/static/nao.png')
      }
    ],
    links: [
      {
        target: "https://kp-kepra.github.io/HCI-Diary/p3/",
        icon: 'fab fa-github'
      }
    ]
  },
]

const listData = [
  {
    title: "Potify",
    subtitle: "Smart Plant Watering System",
    description: "Developed a smart garden watering system using soil moisture, temperature and lighting sensors, with personal preference integration",
    date: "September - December 2017",
    skills: [
      {
        name: 'C',
        image: require('@/static/C++.png'),
      },
      {
        name: 'STM32',
        image: require('@/static/stm32.png')
      }
    ],
    links: [
      {
        target: "https://github.com/KP-Kepra/Potify",
        icon: 'fab fa-github'
      }
    ]
  }
]

export {
  projectData,
  thumbnailData,
  listData
}
