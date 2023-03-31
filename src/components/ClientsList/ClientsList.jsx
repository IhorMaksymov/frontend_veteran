import { useSelector, useDispatch } from "react-redux";

import { getClients } from "../../redux/clients/clientsSelectors";

import { deleteClient } from "../../redux/clients/clientsOperation";

import { Item } from "./ClientsListStyled";

const ClietnsList = () => {

    const clients = useSelector(getClients);
    const dispatch = useDispatch();

    return (
        <ul>
            {clients.map(({ _id, name, email, phone }) => 
                <Item key={_id}>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <button type="button" onClick={() => dispatch(deleteClient(_id))}>Delete</button>
                </Item>
            )}
        </ul>
    )
}

export default ClietnsList;