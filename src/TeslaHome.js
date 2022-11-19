//yeh homepage hai yaha se hum alag alag cheezo ko call krenge
//this is a component
//1-bahar use kia hai toh export____2-function default 
import TeslaFooter from './TeslaFooter'
import TeslaHeader from './TeslaHeader'
import TeslaSection from './TeslaSection'
export default function TeslaHome(){
    return(
        <>
            <TeslaHeader/>
            {/* //jo alg cheez hai osse humein alg bana na liye hum value pass kr skte hai call krte time */}
            <TeslaSection name='Model 3'
                          tagline='Order Online for Touchless Delivery'
                          lbuttontext='Custom Order'
                          rbuttontext='Existing Inventory'
                          bgimg='Model-3.jfif'/>
            <TeslaSection name='Model Y'
                          tagline='Order Online for Touchless Delivery'
                          lbuttontext='Custom Order'
                          rbuttontext='Existing Inventory'
                          bgimg='Model-Y.jfif'/>
            <TeslaSection name='Model S'
                          tagline='Order Online for Touchless Delivery'
                          lbuttontext='Custom Order'
                          rbuttontext='Existing Inventory'
                          bgimg='Model-S.jfif'/>
            <TeslaSection name='Model X'
                          tagline='Order Online for Touchless Delivery'
                          lbuttontext='Custom Order'
                          rbuttontext='Existing Inventory'
                          bgimg='Model-X.jfif'/>
            <TeslaSection name='Solar Panels'
                          tagline='Lowest Cost Solar Panels in America'
                          lbuttontext='Order Now'
                          rbuttontext='Learn More'
                          bgimg='Solar-Panels.jfif'/>
            <TeslaSection name='Solar Roof'
                          tagline='Produce Clean Energy From Your Roof'
                          lbuttontext='Order Now'
                          rbuttontext='Learn More'
                          bgimg='Solar-Roof.webp'/>
            <TeslaSection name='Accessories'
                          lbuttontext='Shop Now'
                          bgimg='Accessories.jfif'/>
            <TeslaFooter/>
        </>
    )
}