document.addEventListener('DOMContentLoaded', function () {
    var data = [
        ["", "Ford", "Volvo", "Toyota", "Honda"],
        ["2016", 10, 11, 12, 13],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13]
    ];

    var container = document.getElementById('exampleGrid');

    var hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        contextMenu: true,
        licenseKey: 'non-commercial-and-evaluation'
    });
});
