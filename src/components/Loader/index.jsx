import React from 'react'
import { Box, Center, CircularProgress} from '@chakra-ui/react';

const Loader = () => {
    return (
        <Center>
            <Box height={'100vh'}>
            <CircularProgress role='progressbar' isIndeterminate mt={'10rem'} size='100px' color='pink'/>
        </Box>
        </Center>
    )
}

export default Loader