import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  VStack,
  Icon,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { FaHeart, FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa'
import { NAVBAR_HEIGHT } from '../components/Navbar'

const Donate = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box bg={bgColor} minH="calc(100vh - 60px)">
      <Box pt={{ base: "140px", md: "160px" }} pb={20}>
        <Container maxW="container.md">
          <VStack spacing={10} align="stretch">
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <Heading as="h1" size="2xl" color={textColor}>
                Support Our Mission
              </Heading>
              <Text fontSize="xl" color={textColor}>
                Your contribution helps us empower more young individuals and create lasting positive change in their lives.
              </Text>
            </VStack>

            {/* Legal Status */}
            <Alert status="info" borderRadius="md">
              <AlertIcon />
              Legal Status: 501(c)(3) status pending. All donations will be tax-deductible once approved.
            </Alert>

            {/* Donation Form Placeholder */}
            <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="base">
              <VStack spacing={6}>
                <Text fontSize="lg" fontWeight="medium">
                  Donation Form Integration Coming Soon
                </Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  We are currently setting up our secure payment processing system. 
                  Please check back soon to make your contribution.
                </Text>
                <Button
                  colorScheme="blue"
                  size="lg"
                  isDisabled
                  w="full"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  Donate Now
                </Button>
              </VStack>
            </Box>

            {/* Contact Information */}
            <VStack spacing={4} textAlign="center" pt={4}>
              <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.400')}>
                For questions about donations or to discuss other ways to support our mission, 
                please contact our development team.
              </Text>
              <Text fontSize="md" fontWeight="bold">
                Email: donations@anahita.org
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Donate

const StatBox = ({ label, number, helpText }: any) => {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      rounded={'lg'}
      textAlign="center"
    >
      <StatLabel fontSize={'xl'} fontWeight={'medium'}>
        {label}
      </StatLabel>
      <StatNumber fontSize={'4xl'} fontWeight={'bold'} color="brand.500">
        {number}
      </StatNumber>
      <StatHelpText fontSize={'sm'}>{helpText}</StatHelpText>
    </Stat>
  )
}

const DonationCard = ({ title, description, icon, amount, featured = false }: any) => {
  const bgColor = useColorModeValue(
    featured ? 'brand.50' : 'white',
    featured ? 'brand.900' : 'gray.800'
  )
  const borderColor = useColorModeValue(
    featured ? 'brand.200' : 'gray.200',
    featured ? 'brand.700' : 'gray.700'
  )

  return (
    <Stack
      bg={bgColor}
      border="2px"
      borderColor={borderColor}
      boxShadow={'xl'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _hover={{
        transform: 'translateY(-5px)',
        transition: 'all 0.3s ease',
      }}
    >
      <Icon as={icon} w={12} h={12} color="brand.500" />
      <Box textAlign="center">
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text fontSize={'sm'} color={'gray.500'}>
          {description}
        </Text>
      </Box>
      <Stack direction={'row'} align={'center'} justify={'center'}>
        <Text fontSize={'3xl'} fontWeight={600}>
          $
        </Text>
        <Text fontSize={'5xl'} fontWeight={900}>
          {amount}
        </Text>
      </Stack>
      <Button
        w={'full'}
        colorScheme="brand"
        variant={featured ? 'solid' : 'outline'}
      >
        Donate Now
      </Button>
    </Stack>
  )
} 