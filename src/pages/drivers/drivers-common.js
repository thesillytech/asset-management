import Header from '../../components/generic/Header.js'
import Error from '../../components/generic/Error.js'
import useSWR  from 'swr';

const DriversCommon = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('/api/driver/drivers-common', fetcher)

    const drivers = data?.results

    if(error) return <Error />
    if(!data) return <div>Loading...</div>

    return (
        <>
            <Header />
            {drivers.map((driver, index) => (
                <li key={index}>{JSON.stringify(driver)}</li>
            ))}
        </>
    )
}

export default DriversCommon

const css = {

}