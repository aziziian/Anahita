import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons'
import { FaHome } from 'react-icons/fa'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// Export this constant so other components can use it for spacing
export const NAVBAR_HEIGHT = "80px"

const NavButton = ({ to, children, isActive, ...props }) => {
  const activeBg = useColorModeValue('blue.50', 'blue.900')
  const activeColor = useColorModeValue('blue.600', 'blue.200')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Button
      as={RouterLink}
      to={to}
      variant="ghost"
      bg={isActive ? activeBg : 'transparent'}
      color={isActive ? activeColor : undefined}
      _hover={{
        bg: isActive ? activeBg : hoverBg,
        transform: 'translateY(-2px)',
      }}
      transition="all 0.2s"
      {...props}
    >
      {children}
    </Button>
  )
}

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const { isOpen, onToggle } = useDisclosure()
  const location = useLocation()

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="full" 
      bg={bgColor} 
      borderBottom="1px" 
      borderColor={borderColor}
      zIndex={1000}
      height={NAVBAR_HEIGHT}
      boxShadow="sm"
    >
      <Container maxW="container.xl" h="full">
        <Flex justify="space-between" align="center" h="full">
          {/* Logo/Brand */}
          <RouterLink to="/">
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heading 
                size="lg" 
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                _hover={{ 
                  bgGradient: "linear(to-r, blue.500, purple.600)"
                }}
                transition="all 0.2s"
              >
                Anahita
              </Heading>
            </MotionBox>
          </RouterLink>

          {/* Navigation Links */}
          <HStack spacing={4}>
            <NavButton 
              to="/" 
              isActive={location.pathname === '/'}
              leftIcon={<FaHome />}
            >
              Home
            </NavButton>
            <NavButton 
              to="/programs" 
              isActive={location.pathname === '/programs'}
            >
              Programs
            </NavButton>
            <NavButton 
              to="/about" 
              isActive={location.pathname === '/about'}
            >
              About
            </NavButton>
            <NavButton 
              to="/calendar" 
              isActive={location.pathname === '/calendar'}
            >
              Calendar
            </NavButton>
            <Button 
              as={RouterLink} 
              to="/donate" 
              colorScheme="blue"
              bgGradient="linear(to-r, blue.400, purple.500)"
              _hover={{
                bgGradient: "linear(to-r, blue.500, purple.600)",
                transform: 'translateY(-2px)',
                boxShadow: 'md',
              }}
              _active={{
                bgGradient: "linear(to-r, blue.600, purple.700)",
              }}
              transition="all 0.2s"
            >
              Donate
            </Button>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{
                transform: 'translateY(-2px)',
                bg: useColorModeValue('gray.100', 'gray.700'),
              }}
              transition="all 0.2s"
            />
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}
        mt="60px"
        position="fixed"
        w="100%"
        zIndex={999}
        boxShadow="md"
        spacing={2}
      >
        <Link
          as={RouterLink}
          to="/"
          p={2}
          fontSize="sm"
          fontWeight={600}
          color={location.pathname === '/' ? 'blue.500' : useColorModeValue('gray.600', 'gray.200')}
          bg={location.pathname === '/' ? useColorModeValue('blue.50', 'blue.900') : 'transparent'}
          borderRadius="md"
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/programs"
          p={2}
          fontSize="sm"
          fontWeight={600}
          color={location.pathname === '/programs' ? 'blue.500' : useColorModeValue('gray.600', 'gray.200')}
          bg={location.pathname === '/programs' ? useColorModeValue('blue.50', 'blue.900') : 'transparent'}
          borderRadius="md"
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
        >
          Programs
        </Link>
        <Link
          as={RouterLink}
          to="/about"
          p={2}
          fontSize="sm"
          fontWeight={600}
          color={location.pathname === '/about' ? 'blue.500' : useColorModeValue('gray.600', 'gray.200')}
          bg={location.pathname === '/about' ? useColorModeValue('blue.50', 'blue.900') : 'transparent'}
          borderRadius="md"
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
        >
          About
        </Link>
        <Link
          as={RouterLink}
          to="/calendar"
          p={2}
          fontSize="sm"
          fontWeight={600}
          color={location.pathname === '/calendar' ? 'blue.500' : useColorModeValue('gray.600', 'gray.200')}
          bg={location.pathname === '/calendar' ? useColorModeValue('blue.50', 'blue.900') : 'transparent'}
          borderRadius="md"
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
        >
          Calendar
        </Link>
        <Link
          as={RouterLink}
          to="/donate"
          p={2}
          fontSize="sm"
          fontWeight={600}
          color={location.pathname === '/donate' ? 'blue.500' : useColorModeValue('gray.600', 'gray.200')}
          bg={location.pathname === '/donate' ? useColorModeValue('blue.50', 'blue.900') : 'transparent'}
          borderRadius="md"
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
        >
          Donate
        </Link>
      </Stack>
    </Box>
  )
}

export default Navbar 