import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { devices } from './../data/devices';
import { useUser } from '@auth0/nextjs-auth0';
import { AwesomeLink } from '../components/AwesomeLink';

const AllDevicesQuery = gql`
  query {
    devices {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(AllDevicesQuery)
  const { user } = useUser()

  if (loading && user) return <p>Loading...</p>
  if (error && user) return <p>Error Message: {error.message}</p>

  return (
    <div>
      <Head>
        <title>Supergy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user && (
            <div className="container mx-auto max-w-5xl my-20">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.devices.map(link => (
                <AwesomeLink imageUrl={link.imageUrl} url={link.url}
                title={link.title} category={link.category} description={link.description}
                id={link.id}/>
              ))}
            </ul>
          </div>
      )}

    </div>
  )
}