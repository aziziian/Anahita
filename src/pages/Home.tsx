import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Image,
  HStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaGraduationCap, FaHandHoldingHeart, FaUsers } from 'react-icons/fa'
import { NAVBAR_HEIGHT } from '../components/Navbar'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionVStack = motion(VStack)

interface FeatureProps {
  title: string
  text: string
  icon: any
  delay: number
}

const Feature = ({ title, text, icon, delay }: FeatureProps) => {
  const iconBg = useColorModeValue('blue.500', 'blue.200')
  const iconColor = useColorModeValue('white', 'gray.800')
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -8,
        boxShadow: '2xl',
      }}
      p={8}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="xl"
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
      <VStack spacing={6}>
        <Box
          p={4}
          bg={iconBg}
          borderRadius="full"
          boxShadow="md"
        >
          <Icon as={icon} w={8} h={8} color={iconColor} />
        </Box>
        <Heading 
          size="lg" 
          textAlign="center"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Text 
          textAlign="center" 
          color={useColorModeValue('gray.600', 'gray.300')}
          fontSize="lg"
          lineHeight="tall"
        >
          {text}
        </Text>
      </VStack>
    </MotionBox>
  )
}

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const sectionBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
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
          <Flex
            align="center"
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 8, lg: 16 }}
          >
            <MotionVStack
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              align={{ base: 'center', lg: 'flex-start' }}
              spacing={8}
              flex={1}
            >
              <Heading
                as="h1"
                size="2xl"
                lineHeight="shorter"
                color="white"
                textShadow="2px 2px 4px rgba(0,0,0,0.2)"
                mb={4}
              >
                Anahita: Empowering Youth for a Brighter Future!
              </Heading>
              <Text
                fontSize="2xl"
                color="white"
                maxW="600px"
                textAlign={{ base: 'center', lg: 'left' }}
                textShadow="1px 1px 2px rgba(0,0,0,0.1)"
                lineHeight="tall"
              >
                Welcome to Anahita. We are dedicated to empowering young individuals 
                by offering a holistic approach to personal development. Our programs are designed 
                to inspire confidence, build resilience, and cultivate a sense of purpose.
              </Text>
              <HStack spacing={6}>
                <Button
                  as={RouterLink}
                  to="/programs"
                  size="lg"
                  bgGradient="linear(to-r, white, white)"
                  color="blue.500"
                  rounded="full"
                  px={8}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    bgGradient: "linear(to-r, white, blue.50)",
                  }}
                  transition="all 0.2s"
                >
                  Explore Programs
                </Button>
                <Button
                  as={RouterLink}
                  to="/donate"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  rounded="full"
                  px={8}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    bg: 'whiteAlpha.200',
                  }}
                  transition="all 0.2s"
                >
                  Support Us
                </Button>
              </HStack>
            </MotionVStack>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              flex={1}
              position="relative"
              height={{ base: '300px', lg: '500px' }}
            >
              {/* Placeholder for hero image */}
              <Flex
                bg="whiteAlpha.200"
                w="full"
                h="full"
                borderRadius="2xl"
                align="center"
                justify="center"
                overflow="hidden"
                backdropFilter="blur(8px)"
                boxShadow="lg"
              >
                <Text color="white" fontSize="xl">
                  Hero Image Coming Soon
                </Text>
              </Flex>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <VStack spacing={6} textAlign="center">
                <Heading 
                  as="h2" 
                  size="2xl"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                  position="relative"
                  _after={{
                    content: '""',
                    width: '100px',
                    height: '4px',
                    bgGradient: "linear(to-r, blue.400, purple.500)",
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: 'full'
                  }}
                >
                  Why Choose Anahita?
                </Heading>
                <Text 
                  fontSize="xl" 
                  maxW="800px"
                  mt={12}
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  Our comprehensive approach focuses on developing the whole individual
                </Text>
              </VStack>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              <Feature
                icon={FaGraduationCap}
                title="Educational Excellence"
                text="Comprehensive programs designed to enhance academic and personal growth"
                delay={0.2}
              />
              <Feature
                icon={FaHandHoldingHeart}
                title="Personal Development"
                text="Tailored mentorship and guidance for individual growth and success"
                delay={0.4}
              />
              <Feature
                icon={FaUsers}
                title="Community Impact"
                text="Creating lasting positive change through youth empowerment and engagement"
                delay={0.6}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        position="relative"
        py={20}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          bgGradient: 'linear(to-b, blue.50, transparent)',
          opacity: 0.7,
        }}
      >
        <Container maxW="container.xl" position="relative">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <VStack spacing={8} textAlign="center">
              <Heading 
                as="h2" 
                size="2xl"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                position="relative"
                _after={{
                  content: '""',
                  width: '100px',
                  height: '4px',
                  bgGradient: "linear(to-r, blue.400, purple.500)",
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: 'full'
                }}
              >
                Ready to Make a Difference?
              </Heading>
              <Text
                fontSize="xl"
                maxW="800px"
                mt={8}
                color={useColorModeValue('gray.600', 'gray.300')}
                lineHeight="tall"
              >
                Join us in our mission to empower the next generation. Whether you're a youth 
                looking to grow, a mentor wanting to give back, or a supporter eager to contribute, 
                there's a place for you at Anahita.
              </Text>
              <HStack spacing={6} pt={4}>
                <Button
                  as={RouterLink}
                  to="/programs"
                  size="lg"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  color="white"
                  rounded="full"
                  px={8}
                  _hover={{
                    bgGradient: "linear(to-r, blue.500, purple.600)",
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.2s"
                >
                  Get Started
                </Button>
                <Button
                  as={RouterLink}
                  to="/calendar"
                  size="lg"
                  variant="outline"
                  borderColor="blue.400"
                  color="blue.500"
                  rounded="full"
                  px={8}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    bg: 'blue.50',
                  }}
                  transition="all 0.2s"
                >
                  View Events
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 