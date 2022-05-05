import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import userService from '../../services/users/userService';
import UserFeedProfile from '../users/UserFeedProfile';

const Feed = () => {
  const [userFeedProfiles, setUserFeedProfiles] = useState<
    UserFeedProfileProps[]
  >([]);

  useEffect(() => {
    async function fetchUserFeedProfiles() {
      const userFeedProfiles = await userService
        .getUserFeedProfiles(1, 1)
        .then((response) => response.data);
      setUserFeedProfiles(userFeedProfiles);
    }

    fetchUserFeedProfiles();
  }, []);

  return (
    <Box flex={4} p={2} style={{ marginLeft: '0px' }}>
      {userFeedProfiles.length > 0 && (
        <ul style={{ paddingLeft: '0px' }}>
          {userFeedProfiles.map((userFeedProfile) => (
            <UserFeedProfile
              key={userFeedProfile.userId}
              userId={userFeedProfile.userId}
              displayName={userFeedProfile.displayName}
              city={userFeedProfile.city}
              photo={userFeedProfile.photo}
              lastComment={userFeedProfile.lastComment}
            />
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Feed;
