import React, { useState } from 'react'
import Display from './Display';
import Button from './Button'
import Body from './Body'
import { Flex, Box } from "@react-three/flex";
import { evaluate } from "mathjs";

const Layout = () => {
    const [calculations, setCalculations] = useState("")

    const handleClick = (e) => {
        setCalculations(calculations.concat(e.eventObject.name))
    }
    const clear = () => {
        setCalculations("")
    }
    const backspace = () => {
        try {

            setCalculations(calculations.slice(0, calculations.length - 1))
        } catch (err) {
            setCalculations('')
        }
    }
    const calculate = () => {
        try {
            setCalculations((ex) => evaluate(ex))
        } catch (err) {
            setCalculations('Error')
        }
    }

    return (
        <group>
            <Body />
            <Display displayPositon={[0, 0, 0.21]} displayContent={calculations} />
            <Flex flexDirection="row" flexWrap='wrap' size={[5, 500, 0]}>
                <Box margin={0.15} onClick={clear} >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='AC' contentPositon={[0, 0, 0.16]} onClick={handleClick} />
                </Box>

                <Box name="C" margin={0.15} onClick={backspace} >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='C' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="%" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='%' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="/" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='/' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="7" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='7' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="8" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='8' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="9" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='9' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="*" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='*' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="4" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='4' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="5" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='5' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="6" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='6' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="-" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='-' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="1" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='1' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="2" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='2' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="3" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='blue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='3' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="+" margin={0.15} onClick={handleClick} >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='+' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="0" margin={0.15} onClick={handleClick} marginLeft={0.7}>
                    <Button buttonTextColor="white" color='blue' size={[1.9, .8, 0.3]} location={[1, 0.8, 0.4]} content='0' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="." margin={0.15} onClick={handleClick} marginLeft={-0.39}>
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='.' contentPositon={[0, 0, 0.16]} />
                </Box>

                <Box name="=" margin={0.15} onClick={calculate}   >
                    <Button buttonTextColor="white" color='darkblue' size={[0.8, .8, 0.3]} location={[1, 0.8, 0.4]} content='=' contentPositon={[0, 0, 0.16]} />
                </Box>
            </Flex>
        </group>
    )
}

export default Layout
