import LoadingScreen from "./assets/Loadingscreen";
import {useEffect, useState} from "react";

function Hello(){
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])

    return(
        <>
        {
            loading ? (
                <LoadingScreen/>
            ):
            (
                <h1>hello boys</h1>
            )
        }
        </>
    );
}

export default Hello;