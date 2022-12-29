import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { devices } from './../data/devices';
import { useUser } from '@auth0/nextjs-auth0';
import { AwesomeLink } from '../components/AwesomeLink';
import Button from '@mui/material/Button';
import ListBlock from '../components/ListBlock';
import FooterBlock from '../components/FooterBlock';
import Divider from '@mui/material/Divider';

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
  // const { data, loading, error } = useQuery(AllDevicesQuery)
  // const { user } = useUser()

  // if (loading && user) return <p>Loading...</p>
  // if (error && user) return <p>Error Message: {error.message}</p>

  return (
    <div>
      <Head>
        <title>Supergy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="min-h-screen bg-slate-200">
        <div class="relative min-h-screen">
        <div className="flex flex-row">
          <div className="h-full w-1/5">
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
            <ListBlock/>
          </div>
          <div className="w-full flex justify-between flex-wrap p-4">
            <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
                    title={"Wallbox"} category={"link.category"} description={"7.2KW"}
                    id={0}/>
            <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
                    title={"Wallbox"} category={"link.category"} description={"7.2KW"}
                    id={0}/>
            <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
                    title={"Wallbox"} category={"link.category"} description={"7.2KW"}
                    id={0}/>  

            <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
                    title={"Wallbox"} category={"link.category"} description={"7.2KW"}
                    id={0}/>              

                    <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
                    title={"Wallbox"} category={"link.category"} description={"7.2KW"}
                    id={0}/> 
                    <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
                    title={"Wallbox"} category={"link.category"} description={"7.2KW"}
                    id={0}/>                                
          </div>
        </div>
          <div className="absolute bottom-20 left-0 w-full bg-slate-300 h-48">
            <Divider sx={{ borderBottomWidth: 5 }} />
            <div class="flex flex-row justify-between w-full pt-4 pl-6">
               <div class="w-52 h-32">
                  <FooterBlock title={"Grundlast"} value={"98 kVA"}/>
               </div>
               <div class="w-52 h-32">
                  <FooterBlock title={"30s Spitzenlast"} value={"153 kVA"}/>
               </div>
               <div class="w-52 h-32">
                  <FooterBlock title={"1s Spitzenlast"} value={"384 kVA"}/>
               </div>
               <div class="w-52 h-32">
                  <FooterBlock title={"Steckdosen"} value={"400 V"}/>
               </div>
               <div class="w-52 h-32">
                  <FooterBlock title={"Vsl. Energiekosten"} value={"30-40 tsd. 4$"}/>
               </div>
            </div>
            <div class="flex flex-row justify-end pr-2">
              <div class="rounded-lg p-1 border-slate-800 bg-slate-200">Berechung Stromerzeugersystem -></div>
            </div>
          </div>
        </div>
      </div>
      {/* {user && (
            <div className="container mx-auto max-w-5xl my-20">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
            {data.devices.map(link => (
                <AwesomeLink imageUrl={link.imageUrl} url={link.url}
                title={link.title} category={link.category} description={link.description}
                id={link.id}/>
              ))}
            </ul>
          </div>
      )} */}

    </div>
  )
}