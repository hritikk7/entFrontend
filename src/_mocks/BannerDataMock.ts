import { IBattingInfo, IBannerProps, IBallingInfo } from "../components/Common/Banner";


const battingInfo: IBattingInfo = {
    teamAbbreviation: "IND",
    totalWickets: 4,
    totalRuns: 200,
    striker: {
        playerName: "Virat Kohli",
        runs: 50,
        balls: 30
    },
    nonStriker: {
        playerName: "Rohit Sharma",
        runs: 30,
        balls: 25
    }
};

const ballingInfo: IBallingInfo = {
    teamAbbreviation: "AUS",
    currentOver: 10,
    currentBalls: 4,
    lastSixBalls: [0, 1, 1, 4, 6, 2],
    target: 300,
    currentBaller: 'Brad Lee'
};

export const  bannerProps: IBannerProps = {
    battingInfo: battingInfo,
    ballingInfo: ballingInfo
};