import React, { useContext } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { ResultContext } from '../../contexts/Contexts';
import HeaderText from "../HeaderText/HeaderText";

const Statistics = () => {
    document.title = `Buzz Quizzers | Statistics`;
    const data = [];
    const { results } = useContext(ResultContext);
    results.forEach(result => {
        const dataObj = {};
        const { name, total } = result;
        dataObj.name = name;
        dataObj.Total = total;
        dataObj.Correct = 0;
        dataObj.Incorrect = 0;
        result.result.forEach(d => {
            for (const i in d) {
                if (d[i] === true) {
                    dataObj.Correct += 1;
                }
                if (d[i] === false) {
                    dataObj.Incorrect += 1;
                }
            }
        });
        data.push(dataObj);
    });
    return (
        <div className="">
            <div className="mb-6 mt-2 text-center">
                <HeaderText text={<b className="text-2xl">Statistics</b>} />
            </div>
            <div className="mb-2">
                <h4>* Based on your last Complete Quiz</h4>
                <div className="text-[#8884d8]">&nbsp;&nbsp;&nbsp;&nbsp;* Total</div>
                <div className="text-[#03b1fc]">&nbsp;&nbsp;&nbsp;&nbsp;* Correct</div>
                <div className="text-[#ff9b9b]">&nbsp;&nbsp;&nbsp;&nbsp;* Incorrect</div>
            </div>
            <div className="bg-white py-6 pr-3">
                <ResponsiveContainer width='100%' height={250}>
                    <AreaChart data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorCorrect" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#03b1fc" stopOpacity={0.7} />
                                <stop offset="95%" stopColor="#03b1fc" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorIncorrect" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fa4848" stopOpacity={0.7} />
                                <stop offset="95%" stopColor="#fa4848" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorTotal)" />
                        <Area type="monotone" dataKey="Correct" stroke="#03b1fc" fillOpacity={1} fill="url(#colorCorrect)" />
                        <Area type="monotone" dataKey="Incorrect" stroke="#fa4848" fillOpacity={1} fill="url(#colorIncorrect)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Statistics;