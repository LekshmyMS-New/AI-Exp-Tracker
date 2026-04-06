import { Card } from "@mui/material";

const GlassCard = ({ children, sx = {} }) => {
  return (
    <Card
      sx={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(25px)",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        p: 2,
        transition: "all 0.25s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px) scale(1.01)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
        },

        "&:active": {
          transform: "scale(0.98)",
        },

        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

export default GlassCard;