/**
 * title 값과 Notion Database의 title 이 일치해야합니다. 이를 key 값으로 사용하기 때문입니다.
 * TODO: 일치하는지 확인할 것
 */
const clubs = [
    {
        logo_img: "/first-ri/늘혬마크.jpg",
        title: "늘혬코러스",
        description: "여러 가지 음악을 하는 순정 낭만파 중앙 우수 밴드동아리",
        recruit: "상시 모집",
        activity: "다음 가사로 이어질 말은?, 악기 체험, 노 마이크 버스킹",
        booth: {
            lat: 37.548918,
            lng: 127.074521
        }
    },
    {
        logo_img: "/first-ri/더블랙.png",
        title: "더블랙(The Black)",
        description: "R&B, Jazz, Pop 등의 장르를 하는 중앙 보컬 동아리",
        recruit: "3월 4일(월) ~ 3월 10일(일)",
        activity: "노래 듣고 맞추기, 절대음감 게임",
        booth: {
            lat: 37.548913,
            lng: 127.074664
        }
    },
    {
        logo_img: "/first-ri/soultrain_로고.png",
        title: "소울트레인",
        description: "힙합이라는 관심사로 모여 서로 음악을 공유하고 누구나 즐길 수 있는 힙합 동아리",
        recruit: "2월 1일(목) ~ 3월 31일(일)",
        activity: "간단한 랩 녹음 등 체험을 통해 조건 충족 시 소울트레인 동아리 뱃지로 교환",
        booth: {
            lat: 37.548906,
            lng: 127.074770
        }
    },
    {
        logo_img: "/first-ri/STC_로고.jpg",
        title: "STC",
        description: "23.77m의 코트에서 즐기는 우아한 귀족 스포츠 동아리",
        recruit: "3월 6일(화) ~ 3월 7일(수)",
        activity: "테니스 관련 퀴즈 및 인물퀴즈 및 간단한 공 튀기기 미션",
        booth: {
            lat: 37.549031,
            lng: 127.074641
        }
    },
    {
        logo_img: "/first-ri/ESCAPER.jpg",
        title: "ESCAPER",
        description: "주짓수 훈련 및 친목 동아리",
        recruit: "상시모집",
        activity: "도복을 입어보고 촬영해볼 수 있는 포토부스 운영, 일부 기술 체험",
        booth: {
            lat: 37.549073,
            lng: 127.074659
        }
    },
    {
        logo_img: "/first-ri/롤링세종_로고.jpg",
        title: "롤링세종",
        description: "볼링을 시작하고 싶거나 좋아하는 사람들의 모임",
        recruit: "상시모집",
        activity: "미니 볼링을 통해 특정 점수 이상 도달 시 상품 혹은 스탬프 지급",
        booth: {
            lat: 37.549125,
            lng: 127.074678
        }
    },
    {
        logo_img: "/first-ri/두바퀴_로고.png",
        title: "두바퀴",
        description: "바이크가 없어도, 면허가 없어도, 두바퀴에 관심만 있다면 환영입니다!",
        recruit: "상시모집",
        activity: "한소절 듣고 노래 맞추기",
        booth: {
            lat: 37.549182,
            lng: 127.074584
        }
    },
    {
        logo_img: "/first-ri/요트부_로고.png",
        title: "요트부",
        description: "학기 중엔 한강, 방학엔 포항과 태국에서 세일링하는 동아리",
        recruit: "3월 1일(금) ~ 3월 7일(목)",
        activity: "요트 전시, 요트 체험을 통한 간식 증정, 고리매듭 만들기 점수가 가장 높은 3인에게 기프티콘 증정",
        booth: {
            lat: 37.549134,
            lng: 127.074725
        }
    },
    {
        logo_img: "/second-ri/터벌림_로고.png",
        title: "터벌림",
        description: "풍물의 재미를 알고 즐길 수 있는 사람들이 모여 만들어 가는 세종대의 중앙풍물패",
        recruit: "~3월 10일(일)",
        activity: "악기체험, 소원지 적기, 풍BTI, 길놀이(게릴라 공연), 민속놀이",
        booth: {
            lat: 37.548929,
            lng: 127.074209
        }
    },
    {
        logo_img: "/second-ri/HARANG_로고.png",
        title: "하랑",
        description: "격투기의 편견을 깨고, 안전하고 즐거운 운동을 통해 인격적 및 신체적 성장을 지향하는 복싱부",
        recruit: "미정",
        activity: "활동 전시, 샌드백 체험",
        booth: {
            lat: 37.548924,
            lng: 127.074327
        }
    },
    {
        logo_img: "/second-ri/세종극회_로고.jpg",
        title: "세종극회",
        description: "세종대학교의 연극 동아리",
        recruit: "3월 1일(금) ~ 3월 22일(금)",
        activity: "독특한 무대 의상을 구비하여 고풍 컨셉의 미니 포토존 체험, 미니게임 성공시 소정의 상품 증정",
        booth: {
            lat: 37.549052,
            lng: 127.074337
        }
    },
    {
        logo_img: "/second-ri/페이지세븐_로고.png",
        title: "PAGE7",
        description: "세종대 유일 ‘락!’밴드 동아리",
        recruit: "3월 6일(수) ~ 3월 7일(목)",
        activity: "락밴드 로고 맞추기 상징적인 음악 퀴즈를 통해  참가 상품으로는 간식 증정",
        booth: {
            lat: 37.548924,
            lng: 127.074444
        }
    },
    {
        logo_img: "/second-ri/RUSH_로고.png",
        title: "RUSH",
        description: "세종대학교 중앙 농구 동아리",
        recruit: "3월 4일(월) ~ 3월 8일(금) 대규모 모집 후 상시 모집",
        activity: "미니 농구를 통해 성공시 상품 뽑기 진행",
        booth: {
            lat: 37.549108,
            lng: 127.074368
        }
    },
    {
        logo_img: "/second-ri/발파람_로고.png",
        title: "발파람",
        description: "운동도 배우고 친목도 다질 수 있는 전국 유일의 택견 동아리",
        recruit: "상시모집",
        activity: "밸런스보드를 이용하여 동아리 간접 체험 및 간식 증정",
        booth: {
            lat: 37.549171,
            lng: 127.074412
        }
    },
    {
        logo_img: "/second-ri/세종킹스로고.png",
        title: "세종킹스",
        description: "26년의 역사를 자랑하는 세종대학교 중앙 야구동아리",
        recruit: "3월 1일(금) ~ 3월 31일(일)",
        activity: "야구공으로 컵 쓰러뜨리기 게임, 퀴즈를 통해 소정의 상품을 추후 증정",
        booth: {
            lat: 37.549235,
            lng: 127.074450
        }
    },
    {
        logo_img: "/third-ri/JUMP_로고.png",
        title: "JUMP",
        description: "한국대학스노우보드연합 KUSBF 소속 세종대 대표 스노우보드 동아리",
        recruit: "상시모집",
        activity: "보드 타기 체험, 참가보상으로 간식 및 스티커 증정",
        booth: {
            lat: 37.549075,
            lng: 127.074171
        }
    },
    {
        logo_img: "/third-ri/TSP_로고.png",
        title: "TSP",
        description: "세종대학교의 중앙 탁구 및 친목 도모 동아리",
        recruit: "2월 26일(월) ~ 3월 31일(일) (인원 충족 시 조기 마감)",
        activity: "탁구 관련 게임을 통해 먹거리 상품 꾸러미 증정",
        booth: {
            lat: 37.549110,
            lng: 127.074195
        }
    },
    {
        logo_img: "/third-ri/사플_로고.png",
        title: "사운드플러스",
        description: "세종대에서 가장 화목한 밴드 동아리",
        recruit: "2월 22일(목) ~ 3월 8일(금)",
        activity: "절대음감, 기타 듣고 노래 맞추기, ‘베이스’ 삼행시, 건반 빠르게 치기 및 간식 증정",
        booth: {
            lat: 37.549141,
            lng: 127.074210
        }
    },
    {
        logo_img: "/third-ri/INTRO_로고.jpg",
        title: "INTRO",
        description: "세종대학교 대표 힙합댄스동아리",
        recruit: "상시모집",
        activity: "댄스 & 랩 게임을 통해 맞추시는 분에게 간식  증정 (재도전 기회 존재)",
        booth: {
            lat: 37.549174,
            lng: 127.074234
        }
    },
    {
        logo_img: "/third-ri/한울림_로고.png",
        title: "한울림",
        description: "세종대학교 대표 클래식기타 동아리",
        recruit: "상시 모집",
        activity: "클래식 및 통기타 등 체험, 반주 연주해주고 맞히기 등의 퀴즈 후, 간단한 간식 증정",
        booth: {
            lat: 37.549198,
            lng: 127.074255
        }
    },
    {
        logo_img: "/third-ri/SKI_로고.jpg",
        title: "세종스키",
        description: "오직 대학 생활때만 누릴 수 있는 겨울의 특별한 추억을 얻는 동아리",
        recruit: "상시모집",
        activity: "스키 부츠 착용 체험 및 빨리 신기 대회, 미니게임을 통한 간식 및 상품 증정",
        booth: {
            lat: 37.549231,
            lng: 127.074279
        }
    },
    {
        logo_img: "/third-ri/FC해례본_로고.png",
        title: "FC해례본",
        description: "자체경기, 자체대회, 친목활동 뿐 아니라 전국동아리축구대회 참가 및 타 학교와의 친선 경기를 진행하는 세종대학교 대표 축구동아리",
        recruit: "3월 6일(수) ~ 3월 7일(목)",
        activity: "축구공으로 과녁 맞춰 상품 받기",
        booth: {
            lat: 37.549259,
            lng: 127.074304
        }
    },
    {
        logo_img: "/fourth-ri/MASTER_로고.png",
        title: "MASTER",
        description: "보드게임을 비롯한 다양한 게임을 하는 동아리",
        recruit: "3월 1일(금) ~ 3월 13일(수)",
        activity: "보드게임 설명을 들은 후 게임 플레이를 통해 참여자에게 소정의 증정품 증정",
        booth: {
            lat: 37.549463,
            lng: 127.074472
        }
    },
    {
        logo_img: "/fourth-ri/밤부_로고.png",
        title: "BAMBOO",
        description: "매달 정기 출사와 1년에 2번 전시회를 개최하며 촬영 장비에 구애받지 않고 사진을 찍고자 하는 마음만 있다면 누구나 함께 할 수 있는 사진 동아리",
        recruit: "3월 4일(월) ~ 3월 7일(목)",
        activity: "카메라로 순간 포착, 학교 장소 맞추면 상품 증정, 인스타 팔로우 상품(사진엽서 혹은 스티커) 증정",
        booth: {
            lat: 37.549413,
            lng: 127.074482
        }
    },
    {
        logo_img: "/fourth-ri/세종서회.png",
        title: "세종서회",
        description: "45년간 다양하고 아름다운 글씨를 통해 스스로 발전하고 예술로서 함께 빛나온 세종대학교 유일의 서예 중앙동아리",
        recruit: "3월 6일(수) ~ 3월 10일(일)",
        activity: "서예 체험, 캘리그라피 엽서 만들기(사전신청, 약 10인 대상)",
        booth: {
            lat: 37.549375,
            lng: 127.074518
        }
    },
    {
        logo_img: "/fourth-ri/TODO_로고.png",
        title: "투두 TO-DO",
        description: "청춘을 위한 버킷리스트 동아리",
        recruit: "모집기간 : 2월 28일(수) ~ 3월 7일(목)",
        activity: "빙고판의 미션들을 수행하여 원빙고를 성공하면 간식(+ 투두 떡메모지) 증정, TBTI 검사",
        booth: {
            lat: 37.549355,
            lng: 127.074590
        }
    },
    {
        logo_img: "/fourth-ri/2024_HANSON_logo.png",
        title: "한손",
        description: "만화, 애니메이션 등을 덕질하며 창작 활동을 즐기는 동아리",
        recruit: "2월 26일(월) ~ 3월 8일(금)",
        activity: "한손 모의고사, 노래 듣고 제목 맞추기, 유쾌하게 말풍선 채운 참가자에게 상품 증정",
        booth: {
            lat: 37.549336,
            lng: 127.074652
        }
    },
    {
        logo_img: "/fourth-ri/별무리_로고.png",
        title: "별무리",
        description: "별을 보고 싶은 모든 재학생 여러분 환영합니다!",
        recruit: "3월 1일(금) ~ 4월 30일(화)",
        activity: "별똥별 소원적기, 태양관측, 우주퀴즈",
        booth: {
            lat: 37.549316,
            lng: 127.074714
        }
    },
    {
        logo_img: "/fifth-ri/YOUTH_로고.jpeg",
        title: "유스호스텔",
        description: "미지의 세계로! 세종대학교 중앙 여행동아리",
        recruit: "분기 모집[1분기 : ~3월 13일(수)]",
        activity: "인스타 계정 팔로우 시, 퍼즐게임을 통해 6인에게 기프티콘 수여, 참여에 대한 보상으로 간식 증정",
        booth: {
            lat: 37.549519,
            lng: 127.074458
        }
    },
    {
        logo_img: "/fifth-ri/Alom_로고.png",
        title: "아롬",
        description: "세종대학교 유일무의 Ui/UX 디자인, 앱개발동아리",
        recruit: "3월 6일(수) ~ 3월 10일(일)",
        activity: "인스타그램 팔로우 시 아롬 자체 개발 앱을 통해 참가자에게 경품 추첨",
        booth: {
            lat: 37.549567,
            lng: 127.074457
        }
    },
    {
        logo_img: "/fifth-ri/로고.png",
        title: "유마프랜",
        description: "세종대학교 유일 마케팅 중앙동아리",
        recruit: "3월 1일(금) ~ 3월 9일(토) (인원 충족 시 조기 마감)",
        activity: "참가자 대상으로 다양한 퀴즈 실시 진행 후 상품(간식) 증정",
        booth: {
            lat: 37.549611,
            lng: 127.074456
        }
    },
    {
        logo_img: "/fifth-ri/IF_로고.png",
        title: "인터페이스",
        description: "코린이부터 코잘알까지 모두가 함께하는 세종대 최대 규모 학술 동아리",
        recruit: "2월 26일(월) ~ 3월 7일(목)",
        activity: "동아리 소개 홈페이지 소개, 미니게임 & 뽑기판을 통한 선물 증정",
        booth: {
            lat: 37.549654,
            lng: 127.074447
        }
    },
    {
        logo_img: "/fifth-ri/sai_로고.png",
        title: "SAI",
        description: "세종대학교 유일 인공지능 중앙 동아리",
        recruit: "[추가 모집 기간] 3월 5일(수) ~ 3월 7일(목) 18:00시",
        activity: "Neural Style Transfer 체험하기, 동아리 소개",
        booth: {
            lat: 37.549678,
            lng: 127.07446
        }
    },
    {
        logo_img: "/fifth-ri/세종운사로고.png",
        title: "UNSA",
        description: "학술적 활동과 타 과 학우와의 교우관계를 모두 잡는 세종 UNSA",
        recruit: "2월 17일(토) ~ 3월 12일(화)",
        activity: "UNSA 동아리와 UN 및 국제 이슈에 관한 퀴즈 및 투표를 통해 간단한 간식 증정",
        booth: {
            lat: 37.549678,
            lng: 127.074534
        }
    },
    {
        logo_img: "/fifth-ri/세종문학회_로고.png",
        title: "세종문학회",
        description: "낭만과 문학을 찾는 동아리",
        recruit: "상시모집",
        activity: "포스트잇 나무 만들기, 입부희망자 맞춤형 상담 서비스, 친절한 학교소개",
        booth: {
            lat: 37.549647,
            lng: 127.074579
        }
    },
    {
        logo_img: "/sixth-ri/ccc.jpg",
        title: "CCC",
        description: "즐거운 대학 생활을 보내기 위한 크리스천 동아리",
        recruit: "상시모집",
        activity: "예수님 복장을 한 동아리원이 기독교 퀴즈를 내고 맞추면 붕어빵 증정",
        booth: {
            lat: 37.549637,
            lng: 127.074588
        }
    },
    {
        logo_img: "/sixth-ri/2024_세종대_IVF_중앙_동아리_로고.png",
        title: "IVF",
        description: "“캠퍼스와 세상 속의 하나님 나라 운동” 이라는 가치를 중점으로 활동하고 있는 기독교 동아리",
        recruit: "상시모집",
        activity: "커피테이블, IVF 및 기독교 관련 퀴즈를 통한 미니간식과 L자 파일, 스탬프 증정",
        booth: {
            lat: 37.549592,
            lng: 127.074629
        }
    },
    {
        logo_img: "/sixth-ri/JYM_로고.png",
        title: "JYM",
        description: "(Joyful Youth Mission) 캠퍼스의 한 사람을 목자로 세워 열방을 제자화 하는 것을 사명으로 삼고 있는 복음적 선교단체(KAICAM,세기연 소속)",
        recruit: "상시모집",
        activity: "복음팔찌 만들기, 코딩 프로그램 및 뽑기 기계를 이용해 말씀 뽑기 진행",
        booth: {
            lat: 37.549570,
            lng: 127.074683
        }
    },
    {
        logo_img: "/sixth-ri/레지나.png",
        title: "레지나",
        description: "세종대학교 가톨릭 학생회 레지나는 편안한 관계 속에서 서로를 위하는 마음을 통한 배움을 지향하는 곳",
        recruit: "상시모집",
        activity: "마음에 드는 성경구절 뽑아 선물 증정",
        booth: {
            lat: 37.549551,
            lng: 127.074749
        }
    },
    {
        logo_img: "/sixth-ri/셀스_로고.png",
        title: "셀스",
        description: "초등학생을 대상으로 직접 수업을 기획하고 영어로 진행하는 영어교육 봉사동아리",
        recruit: "2월 21일(수) ~ 3월 9일(토)",
        activity: "메모지에 신년 및 새 학기 맞이 목표를 영어로 작성 후 추첨을 통해 상품 증정",
        booth: {
            lat: 37.549524,
            lng: 127.074819
        }
    },
    {
        logo_img: "/sixth-ri/죽순회_로고.jpg",
        title: "죽순회",
        description: "따뜻한 마음을 가진 다양한 사람들이 모여 다양한 곳에서 플로깅, 교육 봉사, 행사보조 활동 등 봉사하는 즐거움을 나눕니다.",
        recruit: "상시모집",
        activity: "걱정인형 만들기",
        booth: {
            lat: 37.549485,
            lng: 127.074798
        }
    },
    {
        logo_img: "/sixth-ri/로타랙트_로고.png",
        title: "세종로타렉트",
        description: "같은 대학뿐만 아니라 타 대학 친구들과도 다양한 봉사&친목을 즐길 수 있는 동아리",
        recruit: "2월 20일(화) ~ 3월 10일(일)",
        activity: "포스트잇에 해보고 싶었던 or 해보았던 봉사활동 적어 붙인 후, 상품 수령",
        booth: {
            lat: 37.549425,
            lng: 127.074773
        }
    }
];

export default clubs;