
import FilterBar from "./FilterBar"
import ServiceList from "./ServiceList"
import MapView from "./MapView"
// import ServiceCard from "./ServiceCard"

const HomePage = () => {
  return (
    <div>
      <div className="filter">
        <FilterBar/>
      </div>
      <div>
        <ServiceList/>
      </div>
      <div>
        <MapView/>
      </div>
    </div>
  )
}

export default HomePage