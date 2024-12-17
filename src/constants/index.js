import port01 from '../assets/img/port01.jpg'
import port02 from '../assets/img/port02.jpg'
import port03 from '../assets/img/port03.jpg'
import htmlImg from '../assets/img/html.png'
import cssImg from '../assets/img/css.png'
import javascriptImg from '../assets/img/javascript.png'
import vueImg from '../assets/img/vue.png'
import nodejsImg from '../assets/img/nodejs.png'
import pythonImg from '../assets/img/python.png'
import javaImg from '../assets/img/java.png'
import mariaDBImg from '../assets/img/mariadb.png'
import awsImg from '../assets/img/aws.png'
import dockerImg from '../assets/img/docker.png'

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
    title: 'skills',
    url: '#skills'
  },
  {
    title: 'history',
    url: '#history'
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
  desc: ['baek', 'ji', 'wook']
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
        src: mariaDBImg,
        alt: 'MariaDB'
      }
    ]
  },
  {
    title: 'Deployment',
    images: [
      {
        src: awsImg,
        alt: 'AWS'
      },
      {
        src: dockerImg,
        alt: 'Docker'
      }
    ]
  }
]

export const historyText = [
  {
    customText: '1. 경력',
    details: [
      { title: '서진주공공스포츠클럽', desc: '2021/2 ~ 2024/2' },
      { title: '경상남도 환경교육원', desc: '2019/12 ~ 2021/1' },
      { title: '경상남도농업기술원', desc: '2018 ~ 2019' }
    ]
  },
  {
    customText: '2. 학력',
    details: [
      { title: '한국폴리텍 강서캠퍼스', desc: '2024/3 ~ 현재' },
      { title: '경상대학교 동물생명과학과', desc: '2013/3 ~ 2018/2' }
    ]
  }
]

export const portText = [
  {
    num: '01',
    title: '구인구직 사이트',
    desc: '이 사이트는 구직자와 기업이 쉽게 만날 수 있도록 돕는 간단한 구인구직 플랫폼입니다.구직자는 원하는 일자리를 빠르게 찾고, 기업은 필요한 인재를 간편하게 채용할 수 있습니다.',
    img: port01,
    code: 'https://github.com/BaekJiWook/vue3-job-portal',
    view: 'https://vue3-job-portal.vercel.app/#/',
    name: '백지욱 구인구직 사이트'
  }
]

export const contactText = [
  {
    link: 'mailto:baek990@naver.com',
    title: 'mail :baek990@naver.com'
  },
  {
    link: 'https://open.kakao.com/o/g1sazdOg',
    title: 'kakao : https://open.kakao.com/o/g1sazdOg'
  }
]

export const footerText = [
  {
    title: 'github',
    desc: '깃헙에 오시면 더 많은 소스를 볼 수 있습니다.',
    link: 'https://github.com/BaekJiWook'
  }
]
