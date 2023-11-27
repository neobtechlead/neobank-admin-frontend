import Skeleton from "@/components/skeleton/Skeleton";

const SkeletonText = () => {
    return (
        <div
            style={{
                display: 'block',
                width: 100,
            }}
        >
            <Skeleton/>
        </div>
    );
};

export default SkeletonText;