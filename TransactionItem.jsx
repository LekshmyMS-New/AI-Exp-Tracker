import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";

const MotionCard = motion(GlassCard);

const TransactionItem = ({ title, amount, category, date }) => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 1.5,
      }}
    >
      <Box>
        <Typography>{title}</Typography>
        <Typography variant="caption" color="text.secondary">
          {category} • {date}
        </Typography>
      </Box>

      <Typography>₹{amount}</Typography>
    </MotionCard>
  );
};

export default TransactionItem;