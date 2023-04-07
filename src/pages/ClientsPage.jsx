import { useEffect } from "react";

import { useDispatch } from "react-redux";

import Box from "../components/Box/Box";

import ClientForm from "../components/ClientForm/ClientForm";
import Filter from "../components/Filter/Filter";
import ClietnsList from "../components/ClientsList/ClientsList";

import { listClients } from "../redux/clients/clientsOperation";

const ClientsPage = () => {
    
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(listClients())
    }, [dispatch]);
    
    return (
        <Box
            pt={5}
        >
            <ClientForm />
            <Filter />
            <ClietnsList />
        </Box>
    )
}

export default ClientsPage;