$(document).ready(function () {
    $.fn.dataTable.moment('DD.MM.YYYY hh:mm');
    moment.locale('ru');
    var table = $('#meastable').DataTable({
        "ajax": '/measurementsTable',

        "scrollX": true,
        dom: 'Bfrtip',
        lengthMenu: [
            [10, 25, 50, -1],
            ['10 rows', '25 rows', '50 rows', 'Show all']
        ],
        buttons: [
            'pageLength',
            'colvis',
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',

            {
                extend: 'pdfHtml5',
                download: 'open'
            }
            ,
            {
                extend: 'print',

                customize: function (win) {
                    $(win.document.body)
                        .css('font-size', '10pt')
                        .prepend(
                            '<img src="/images/Slider_Entwurf02.jpg" style="position:absolute; top:0; left:0;" />'
                        );

                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }

        ],


        "columns":
            [
                {"data": "ID"},
                {
                    "data": "DateTime_", "width": "150px", render: function (d) {
                    return moment(d).format("DD.MM.YYYY hh:mm")//
                }
                },
                {"data": "TypeOfSample", "defaultContent": "--"},
                {"data": "Matrix", "defaultContent": "--"},
                {"data": "MatrixDescription", "defaultContent": "--"},
                {"data": "AnalysisProgram", "defaultContent": "--"},
                {"data": "AnalysisProgramDescription", "defaultContent": "--"},
                {"data": "AnalysisMode", "defaultContent": "--"},
                {"data": "TaskNumber", "defaultContent": "--"},
                {"data": "TaskName", "defaultContent": "--"},
                {"data": "MaterialName", "defaultContent": "--"},
                {"data": "ID1", "defaultContent": "--"},
                {"data": "ID2", "defaultContent": "--"},
                {"data": "ID3", "defaultContent": "--"},
                {"data": "ID4", "defaultContent": "--"},
                {"data": "ID5", "defaultContent": "--"},
                {"data": "ID6", "defaultContent": "--"},
                {"data": "Comment", "defaultContent": "--"},
                {"data": "Average", "defaultContent": "--"}
            ],
        "language":
            {
                "url":
                    "datatable/Russian.json"
            }
        ,
        "columnDefs":
            [
                {"width": "200px", "targets": 1}

            ]


    });



    var analiz = $('#analiz').DataTable({
        //"ajax": '/analiz/94500',
        "columns":
            [
                {"data": "Component"},
                {"data": "Value_"}
            ]

    });

    $('#meastable').on('click', 'tr', function () {
        var data = table.row( this ).data();
        console.log( 'You clicked on '+data.ID+'\'s row' );
        analiz.ajax.url('/analiz/'+data.ID).load();

    } );


});

