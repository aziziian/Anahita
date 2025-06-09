import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Icon, Flex, Card, CardBody, Stack, Avatar, HStack, Button } from '@chakra-ui/react'
import { FaHandHoldingHeart, FaLightbulb, FaUsers } from 'react-icons/fa'
import { NAVBAR_HEIGHT } from '../components/Navbar'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'

const MotionBox = motion(Box)
const MotionCard = motion(Card)

interface ValueCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
}

interface LeaderCardProps {
  name: string;
  role: string;
  description: string;
  imagePlaceholder?: string;
  delay: number;
}

const ValueCard = ({ icon, title, description, delay }: ValueCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const iconBg = useColorModeValue('blue.500', 'blue.200')
  const iconColor = useColorModeValue('white', 'gray.800')
  
  return (
    <MotionCard
      bg={cardBg}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: '2xl',
        transition: { duration: 0.3 }
      }}
      h="full"
      boxShadow="xl"
      borderRadius="xl"
      overflow="hidden"
    >
      <CardBody>
        <VStack spacing={6} align="center" p={4}>
          <Box
            p={4}
            bg={iconBg}
            borderRadius="full"
            boxShadow="md"
          >
            <Icon as={icon} w={10} h={10} color={iconColor} />
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
          >
            {description}
          </Text>
        </VStack>
      </CardBody>
    </MotionCard>
  )
}

const LeaderCard = ({ name, role, description, imagePlaceholder, delay }: LeaderCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const roleColor = useColorModeValue('blue.500', 'blue.200')

  return (
    <MotionCard 
      bg={cardBg} 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: '2xl',
        transition: { duration: 0.3 }
      }}
      boxShadow="xl"
      borderRadius="2xl"
      overflow="hidden"
      p={6}
    >
      <CardBody>
        <VStack spacing={8} align="flex-start">
          <HStack spacing={8} w="full">
            <Avatar 
              size="2xl"
              name={name}
              src={imagePlaceholder}
              bg={useColorModeValue('blue.500', 'blue.200')}
              color="white"
              boxShadow="2xl"
              border="4px solid"
              borderColor={useColorModeValue('white', 'gray.800')}
            />
            <Stack spacing={3}>
              <Heading 
                size="xl"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
              >
                {name}
              </Heading>
              <Text 
                color={roleColor}
                fontWeight="bold"
                fontSize="xl"
                letterSpacing="wide"
              >
                {role}
              </Text>
            </Stack>
          </HStack>
          <Text 
            color={useColorModeValue('gray.600', 'gray.300')} 
            lineHeight="tall"
            fontSize="lg"
            sx={{
              textAlign: 'justify',
              hyphens: 'auto'
            }}
          >
            {description}
          </Text>
        </VStack>
      </CardBody>
    </MotionCard>
  )
}

const About = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const sectionBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const gradientStart = useColorModeValue('blue.50', 'blue.900')
  const gradientEnd = useColorModeValue('purple.50', 'purple.900')

  const values = [
    {
      icon: FaHandHoldingHeart,
      title: "Empowerment",
      description: "We believe in empowering youth to reach their full potential through comprehensive support and guidance."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Our innovative programs combine traditional wisdom with modern approaches to youth development."
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "We foster a strong sense of community and belonging among our youth and mentors."
    }
  ]

  const leaders = [
    {
      name: "Dr. Behnoosh Azizi",
      role: "CEO",
      description: "Dr. Behnoosh Azizi is a distinguished senior pharmacist and leader at Mayo Clinic Hospital in Phoenix, Arizona, with more than 25 years of expertise in clinical and operational pharmacy. She earned her Doctor of Pharmacy degree from St. John's University in New York and holds professional licenses in both Arizona and New York. Recognized for her resilience and dedication to service, she has collaborated with multiple nonprofit organizations—including One by One Foster and the World Academy for the Future of Women—to advocate for and uplift women, children, and youth. Her leadership combines pharmacy operations, quality assurance, and team development with a lifelong commitment to supporting underserved communities. As CEO of Anahita International, she spearheads initiatives that foster equity, wellness, and opportunity, bringing both strategic vision and compassionate leadership to her work."
    },
    {
      name: "Vida Azizi",
      role: "Board Member",
      description: "Vida Azizi has extensive experience managing accounting operations and a proven track record across various sectors, including e-commerce, manufacturing, and finance. She has held leadership roles such as Controller and Vice President of Finance at corporations in the U.S. and internationally. Beyond her professional achievements, Vida has dedicated over 40 years to community services. Her journey began as a volunteer teacher in southern Tehran, educating children and adult students in underserved communities. She later collaborated with a nonprofit organization in the U.S. to support women and children at risk of homelessness. As a certified consultant on the Universal Declaration of Human Rights (UDHR), Vida empowers individuals and organizations to understand their fundamental human rights and legal protections."
    },
    {
      name: "Dr. Roya Azizi",
      role: "Board Member",
      description: "Dr. Roya Azizi is a dedicated educator and sustainability advocate, serving as a faculty member in the California State University system. Her research focuses on climate justice and the disproportionate impacts of climate change on marginalized communities, integrating equity and environmental resilience into her teaching and scholarship. Dr. Azizi has mentored graduate students through the Association for the Advancement of Sustainability in Higher Education (AASHE) and has taken on leadership roles in campus sustainability, including serving on the CSUDH Sustainability Committee and as a judge for national and international sustainability research awards. She serves as Managing Editor of the CSU Journal of Sustainability and Climate Change and is an invited speaker on green healthcare and waste reduction. Dr. Azizi earned her doctoral degree from USC and her master's from UCI. Her work bridges equity, education, and practice to empower students and institutions to build a sustainable future."
    }
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <VStack spacing={8} textAlign="center">
              <Heading 
                as="h1" 
                size="2xl" 
                color="white"
                letterSpacing="tight"
                textShadow="2px 2px 4px rgba(0,0,0,0.2)"
              >
                Empowering the Next Generation
              </Heading>
              <Text 
                fontSize="2xl" 
                maxW="800px" 
                color="white"
                lineHeight="tall"
                textShadow="1px 1px 2px rgba(0,0,0,0.1)"
              >
                We aim to inspire confidence, build resilience, and cultivate a sense of purpose in every young person
                we serve. By combining meaningful mentorship with enriching educational experiences, we equip youth
                with essential life skills to navigate challenges and create futures filled with possibilities.
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
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
                  Our Values
                </Heading>
                <Text 
                  fontSize="xl" 
                  maxW="800px" 
                  mt={12}
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  The core values that guide our mission and shape our programs
                </Text>
              </VStack>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} delay={0.3 * index} />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Leadership Section */}
      <Box 
        bg={sectionBg} 
        py={20} 
        position="relative"
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
          <VStack spacing={16}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
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
                  Our Leaders
                </Heading>
                <Text 
                  fontSize="xl" 
                  maxW="800px" 
                  mt={12}
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  Meet the dedicated team driving our mission forward
                </Text>
              </VStack>
            </MotionBox>

            <VStack spacing={12} w="full">
              {leaders.map((leader, index) => (
                <LeaderCard key={index} {...leader} delay={0.3 * index} />
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default About 