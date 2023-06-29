import React, { useState } from 'react';

import useImage from './useImage';

interface TwitterFollowCardProps {
  name: string;
  username: string;
  isFollowing: boolean;
}

const TwitterFollowCard: React.FC<TwitterFollowCardProps> = ({name, username, isFollowing}) => {
  const [isFollow, setIsFollow] = useState<boolean>(isFollowing);
  const userLogot = useImage(username)
  const btnClass = isFollow ? 'tw-follow-button' : 'tw-follow-button is-following';

    return (
      <article className='tw-card-container'>
        <header className='tw-card-header' >
          <img className='tw-card-avatar' alt='username' src={userLogot.image} />
          <div className='tw-card-info'>
            <strong>{name}</strong>
            <span className='tw-card-username'>@{username}</span>
          </div>
        </header>
        <aside className='tw-card-button'>
          <button className={btnClass} onClick={() => setIsFollow((prev) => !prev)}>
            <strong className='tw-follow-text'>{ isFollow ? 'follow' : 'following'}</strong>
            <span className='tw-follow-stop-following'>stop following</span>
          </button>
        </aside>
      </article>
    );
};

export default TwitterFollowCard;