import port01 from '../assets/img/port01.jpg'
import port02 from '../assets/img/port02.jpg'
import port03 from '../assets/img/port03.jpg'
import htmlImg from '../assets/img/html.png';
import cssImg from '../assets/img/css.png';
import javascriptImg from '../assets/img/javascript.png';
import vueImg from '../assets/img/vue.png';
import nodejsImg from '../assets/img/nodejs.png';
import pythonImg from '../assets/img/python.png';
import javaImg from '../assets/img/java.png';
import mariaDBImg from '../assets/img/mariadb.png';
// import awsImg from 'path/to/aws.png';
// import herokuImg from 'path/to/heroku.png';
// import vercelImg from 'path/to/vercel.png';

export const headerNav = [
  {
    title: 'intro',
    url: '#intro'
  },
  {
    title: 'about',
    url: '#about'
  },
  {
    title: 'site',
    url: '#site'
  },
  {
    title: 'portfolio',
    url: '#port'
  },
  {
    title: 'contact',
    url: '#contact'
  }
]

export const introText = {
  title: 'port developer',
  desc: ['talent is', 'found at the end of the', 'effort']
}

export const aboutText = [
  {
    title: '성장의 과정',
    desc: '처음에는 작은 것에서 시작했다. 버튼 하나를 누르면 색깔이 변하고, 글자가 움직이는 작은 작업들이었다. 하지만 그 안에 담긴 가능성은 나에게 큰 영감을 주었다. 매일 조금씩 성장하며 더 복잡하고 정교한 것들을 만들어 나갔다. 나의 여정은 계속되었고, 그 속에서 나는 나만의 길을 찾았다.'
  },
  {
    title: '준비된 자만이 기회를 잡는다',
    desc: '기회는 항상 불시에 찾아온다. 그것은 미리 준비된 자만이 알아볼 수 있다. 나는 언제나 기회를 잡기 위해 내 자신을 준비했다. 밤낮없이 코드를 공부하고, 문제를 해결하기 위해 노력했다. 그리고 어느 날, 내가 기다리던 기회가 문을 두드렸다. 그 순간, 나는 자신 있게 그 문을 열었다.'
  },
  {
    title: '빠른 길보다는 바른 길을 선택하다',
    desc: '나는 사회생활에서 종종 빠른 성공을 꿈꿀 때가 있었다. 그러나 나는 빠른 길보다는 바른 길을 택했다. 정직하게 일을 처리하고, 책임을 다하는 것이 나의 원칙이었다. 그 길이 더디더라도, 나는 내 선택이 옳았음을 증명했다. 결국, 나의 노력은 정당한 대가로 돌아왔다.'
  }
]
export const skills = [
  {
    title: 'Frontend',
    images: [
      {
        src: htmlImg,
        alt: 'HTML'
      },
      {
        src: cssImg,
        alt: 'CSS'
      },
      {
        src: javascriptImg,
        alt: 'Javascript'
      },
      {
        src: vueImg,
        alt: 'Vue'
      }
     
    ]
  },
  {
    title: 'Backend',
    images: [
      {
        src: nodejsImg,
        alt: 'Node.js'
      },
      {
        src: pythonImg,
        alt: 'Python'
      },
      {
        src: javaImg,
        alt: 'Java'
      },
      {
        src: databaseImg,
        alt: 'Database'
      }
    ]
  },
  {
    title: 'Deployment',
    images: [
      // {
      //   src: awsImg,
      //   alt: 'AWS'
      // },
      // {
      //   src: herokuImg,
      //   alt: 'Heroku'
      // },
      // {
      //   src: vercelImg,
      //   alt: 'Vercel'
      // }
    ]
  }
];

export const siteText = [
  {
    text: ['make', 'site compliant with', 'webstandard'],
    title: '비트를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-vite',
    view: 'https://port2023-vite.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, CSS Variable, Vite'
    ]
  },
  {
    text: ['make', 'site compliant with', 'react.js'],
    title: '리액트를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-react',
    view: 'https://port2023-react.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, CSS Variable, react'
    ]
  },
  {
    text: ['make', 'site compliant with', 'vue.js'],
    title: '뷰를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-vue',
    view: 'https://port2023-vue.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, Scss Variable, vue'
    ]
  },
  {
    text: ['make', 'site compliant with', 'next.js'],
    title: '넥스트를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-next',
    view: 'https://port2023-next.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, Scss Variable, next.js'
    ]
  }
]

export const portText = [
  {
    num: '01',
    title: '어워드에도 올라간 포트폴리오',
    desc: '라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.',
    img: port01,
    code: 'https://github.com/kimsangjunv1/-React-Portfolio',
    view: 'https://portfoliosj-react.netlify.app',
    name: '김상* 포트폴리오'
  },
  {
    num: '02',
    title: '빛나는 밤에 포트폴리오',
    desc: '이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ',
    img: port02,
    code: 'https://github.com/seolhee313/PORTFOLIO-REACT',
    view: 'https://portfolio-313.web.app/',
    name: '천설* 포트폴리오'
  },
  {
    num: '03',
    title: '열정이 넘치는 포트폴리오',
    desc: '이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ',
    img: port03,
    code: 'https://github.com/seolhee313/PORTFOLIO-REACT',
    view: 'https://portfolio-313.web.app/',
    name: '천설* 포트폴리오'
  }
  
    

]

export const contactText = [
  {
    link: 'https://open.kakao.com/o/gM7YLzwf',
    title: 'KAKAO : webstupids'
  },
  {
    link: 'mailto:webstoryboy@naver.com',
    title: 'mail : webstoryboy@naver.com'
  }
]

export const footerText = [
  {
    title: 'youtube',
    desc: '유튜브에 오시면 더 많은 강의를 볼 수 있습니다.',
    link: 'https://www.youtube.com/@Webstoryboy'
  },
  {
    title: 'github',
    desc: '깃헙에 오시면 더 많은 소스를 볼 수 있습니다.',
    link: 'https://github.com/webstoryboy'
  },
  {
    title: 'blog',
    desc: '블러그에 오시면 더 많은 정보를 볼 수 있습니다.',
    link: 'https://webstoryboy.co.kr'
  },
  {
    title: 'gsap',
    desc: 'GSAP에 오시면 더 많은 강의를 볼 수 있습니다.',
    link: 'https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq'
  },
  {
    title: 'react',
    desc: '리액트로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-react'
  },
  {
    title: 'vue',
    desc: '뷰로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-vue'
  },
  {
    title: 'next',
    desc: '넥스트로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-next'
  }
]
