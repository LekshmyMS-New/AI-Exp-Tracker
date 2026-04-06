import { Typography } from "@mui/material";
import GlassCard from "../common/GlassCard";

const BalanceCard = ({ title, amount }) => {
  return (
    <GlassCard sx={{ mt: 2 }}>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>

      <Typography variant="h6" sx={{ mt: 1 }}>
        ₹{amount}
      </Typography>
    </GlassCard>
  );
};

export default BalanceCard;