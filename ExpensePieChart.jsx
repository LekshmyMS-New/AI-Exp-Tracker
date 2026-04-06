import { Box } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import GlassCard from "../common/GlassCard";

const COLORS = ["#6C5DD3", "#00D09C", "#FF6B6B", "#FFD166"];

const ExpensePieChart = ({ data }) => {
  const chartData = Object.keys(data || {}).map((key) => ({
    name: key,
    value: data[key],
  }));

  return (
    <GlassCard sx={{ mt: 2, height: 260 }}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={80}
              innerRadius={45}
              paddingAngle={4}
              isAnimationActive={true}
              animationDuration={800}
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );
};

export default ExpensePieChart;