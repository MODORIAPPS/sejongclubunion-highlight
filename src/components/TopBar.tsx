import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none'
    },
    overlay: {
        zIndex: 9999,
        background: "#00000075"
    }
};

Modal.setAppElement('#modal-root');
const TopBar: React.FC = () => {

    const [open, setOpen] = useState(false);

    const toggleDialogOpen = () => setOpen(!open);

    useEffect(() => {
        const handleLoad = () => {
            try {
                if (!window.Kakao.isInitialized()) window.Kakao.init('003fd24187cf3803e9ae50a3a3d85ec1');

                (window as any).Kakao.Share.createDefaultButton({
                    container: '#hiddenme',
                    objectType: 'feed',
                    content: {
                        title: '내게 맞는 동아리 찾기',
                        description: '간단한 테스트로 내게 맞는 동아리를 찾아보아요!',
                        imageUrl:
                            'https://find.sejongclubunion.com/images/head_og.png',
                        link: {
                            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                            mobileWebUrl: 'https://find.sejongclubunion.com',
                            webUrl: 'https://find.sejongclubunion.com',
                        },
                    },
                    social: {
                        likeCount: 286,
                        commentCount: 45,
                        sharedCount: 845,
                    },
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'https://find.sejongclubunion.com',
                                webUrl: 'https://find.sejongclubunion.com',
                            },
                        },
                        {
                            title: '총동연에게 문의하기',
                            link: {
                                mobileWebUrl: 'https://alpha.sejongclubunion.com/faq',
                                webUrl: 'https://alpha.sejongclubunion.com/faq',
                            },
                        }
                    ],
                });
            } catch (e) {
                console.log(e);
            }
        };

        if (typeof window !== 'undefined' && window.addEventListener) {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            if (typeof window !== 'undefined' && window.removeEventListener) {
                window.removeEventListener('load', handleLoad);
            }
        };
    }, []);

    const handleClickCopy = () => {
        window.navigator.clipboard.writeText("https://find.sejongclubunion.com");
        alert("복사되었습니다!")
    };

    const handleClickKakaoTalk = () => {
        document?.getElementById("hiddenme")?.click();
    };

    const handleClickInstagram = async () => {
        window.open("https://www.instagram.com/create/story");
    };

    return (
        <>
            <div id="hiddenme" className="hidden" />
            <div className="fixed z-20 w-full p-5 bg-white flex flex-row justify-between items-center border-b-[1px] border-bg-gray-400">
                <Link href="/" className="flex items-center">
                    <img width={24} height={24} className="mr-2 inline-block" src={"/light_logo.png"} />
                    <span className="text-[color:var(--color-primary)]">하이라이트</span>
                </Link>
                <svg
                    onClick={toggleDialogOpen}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 23C5.1 23 4.75 22.85 4.45 22.55C4.15 22.25 4 21.9 4 21.5V8.775C4 8.375 4.15 8.025 4.45 7.725C4.75 7.425 5.1 7.275 5.5 7.275H9.725V8.775H5.5V21.5H18.5V8.775H14.225V7.275H18.5C18.9 7.275 19.25 7.425 19.55 7.725C19.85 8.025 20 8.375 20 8.775V21.5C20 21.9 19.85 22.25 19.55 22.55C19.25 22.85 18.9 23 18.5 23H5.5ZM11.225 15.325V3.9L9.025 6.1L7.95 5.025L11.975 1L16 5.025L14.925 6.1L12.725 3.9V15.325H11.225Z" fill="#2E3238" />
                </svg>
            </div>
            <Modal
                isOpen={open}
                style={customStyles}
                onRequestClose={toggleDialogOpen}
                className="w-[270px] top-[30%] fixed p-4 rounded-2xl bg-white">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-2xl text-gray-700">공유하기</p>
                    <svg onClick={toggleDialogOpen} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.22499 18.825L5.17499 17.775L10.95 12L5.17499 6.225L6.22499 5.175L12 10.95L17.775 5.175L18.825 6.225L13.05 12L18.825 17.775L17.775 18.825L12 13.05L6.22499 18.825Z" fill="#2E3238" />
                    </svg>
                </div>
                <p className="mt-4 mb-8 text-gray-500">
                    주변 사람들에게 공유해서 동아리를 찾을 수 있게 도와주세요!
                </p>
                <div className="flex flex-row justify-between">
                    <div onClick={handleClickCopy} className="flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 p-1 cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFAFA]">
                            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.84503 10.3657H5.32164C3.84932 10.3657 2.5943 9.8604 1.55658 8.84974C0.51886 7.83908 0 6.61679 0 5.18286C0 3.74894 0.51886 2.52665 1.55658 1.51599C2.5943 0.505329 3.84932 0 5.32164 0H9.84503V1.55486H5.32164C4.29279 1.55486 3.41472 1.90902 2.68743 2.61735C1.96014 3.32567 1.59649 4.18084 1.59649 5.18286C1.59649 6.18488 1.96014 7.04006 2.68743 7.74838C3.41472 8.45671 4.29279 8.81087 5.32164 8.81087H9.84503V10.3657ZM6.51901 5.96029V4.40543H14.7675V5.96029H6.51901ZM11.4415 10.3657V8.81087H15.9649C16.9938 8.81087 17.8718 8.45671 18.5991 7.74838C19.3264 7.04006 19.6901 6.18488 19.6901 5.18286C19.6901 4.18084 19.3264 3.32567 18.5991 2.61735C17.8718 1.90902 16.9938 1.55486 15.9649 1.55486H11.4415V0H15.9649C17.4372 0 18.6923 0.505329 19.73 1.51599C20.7677 2.52665 21.2866 3.74894 21.2865 5.18286C21.2865 6.61679 20.7677 7.83908 19.73 8.84974C18.6923 9.8604 17.4372 10.3657 15.9649 10.3657H11.4415Z" fill="#F1CB23" />
                            </svg>
                        </div>
                        <p className="mt-8 text-sm text-gray-700">
                            링크 복사
                        </p>
                    </div>
                    <div onClick={handleClickKakaoTalk} id="kakaotalk-sharing-btn" className="flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 p-1 cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFAFA]">
                            <img width={24} height={24} src="/images/logo/kakaotalk.png" />
                        </div>
                        <p className="mt-8 text-sm text-gray-700">
                            카카오톡
                        </p>
                    </div>
                    <div onClick={handleClickInstagram} className="flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 p-1 cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFAFA]">
                            <img width={24} height={24} src="/images/logo/instagram.png" />
                        </div>
                        <p className="mt-8 text-sm text-gray-700">
                            인스타그램
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default TopBar;