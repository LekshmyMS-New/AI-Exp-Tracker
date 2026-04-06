import { Box, Typography, Avatar } from "@mui/material";
import PageWrapper from "../components/common/PageWrapper";

const Profile = () => {
  return (
    <PageWrapper>
      <Box textAlign="center">
        <Avatar
          sx={{
            width: 80,
            height: 80,
            margin: "auto",
            mb: 2,
          }}
        />

        <Typography variant="h6">John Doe</Typography>
        <Typography color="text.secondary">
          john@email.com
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default Profile;