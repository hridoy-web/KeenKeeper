import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TimelineContext } from '../context/TimelineContext';

const Stats = () => {
    const { history } = useContext(TimelineContext);

    const chartData = [
        { name: 'Text', value: history.filter(i => i.type === 'Text').length, color: '#8b5cf6' },
        { name: 'Call', value: history.filter(i => i.type === 'Call').length, color: '#1e4b3c' },
        { name: 'Video', value: history.filter(i => i.type === 'Meet').length, color: '#22c55e' },
    ].filter(item => item.value > 0);

    const isMobile = window.innerWidth < 768;

    return (
        <div className="w-11/12 mx-auto my-10 md:my-16 min-h-[70vh]">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 text-center md:text-left">
                Friendship Analytics
            </h1>

            <div className="bg-base-200 max-w-5xl mx-auto md:max-w-full p-6 md:p-10 rounded-3xl border-2 border-gray-200">
                <h2 className="text-gray-600 text-lg md:text-xl font-bold  md:mb-8 text-center md:text-left mb-6">
                    By Interaction Type
                </h2>
                <div className="h-[300px] md:h-[400px] w-full flex items-center justify-center">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart style={{ outline: 'none' }}>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={isMobile ? 60 : 80}
                                    outerRadius={isMobile ? 90 : 120}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                    style={{ outline: 'none' }}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} style={{ outline: 'none' }} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend
                                    iconType="circle"
                                    verticalAlign="bottom"
                                    align="center"
                                    iconSize={10}
                                    wrapperStyle={{ paddingTop: "20px" }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="text-center px-4">
                            <p className="text-xl md:text-2xl text-gray-600 font-semibold mb-2">No interactions found yet.</p>
                            <p className="text-gray-500 text-xs md:text-base leading-tight">Connecting with your friends to see the analytics!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Stats;