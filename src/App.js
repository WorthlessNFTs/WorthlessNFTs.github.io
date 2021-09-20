import React from 'react'
import "@fontsource/comic-mono"
import "@fontsource/roboto-mono"
import {
  ChakraProvider,
  Box,
  Image,
  Button,
  Badge,
  Text,
  Icon,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Flex,
  Tag,
  Heading,
  List,
  ListItem
} from '@chakra-ui/react'
import {
  StarIcon,
  EmailIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#D5DBDB",

      }
    }
  },
  fonts: {
    heading: "Comic Mono",
    body: "Roboto Mono",
  },
  // colors: {
  //   // body: '#D5DBDB'
  // }
  
  // colors: {
  //   brand: {
  //     100: "#f7fafc",
  //     // ...
  //     900: "#1a202c",
  //   },
  // },
})



const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={4}
      backgroundColor="#000000"
      pt={50}
      pl={25}
      pr={25}
      pb={50}
    >
        <Box minWidth={175}>
          <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
            About
          </Heading>
        </Box>
        <Box minWidth={175}>
          <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
            Mint
          </Heading>
        </Box>
        <Box minWidth={175}>
          <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
            Road Map
          </Heading>
        </Box>
        <Box minWidth={175}>
          <Heading color="#ffffff" maxWidth={150} vertical-align='top' overflow="hidden">
            White Paper
          </Heading>
        </Box>
        <Box minWidth={175}>
          <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
            Team
          </Heading>
        </Box>
        <Box minWidth={175}>
          <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
            Socials
          </Heading>
        </Box>
        <Box minWidth={175}>
          <Button height={75} width={150}>
          <Heading color="#000000" maxWidth={150} vertical-align='top'>
            MINT
          </Heading>
         </Button>
        </Box>
    </Flex>
    <Flex
      justifyContent="center"
      color="whiteAlpha.500"
      backgroundColor="#000000"
      alignItems="stretch"
    >
      <Box>
        <Grid
          gap={6}
          row={7}
          column={1}
          // templateRows="repeat(7, 1fr)"
          minWidth={600}
          maxWidth={700}
          p={5}
        >
          <Box>
          <Flex
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              backgroundColor="#000000"
            >
            <Image src={'/images/Worthless.png'}/>
            </Flex>
          </Box>
          <Box>
            <Heading id='About' textAlign="center" color="#ffffff">
              Think There Are Enough Solana NFT Projects? Think Again.
            </Heading>
            <Text color="#ffffff"></Text>
            <List
              color="#ffffff"
              textAlign="center"
              p={10}
              fontWeight="bold"
            >
              <ListItem pb={2}>1024 NFTs.</ListItem>
              <ListItem pb={2}>Randomly, Algorithmically Generated.</ListItem>
              <ListItem pb={2}>Completely Worthless.</ListItem>
            </List>
            <Text>
              Seriously, these are total trash that you absolutely should not
              buy if you have even half a brain. I literally made these to
              insult all you retards. Anyone who mints one is a complete idiot.
              But you're a bunch of dumb Apes, otherwise you wouldn't still be
              reading this, so you'll probably buy one anyway. Odds of this NFT
              mooning are basically minus infinity. I'm warning you, DO NOT MINT
              THIS NFT (Unless you are OK with funding my Lambo).
            </Text>
          </Box>
          <Box>
            <Heading
              id='Mint'
              textAlign="center"
              color="#ffffff"
              fontWeight="bold"
            >
              Mint - Coming Soon.
            </Heading>
            <List p={10} fontWeight="bold">
              <ListItem color="#ffffff" textAlign="center">
                1024 NFTS @ 0.5 SOL Mint Price
              </ListItem>
            </List>
            <Text>
              The Worthless NFT mint will start as soon as I figure out how to
              copy and paste a mint button into this HTML template. Consider
              this a social experiment into how many retards will hand over
              their SOL for one of the laziest NFT projects to date. Mint price
              will be 0.5 SOL.
            </Text>
          </Box>
          <Box>
            <Heading id='RoadMap' textAlign="center" color="#ffffff">
              Road Map
            </Heading>
            <Flex
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              backgroundColor="#000000"
              minWidth={700}
            >
            <Image src={'/images/Roadmap.png'}/>
            </Flex>
          </Box>
          <Box>
            <Heading id='WhitePaper' textAlign="center" color="#ffffff">
              White Paper
            </Heading>
            <Text>
              You really thought I'd write a 10 page document on why my project
              will change the NFT space forever? Grow up.
            </Text>
          </Box>
          <Box>
            <Heading id='Team' textAlign="center" color="#ffffff">
              Team
            </Heading>
            <Flex
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              m={4}
              backgroundColor="#000000"
            >
            <Image src={'/images/dev.png'}/>
            </Flex>
            <Text>
              I am extremely lazy yet highly aspirational monke masquerading as a
              creative, coder and crypto enthusiast. I have no experience in
              anything worthwhile but that won't stop me trying to take your
              money for these crappy JPEGs. Past projects include falling for obvious rugs,
              panic selling dips and giving my seed phrase to the nice MetaMask support staff in my DMs.
            </Text>
          </Box>
          <Box>
            <Heading id='Socials' textAlign="center" color="#ffffff">
              Socials
            </Heading>
            <Text>
              Want to join my community of fellow idiots or send me hatemail?
              Check out the Discord and Twitter:
            </Text>
          </Box>
          
        </Grid>
      </Box>
    </Flex>
  </ChakraProvider>
)

export default App
