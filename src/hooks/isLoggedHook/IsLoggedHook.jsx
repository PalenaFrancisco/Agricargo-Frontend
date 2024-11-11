import { useAuthContext } from "../../components/context/AuthProvider";
import { useEffect, useState } from "react";

const IsLoggedHook = () => {
    const { userProfile } = useAuthContext();
    const [isLogged, setIsLogged] = useState("");

    useEffect(() => {
        setIsLogged(userProfile.token ? userProfile.token : null)

    }, [userProfile])

    return {isLogged, setIsLogged};
}

export default IsLoggedHook;
