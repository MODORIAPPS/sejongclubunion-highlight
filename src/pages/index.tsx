import DepartmentArrow from '@/components/DepartmentArrow';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import Head from 'next/head'
import { useState } from 'react';

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
        <TopBar />
        <Video />
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
      <video style={{objectFit: "cover"}} className='absolute w-screen h-screen' src="/intro.mp4" loop autoPlay muted controls={false} playsInline/>
      <div className="absolute z-4 w-full h-screen bg-gradient-to-t from-black to-[#ffffff00] opacity-90" />
      <div className="absolute z-10 bottom-20 w-full">
        <div>
          <p className='text-center mb-2 text-white font-bold text-3xl'>
            내게 맞는<br />
            <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>동아리</span> 찾아보기
          </p>
          <p className="text-center text-white mb-5">
            40개가 넘는 중앙동아리가 <br />
            여러분을 기다리고 있어요!
          </p>
          <div className='flex flex-row justify-center'>
            <div className="bg-[color:var(--color-primary)] px-4 py-3 rounded-2xl">
              <span className='font-bold text-white'>✈️ 지금 찾아보기</span>
            </div>
          </div>
        </div>
      </div>
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
        총 6개의 분과가 있어요.<br />
        (공연, 문화, 봉사, 종교, 체육, 학술)
      </p>
      <DepartmentArrow
        icon={'🎻'}
        title={'공연분과'}
        description={'락밴드, 컴퓨터음악, 통기타, 연극, 인형극 등 공연활동을 하는 동아리입니다.'}
        href={'clubs/show'} />
      <DepartmentArrow
        icon={'💃'}
        title={'문화분과'}
        description={'다양한 문화 체험, 독서 모임, 문화 예술 전시 등을 하는 동아리입니다.'}
        href={'clubs/show'} />
      <DepartmentArrow
        icon={'🤝'}
        title={'봉사분과'}
        description={'다사회 나눔 활동, 지역 사회 봉사, 해외 봉사 등을 하는 동아리입니다.'}
        href={'clubs/show'} />
      <DepartmentArrow
        icon={'🙏🏻'}
        title={'종교분과'}
        description={'다양한 종교 체험, 신앙 생활, 예배 등을 하는 동아리입니다.'}
        href={'clubs/show'} />
      <DepartmentArrow
        icon={'💪'}
        title={'체육분과'}
        description={'다양한 운동 활동, 스포츠 대회 참여 등을 하는 동아리입니다.'}
        href={'clubs/show'} />
      <DepartmentArrow
        icon={'🔬'}
        title={'학술분과'}
        description={'학문적 연구, 세미나·강연, 학술 대회 등을 하는 동아리입니다.'}
        href={'clubs/show'} />
    </div>
  );
};

type MapType = "지하 2층" | "5층" | "6층"
const MapView: React.FC = () => {

  const [location, setLocation] = useState<MapType>("지하 2층");

  const getImage = (): string => {
    switch (location) {
      case "지하 2층": return "/images/b2_floor.png";
      case "5층": return "/images/5_floor.png";
      case "6층": return "/images/6_floor.png";
      default: return "/images/b2_floor.png";
    }
  };

  const Button: React.FC<{ map: MapType }> = ({ map }) => {
    return (
      <div style={{ background: location === map ? "#F1CB23" : "#E1E1E1" }} onClick={() => setLocation(map)} className='ml-3 py-[2px] px-2 rounded'>
        <span className='text-xs text-gray-700'>{map}</span>
      </div>
    );
  };

  return (
    <div className='p-5 my-4 rounded-lg bg-[#F8F8F8]'>
      <h2 className="text-gray-700 font-bold text-2xl">
        🗺️ <br />
        동아리실 배치도
      </h2>
      <p className="text-gray-500 my-4">
        중앙동아리는 모두 학생회관에 있어요
      </p>
      <img
        className='w-full h-[150px]'
        src={getImage()} />
      <div className='mt-4 flex flex-row-reverse '>
        <Button map={"6층"} />
        <Button map={"5층"} />
        <Button map={"지하 2층"} />
      </div>
    </div>
  );
};

export default Home;