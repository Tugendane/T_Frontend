import React from "react";
import { Sparkline } from "@mantine/charts";

function Chart() {
    return (
        <div className="">
            <Sparkline
                w={400}
                h={200}
                data={[20, 10, 40, 60, 50, 80, 60, 40]}
                curveType="bump"
                color="blue"
                fillOpacity={0.6}
                strokeWidth={2}
               
            />
        </div>
    );
}

export default Chart;
