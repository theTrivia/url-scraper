const axios = require('axios');

const cheerio = require('cheerio');


//fake sites
function geturls(URLS){
    console.log(URLS)
    this.resultanturls.push(URLS);
    console.log(resultanturls)
}
var html='';
var scrapdata = [];
var resultanturls = []
async function getDataFromWeb(){
    await axios.get('https://db.aa419.org/fakebankslist.php').then(response=>{
    html = response.data;
    const $ = cheerio.load(html)
    scrapdata = $('.ewTableRow').toArray().map((x)=>{return $(x).text()})
    for (const i in scrapdata){
        const x = scrapdata[i];
        const url = x.split('\n');
        let a = url[2]
        geturls(a);

    }
});
}
getDataFromWeb()
console.log(resultanturls)

