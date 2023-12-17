// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('NDk3ZTJlOTIwYWY3ZmZiMTgzMzNmMjI2N2Y4Yzg5OGZkYTQwZTU3YjhiMWY1MDg4MzdiYWZjMTdhZjJkNzIyNzJkN2YyNTJjMzMxOTE0ZDUzMTM3NzUxZjM2NjA2OGMwYzA1MmYxMTcwMzc3NzhmZjg2Y2MyYTVhNmNmNjczOTAsZXlKdVlXMWxJam9pVDNOaGJXRWlMQ0prWVhSbElqb3hOekEwTkRrNU1qQXdMQ0prYjIxaGFXNGlPbHNpZDJWaUlpd2liRzlqWVd4b2IzTjBJbDBzSW5Cc1lXNGlPakFzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNKZGZRPT0=');
 
// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda Fit', 2009, 3000],
            ['Honda CRV', 2010, 6000],
        ],
        columns: [
            { title:'Model', width:'300px' },
            { title:'Year', width:'80px' },
            { title:'Price', width:'100px' },
        ]
    }]
});
