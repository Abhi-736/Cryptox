import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   
    return (
        <HStack p={"4"} shadow={"base"} bgColor={"black"}>
            <Button variant={"unstyled"} pl={"3"} color={"white"}  transition={"all 0.3s"}>
                <Link to="/">Home</Link>
            </Button>
            <Button variant={"unstyled"} pl={"3"} color={"white"} transition={"all 0.3s"}>
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button variant={"unstyled"} pl={"3"} color={"white"} transition={"all 0.3s"}>
                <Link to="/coins">Coins</Link>
            </Button>
        </HStack>
    );
};

export default Header;