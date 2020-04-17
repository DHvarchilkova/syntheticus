import React, {Component, useState} from 'react';
import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from "recharts";

const [data, setData] = useState(initialData)

const initialData = [ ]

for (key in data) {
    initialData.push({label: key, y: data[key]});
}

const chart = new Recharts.BarChart("ResponsiveContainer",
    {
        data: [
            {
                type: "column",
                dataPoints: initialData
            }
        ]
    });

chart.render();