import { BottomSheet } from "react-spring-bottom-sheet";

interface Props {
    selectedClubTitle: string | null;
    onClose: () => void;
}

export default function ClubDetailBottomSheet(
    { selectedClubTitle, onClose }: Props
) {

    const isVisible = selectedClubTitle !== null;

    return (
        <BottomSheet
            id="club-detail-bottom-sheet"
            blocking={true}
            open={isVisible}
            onDismiss={onClose}
            defaultSnap={({ maxHeight }) => maxHeight - 80}
            snapPoints={({ minHeight, maxHeight }) => [(maxHeight - 56)]}
            header={
                <div className="flex flex-row items-center justify-between text-gray-700" onClick={onClose}>
                    <span className="text-lg font-bold text-gray-700">{selectedClubTitle}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </div>
            }
        >
            <div>
                <img className="w-full" src={`/clubs-detail/${selectedClubTitle?.replace('#', '')}.png`} />
            </div>
        </BottomSheet>
    );
}