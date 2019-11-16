import React from 'react';

function StoryCard( props ) {
    
    const story = props.stories.find( story => story.id === props.match.params.storyID);
    return (
      <div> 
        <h2>{story.story_title}</h2>
        <h3>By {story.author}</h3>
        <h3>Written on {story.date}</h3>
        <p>{story.story_text}</p>
      </div>
    );
  }
  
  export default StoryCard;