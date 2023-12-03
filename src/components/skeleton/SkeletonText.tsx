import Skeleton from "@/components/skeleton/Skeleton";

interface Props {
    width?: number
}

const SkeletonText = ({width = 100}: Props) => {
    return (
        <div
            style={{
                display: 'block',
                width: width,
            }}
        >
            <Skeleton/>
        </div>
    );
};

export default SkeletonText;