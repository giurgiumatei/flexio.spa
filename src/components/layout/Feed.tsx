import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import userService from '../../services/users/userService';
import UserFeedProfile from '../users/UserFeedProfile';

const Feed = () => {
  const [userFeedProfiles, setUserFeedProfiles] = useState<
    UserFeedProfileProps[]
  >([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const pageSize = 5;

  const fetchUserFeedProfiles = async () => {
    const newUserFeedProfiles = await userService
      .getUserFeedProfiles(pageNumber, pageSize)
      .then((response) => response.data);
    setUserFeedProfiles(userFeedProfiles.concat(newUserFeedProfiles));
  };
  const handleInfiniteScroll = () => {
    setPageNumber(pageNumber + 1);
    fetchUserFeedProfiles();
  };

  useEffect(() => {
    fetchUserFeedProfiles();
    setPageNumber(pageNumber + 1);
  }, []);

  return (
    <Box flex={4} p={2} style={{ marginLeft: '0px' }}>
      <InfiniteScroll
        dataLength={userFeedProfiles.length}
        next={handleInfiniteScroll}
        hasMore={true}
        loader={<br></br>}
      >
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
      </InfiniteScroll>
    </Box>
  );
};

export default Feed;
