import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  VStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

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