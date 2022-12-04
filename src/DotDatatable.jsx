import {useEffect} from "react";
import {generalDatatableConfig} from "./datatableInit.js";


const tableData = [
    {
        name: 'wwww',
        nam: 'wwww',
        na: 'www',
    },
    {
        name: 'wwww',
        nam: 'wwww',
        na: 'www',
    }, {
        name: 'wwww',
        nam: 'wwww',
        na: 'www',
    }, {
        name: 'wwww',
        nam: 'wwww',
        na: 'www',
    }, {
        name: 'wwww',
        nam: 'wwww',
        na: 'www',
    }, {
        name: 'wwww',
        nam: 'wwww',
        na: 'www',
    }, {
        name: 'wwww',
        nam: 'wwww',
        na: 'www',
    },
]

const DotDatatable = ({tableClassNames,tableId,tableHeaderNames,data,tableColumns,otherTableConfig}) => {
    useEffect(() => {
        generalDatatableConfig(data,tableId,tableColumns,otherTableConfig)
    },[])



    return (
        <>
            <table className={tableClassNames} id={tableId}>
                <thead>
                    <tr>
                        {
                            tableHeaderNames.map((table_name,i=0) => <th key={i}>{table_name}</th>)
                        }
                    </tr>
                </thead>

                <tbody> </tbody>
            </table>
        </>
    )
}

export default DotDatatable