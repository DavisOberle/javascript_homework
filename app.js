var table = d3.select('body').append('table')

var tr = table.selectAll('tr')
    .data(movies).enter()
    .append('tr');

console.log(tabelData)

tableData.forEach(function(report) {
   console.log(report);
   var row = tbody.append("tr");
 });

 table.append('tbody')
    .selectAll('tr')
    .data(table).enter()
    .append('tr')
    .selectAll('td')
    .data(function(row, i) {
        // evaluate column objects against the current row
        return columns.map(function(c) {
            var cell = {};
            d3.keys(c).forEach(function(k) {
                cell[k] = typeof c[k] == 'function' ? c[k](row,i) : c[k];
            });
            return cell;
        });
    }).enter()
    .append('td')
    .html(ƒ('html'))
    .attr('class', ƒ('cl'));
