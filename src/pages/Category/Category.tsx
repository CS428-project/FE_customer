import { Box, Container, Input, Grid, GridItem } from '@chakra-ui/react'
import {Card} from '../../components/index'
// import React from 'react'
const obj = {
  name: "nhan",
  position: "intern",
  fields: [],
}
export default function Category() {
  return (
    <div>
        <Container display={'flex'} justifyContent={'center'} mt={'12vh'} alignItems={'center'} maxW={'100%'} h={'14vh'} bg={''}>
            <Box className='category_title' padding='4' ml={'10vw'} w={'70%'} fontSize={40} color='black' maxH='l'>Category</Box>
            <Input placeholder='search for mentor, fields,...' size={'md'} w={'30%'} borderRadius='xl' border={'1px'} borderColor={'gray.400'}></Input>
        </Container> 
        <hr className='flex_cen' style={{width:'80%', margin: '0 auto 15px'}}/>
        <div className="list_mentor flex_cen">
        <Grid templateColumns='repeat(4, 1fr)' gap={8} >
            <GridItem><Card {...obj} /></GridItem>
            <GridItem><Card {...obj} /></GridItem>
            <GridItem><Card {...obj} /></GridItem>  
            <GridItem><Card {...obj} /></GridItem>  
            <GridItem><Card {...obj} /></GridItem>  
            <GridItem><Card {...obj} /></GridItem>  
        </Grid>
        </div>
    </div>
  )
}
