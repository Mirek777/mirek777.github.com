
        // var table = new Tabulator('#example-table', {
        //     data: JSON.parse(superHeroes),
        //     layout: 'fitColumns',
        //     pagination: 'local',
        //     paginationSize: 8,
        //     initialSort: [
        //         { column: 'rating', dir: 'desc' }
        //     ],
        //     columns: [
        //         { title: 'id', field: 'itemId', visible: false },
        //         {
        //             title: 'РЎС‚Р°С‚СЊСЏ',
        //             field: 'title',
        //             width: 550,
        //             formatter: function(cell) {
        //                 var data = cell.getData(),
        //                     href = 'https://webdevkin.ru/index.php?id=' + data.itemId;
        //
        //                 return '<a href="' + href + '" target="_blank">' + data.title + '</a>';
        //             }
        //         },
        //         { title: 'РљРѕР»РёС‡РµСЃС‚РІРѕ РіРѕР»РѕСЃРѕРІ', field: 'countRates', align: 'left', formatter: 'progress', tooltip: true },
        //         { title: 'РЎСЂРµРґРЅСЏСЏ РѕС†РµРЅРєР°', field: 'rating' },
        //         {
        //             title: 'Р РµР№С‚РёРЅРі СЃС‚Р°С‚СЊРё',
        //             field: 'rating',
        //             formatter: function(cell) {
        //                 var data = cell.getData();
        //                 return Math.round(data.countRates * data.rating);
        //             },
        //             sorter: function(a, b, aRow, bRow) {
        //                 var data1 = aRow.getData(),
        //                     data2 = bRow.getData(),
        //                     value1 = Math.round(data1.countRates * data1.rating),
        //                     value2 = Math.round(data2.countRates * data2.rating);
        //                 return value1 - value2;
        //             }
        //         }
        //     ]
        // });