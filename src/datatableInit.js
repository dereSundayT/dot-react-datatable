const $ = require('jquery') // 1
$.DataTable = require('datatables.net-dt') //2
//3
$.DataTable = require('datatables.net-responsive-dt') //3
$.Database = require('datatables.net-responsive-dt/css/responsive.dataTables.css') //3
//4 loads the copy,pdf,csv buttons and makes it works , loads the print btn and makes it work
$.DataTable = require("datatables.net-buttons/js/buttons.html5.js")
$.DataTable = require("datatables.net-buttons/js/buttons.print.js")
//5
$.DataTable = require('datatables.net-bs5');




//
export const generalDatatableConfig = (data,table_id,tableColumns,otherTableConfig) => {
    let isLandScape = otherTableConfig.isLandScape ?? false
    let exportOptionsIndex = otherTableConfig.exportOptionsIndex ?? []
    let exportTitle = otherTableConfig.exportTitle ?? ''
    let fromDate = ''
    let toDate = ''
    let total = 0
    let other_title = ''

    $(document).ready(function () {
        console.log(otherTableConfig.exportTitle)
        let idInit = $(`#${table_id}`)
        idInit.DataTable().clear().destroy()
        idInit.DataTable({
            language: {
                paginate: {
                    previous: "<i class='fa fa-arrow-left'>",
                    next: "<i class='fa fa-arrow-right'>",
                    // first : "1",
                    // last: "2"
                },
                info: 'Showing savings _START_ to _END_ of _TOTAL_',
                lengthMenu:
                    `Display <select class=\'form-select form-select-sm ms-1 me-1\'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="-1">All</option>
                    </select>
                    savings
                    `,
            },
            pageLength: 5,
            data: data,
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: "copy",
                    text: 'COPY',
                    footer: true,
                    orientation: isLandScape ? "landscape" : "portrait",
                    pageSize: isLandScape ? "LEGAL" : "A4",
                    exportOptions: {
                        columns: exportOptionsIndex,
                    },
                    title: exportTitle,
                    className: "btn btn-primary btn-sm  mx-1  my-2",
                    header: true,
                    messageTop: `Filter Result : ${fromDate} -  ${toDate}`,
                    messageBottom: `\n\n Total :₦${Number(total).toLocaleString()} \n\n ${exportTitle}`,
                    filename: `${other_title}_data_for_${fromDate}_${toDate}_`,
                },//
                {
                    extend: "excel",
                    footer: true,
                    orientation: isLandScape ? "landscape" : "portrait",
                    pageSize: isLandScape ? "LEGAL" : "A4",
                    exportOptions: {
                        columns: exportOptionsIndex,
                    },
                    title: exportTitle,
                    className: "btn-sm btn-info mx-1  my-2",
                    header: true,
                    messageTop: `Filter Result : ${fromDate} -  ${toDate}`,
                    messageBottom: `\n\n Total :₦${Number(total).toLocaleString()} \n\n ${exportTitle}`,
                    filename: `${other_title}_data_for_${fromDate}_${toDate}_`,
                },
                {
                    extend: "pdf",
                    footer: true,
                    orientation: isLandScape ? "landscape" : "portrait",
                    pageSize: isLandScape ? "LEGAL" : "A4",
                    exportOptions: {
                        columns: exportOptionsIndex,
                    },
                    title: exportTitle,
                    className: "btn-sm btn-primary btn-sm mr-1  my-2",
                    header: true,
                    messageTop: `Filter Result : ${fromDate} -  ${toDate}`,
                    messageBottom: `\n\n Total :₦${Number(total).toLocaleString()} \n\n ${exportTitle}`,
                    filename: `${other_title}_data_for_${fromDate}_${toDate}_`,
                },
                {
                    extend: "csv",
                    footer: true,
                    orientation: isLandScape ? "landscape" : "portrait",
                    pageSize: isLandScape ? "LEGAL" : "A4",
                    exportOptions: {
                        columns: exportOptionsIndex,
                    },
                    title: exportTitle,
                    className: "btn btn-info btn-sm mx-1  my-2",
                    header: true,
                    messageTop: `Filter Result : ${fromDate} -  ${toDate}`,
                    messageBottom: `\n\n Total :₦${Number(total).toLocaleString()} \n\n ${exportTitle}`,
                    filename: `${other_title}_data_for_${fromDate}_${toDate}_`,
                },//
                {
                    extend: "print",
                    text: "PRINT",
                    footer: true,
                    orientation: isLandScape ? "landscape" : "portrait",
                    pageSize: isLandScape ? "LEGAL" : "A4",
                    exportOptions: {
                        columns: exportOptionsIndex,
                    },
                    title: exportTitle,
                    className: "btn btn-light btn-sm mx-1 my-2",
                    header: true,
                    messageTop: `Filter Result : ${fromDate} -  ${toDate}`,
                    messageBottom: `\n\n Total :₦${Number(total).toLocaleString()} \n\n ${exportTitle}`,
                    filename: `${other_title}_data_for_${fromDate}_${toDate}_`,
                },//
            ],
            columns: tableColumns,
            select: {style: 'multi'},
            order: [[1, 'desc']],
            responsivePriority: 1,
            responsive: true,
            drawCallback: () => (
                $('.dataTables_paginate > .pagination').addClass('pagination-rounded'),
                    $('#products-datatable_length label').addClass('form-label')
            ),
        })
        //
    })
}