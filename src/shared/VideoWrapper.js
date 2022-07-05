import styled from "@emotion/styled";

const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    width: 100%;
    iframe, video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
`;

export default VideoWrapper;
