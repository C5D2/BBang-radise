import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const SkeletonLoader = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Skeleton = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: #929292df;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    transform: translateX(-100%);
    animation: ${SkeletonLoader} 1.5s infinite;
  }
`;

const SkeletonContainer = styled.article`
  width: 100%;
  position: relative;
`;

const SkeletonNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media all and (min-width: 768px) {
    gap: 12px;
  }
`;

const SkeletonImgLayout = styled(Skeleton)`
  width: 100%;
  height: 170px;
  border-radius: 10px;
`;

const SkeletonContent = styled.div`
  margin: 0px 7px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media all and (min-width: 768px) {
    gap: 6px;
  }
`;

const SkeletonTitle = styled(Skeleton)`
  width: 80%;
  height: 24px;
  margin-bottom: 4px;
  border-radius: 4px;
`;

const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonLine = styled(Skeleton)`
  width: ${props => props.width || '100%'};
  height: 16px;
  border-radius: 4px;
`;

const SkeletonActive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SkeletonStatic = styled.div`
  display: flex;
  justify-content: space-between;
`;


ClassCardSkeleton.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};


function ClassCardSkeleton() {
  const [showSkeleton, setShowSkeleton] = useState(true); 

  useEffect(() => {
    console.log('Skeleton mounted, showSkeleton:', showSkeleton); // 디버깅용
    const timer = setTimeout(() => {
      console.log('Timer triggered'); // 디버깅용
      setShowSkeleton(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  console.log('Rendering skeleton, showSkeleton:', showSkeleton); 


  return showSkeleton && 
    <SkeletonContainer>
    <SkeletonNavigation>
      <SkeletonImgLayout />
      
      <SkeletonContent>
        <SkeletonTitle />
        
        <SkeletonInfo>
          <SkeletonActive>
            <SkeletonLine width="40%" />
            <SkeletonLine width="20%" />
          </SkeletonActive>

          <SkeletonStatic>
            <SkeletonLine width="30%" />
            <SkeletonLine width="25%" />
          </SkeletonStatic>
        </SkeletonInfo>
      </SkeletonContent>
    </SkeletonNavigation>
  </SkeletonContainer>
}

export default ClassCardSkeleton;
