//## Datatable Responsive 套件 - Start ##//

$(function () {

  $('.select2').select2({
      theme: 'bootstrap4'
  })
  $('.js-table-amount').DataTable({
        "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
      "searching": false,
        paging:false,
        "info": false,
        "ordering": false,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
      },
        "columnDefs": [
            { "width": "20%", "targets": 2 },
                    ],
        "initComplete": function (settings, json) {
            $(".js-datatable-List").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
    }
  );
  $('.datatable-RWDcard').DataTable({
      "responsive": false,
      "lengthChange": false,
      "autoWidth": false,
      "searching": false,
      "paging": false,
      "info": false,
      // "scrollX": true,
      "ordering": false,
      "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
      },
        "columnDefs": [
            { "width": "20%", "targets": 2 },
            { "width": "4%", "targets": 0 },
                    ],
        "initComplete": function (settings, json) {
            $(".datatable-RWDcard").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
    }
  );
  $('.datatable-invoice').DataTable({
      "responsive": false,
      "lengthChange": false,
      "autoWidth": false,
      "searching": false,
      "paging": false,
      "info": false,
      // "scrollX": true,
      "ordering": false,
      "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
      },
        "initComplete": function (settings, json) {
            $(".datatable-invoice").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
    }
  );

});
