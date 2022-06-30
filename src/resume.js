export const header = {
    name: "최하아민",
    desc: "웹 개발자",
    email: "choimin9510@gmail.com",
    github: "https://",
    blog: "https://",
};

export const intro = {
    subject: "Introduce",
    profile: "profile.jpeg",
    intro: `
    안녕하세요! 개발자 홍길동입니다.

    
    만나서 반갑습니다.
    `
};

export const skills = {
    subject: "Skills",
    contents: [
        {
            category: "Frontend",
            desc: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "JQuery" },
                { name: "React" },
                { name: "Vue" },
                { name: "AngularJs" },
            ]
        },
        {
            category: "Backend",
            desc: [
                { name: "Nodejs" },
                { name: "Typescript" },
                { name: "Express" },
                { name: "ActionHero" },
                { name: "NestJS" },
                { name: "C" },
                { name: "C++" },
                { name: "C#" },
            ]
        },
        {
            category: "DevOps",
            desc: [
                { name: "MySQL" },
                { name: "AWS S3, CloudFront" },
                { name: "AWS Route53" },
                { name: "AWS EC2, ELB" },
                { name: "AWS ECS, ECR" },
                { name: "AWS CloudWatch" },
                { name: "AWS Lambda" },
                { name: "AWS RDS" },
            ]
        },
        {
            category: 'Interest & Hobby',
            desc: [
                { name: 'Reversing' },
                { name: 'Game' },
                { name: 'Football' },
                { name: 'Snowboard' },
            ]
        }
    ],
};

export const experience = {
    subject: "Experience",
    contents: [
        {
            title: '앤아이시스템 근무(팀원)',
            subtitle: "글로벌 B2B 통합관리 솔루션 개발",
            period: "2020.04 ~ 2021.12",
            link: "",
            desc: [
                { main: "2021.01~2022.06(1년 6개월)", sub: [] }
            ],
            keywords: ['VueJS', 'Nuxt', 'TailwindCSS', 'NodeJS', 'ActionHero', 'MYSQL', 'AWS' ],
            folder: "nisystem",
            images: ['1.png'],
            pdfs: []
        },
        {
            subtitle: "글로벌 B2B 상품, 정산관리 시스템 개발",
            period: "",
            link: "",
            desc: [
                { main: "2020.04~2022.06(2년 3개월)", sub: [] }
            ],
            keywords: ['AngularJS', 'NodeJS', 'MYSQL', 'AWS'],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            subtitle: "글로벌 B2B 상품관리 시스템 소프트웨어버전 개발",
            period: "",
            link: "",
            desc: [
                { main: "2020.04~2020.05(2개월)", sub: [] }
            ],
            keywords: ['C#', 'AWS Serverless'],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            subtitle: "국내 쇼핑몰 통합 API개발",
            period: "",
            link: "",
            desc: [
                { main: "2021.10~2022.06(9개월)", sub: [] }
            ],
            keywords: ['NodeJS', 'Express'],
            folder: "",
            images: [],
            pdfs: []
        }, 
        {
            title: '플레이오토 근무(팀장)',
            subtitle: "글로벌 B2B 통합관리 솔루션 개발",
            period: '2013.10 ~ 2020.04',
            link: "",
            desc: [
                { main: "2018.02~2020.04(2년 3개월)", sub: [] }
            ],
            keywords: ['AngularJS', 'NodeJS', 'MYSQL', 'AWS'],
            folder: "playauto",
            images: ['1.png'],
            pdfs: []
        },
        {
            subtitle: "국내 B2B서비스 개발",
            period: "",
            link: "",
            desc: [
                { main: "2015.01~2018.01(3년 1개월)", sub: [] }
            ],
            keywords: ['C#', 'PHP', 'CodeIgniter', 'MYSQL'],
            folder: "",
            images: [],
            pdfs: []
        }, 
        {
            subtitle: "국내 B2B서비스 개발",
            period: "",
            link: "",
            desc: [
                { main: "2013.10~2014.12(1년 3개월)", sub: [] }
            ],
            keywords: ['PHP', 'JQuery', 'MYSQL'],
            folder: "",
            images: [],
            pdfs: []
        }, 
    ],
};

export const projects = {
    subject: "Projects",
    contents: [
        {
            title: "B2B도매상품 통합관리 솔루션",
            subtitle: "도매상품 상품, 주문 통합관리",
            period: "2021.12 ~ ing",
            link: "http://ueong.zmeta.io",
            desc: [
                { main: "사업자 등록 후 현재 스마트스토어 실서비스중", sub: [] },
                { main: "서비스화를 목적으로 개발중이며, 현재 CBT로 3명 사용중", sub: [] },
                { main: "주요기능", sub: ['상품 일괄 등록', '상품 자동재고 관리', '발주넣기', '송장등록'] },
            ],
            keywords: ["React", "Ant Design", "Typescript", "Redux", 'NestJS', 'AWS', 'Prettier', 'Puppeteer'],
            folder: "shopto",
            images: ["1.png", '2.png', '3.png', '4.png', '5.png'],
            pdfs: []
        },
        {
            title: "배달 플랫폼 통합관리 시스템",
            subtitle: "배달의민족, 요기요, 쿠팡이츠 리뷰 및 정산관리",
            period: "2021.10.18 ~ 2021.10.29",
            link: "",
            desc: [
                { main: "외주 작업", sub: [] },
            ],
            keywords: ["React", "Material Design", "Typescript", "Recoil", 'NestJS', 'Centos7', 'MYSQL', 'Lint', 'Prettier', 'Puppeteer'],
            folder: "delivery",
            images: ["1.png"],
            pdfs: []
        },
        {
            title: "스마트스토어 재고관리 프로그램",
            subtitle: "스마트스토어 <=> 도매처 재고연동 서비스",
            period: "2020.05.01 ~ 2020.05.14",
            link: "",
            desc: [
                { main: "외주 작업", sub: [] },
            ],
            keywords: ["C#"],
            folder: "carepackage",
            images: ["1.png"],
            pdfs: []
        },
        {
            title: "프로세스 메모리 후킹 프로그램",
            subtitle: "1년정도 프로그램 판매 후 서비스 중단",
            period: "2010.12 ~ 2011.01",
            link: "",
            desc: [ { main: "판매 목적으로 개발", sub: [] }, ],
            keywords: ['C', 'IPC', 'Hook', 'DLL Injection', 'Themida'],
            folder: "memory",
            images: [],
            pdfs: [],
            video: '1.mp4'
        },
    ]
};

export const outdoorActivities = {
    subject: "Outdoor Activities",
    contents: [
        {
            title: "제주에서 한 달 간 리모트로 일하기",
            subtitle: "제주창조경제혁신센터	",
            period: "2018.07 ~ 2018.08",
            link: "http://jccei.kr/workhub2/residency/jeju.htm",
            desc: [{ main: "노트북하나로 제주도에서 리모트해보기", sub: [] },
            { main: "제주도에서 일하시는 프리랜서, 1인 개발자등 여러 개발자들과 만나 소통하고 교류", sub: [] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "점심 함께 드실래요? 대통령이랑? | 대통령과의 점심",
            subtitle: "산업기능요원 인식관련 주제로 문재인 대통령과 식사 및 대화 자리",
            period: "2019.09.17 ~ 2019.09.17",
            link: "https://www.youtube.com/watch?v=HFm101oUyiU",
            desc: [{ main: '3분5초 부터 면담 진행', sub:[] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};
export const education = {
    subject: "Education",
    contents: [
        {
            title: "특성화 고등학교 졸업",
            subtitle: "컴퓨터 네트워크과",
            period: "2011.03 ~ 2014.05",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        }
    ],
};

export const footer = { updated: "2022. 06. 21." };

export const main = [experience, projects, outdoorActivities, education]