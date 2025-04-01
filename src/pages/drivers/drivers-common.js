import Header from '../../components/generic/Header.js'
import useSWR  from 'swr';

const DriversCommon = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('/api/drivers/drivers-common', fetcher)

    // const drivers = data?.results?.map((result) => result).map((data) => console.log('Data', data)) || [];

    const drivers = data?.results

    if(error) return <div>Failed to Load</div>
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