import React, { useState } from 'react';
import CommentsBlock from 'simple-react-comments';
import { commentsData } from './Data.ts';
 

const Reviews = () => {

  const [count, setCount] = useState(0);

  function handleUpdate() {
    setCount(count + 1);
  }

  let d1 = commentsData;

    return (
        <>
        <div>
          <CommentsBlock
            comments={d1}
            isLoggedIn={true}
            onSubmit={text => {
              if (text.length > 0) {
                d1.push({
                      authorUrl: '#',
                      avatarUrl: 'https://i.pinimg.com/236x/c9/0a/d7/c90ad748ff7e3287e52d138c6873d9c1.jpg',
                      createdAt: new Date(),
                      fullName: 'User',
                      text,
                    },
                  );
                handleUpdate();
              }
            }}
          />
        </div>
        </>
      );

}
 
export default Reviews;