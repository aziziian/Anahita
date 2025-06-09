import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Icon } from '@chakra-ui/react'
import { NAVBAR_HEIGHT } from '../components/Navbar'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUsers, FaChalkboardTeacher, FaGlobeAmericas, FaHandsHelping, FaBook } from 'react-icons/fa'

const MotionBox = motion(Box)

interface ProgramCardProps {
  title: string
  description: string
  icon: any
  delay: number
}

const ProgramCard = ({ title, description, icon, delay }: ProgramCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800')
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
      bg={cardBg}
      borderRadius="xl"
      boxShadow="xl"
      textAlign="center"
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
          as="h3" 
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
      </VStack>
    </MotionBox>
  )
}

const Programs = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  const programs = [
    {
      title: "Personalized Coaching",
      description: "One-on-one coaching tailored to youth goals, self-awareness, and life skills.",
      icon: FaChalkboardTeacher
    },
    {
      title: "Educational Enrichment",
      description: "Workshops, tutoring, and seminars to supplement academic growth and curiosity.",
      icon: FaGraduationCap
    },
    {
      title: "Engaging Group Activities",
      description: "Fun, team-based activities that promote leadership, communication, and community.",
      icon: FaUsers
    },
    {
      title: "Transformative Travel",
      description: "Culturally immersive trips for real-world learning and independence.",
      icon: FaGlobeAmericas
    },
    {
      title: "Meaningful Mentorship",
      description: "Connects youth with mentors for guidance, career exploration, and motivation.",
      icon: FaHandsHelping
    },
    {
      title: "Essential Life Skills",
      description: "Teaches financial literacy, emotional intelligence, and career readiness.",
      icon: FaBook
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
                Our Programs
              </Heading>
              <Text 
                fontSize="2xl" 
                maxW="800px" 
                color="white"
                lineHeight="tall"
                textShadow="1px 1px 2px rgba(0,0,0,0.1)"
              >
                Discover the various ways we support and empower youth through our comprehensive programs.
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Programs Grid */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                icon={program.icon}
                delay={0.2 * index}
              />
            ))}
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            mt={20}
          >
            <Box 
              textAlign="center" 
              bgGradient="linear(to-r, blue.50, purple.50)" 
              p={12} 
              borderRadius="2xl"
              boxShadow="xl"
            >
              <Text 
                fontSize="xl" 
                maxW="800px" 
                mx="auto"
                color={useColorModeValue('gray.700', 'gray.200')}
                lineHeight="tall"
              >
                By combining these elements, Anahita creates a nurturing environment where young people can thrive. 
                We are committed to making a positive impact on their lives and helping them realize their full potential.
              </Text>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default Programs 