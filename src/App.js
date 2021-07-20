import React, { useEffect, useState } from "react"
import CoinTable from "./components/CoinTable";

const App = () => {
//javascript
  const [coins, setCoins] = useState({
    datos:[],
    loading:true,
    update:false
  })

  useEffect(() => {
    //acciones
    getCoins().then((respuesta)=>{
      setCoins({
        datos: respuesta,
        loading: true,
        update: false
      });
    });

  }, [])

  const getCoins=async() =>{
  
    const resp= await fetch('https://api.coincap.io/v2/assets?limit=10');
    const informacion= await resp.json();
    //console.log(data.data);
    return informacion.data;
  }
  getCoins()

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Coin App</h1>
        </div>
        <CoinTable coins={coins}/>
      </div>
    </div>
  );
}

export default App;
