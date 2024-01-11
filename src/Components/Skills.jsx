import React from 'react';
import { SkillDataR1, SkillDataR2 } from '../data/SkillsData';
import styled, { keyframes, css } from 'styled-components';

const Skills = () => {
  return (
    <div className="md:px-20 px-5 py-10 md:my-10">
      <div className='md:text-4xl text-2xl font-inika mb-10'>
        My Skills
      </div>

      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {SkillDataR1.map((item, index) => (
              <ImageGroup key={index}>
                <img className=" w-2/3 md:w-2/5" src={item.url} alt='err' />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {SkillDataR1.map((item, index) => (
              <ImageGroup key={index}>
                <img className=" w-2/3 md:w-2/5" src={item.url} alt='err' />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

        <Marquee>
          <MarqueeGroup2>
            {SkillDataR2.map((item, index) => (
              <ImageGroup key={index}>
                <img className=" w-2/3 md:w-3/5" src={item.url} alt='err' />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {SkillDataR2.map((item, index) => (
              <ImageGroup key={index}>
                <img className=" w-4/5 md:w-3/5" src={item.url} alt='err' />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </div>
  );
};

export default Skills;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0));
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 10px;
`;
