var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['5段成功確率',
                         0,           0.0,           0.0,           0.0,           0.0,        5.0625,        5.0625,   11.50453125,   11.50453125, 18.0661957031,
             18.0661957031, 24.3343323721, 24.3343323721, 30.1902984569, 30.1902984569, 35.6166236387, 35.6166236387, 40.6294133913, 40.6294133913, 45.2548070272,
             45.2548070272, 49.5208627401, 49.5208627401, 53.4548383161, 53.4548383161, 57.0823529843, 57.0823529843, 60.4271995416, 60.4271995416, 63.5113761087,
             63.5113761087, 66.3551872464, 66.3551872464, 68.9773623659, 68.9773623659, 71.3951737317, 71.3951737317,  73.624548359,  73.624548359, 75.6801722748,
             75.6801722748, 77.5755870312, 77.5755870312, 79.3232788309, 79.3232788309, 80.9347607529, 80.9347607529, 82.4206485858, 82.4206485858, 83.7907307572,
             83.7907307572, 85.0540328142, 85.0540328142, 86.2188768802, 86.2188768802, 87.2929364769, 87.2929364769,  88.283287075,  88.283287075, 89.1964527038,
             89.1964527038, 90.0384489295, 90.0384489295, 90.8148224829, 90.8148224829, 91.5306877991, 91.5306877991, 92.1907607096, 92.1907607096, 92.7993895078,
             92.7993895078, 93.3605835945, 93.3605835945, 93.8780398892, 93.8780398892, 94.3551671851, 94.3551671851, 94.7951086038, 94.7951086038, 95.2007623017,
             95.2007623017, 95.5748005613, 95.5748005613, 95.9196873955, 95.9196873955, 96.2376947794, 96.2376947794, 96.5309176171, 96.5309176171, 96.8012875422,
             96.8012875422, 97.0505856424, 97.0505856424, 97.2804541929, 97.2804541929, 97.4924074747, 97.4924074747, 97.6878417505, 97.6878417505, 97.8680444623,
             97.8680444623, 98.0342027126, 98.0342027126, 98.1874110849, 98.1874110849, 98.3286788541, 98.3286788541,  98.458936635,  98.458936635, 98.5790425133,
             98.5790425133,  98.689787698,  98.689787698, 98.7919017336, 98.7919017336, 98.8860573061, 98.8860573061, 98.9728746743, 98.9728746743,  99.052925756,
              99.052925756, 99.1267378954, 99.1267378954,  99.194797337,  99.194797337, 99.2575524289, 99.2575524289, 99.3154165762, 99.3154165762, 99.3687709647,
             99.3687709647, 99.4179670713, 99.4179670713, 99.4633289803, 99.4633289803, 99.5051555175, 99.5051555175, 99.5437222193, 99.5437222193, 99.5792831475,
             99.5792831475,  99.612072563,  99.612072563, 99.6423064694, 99.6423064694, 99.6701840354, 99.6701840354, 99.6958889071, 99.6958889071, 99.7195904179,
            ],
        ],
        type: 'bar',
    },
    axis: {
        x: {
            label: {
                text: '石の個数 [個]',
                position: 'outer-center'
            }
        },
        y: {
            label: {
                text: '5段成功確率 [%}',
                position: 'outer-middle'
            },
        },
    },
    tooltip: {
        format: {
            title: function (d) { return d + '個使った時の成功率'; },
            value: function (value, ratio, id) {
                var format = id === 'data1' ? d3.format(',') : d3.format('$');
                return value + '%';
            }
        }
    }
});
