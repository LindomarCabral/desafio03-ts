import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { getAllLocalStorage } from "../services/storage";

const ContaInfo = () => { 
    const dataUser = JSON.parse(`${getAllLocalStorage()}`);
    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Nome:  {dataUser.name}                    
                </Text>
                <Text fontSize='xl'>
                    E-mail:  {dataUser.email}                    
                </Text>
            </Link>
            <a href='/conta/1'>
                Home
            </a>
        </>
    )
}

export default ContaInfo
