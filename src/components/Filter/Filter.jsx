import { useDispatch } from "react-redux";

import { valueClientFilter } from '../../redux/clients/clientsSlice';

const Filter = () => {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const filter = event.target.value;
        dispatch(valueClientFilter(filter));
    }
    return (
        <label>
            Find contacts by name
            <input type='text' onChange={handleSubmit} />
        </label>
    )
}

export default Filter