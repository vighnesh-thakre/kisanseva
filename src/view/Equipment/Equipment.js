import React from "react"
import "./../Equipment/Equipment.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'
import WeatherApp from './../../Componant/Weather app/WeatherApp'

 function Equipment()  {
    return(
        <div>
            <Navbar/>
            
            <div class="bannerhed">
    <img class="sugercaneimg" src="http://www.tokkoro.com/picsup/3104832-agricultural-machinery_agriculture_arable-farming_farm_field_grain_harvest_harvest-time_heavy-equipment_industry_machine_pasture_plow_rural_tractor_vehicle.jpg" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">ARIES AGRO AGRICULTURAL EQUIPMENT</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>
    </div>
    <br></br>
    <WeatherApp/>
    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2023/03/Agriculture-Drones.png" alt=".."/>
        </div>
        <div class="middle-card1 ps-4">
           <h2 class="text-success mt-4">Agriculture Drones</h2>
           <h3>Product Features</h3>
           <ul>
            <li>1st View – Running Video of Drone Spraying on crops</li>
            <li>2nd View – About Drone features view via swiping</li>
            <li>Model Name – Aries Agribot</li>
           </ul>
          
           
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2023/03/Agriculture-Drones.png" alt=".."/>
            <div class="productname">
                <h2> Drones</h2>
                <button>BUY NOW</button>
            </div>
            </div>
            </div>


            <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2023/04/Soil-Testing-Kits.png" alt=".."/>
        </div>
        <div class="middle-card1 ps-4">
           <h2 class="text-success mt-4">Aries Electronic Soil Testing Kit</h2>
           <h3>Product Features</h3>
           <ul>
            <li>Portable and Handheld</li>
            <li>Low Power Consumption</li>
            <li>Highly affordable with highest testing capabilities</li>
            
           </ul>
          
          
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2023/04/Soil-Testing-Kits.png" alt=".."/>
            <div class="productname">
                <h2> Testing Kit</h2>
                <button>BUY NOW</button>
            </div>
            </div>
            </div>
            <Cardslider/>
          <Cardslider2/>
           <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default Equipment