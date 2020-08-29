//api call
const api = `https://api.covid19api.com/summary?fbclid=IwAR2YmZZfer5buethbbCblBK_LoFfACaLOgfOMB3Jtiv5iy0RucdM_BXpaFU`;

fetch(api)
    .then(response => response.json())
    .then(json => covid19(json))

// show ouput
function covid19(data) {
    //global
    document.querySelector(".globalconfirmed").innerText = data.Global.NewConfirmed;
    document.querySelector(".globaltotalconfirmed").innerText = data.Global.TotalConfirmed;
    document.querySelector(".globaldeath").innerText = data.Global.NewDeaths;
    document.querySelector(".globaltotaldeath").innerText = data.Global.TotalDeaths;
    document.querySelector(".globalrecovered").innerText = data.Global.NewRecovered;
    document.querySelector(".gconfirmtotalconfirm").innerText = data.Global.TotalRecovered;

    //bd
    document.querySelector(".bdconfirmed").innerText = data.Countries[13].NewConfirmed;
    document.querySelector(".bdtotalconfirmed").innerText = data.Countries[13].TotalConfirmed;
    document.querySelector(".bddeath").innerText = data.Countries[13].NewDeaths;
    document.querySelector(".bdtotaldeath").innerText = data.Countries[13].TotalDeaths;
    document.querySelector(".bdrecovered").innerText = data.Countries[13].NewRecovered;
    document.querySelector(".bdtotalrecovered").innerText = data.Countries[13].TotalRecovered;

    //ind
    document.querySelector(".indconfirmed").innerText = data.Countries[76].NewConfirmed;
    document.querySelector(".indtotalconfirmed").innerText = data.Countries[76].TotalConfirmed;
    document.querySelector(".inddeath").innerText = data.Countries[76].NewDeaths;
    document.querySelector(".indtotaldeath").innerText = data.Countries[76].TotalDeaths;
    document.querySelector(".indrecovered").innerText = data.Countries[76].NewRecovered;
    document.querySelector(".indtotalrecovered").innerText = data.Countries[76].TotalRecovered;

    //ind
    document.querySelector(".pakconfirmed").innerText = data.Countries[126].NewConfirmed;
    document.querySelector(".paktotalconfirmed").innerText = data.Countries[126].TotalConfirmed;
    document.querySelector(".pakdeath").innerText = data.Countries[126].NewDeaths;
    document.querySelector(".paktotaldeath").innerText = data.Countries[126].TotalDeaths;
    document.querySelector(".pakrecovered").innerText = data.Countries[126].NewRecovered;
    document.querySelector(".paktotalrecovered").innerText = data.Countries[126].TotalRecovered;

    //sri
    document.querySelector(".sriconfirmed").innerText = data.Countries[157].NewConfirmed;
    document.querySelector(".sritotalconfirmed").innerText = data.Countries[157].TotalConfirmed;
    document.querySelector(".srideath").innerText = data.Countries[157].NewDeaths;
    document.querySelector(".sritotaldeath").innerText = data.Countries[157].TotalDeaths;
    document.querySelector(".srirecovered").innerText = data.Countries[157].NewRecovered;
    document.querySelector(".sritotalrecovered").innerText = data.Countries[157].TotalRecovered;

    //sri
    document.querySelector(".afgconfirmed").innerText = data.Countries[0].NewConfirmed;
    document.querySelector(".afgtotalconfirmed").innerText = data.Countries[0].TotalConfirmed;
    document.querySelector(".afgdeath").innerText = data.Countries[0].NewDeaths;
    document.querySelector(".afgtotaldeath").innerText = data.Countries[0].TotalDeaths;
    document.querySelector(".afgrecovered").innerText = data.Countries[0].NewRecovered;
    document.querySelector(".afgtotalrecovered").innerText = data.Countries[0].TotalRecovered;

    //nepal
    document.querySelector(".nepalconfirmed").innerText = data.Countries[118].NewConfirmed;
    document.querySelector(".nepaltotalconfirmed").innerText = data.Countries[118].TotalConfirmed;
    document.querySelector(".nepaldeath").innerText = data.Countries[118].NewDeaths;
    document.querySelector(".nepaltotaldeath").innerText = data.Countries[118].TotalDeaths;
    document.querySelector(".nepalrecovered").innerText = data.Countries[118].NewRecovered;
    document.querySelector(".nepaltotalrecovered").innerText = data.Countries[118].TotalRecovered;

    //Bhutan
    document.querySelector(".vhutanconfirmed").innerText = data.Countries[19].NewConfirmed;
    document.querySelector(".vhutantotalconfirmed").innerText = data.Countries[19].TotalConfirmed;
    document.querySelector(".vhutandeath").innerText = data.Countries[19].NewDeaths;
    document.querySelector(".vhutantotaldeath").innerText = data.Countries[19].TotalDeaths;
    document.querySelector(".vhutanrecovered").innerText = data.Countries[19].NewRecovered;
    document.querySelector(".vhutantotalrecovered").innerText = data.Countries[19].TotalRecovered;

}

// reload window 
setTimeout(function() {
    window.location.reload(1);
}, 10000);