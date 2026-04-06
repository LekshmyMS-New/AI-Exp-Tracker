import { Typography } from "@mui/material";
import GlassCard from "../common/GlassCard";

const InsightCard = ({ text }) => {
  return (
    <GlassCard
      sx={{
        mt: 2,
        background: "linear-gradient(135deg,#1E1E2F,#2A2A40)",
      }}
    >
      <Typography variant="body1">{text}</Typography>
    </GlassCard>
  );
};

export default InsightCard;