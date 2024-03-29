import * as React from 'react';
import {
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Select,
  Spacer,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useState } from 'react';
import { ResultField } from './ResultField';
import { Circle } from '../utils/Circle';

export function Calculator() {
  const circle = new Circle(0);

  const [state, setState] = useState({ option: '', radius: '', result: '' });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = optionValue => {
    circle.setRadius(state.radius);
    if (state.option === 'area') {
      setState({ result: circle.getArea(), option: optionValue });
    } else if (state.option === 'diameter') {
      setState({ result: circle.getDiameter(), option: optionValue });
    } else if (state.option === 'circumference') {
      setState({ result: circle.getCircumference(), option: optionValue });
    } else {
      alert('Please select an option');
    }
  };

  const handleReset = optionValue => {
    setState({
      result: '',
      radius: '',
      option: optionValue,
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.300', 'pink.600')}
      bgGradient="linear(to-b, #7928CA, #FF0080)"
    >
      <Stack
        spacing={4}
        width={'full'}
        maxW={'md'}
        padding={6}
        marginY={12}
        rounded={'xl'}
        boxShadow={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
      >
        <Center>
          <Heading>Circle Calculator</Heading>
          <Spacer />
          <ColorModeSwitcher />
        </Center>
        <Center>
          <Image
            boxSize={'150px'}
            src={require('../assets/circle-radius.png')}
          />
        </Center>
        <Select
          placeholder="Select option"
          name="option"
          value={state.option}
          onChange={handleChange}
        >
          <option value="area">Area</option>
          <option value="circumference">Circumference</option>
          <option value="diameter">Diameter</option>
        </Select>
        <FormControl id="radius" isRequired>
          <FormLabel>Radius</FormLabel>
          <Input
            placeholder="Input radius"
            type={'number'}
            name="radius"
            onChange={handleChange}
            value={state.radius}
          />
        </FormControl>
        <ResultField
          name="result"
          onChange={handleChange}
          value={state.result}
          option={state.option}
        />
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            colorScheme={'red'}
            width="full"
            onClick={function () {
              handleReset(state.option);
            }}
          >
            Reset
          </Button>
          <Button
            colorScheme={'blue'}
            width="full"
            onClick={function () {
              handleSubmit(state.option);
            }}
          >
            Calculate
          </Button>
        </Stack>
        <Divider orientation="horizontal" />
        <Center>
          <Link href="https://github.com/nicomts/circle-calc">
            <Icon as={FaGithub} boxSize={8} />
          </Link>
        </Center>
      </Stack>
    </Flex>
  );
}
