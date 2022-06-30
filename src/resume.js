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
            category: 'Others',
            desc: [
                { name: 'Reversing' },
                { name: 'Trello' },
                { name: 'Redmin' },
                { name: 'Jira' },
                { name: 'Git' },
                { name: 'Slack' },
                { name: 'Jandi' },
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
                { main: "2021.01~2022.06(1년 6개월)", sub: [] },
                { main: "2명으로 시작해 초기 구축부터 진행하였으며, 기획, 개발, 인프라, 비용관리 등 여러가지 상황들을 고려하며 작업함", sub: [] },
                { main: "프론트 경우 반응형 대응, 렌더링 최적화등 여러가지 상황에 고려하여 개발", sub: [] },
                { main: "백엔드 경우 대용량 데이터 스트림 처리, 코어, 워커 영역 분할등 분산 처리에 집중하여 개발", sub: [] },
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
                { main: "2020.04~2022.06(2년 3개월)", sub: [] },
                { main: "상품과 정산관리만 집중적으로 할 수 있는 레거시 환경의 솔루션이며, 기능 유지보수 및 업데이트에 중점을 둠", sub: [] }
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
                { main: "2020.04~2020.05(2개월)", sub: [] },
                { main: "IP 블락 이슈로 클라이언트 방식으로 개발을 진행하였으며, 추후 프록시 서버 도입을 하여 근본적인 문제를 해결함", sub: [] }

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
                { main: "2021.10~2022.06(9개월)", sub: [] },
                { main: "국내 6대 마켓(옥션, 지마켓, 인터파크, 11번가, 스마트스토어, 쿠팡)을 대상으로 통합 API 구축", sub: [] },
                { main: "공통 인터페이스, 파라미터 필터링, 메소드 규칙 등 Rest API 규약에 맞게 개발진행", sub: [] },
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
                { main: "2018.02~2020.04(2년 3개월)", sub: [] },
                { main: "초기 구축단계부터 서비스까지 개발을 진행하였고, 그 이후에는  팀원들 일정 조율, 개발 피드백, 미팅등 전체적은 프로세스 관리를 진행함", sub: [] },
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
                { main: "2015.01~2018.01(3년 1개월)", sub: [] },
                { main: "C# 기반 클라이언트 프로그램이며, 쓰레드 풀 기능을 통해 속도개선 및 클라이언트 마다 예외상황들을 로깅, 원격을 통해 문제를 해결함", sub: [] }
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
                { main: "2013.10~2014.12(1년 3개월)", sub: [] },
                { main: "레거시 환경의 초기 솔루션이며, php, jquery를 기반으로 기능 유지보수 및 업데이트 중점을 둠", sub: [] },
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
                { main: "주요기능", sub: ['상품 일괄 등록', '상품 자동재고 관리', '발주넣기', '송장등록'] },
                { main: "여러 도매처 사이트들의 상품, 주문을 통합적으로 관리를 할 수 있으며, 일부 유저들에게만 CBT 진행중", sub: [] },
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
                { main: "외주 작업으로 진행 되었으며, 배달의민족, 요기요, 쿠팡이츠 3개의 사이트 리뷰와 정산내역을 통합적이 관리 할 수 있음", sub: [] },
                { main: "해당 사이트들 스크립트를 직접 분석하여 약 100개 미안의 계정들을 딜레이 없이 한번에 로그인처리를 할 수 있도록 개발함", sub: [] },
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
                { main: "외주 작업으로 진행 되었으며, 특정 도매처의 모든 상품들을 스마트스토어와 연동하여 실시간으로 재고 및 판매상태를 업데이트 해주도록 개발함", sub: [] },
            ],
            keywords: ["C#", 'Selenium'],
            folder: "carepackage",
            images: ["1.png"],
            pdfs: []
        },
        {
            title: "프로세스 메모리 후킹 프로그램",
            subtitle: "1년정도 프로그램 판매 후 서비스 중단",
            period: "2010.12 ~ 2011.01",
            link: "",
            desc: [ 
                { main: "판매 목적으로 개발이 되었으며, Dll Injection 기법을 통해 프로세스와 IPC 방식으로 메모리를 공유하여 후킹 할 수 있는 프로그램 개발", sub: [] },
             ],
            keywords: ['Win32API', 'C', 'IPC', 'Hook', 'DLL Injection', 'Themida'],
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