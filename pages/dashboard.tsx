import Head from 'next/head'
import { AwesomeLink } from '../components/AwesomeLink';
import ListBlock from '../components/ListBlock';
import FooterBlock from '../components/FooterBlock';
import Divider from '@mui/material/Divider';
import readXlsxFile from 'read-excel-file'
import { machineSchema } from '../data/machineSchema';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState } from 'react';
import { Button } from '@mui/material';



export default function Dashboard() {
  const [machineData, setmachineData] = useState([])
  const uploadCsv = (event) => {
      readXlsxFile(event.target.files[0],{schema: machineSchema, includeNullValues: true, sheet: 4}).then(({rows, errors}) => {
        console.log(rows.length)
       setmachineData(rows)
      })
  }
  return (
    <div>
      <Head>
        <title>Supergy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-200">
        <div className="relative min-h-screen">
        <Button
          variant="contained"
          component="label">
          Upload File
          <input type="file" id="input" onChange={uploadCsv}/>
        </Button>
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

            {machineData.map((machine: any, index: number) =>{
              return (
                <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
                title={`${machine.manufacturer}-${machine.model}`} category={"link.category"} description={`${machine.peak10s || '-'} kW`}
                id={0} key={index}/>
              )
            })}

            {/* <AwesomeLink imageUrl={'https://wallbox.com/media_usa/cms/home/PulsarPlus_Black.png'} url={'link.url'}
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
                    id={0}/>                                 */}
          </div>
        </div>
          <div className="fixed bottom-0 bg-slate-300 h-48 w-10/12">
            <Divider sx={{ borderBottomWidth: 5 }} />
            <div className="flex flex-row justify-between w-full pt-4 pl-6">
               <div className="w-52 h-32">
                  <FooterBlock title={"Grundlast"} value={"98 kVA"}/>
               </div>
               <div className="w-52 h-32">
                  <FooterBlock title={"30s Spitzenlast"} value={"153 kVA"}/>
               </div>
               <div className="w-52 h-32">
                  <FooterBlock title={"1s Spitzenlast"} value={"384 kVA"}/>
               </div>
               <div className="w-52 h-32">
                  <FooterBlock title={"Steckdosen"} value={"400 V"}/>
               </div>
               <div className="w-52 h-32">
                  <FooterBlock title={"Vsl. Energiekosten"} value={"30-40 tsd. 4$"}/>
               </div>
            </div>
            <div className="flex flex-row justify-end pr-2">
              <div className="rounded-lg p-1 border-slate-800 bg-slate-200">Berechung Stromerzeugersystem -{'>'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}