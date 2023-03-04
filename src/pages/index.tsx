import DepartmentArrow from '@/components/DepartmentArrow';
import Footer from '@/components/Footer';
import MapView from '@/components/MapView';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>하이라이트 - 가두모집</title>
        <meta name="description" content="세종대학교 총동아리연합회 가두모집" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative max-w-3xl mx-auto'>
        <Video />
        <MapAndTimeTable />
        <DepartmentStatus />
        <MapView />
        <Footer />
      </div>
    </>
  )
};

const Video: React.FC = () => {
  return (
    <div className="relative h-screen">
      <video style={{ objectFit: "cover" }} className='absolute w-screen h-screen' src="/intro.mp4" loop autoPlay muted controls={false} playsInline />
      <div className="absolute z-4 w-full h-screen bg-gradient-to-t from-black to-[#ffffff00] opacity-90" />
      <div className="absolute z-10 bottom-20 w-full">
        <div>
          <p className='text-center mb-2 text-white font-bold text-4xl leading-normal'>
            내게 맞는<br />
            <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68]'>동아리</span> 찾아보기
          </p>
          <p className="text-lg text-center text-white mb-5">
            40개가 넘는 중앙동아리가 <br />
            여러분을 기다리고 있어요!
          </p>
          <div className='flex flex-row justify-center'>
            <Link href="/form" className="bg-[color:var(--color-primary)] px-4 py-3 rounded-2xl cursor-pointer">
              <span className='font-bold text-white'>✈️ 지금 찾아보기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapAndTimeTable = () => {

  const TimeTableBanner: React.FC = () => {

    const handleClickBanner = () => {
      window.open(`https://www.instagram.com/p/CpSU_n_PbXI`);
    };

    return (
      <div onClick={handleClickBanner} className="flex items-center justify-between my-4 px-4 py-4 bg-[#ff875e] rounded-2xl cursor-pointer">
        <div className="flex flex-col text-white">
          <p className="font-bold">⏰ 동아리들의 멋진 공연도 보고 가세요!</p>
          <span className="ml-6 text-xs">시간표 확인하기</span>
        </div>
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
          <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" />
        </svg>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-gray-700 font-bold text-3xl px-5 mt-14">
        🧭 <br />
        가두모집 동아리 배치도
      </h2>
      <p className="text-gray-500 my-4 px-5">
        동아리 신입부원 모집제는 <b>3월 6일(월)~7일(화) 10:00 ~ 17:00</b> 에 하고,<br />
        장소는 <b>대양홀 앞</b>, <b>학생회관 잔디밭</b>에서 해요.
      </p>
      <TimeTableBanner />

      <Image
        className='mx-auto'
        width={300}
        height={300}
        alt="club-map"
        src="/images/map.jpeg"
      />
    </div>
  );
};

const DepartmentStatus = () => {
  return (
    <div>
      <h2 className="text-gray-700 font-bold text-3xl px-5 mt-14">
        📚 <br />
        분과별 동아리 현황
      </h2>
      <p className="text-gray-500 my-4 px-5">
        세종대학교 중앙동아리는 총 6개의 분과로 나뉘어요.<br />
        (공연, 문화, 봉사, 종교, 체육, 학술)
      </p>
      <DepartmentArrow
        icon={'🎻'}
        title={'공연분과 (9개)'}
        description={'밴드, 랩, 연극, 노래, 댄스, 풍물 등 공연활동을 하는 동아리입니다.'}
        href={'clubs/show'} />
      <DepartmentArrow
        icon={'💃'}
        title={'문화분과 (7개)'}
        description={'다양한 문화 체험, 독서 모임, 문화 예술 전시 등을 하는 동아리입니다.'}
        href={'clubs/culture'} />
      <DepartmentArrow
        icon={'🤝'}
        title={'봉사분과 (2개)'}
        description={'나눔 활동, 지역 사회 봉사 등을 하는 동아리입니다.'}
        href={'clubs/volunteer'} />
      <DepartmentArrow
        icon={'🙏🏻'}
        title={'종교분과 (5개)'}
        description={'다양한 종교 체험, 신앙 생활, 예배 등을 하는 동아리입니다.'}
        href={'clubs/religion'} />
      <DepartmentArrow
        icon={'💪'}
        title={'체육분과 (14개)'}
        description={'다양한 운동 활동, 스포츠 대회 참여 등을 하는 동아리입니다.'}
        href={'clubs/physical'} />
      <DepartmentArrow
        icon={'🔬'}
        title={'학술분과 (9개)'}
        description={'학문적 연구, 세미나·강연, 학술 대회 등을 하는 동아리입니다.'}
        href={'clubs/academic'} />
    </div>
  );
};

export default Home;