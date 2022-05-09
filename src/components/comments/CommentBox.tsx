import React, { useState, useRef } from 'react';
import cn from 'classnames';
import '../../static/css/CommentBox.css';
import { Avatar } from '@mui/material';

const INITIAL_HEIGHT = 23;

const CommentBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const displayName = 'Matei Giurgiu';
  const formDefaultMessage = 'Add a comment';

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue('');
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('send the form data somewhere');
  };

  return (
    <form
      onSubmit={onSubmit}
      ref={containerRef}
      className={cn('comment-box', {
        expanded: isExpanded,
        collapsed: !isExpanded,
        modified: commentValue.length > 0
      })}
      style={{
        minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
      }}
    >
      <div className='header'>
        <div className='user'>
          <Avatar sx={{ bgcolor: '#6667ab61' }} aria-label='recipe'>
            {displayName[0]}
          </Avatar>
          <span>{displayName}</span>
        </div>
      </div>
      <textarea
        ref={textRef}
        onClick={onExpand}
        onFocus={onExpand}
        onChange={onChange}
        className='comment-field'
        placeholder={formDefaultMessage}
        value={commentValue}
        name='comment'
        id='comment'
      />
      <div className='actions'>
        <button type='button' className='cancel' onClick={onClose}>
          Cancel
        </button>
        <button type='submit' disabled={commentValue.length < 1}>
          Post
        </button>
      </div>
    </form>
  );
};

export default CommentBox;
