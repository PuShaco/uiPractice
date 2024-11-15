import SkeletonContainer from "./SkeletonContainer";
import SkeletonCard from "./SkeletonCard";

export default function SkeletonHome() {
    return (
      <>
        {/* 첫 번째 Container */}
        <SkeletonContainer height={260}>
          <SkeletonCard height={260} width={25} />
          <SkeletonCard height={260} width={45} flex={1} />
          <SkeletonCard height={260} width={25} />
        </SkeletonContainer>
  
        {/* 두 번째 Container */}
        <SkeletonContainer height={430}>
          <SkeletonCard height={430} width={70} flex={1} />
          <SkeletonCard height={430} width={25} />
        </SkeletonContainer>
      </>
    );
  }