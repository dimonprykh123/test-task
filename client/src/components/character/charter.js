import React from "react"
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts"

export const SimpleAreaChart = ({height,width,data}) => {
    return (
         <ResponsiveContainer width={width}>
        <LineChart height={height}  data={data}>
            <CartesianGrid vertical={false} strokeDashArray={5}/>
            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
            <YAxis axisLine={false} tickLine={false}/>
            <Tooltip/>
            <Line dot={false} type='monotone' dataKey='pv' stroke='#3A80BA' strokeWidth={4}/>
        </LineChart>
         </ResponsiveContainer>
    )
}