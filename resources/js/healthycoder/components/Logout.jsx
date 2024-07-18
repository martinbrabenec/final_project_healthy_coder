import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { getUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            getUser();
            navigate('/');
        } catch (error) {
            console.error('Logout error', error);
        }
    }

    return <button onClick={handleLogout}>
        Logout
    </button>
}

export default Logout;
