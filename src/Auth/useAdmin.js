

import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://shielded-dusk-48418.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `${email} ${localStorage.getItem('accessToken')}`
                }
            })
                .then((response) => response.json())
                .then((data) => setAdmin(
                    data, setIsLoad(false)));
        }
    }, [user, admin, isLoad])

    return { admin, isLoad, setIsLoad }
};

export default useAdmin;