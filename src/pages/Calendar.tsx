import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Tag,
  useColorModeValue,
  Button,
  Icon,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react'
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'
import { MdLocationOn } from 'react-icons/md'
import { NAVBAR_HEIGHT } from '../components/Navbar'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionCard = motion(Card)

const Calendar = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const cardBg = useColorModeValue('white', 'gray.800')

  const events = [
    {
      title: 'Community Clean-up Day',
      date: 'March 15, 2024',
      time: '9:00 AM - 2:00 PM',
      location: 'Central Park',
      category: 'Environment',
      description:
        'Join us for our monthly community clean-up event. Together, we can make our neighborhood cleaner and greener.',
    },
    {
      title: 'Education Workshop',
      date: 'March 20, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'Community Center',
      category: 'Education',
      description:
        'Free workshop on sustainable living practices and environmental awareness for all age groups.',
    },
    {
      title: 'Fundraising Gala',
      date: 'April 5, 2024',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Hotel',
      category: 'Fundraising',
      description:
        'Annual fundraising gala to support our community development projects. Join us for an evening of celebration and giving.',
    },
  ]

  return (
    <Box bg={bgColor} minH="calc(100vh - 60px)">
      {/* Hero Section */}
      <Box 
        bgGradient="linear(to-r, blue.500, purple.500)"
        pt={{ base: "140px", md: "160px" }}
        pb={20}
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          bgGradient: 'linear(to-t, gray.50, transparent)',
          display: { base: 'none', md: 'block' }
        }}
      >
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <VStack spacing={8} align="center" textAlign="center">
              <Heading 
                as="h1" 
                size="2xl" 
                color="white"
                letterSpacing="tight"
                textShadow="2px 2px 4px rgba(0,0,0,0.2)"
              >
                Upcoming Events
              </Heading>
              <Text 
                fontSize="2xl" 
                maxW="800px" 
                color="white"
                lineHeight="tall"
                textShadow="1px 1px 2px rgba(0,0,0,0.1)"
              >
                Join us for these exciting upcoming events and be part of our community!
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            {/* Featured Event */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              w="full"
              maxW="2xl"
              mx="auto"
            >
              <MotionCard 
                bg={cardBg}
                boxShadow="xl"
                borderRadius="2xl"
                overflow="hidden"
                whileHover={{
                  y: -8,
                  boxShadow: '2xl',
                }}
                transition={{ duration: 0.3 }}
              >
                <CardHeader 
                  bgGradient="linear(to-r, blue.500, purple.500)"
                  color="white"
                  p={8}
                >
                  <HStack spacing={4}>
                    <CalendarIcon w={8} h={8} />
                    <Heading size="xl">Grand Opening</Heading>
                  </HStack>
                </CardHeader>
                <CardBody p={8}>
                  <VStack align="stretch" spacing={6}>
                    <Text fontSize="2xl" fontWeight="bold" bgGradient="linear(to-r, blue.400, purple.500)" bgClip="text">
                      July 27, 2024
                    </Text>
                    <Text fontSize="lg" lineHeight="tall">
                      Join us for the grand opening of Anahita! Be part of this historic moment 
                      as we officially begin our journey of empowering youth and creating positive change 
                      in our community.
                    </Text>
                    <Button
                      size="lg"
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      color="white"
                      _hover={{
                        bgGradient: "linear(to-r, blue.500, purple.600)",
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      onClick={() => {
                        // RSVP functionality to be implemented
                        alert('RSVP feature coming soon!')
                      }}
                    >
                      RSVP Now
                    </Button>
                  </VStack>
                </CardBody>
              </MotionCard>
            </MotionBox>

            {/* Calendar Integration Notice */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              w="full"
              maxW="2xl"
              mx="auto"
            >
              <Box 
                bgGradient="linear(to-r, blue.50, purple.50)"
                p={8} 
                borderRadius="xl" 
                textAlign="center"
                boxShadow="lg"
              >
                <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.200')}>
                  Full calendar integration coming soon. Stay tuned for more events and activities!
                </Text>
              </Box>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
              {events.map((event, index) => (
                <EventCard key={index} {...event} delay={0.2 * index} />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  delay: number;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  category,
  description,
  delay,
}: EventCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const iconColor = useColorModeValue('blue.500', 'blue.200')

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -8,
        boxShadow: '2xl',
      }}
      bg={bgColor}
      p={8}
      rounded="xl"
      boxShadow="xl"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        bgGradient: 'linear(to-r, blue.400, purple.500)',
      }}
    >
      <VStack align="stretch" spacing={6}>
        <Tag 
          size="lg" 
          bgGradient="linear(to-r, blue.400, purple.500)"
          color="white"
          alignSelf="flex-start"
          borderRadius="full"
          px={4}
          py={2}
        >
          {category}
        </Tag>
        <Heading 
          size="lg"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Text 
          color={useColorModeValue('gray.600', 'gray.300')}
          fontSize="lg"
          lineHeight="tall"
        >
          {description}
        </Text>
        <VStack align="stretch" spacing={4}>
          <HStack spacing={4}>
            <Icon as={CalendarIcon} w={6} h={6} color={iconColor} />
            <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')}>{date}</Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={TimeIcon} w={6} h={6} color={iconColor} />
            <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')}>{time}</Text>
          </HStack>
          <HStack spacing={4}>
            <Icon as={MdLocationOn} w={6} h={6} color={iconColor} />
            <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')}>{location}</Text>
          </HStack>
        </VStack>
        <Button
          bgGradient="linear(to-r, blue.400, purple.500)"
          color="white"
          size="lg"
          _hover={{
            bgGradient: "linear(to-r, blue.500, purple.600)",
            transform: 'translateY(-2px)',
            boxShadow: 'md',
          }}
        >
          Learn More
        </Button>
      </VStack>
    </MotionBox>
  )
}

export default Calendar 