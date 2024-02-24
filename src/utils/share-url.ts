const shareUrl = async (): Promise<boolean> => {
    const title = "내게 맞는 동아리 찾기";

    // 공유 데이터 설정
    const shareData = {
        title,
        url: document.location.href,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
        try {
            await navigator.share(shareData);
            return true;
        } catch (error) {
            console.error('Sharing failed', error);
            return false;
        }
    }
};

export default shareUrl;
