import { Typography } from "@mui/material";
import React from "react";

export interface IplayerInfo {
  playerName: string;
  runs?: number;
  wickets?: number;
  balls?: number;
}

export interface IBattingInfo {
  totalRuns: number;
  totalWickets: number;
  teamAbbreviation: string;
  striker: IplayerInfo;
  nonStriker: IplayerInfo;
}

export interface IBallingInfo {
  teamAbbreviation: string;
  currentOver: number;
  currentBalls: number;
  lastSixBalls: Array<number>;
  target?: number;
  currentBaller: string;
}
export interface IBannerProps {
  battingInfo?: IBattingInfo;
  ballingInfo?: IBallingInfo;
}
const Banner = (props: IBannerProps) => {
  const { ballingInfo, battingInfo } = props;
  return (
    <div>
      <div>
        <Typography>
          {battingInfo?.teamAbbreviation} ({battingInfo?.totalRuns}/
          {battingInfo?.totalWickets})
        </Typography>
        <div>
          <Typography>
            {battingInfo?.striker?.playerName} ({battingInfo?.striker.runs}/
            {battingInfo?.striker.balls})
          </Typography>
          <Typography>
            {battingInfo?.nonStriker?.playerName} (
            {battingInfo?.nonStriker.runs}/{battingInfo?.nonStriker.balls})
          </Typography>
        </div>
      </div>
      <div>
        <Typography>
          {ballingInfo?.teamAbbreviation}{" "}
          {ballingInfo?.target && `(${ballingInfo?.target})`}
        </Typography>
        <Typography>{ballingInfo?.currentBaller}</Typography>
        <Typography>
          {ballingInfo?.lastSixBalls.toString().split(" ,")}
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
