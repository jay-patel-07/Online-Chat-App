import {
    Box,
    Container,
    Tab,
    TabList,
    Center,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import React from 'react'
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/authentification/Login";
import Signup from "../components/authentification/Signup";
const HomePage = () => {
    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) history.push("/chats");
    }, [history]);

    return (
        <Container maxW="xl" centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg='rgb(134, 255, 215)'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text as='b' fontSize="3xl" fontFamily="Work sans">
                    <Center> Online Chat App </Center>
                </Text>
            </Box>
            <Box bg='rgb(134, 255, 215)' w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs isFitted variant="soft-rounded" colorScheme='black'>
                    <TabList mb="1em">
                        <Tab><Text color='white'>Login</Text></Tab>
                        <Tab><Text color='white'>Sign Up</Text></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default HomePage
