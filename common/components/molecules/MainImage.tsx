import type { mainImageType } from "@/common/types/mainImage.type";


const MainImage = (mainImageProps : mainImageType) => {
    return (
        <div>
            <img src={mainImageProps.src} alt={mainImageProps.alt} />
        </div>
    );
}

export default MainImage;