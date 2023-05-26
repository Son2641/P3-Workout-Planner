import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import BodyPart from './BodyPart';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const imageListRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      // Calculate the scroll delta based on the scroll wheel event
      const scrollDelta = event.deltaY || event.detail || -event.wheelDelta;

      // Update the scroll position by the scroll delta
      imageListRef.current.scrollLeft += scrollDelta;

      // Prevent the default scroll behavior
      event.preventDefault();
    };

    const imageListElement = imageListRef.current;

    // Add the scroll event listener to the image list element
    imageListElement.addEventListener('wheel', handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      imageListElement.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <ImageList
      ref={imageListRef}
      className='image-list-horizontal'
      cols={data.length}
      gap={10}
      direction='row'
      sx={{
        overflowY: 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: '#6F61FE transparent',
        '&::-webkit-scrollbar': {
          height: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#6F61FE',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        height: '180px',
      }}
    >
      {data.map((item) => (
        <ImageListItem key={item.id || item}>
          <Box
            itemId={item.id || item}
            title={item.id || item}
            m='0 40px'
            // sx={{ height: '200px' }}
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default HorizontalScrollbar;
