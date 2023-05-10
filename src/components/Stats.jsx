import React from "react";
import {
  CalanderWrappeer,
  HeadingWrapper,
  StatsWrapper,
} from "../styles/section/Stats.styled";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <>
      <HeadingWrapper>
        <h1>STATIC VIEW</h1>
      </HeadingWrapper>

      <StatsWrapper>
        <div>
          <img src="https://github-readme-stats.vercel.app/api?username=Ritesh134340&show_icons=true&theme=codeSTACKr"></img>
        </div>
        <div>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ritesh134340"></img>
        </div>
      </StatsWrapper>
      <CalanderWrappeer>
        <GitHubCalendar username="Ritesh134340" responsive={true} />
      </CalanderWrappeer>
    </>
  );
};

export default Stats;
