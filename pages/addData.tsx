import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file'
import { machineSchema } from '../data/machineSchema';

const AddData = () => {
    const [machineData, setmachineData] = useState({})
    const uploadCsv = (event) => {
        readXlsxFile(event.target.files[0],{schema: machineSchema, includeNullValues: true, sheet: 4}).then(({rows, errors}) => {
         setmachineData(rows)
        })
    }
  return (
    <div>
        <input type="file" id="input" onChange={uploadCsv}/>
        <div>
            {JSON.stringify(machineData)}
        </div>
    </div>
  );
};

export default AddData;