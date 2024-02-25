"use client";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ClubItemProps } from "@/pages/clubs/components/ClubItem";
import clubs from "@/assets/clubs";

// 초기 위치 좌표
const LATITUDE = 37.54917221210253;
const LONGITUDE = 127.07474473100031;

const INITIAL_ZOOM_LEVEL = 19;

interface Props {
    clubList: ClubItemProps[];
}

export default function NaverMap({ clubList }: Props) {


    const [map, setMap] = useState(null); // 지도 인스턴스 상태
    const [zoomLevel, setZoomLevel] = useState(INITIAL_ZOOM_LEVEL); // 줌 레벨 상태 관리

    const [clubMarkers, setClubMarkers] = useState([]);

    useEffect(() => {
        const mapInstance = new naver.maps.Map(document.getElementById("scu-find-map"), {
            center: new naver.maps.LatLng(LATITUDE, LONGITUDE),
            zoom: zoomLevel,
            mapDataControl: false,
            maxBounds: new naver.maps.LatLngBounds(
                new naver.maps.LatLng(37.55009418266745, 127.07363097405246),
                new naver.maps.LatLng(37.54787446786623, 127.075227202218)
            )
        });

        setMap(mapInstance); // 지도 인스턴스 상태 업데이트

        // 줌 레벨 변경 감지 이벤트 리스너 추가
        naver.maps.Event.addListener(mapInstance, 'zoom_changed', function (zoom) {
            setZoomLevel(zoom); // 줌 레벨 상태 업데이트
        });
    }, []);

    useEffect(() => {
        if (!map) return;

        // 기존 마커들 제거
        clubMarkers.forEach(marker => {
            marker.setMap(null);
        });
        setClubMarkers([]);

        clubList.forEach((club) => {
            const index = clubs.findIndex((c) => c.title === club.title);
            if (index === -1) return;

            const { lat, lng } = clubs[index].booth;
            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(lat, lng),
                map: map,
                icon: {
                    content: `<img class="marker fade-in" src="${club.logo}" style="width: 55px; height:55px; border-radius: 50%; object-fit: contain; background-color: rgba(255, 255, 255, 0.7); padding: 8px;"/>`,
                    anchor: new naver.maps.Point(15, 15),
                }
            });
            setClubMarkers((prev) => [...prev, marker]);
        });
    }, [clubList, map]);

    return (
        <div>
            <Script
                strategy="beforeInteractive"
                src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
            />
            <div id="scu-find-map" className="w-full aspect-square rounded-3xl max-w-xl mx-auto mt-6 border-4 border-primary-200" />
        </div>
    );
}