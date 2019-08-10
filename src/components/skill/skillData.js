const skillData = {
  labels: [
    'Robotics / Embedded',
    'Data Science',
    'Web Development'
  ],
  data: [
    10,
    7,
    5
  ],
  card: [
    { 
      name: "Robotics / Embedded",
      description: "I have over two and a half years of robotics and embedded systems experience with various skillsets, including STM32, Robot Operating System (ROS), as well as IOT hardwares such as Arduino and Raspberry Pi",
      skills: [
        {
          name: 'C/C++', 
          image: require('@/static/C++.png'),
        },
        {
          name: 'STM32',
          image: require('@/static/stm32.png')
        },
        {
          name: 'ROS',
          image: require('@/static/ros.png')
        },
        {
          name: 'Raspberry Pi',
          image: require('@/static/pi.png')
        },
        {
          name: 'Arduino',
          image: require('@/static/arduino.png')
        }
      ],
      skillColor: 'rgba(255, 153, 0, 0.8)',
      iconColor: 'rgba(102, 51, 0, 0.8)',
      color: 'rgba(255, 153, 0, 0.5)'
    },
    
    {
      name: "Data Science",
      description: "Got hands-on experience on Tensorflow in HackUST and py-faster-rcnn in Big Datathon HKUST. Currently I am working on various projects related to data science",
      skills: [
        {
          name: 'Python', 
          image: require('@/static/python.png'),
        },
        {
          name: 'PyTorch',
          image: require('@/static/pytorch.png')
        },
        {
          name: 'Scikit-Learn',
          image: require('@/static/sklearn.png')
        }
      ],
      skillColor: 'rgba(0, 153, 255, 0.8)',
      iconColor: 'rgb(0, 51, 102, 0.8)',
      color: 'rgba(0, 153, 255, 0.5)'
    },
    
    {
      name: "Web Development",
      description: "I also do casual side projects or hackathons developing front-end websites using Vue and React frameworks. ",
      skills: [
        {
          name: 'Vue', 
          image: require('@/static/vue.png'),
        },
        {
          name: 'React',
          image: require('@/static/react.png')
        }
      ],
      skillColor: 'rgba(51, 204, 51, 0.8)',
      iconColor: 'rgba(19, 79, 19, 0.8)',
      color: 'rgba(51, 204, 51, 0.5)'
    },
    
    {
      name: "Other",
      description: "Aside from the technical skillsets, I use Ubuntu 16.04, VSCode and Git for day-to-day development environment",
      skills: [
        {
          name: 'Git', 
          image: require('@/static/git.png'),
        },
        {
          name: 'Linux',
          image: require('@/static/linux.png')
        }
      ],
      skillColor: 'rgba(0, 0, 0, 0.1)',
      iconColor: 'rgba(0, 0, 0, 0.8)',
      color: 'rgba(0, 0, 0, 0.2)'
    }
  ]
}

export default skillData;