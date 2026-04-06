import { Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GlassCard from "../common/GlassCard";

const ExpenseBarChart = ({ data }) => {
  return (
    <GlassCard sx={{ mt: 2, height: 260 }}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="amount" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );
};

export default ExpenseBarChart;