import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import ListIcon from "@mui/icons-material/List";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 15,
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "420px",
        borderRadius: "20px",
        backdropFilter: "blur(20px)",
        background: "rgba(20,20,30,0.6)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <BottomNavigation
  value={location.pathname}
  onChange={(e, value) => navigate(value)}
  sx={{
    "& .MuiBottomNavigationAction-root": {
      transition: "all 0.3s",
    },
    "& .Mui-selected": {
      transform: "scale(1.2)",
    },
  }}
>
        <BottomNavigationAction label="Home" value="/" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Insights" value="/insights" icon={<InsightsIcon />} />
        <BottomNavigationAction label="Transactions" value="/transactions" icon={<ListIcon />} />
        <BottomNavigationAction label="Wallet" value="/wallet" icon={<AccountBalanceWalletIcon />} />
        <BottomNavigationAction label="Profile" value="/profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;