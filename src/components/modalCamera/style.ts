import styled from 'styled-components'

export const Modal = styled.div`
  z-index: 2001;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  #camera {
    position: relative;
    width: 80%;
    height: 80%;
    z-index: 4;

    .backCamera1 {
      position: absolute;
      z-index: 3;
      /* background-color: red;
      opacity: 0.5; */
      width: 100%;
      height: 40%;
      background: rgba(0, 0, 0, 0.7);
      border-bottom: 1px solid white;
    }
    .backCamera2 {
      position: absolute;
      z-index: 3;
      /* background-color: red;
      opacity: 0.5; */
      width: 100%;
      height: 40%;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      border-top: 1px solid white;
    }
  }
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80%;
    /* height: 80vh; */
  }
  canvas {
    display: none;
  }
  svg {
    position: absolute;
    top: 70px;
    right: 20px;
    z-index: 334;
  }
  .overlay {
    /* position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1; */
  }

  .focus-rectangle {
    position: absolute;
    bottom: 0;
  }
`
