import cheerio from 'cheerio'



export async function getStaticProps() {

  const dataAbnomal = await fetch("https://rubnongkaomai.com/baan/abnormal")
  let htmlAbnomal = await dataAbnomal.text()
  htmlAbnomal = htmlAbnomal.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Abnoaml = cheerio.load(htmlAbnomal);
  const baanAbnomal = $Abnoaml(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerAbnomal =  $Abnoaml(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")
 

  const dataAgape = await fetch("https://rubnongkaomai.com/baan/agape")
  let htmlAgape = await dataAgape.text()
  htmlAgape = htmlAgape.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Agape = cheerio.load(htmlAgape);
  const baanAgape = $Agape(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerAgape = $Agape(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")

  const dataBuem = await fetch("https://rubnongkaomai.com/baan/buem")
  let htmlBuem = await dataBuem.text()
  htmlBuem = htmlBuem.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Buem = cheerio.load(htmlBuem);
  const baanBuem = $Buem(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerBuem = $Buem(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  const dataDork = await fetch("https://rubnongkaomai.com/baan/dork")
  let htmlDork = await dataDork.text()
  htmlDork = htmlDork.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Dork = cheerio.load(htmlDork);
  const baanDork = $Dork(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerDork = $Dork(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")

  //Duidui
  const dataDuidui = await fetch("https://rubnongkaomai.com/baan/duidui")
  let htmlDuidui = await dataDuidui.text()
  htmlDuidui = htmlDuidui.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Duidui = cheerio.load(htmlDuidui);
  const baanDuidui = $Duidui(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerDuidui = $Duidui(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Indiana
  const dataIndiana = await fetch("https://rubnongkaomai.com/baan/indiana")
  let htmlIndiana = await dataIndiana.text()
  htmlIndiana = htmlIndiana.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Indiana = cheerio.load(htmlIndiana);
  const baanIndiana = $Indiana(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerIndiana = $Indiana(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Judson
  const dataJudson = await fetch("https://rubnongkaomai.com/baan/judson")
  let htmlJudson = await dataJudson.text()
  htmlJudson = htmlJudson.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Judson = cheerio.load(htmlJudson);
  const baanJudson = $Judson(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerJudson = $Judson(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Khunnoo
  const dataKhunnoo = await fetch("https://rubnongkaomai.com/baan/khunnoo")
  let htmlKhunnoo = await dataKhunnoo.text()
  htmlKhunnoo = htmlKhunnoo.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Khunnoo = cheerio.load(htmlKhunnoo);
  const baanKhunnoo = $Khunnoo(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerKhunnoo = $Khunnoo(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Mheenoi
  const dataMheenoi = await fetch("https://rubnongkaomai.com/baan/mheenoi")
  let htmlMheenoi = await dataMheenoi.text()
  htmlMheenoi = htmlMheenoi.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Mheenoi = cheerio.load(htmlMheenoi);
  const baanMheenoi = $Mheenoi(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerMheenoi = $Mheenoi(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Pak_tak_agard
  const dataPak_tak_agard = await fetch("https://rubnongkaomai.com/baan/pak-tak-agard")
  let htmlPak_tak_agard = await dataPak_tak_agard.text()
  htmlPak_tak_agard = htmlPak_tak_agard.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Pak_tak_agard = cheerio.load(htmlPak_tak_agard);
  const baanPak_tak_agard = $Pak_tak_agard(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerPak_tak_agard = $Pak_tak_agard(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")
 

  //Panarak
  const dataPanarak = await fetch("https://rubnongkaomai.com/baan/panarak")
  let htmlPanarak = await dataPanarak.text()
  htmlPanarak = htmlPanarak.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  
  const $Panarak = cheerio.load(htmlPanarak);
  const baanPanarak = $Panarak(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerPanarak = $Panarak(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")
 

  //Phee
  const dataPhee = await fetch("https://rubnongkaomai.com/baan/phee")
  let htmlPhee = await dataPhee.text()
  htmlPhee = htmlPhee.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Phee = cheerio.load(htmlPhee);
  const baanPhee = $Phee(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerPhee = $Phee(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Rhoy
  const dataRhoy = await fetch("https://rubnongkaomai.com/baan/rhoy")
  let htmlRhoy = await dataRhoy.text()
  htmlRhoy = htmlRhoy.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Rhoy = cheerio.load(htmlRhoy);
  const baanRhoy = $Rhoy(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerRhoy = $Rhoy(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Seiyw
  const dataSeiyw = await fetch("https://rubnongkaomai.com/baan/seiyw")
  let htmlSeiyw = await dataSeiyw.text()
  htmlSeiyw = htmlSeiyw.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Seiyw = cheerio.load(htmlSeiyw);
  const baanSeiyw = $Seiyw(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerSeiyw = $Seiyw(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Tem
  const dataTem = await fetch("https://rubnongkaomai.com/baan/tem")
  let htmlTem = await dataTem.text()
  htmlTem = htmlTem.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Tem = cheerio.load(htmlTem);
  const baanTem = $Tem(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerTem = $Tem(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Buchayun
  const dataBuchayun = await fetch("https://rubnongkaomai.com/baan/buchayun")
  let htmlBuchayun = await dataBuchayun.text()
  htmlBuchayun = htmlBuchayun.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Buchayun = cheerio.load(htmlBuchayun);
  const baanBuchayun = $Buchayun(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerBuchayun = $Buchayun(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Dung
  const dataDung = await fetch("https://rubnongkaomai.com/baan/dung")
  let htmlDung = await dataDung.text()
  htmlDung = htmlDung.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Dung = cheerio.load(htmlDung);
  const baanDung = $Dung(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerDung = $Dung(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Fyo
  const dataFyo = await fetch("https://rubnongkaomai.com/baan/fyo")
  let htmlFyo = await dataFyo.text()
  htmlFyo = htmlFyo.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Fyo = cheerio.load(htmlFyo);
  const baanFyo = $Fyo(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerFyo = $Fyo(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Kids
  const dataKids = await fetch("https://rubnongkaomai.com/baan/kids")
  let htmlKids = await dataKids.text()
  htmlKids = htmlKids.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Kids = cheerio.load(htmlKids);
  const baanKids = $Kids(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerKids = $Kids(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Koh
  const dataKoh = await fetch("https://rubnongkaomai.com/baan/koh")
  let htmlKoh = await dataKoh.text()
  htmlKoh = htmlKoh.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Koh = cheerio.load(htmlKoh);
  const baanKoh = $Koh(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerKoh = $Koh(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Laijai
  const dataLaijai = await fetch("https://rubnongkaomai.com/baan/laijai")
  let htmlLaijai = await dataLaijai.text()
  htmlLaijai = htmlLaijai.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Laijai = cheerio.load(htmlLaijai);
  const baanLaijai = $Laijai(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerLaijai = $Laijai(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Nhai
  const dataNhai = await fetch("https://rubnongkaomai.com/baan/nhai")
  let htmlNhai = await dataNhai.text()
  htmlNhai = htmlNhai.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Nhai = cheerio.load(htmlNhai);
  const baanNhai = $Nhai(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerNhai = $Nhai(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Preaw
  const dataPreaw = await fetch("https://rubnongkaomai.com/baan/preaw")
  let htmlPreaw = await dataPreaw.text()
  htmlPreaw = htmlPreaw.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Preaw = cheerio.load(htmlPreaw);
  const baanPreaw = $Preaw(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerPreaw = $Preaw(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Wang
  const dataWang = await fetch("https://rubnongkaomai.com/baan/wang")
  let htmlWang = await dataWang.text()
  htmlWang = htmlWang.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Wang = cheerio.load(htmlWang);
  const baanWang = $Wang(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerWang = $Wang(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Wanted
  const dataWanted = await fetch("https://rubnongkaomai.com/baan/wanted")
  let htmlWanted = await dataWanted.text()
  htmlWanted = htmlWanted.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Wanted = cheerio.load(htmlWanted);
  const baanWanted = $Wanted(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerWanted = $Wanted(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Work
  const dataWork = await fetch("https://rubnongkaomai.com/baan/work")
  let htmlWork = await dataWork.text()
  htmlWork = htmlWork.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Work = cheerio.load(htmlWork);
  const baanWork = $Work(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerWork = $Work(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Aaum
  const dataAaum = await fetch("https://rubnongkaomai.com/baan/aaum")
  let htmlAaum = await dataAaum.text()
  htmlAaum = htmlAaum.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Aaum = cheerio.load(htmlAaum);
  const baanAaum = $Aaum(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerAaum = $Aaum(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Jodeh_huesa
  const dataJodeh_huesa = await fetch("https://rubnongkaomai.com/baan/jodeh-huesa")
  let htmlJodeh_huesa = await dataJodeh_huesa.text()
  htmlJodeh_huesa = htmlJodeh_huesa.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Jodeh_huesa = cheerio.load(htmlJodeh_huesa);
  const baanJodeh_huesa = $Jodeh_huesa(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerJodeh_huesa = $Jodeh_huesa(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Koom
  const dataKoom = await fetch("https://rubnongkaomai.com/baan/koom")
  let htmlKoom = await dataKoom.text()
  htmlKoom = htmlKoom.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Koom = cheerio.load(htmlKoom);
  const baanKoom = $Koom(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerKoom = $Koom(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Por
  const dataPor = await fetch("https://rubnongkaomai.com/baan/por")
  let htmlPor = await dataPor.text()
  htmlPor = htmlPor.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Por = cheerio.load(htmlPor);
  const baanPor = $Por(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerPor = $Por(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Sod
  const dataSod = await fetch("https://rubnongkaomai.com/baan/sod")
  let htmlSod = await dataSod.text()
  htmlSod = htmlSod.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Sod = cheerio.load(htmlSod);
  const baanSod = $Sod(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerSod = $Sod(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Soeiteelheemouy
  const dataSoeiteelheemouy = await fetch("https://rubnongkaomai.com/baan/soeiteelheemouy")
  let htmlSoeiteelheemouy = await dataSoeiteelheemouy.text()
  htmlSoeiteelheemouy = htmlSoeiteelheemouy.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Soeiteelheemouy = cheerio.load(htmlSoeiteelheemouy);
  const baanSoeiteelheemouy = $Soeiteelheemouy(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerSoeiteelheemouy = $Soeiteelheemouy(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Indy
  const dataIndy = await fetch("https://rubnongkaomai.com/baan/indy")
  let htmlIndy = await dataIndy.text()
  htmlIndy = htmlIndy.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Indy = cheerio.load(htmlIndy);
  const baanIndy = $Indy(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerIndy = $Indy(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Jo
  const dataJo = await fetch("https://rubnongkaomai.com/baan/jo+")
  let htmlJo = await dataJo.text()
  htmlJo = htmlJo.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Jo = cheerio.load(htmlJo);
  const baanJo = $Jo(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerJo = $Jo(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Rang
  const dataRang = await fetch("https://rubnongkaomai.com/baan/rang")
  let htmlRang = await dataRang.text()
  htmlRang = htmlRang.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Rang = cheerio.load(htmlRang);
  const baanRang = $Rang(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerRang = $Rang(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")


  //Yim
  const dataYim = await fetch("https://rubnongkaomai.com/baan/yim")
  let htmlYim = await dataYim.text()
  htmlYim = htmlYim.split("<br/>").join("#&h820").split("<br>").join("#&h820")
  const $Yim = cheerio.load(htmlYim);
  const baanYim = $Yim(".baan-info-module--text-wrapper--uuYTz").find("h1").first().text()
  const headerYim = $Yim(".baan-info-module--text-wrapper--uuYTz").find("h3").first().text().split("#&h820")
  console.log("complete")


  return {
    props: { baanAbnomal, headerAbnomal, baanAgape, headerAgape, baanBuem, headerBuem, baanDork, headerDork, baanDuidui, headerDuidui, baanIndiana, headerIndiana, baanJudson, headerJudson, baanKhunnoo, headerKhunnoo, baanMheenoi, headerMheenoi, baanPak_tak_agard, headerPak_tak_agard, baanPanarak, headerPanarak, baanPhee, headerPhee, baanRhoy, headerRhoy, baanSeiyw, headerSeiyw, baanTem, headerTem, baanBuchayun, headerBuchayun, baanDung, headerDung, baanFyo, headerFyo, baanKids, headerKids, baanKoh, headerKoh, baanLaijai, headerLaijai, baanNhai, headerNhai, baanPreaw, headerPreaw, baanWang, headerWang, baanWanted, headerWanted, baanWork, headerWork, baanAaum, headerAaum, baanJodeh_huesa, headerJodeh_huesa, baanKoom, headerKoom, baanPor, headerPor, baanSod, headerSod, baanSoeiteelheemouy, headerSoeiteelheemouy, baanIndy, headerIndy, baanJo, headerJo, baanRang, headerRang, baanYim, headerYim }
  }
}



export default function TableView(props) {
  function newLine(tmp){
    const list=[]
    for(const i in tmp){
      list.push(<div> {tmp[i]} <br/> </div>)
    }
    return list
  }
  return (<div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            ชื่อบ้าน และ สโลแกน 
      </h1>
          <h2 className="subtitle">
            <table className="table is-fullheight is-hoverable">
              <thead>
                <tr>
                  <th><abbr title="baan">ชื่อบ้าน</abbr></th>

                  <th><abbr title="slogan">สโลแกน </abbr></th>

                </tr>
              </thead>
              <tbody>
                <tr>

                  <th>{props.baanAbnomal}</th>
                  <td>{newLine(props.headerAbnomal)}</td>


                </tr>
                <tr>

                  <th>{props.baanAgape}</th>
                  <td>{newLine(props.headerAgape)}</td>



                </tr>


                <tr>
                  <th>{props.baanBuem}</th>
                  <td>{newLine(props.headerBuem)}</td>
                </tr>
                <tr>
                  <th>{props.baanDork}</th>
                  <td>{newLine(props.headerDork)}</td>
                </tr>
                <tr>
                  <th>{props.baanDuidui}</th>
                  <td>{newLine(props.headerDuidui)}</td>
                </tr>
                <tr>
                  <th>{props.baanIndiana}</th>
                  <td>{newLine(props.headerIndiana)}</td>
                </tr>
                <tr>
                  <th>{props.baanJudson}</th>
                  <td>{newLine(props.headerJudson)}</td>
                </tr>
                <tr>
                  <th>{props.baanKhunnoo}</th>
                  <td>{newLine(props.headerKhunnoo)}</td>
                </tr>
                <tr>
                  <th>{props.baanMheenoi}</th>
                  <td>{newLine(props.headerMheenoi)}</td>
                </tr>
                <tr>
                  <th>{props.baanPak_tak_agard}</th>
                  <td>{newLine(props.headerPak_tak_agard)}</td>
                  
                </tr>
                <tr>
                  <th>{props.baanPanarak}</th>
                  <td>{newLine(props.headerPanarak)}</td>
                </tr>
                <tr>
                  <th>{props.baanPhee}</th>
                  <td>{newLine(props.headerPhee)}</td>
                </tr>
                <tr>
                  <th>{props.baanRhoy}</th>
                  <td>{newLine(props.headerRhoy)}</td>
                </tr>
                <tr>
                  <th>{props.baanSeiyw}</th>
                  <td>{newLine(props.headerSeiyw)}</td>
                </tr>
                <tr>
                  <th>{props.baanTem}</th>
                  <td>{newLine(props.headerTem)}</td>
                </tr>
                <tr>
                  <th>{props.baanBuchayun}</th>
                  <td>{newLine(props.headerBuchayun)}</td>
                </tr>
                <tr>
                  <th>{props.baanDung}</th>
                  <td>{newLine(props.headerDung)}</td>
                </tr>
                <tr>
                  <th>{props.baanFyo}</th>
                  <td>{newLine(props.headerFyo)}</td>
                </tr>
                <tr>
                  <th>{props.baanKids}</th>
                  <td>{newLine(props.headerKids)}</td>
                </tr>
                <tr>
                  <th>{props.baanKoh}</th>
                  <td>{newLine(props.headerKoh)}</td>
                </tr>
                <tr>
                  <th>{props.baanLaijai}</th>
                  <td>{newLine(props.headerLaijai)}</td>
                </tr>
                <tr>
                  <th>{props.baanNhai}</th>
                  <td>{newLine(props.headerNhai)}</td>
                </tr>
                <tr>
                  <th>{props.baanPreaw}</th>
                  <td>{newLine(props.headerPreaw)}</td>
                </tr>
                <tr>
                  <th>{props.baanWang}</th>
                  <td>{newLine(props.headerWang)}</td>
                </tr>
                <tr>
                  <th>{props.baanWanted}</th>
                  <td>{newLine(props.headerWanted)}</td>
                </tr>
                <tr>
                  <th>{props.baanWork}</th>
                  <td>{newLine(props.headerWork)}</td>
                </tr>
                <tr>
                  <th>{props.baanAaum}</th>
                  <td>{newLine(props.headerAaum)}</td>
                </tr>
                <tr>
                  <th>{props.baanJodeh_huesa}</th>
                  <td>{newLine(props.headerJodeh_huesa)}</td>
                </tr>
                <tr>
                  <th>{props.baanKoom}</th>
                  <td>{newLine(props.headerKoom)}</td>
                </tr>
                <tr>
                  <th>{props.baanPor}</th>
                  <td>{newLine(props.headerPor)}</td>
                </tr>
                <tr>
                  <th>{props.baanSod}</th>
                  <td>{newLine(props.headerSod)}</td>
                </tr>
                <tr>
                  <th>{props.baanSoeiteelheemouy}</th>
                  <td>{newLine(props.headerSoeiteelheemouy)}</td>
                </tr>
                <tr>
                  <th>{props.baanIndy}</th>
                  <td>{newLine(props.headerIndy)}</td>
                </tr>
                <tr>
                  <th>{props.baanJo}</th>
                  <td>{newLine(props.headerJo)}</td>
                </tr>
                <tr>
                  <th>{props.baanRang}</th>
                  <td>{newLine(props.headerRang)}</td>
                </tr>
                <tr>
                  <th>{props.baanYim}</th>
                  <td>{newLine(props.headerYim)}</td>
                </tr>

              </tbody>
            </table>
          </h2>
        </div>
      </div>
    </section>

  </div>)
}
