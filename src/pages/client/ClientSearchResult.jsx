import ClientLayout from '../../layout/ClientLayout'
import TripCardsList from '../../components/tripCardsList/TripCardsList'

const ClientSearchResult = ({ data }) => {
    return (
        <>
            <ClientLayout search={true}>
                
                <TripCardsList trips={data}/>
                
            </ClientLayout>
        </>
    )
}

export default ClientSearchResult