//const axios = require('axios');
//const cheerio = require('cheerio');
const parseScreenerResponse = (html) => {
  //const ch = cheerio.load(html);
  //const rows = ch(".table-dark-row-cp, .table-light-row-cp");//$('#screener-content > table > tbody > tr > table > tbody > tr, .screener-body-table-nw');
  
  const data = new Set();
  console.log(rows);
  rows.each((i, row) => {
    const cell = ch(row).find('> td:nth-child(2)');
    if (cell.length) {
      console.log(cell);
      data.add(cell.text());
    }
  });
  return [...data];
};

const screener = async (url) => {
  const { data } = await axios.get(url);
  const results = parseScreenerResponse(data);
  console.log(results);
  return results;
};

//module.exports = screener;
//screener("https://finviz.com/screener.ashx?v=111&f=fa_pe_high,sh_price_20to50");
