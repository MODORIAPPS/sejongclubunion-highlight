import Image from "next/image";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {

    const handleClickUnion = () => {
        window.open("https://sejongclubunion.com");
    };

    const handleClickInstagram = () => {
        window.open("https://www.instagram.com/sejong_clubunion/");
    };

    return (
        <div className="bg-[#f9fafb] pt-[20px] pb-[20px]">
            <div className="container 2xl px-4 py-4 sm:mx-auto ">
                <div className="flex flex-row items-center mb-3">
                    <Image
                        width={32}
                        height={32}
                        className="mr-4"
                        src={"/light_logo.png"}
                        alt={"scu_logo_circle"} />
                    <p className="text sm:text-lg text-gray-800">세종대학교 제 41대 총동아리연합회 라이트</p>
                </div>
                <p className="text-sm text-[#9A9A9A] mb-4">
                    세종대학교 총동아리연합회는 다양한 분야의 동아리를 연결하여 학내 문화와 창의성을 증진시키는 조직입니다.<br /><br />
                    05006 서울특별시 광진구 능동로 209 세종대학교 학생회관 408호<br />
                    Copyright(C) 세종대학교 제 41대 총동아리연합회 라이트 All rights reserved <br />
                </p>
                <span onClick={handleClickUnion} className="text-sm font-bold text-[#9A9A9A] cursor-pointer underline mr-4">총동아리연합회 웹사이트</span>
                <span onClick={handleClickInstagram} className="text-sm font-bold text-[#9A9A9A] cursor-pointer underline">인스타그램</span>
            </div>
        </div>
    );
};

export default Footer;