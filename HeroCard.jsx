import { Box, Typography } from "@mui/material";
import GlassCard from "../common/GlassCard";
import AnimatedNumber from "../common/AnimatedNumber";
import { useExpenseStore } from "../../store/useExpenseStore";

const HeroCard = () => {
  const { totalExpense } = useExpenseStore();

  return (
    <GlassCard
      sx={{
        mt: 2,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(270deg,#6C5DD3,#00D09C,#6C5DD3)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 8s ease infinite",
      }}
    >
      {/* Floating Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 250,
          height: 250,
          background: "rgba(255,255,255,0.2)",
          filter: "blur(120px)",
          top: -80,
          right: -80,
          animation: "floatGlow 6s ease-in-out infinite",
        }}
      />

      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        Total Balance
      </Typography>

      <Typography variant="h4" sx={{ mt: 1 }}>
        <AnimatedNumber value={totalExpense()} />
      </Typography>

      <style>
        {`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatGlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        `}
      </style>
    </GlassCard>
  );
};

export default HeroCard;