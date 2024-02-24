import html2canvas from "html2canvas";

// https://github.com/edysegura/html5-apis/blob/master/web-share/app.js
const shareImageAsset = async (): Promise<boolean> => {
    const title = "내게 맞는 동아리 찾기 결과 공유";
    // #screen-capture-area 영역을 캡처
    const element = document.getElementById('screen-capture-area');
    const canvas = await html2canvas(element);
    const blobImageAsset = await new Promise(resolve => canvas.toBlob(resolve));

    // Blob을 File 객체로 변환
    const filesArray = [
        new File([blobImageAsset as BlobPart], title, {
            type: 'image/png',
            lastModified: new Date().getTime(),
        }),
    ];

    console.log(blobImageAsset);

    // 공유 데이터 설정
    const shareData = {
        title,
        files: filesArray,
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

export default shareImageAsset;
