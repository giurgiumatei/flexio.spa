import React from 'react';
import { Avatar } from '@mui/material';
import { UserFeedProfileProps } from '../../../interfaces/users/userFeedProfileProps';
import '../static/css';

const UserFeedProfile = ({
    id,
    displayName,
    city,
    photo
}: UserFeedProfileProps) => {
    return (
        <div className='user_feed_profile'>
            <div className='user_feed_profile__header'>
                <Avatar className='user_feed_profile__avatar' />
                <h3>{displayName}</h3>
                <h3>{city}</h3>
            </div>
            <img
                className='user_feed_profile__image'
                src={
                    'https://instagram.fclj2-1.fna.fbcdn.net/v/t51.2885-15/248751624_945545459697247_3722971866503699151_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fclj2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=vRkzLOn8t5cAX8jkWUo&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjY5NDgxMjczMzkyMjIzNDYwMQ%3D%3D.2-ccb7-4&oh=00_AT8MGWy6jlcJAE3_tF3qJYnZR7GYPDXNw5SyIZ5UzwjcsQ&oe=626EF53B&_nc_sid=30a2ef'
                }
                alt={photo}
            />
            {/* <h4 className='user_feed_profile__first_comment'>
                <strong>{username}</strong> {caption}
            </h4> */}
        </div>
    );
};
