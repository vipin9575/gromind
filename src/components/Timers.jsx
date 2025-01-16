import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Timers = ({ count, title }) => {
  return (
    <Box
      display="flex"
      gap={0.2}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border={3}
      borderRadius={50}
      width={90}
      height={90}
      p={2}
    >
      <Typography fontSize={36} fontWeight={500} lineHeight={1}>
        {count}
      </Typography>
      <Typography fontSize={12} fontWeight={500} lineHeight={1}>
        {title}
      </Typography>
    </Box>
  );
};

Timers.propTypes = {
  count: PropTypes.string,
  title: PropTypes.string,
};

export default Timers;
