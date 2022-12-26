// eslint-disable-next-line
import React, { useState, useRef } from "react";
import styled from "styled-components";
import stationData from "./stationInfo.json";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export default function Home() {
  const [stationLine, setStationLine] = useState("");
  const stationDataList = stationData.DATA;

  return (
    <MainWrapper>
      <h1>지하철역 검색</h1>

      <select onChange={(e) => setStationLine(e.target.value)}>
        <option value="">지하철호선 선택하세요</option>
        <option value="01호선">1호선</option>
        <option value="02호선">2호선</option>
        <option value="03호선">3호선</option>
        <option value="04호선">4호선</option>
        <option value="05호선">5호선</option>
        <option value="06호선">6호선</option>
        <option value="07호선">7호선</option>
        <option value="08호선">8호선</option>
        <option value="09호선">9호선</option>
      </select>

      <h2>노선</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {stationDataList
          .filter((data) => data.line === stationLine)
          .map((data) => (
            <div key={data.code}>
              <h2>{data.name}</h2>
            </div>
          ))}
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 0 1rem;
  max-width: 700px;
  margin: 0 auto;
  overflow: auto;
`;

// <div>
//   {/* 카메라 + 렌더러 */}
//   <Canvas style={{ height: "100vh", width: "100vw" }}>
//     {/* 카메라 시점 이동 */}
//     <OrbitControls autoRotate={true} />
//     <mesh>
//       {/* 카메라 위치 */}
//       <ambientLight intensity={0.5} />
//       {/* 조명 (position위치에서 angle각도로 조명을)*/}
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <directionalLight position={[-1, 0, 1]} intensity={0.5} />
//       {/* 구 그리기 */}
//       <boxGeometry attach="geometry" args={[1, 1, 1]} />
//       {/* 구의 색상 */}
//       <meshStandardMaterial attach="material" color={0xa3b18a} />
//     </mesh>
//   </Canvas>
// </div>;
