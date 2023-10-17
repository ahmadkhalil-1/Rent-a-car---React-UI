import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import SelectLocation from "./Components/SelectLocation";
import CarsList from "./Components/CarsList";
import PopularCars from "./Components/PopularCars";

function App() {
  const Carsdata = [
    {
      id: "1",
      title: "All New Rush",
      model: "SUV",
      fuel: "70",
      price: "$72.00",
      img: "https://thumbs.dreamstime.com/b/copper-generic-suv-car-white-background-side-view-isolated-path-copper-generic-suv-car-off-road-crossover-glossy-123336083.jpg",
    },
    {
      id: "2",
      title: "CR - V",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://thumbs.dreamstime.com/b/khaki-generic-suv-car-white-background-side-view-isolated-path-khaki-generic-suv-car-off-road-crossover-glossy-123336018.jpg",
    },
    {
      id: "3",
      title: "All New Terios",
      model: "Sport",
      fuel: "90",
      price: "$74.00",
      img: "https://thumbs.dreamstime.com/b/copper-generic-suv-car-white-background-side-view-isolated-path-copper-generic-suv-car-off-road-crossover-glossy-123336083.jpg",
    },
    {
      id: "4",
      title: "CR - V",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://thumbs.dreamstime.com/b/khaki-generic-suv-car-white-background-side-view-isolated-path-khaki-generic-suv-car-off-road-crossover-glossy-123336018.jpg",
    },
    {
      id: "5",
      title: "MG ZX Exclusice",
      model: "Hatchback",
      fuel: "70",
      price: "$76.00",
      img: "https://static-eu.cargurus.com/images/forsale/2021/03/02/20/16/2020_mg_zs_suv-pic-8679823830049522924-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp",
    },
    {
      id: "6",
      title: "New MG ZS",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://static-eu.cargurus.com/images/forsale/2021/03/02/20/16/2020_mg_zs_suv-pic-8679823830049522924-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp",
    },
    {
      id: "7",
      title: "MG ZX Excite",
      model: "Sport",
      fuel: "90",
      price: "$74.00",
      img: "https://static-eu.cargurus.com/images/forsale/2021/03/02/20/16/2020_mg_zs_suv-pic-8679823830049522924-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp",
    },
    {
      id: "8",
      title: "New MG ZS",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://static-eu.cargurus.com/images/forsale/2021/03/02/20/16/2020_mg_zs_suv-pic-8679823830049522924-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp",
    },
    {
      id: "9",
      title: "All New Rush",
      model: "SUV",
      fuel: "70",
      price: "$72.00",
      img: "https://thumbs.dreamstime.com/b/copper-generic-suv-car-white-background-side-view-isolated-path-copper-generic-suv-car-off-road-crossover-glossy-123336083.jpg",
    },
    {
      id: "10",
      title: "CR - V",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://thumbs.dreamstime.com/b/khaki-generic-suv-car-white-background-side-view-isolated-path-khaki-generic-suv-car-off-road-crossover-glossy-123336018.jpg",
    },
    {
      id: "11",
      title: "All New Terios",
      model: "Sport",
      fuel: "90",
      price: "$74.00",
      img: "https://thumbs.dreamstime.com/b/copper-generic-suv-car-white-background-side-view-isolated-path-copper-generic-suv-car-off-road-crossover-glossy-123336083.jpg",
    },
    {
      id: "12",
      title: "CR - V",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://thumbs.dreamstime.com/b/khaki-generic-suv-car-white-background-side-view-isolated-path-khaki-generic-suv-car-off-road-crossover-glossy-123336018.jpg",
    },
    {
      id: "13",
      title: "MG ZX Exclusice",
      model: "Hatchback",
      fuel: "70",
      price: "$76.00",
      img: "https://thumbs.dreamstime.com/b/copper-generic-suv-car-white-background-side-view-isolated-path-copper-generic-suv-car-off-road-crossover-glossy-123336083.jpg",
    },
    {
      id: "14",
      title: "New MG ZS",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://thumbs.dreamstime.com/b/khaki-generic-suv-car-white-background-side-view-isolated-path-khaki-generic-suv-car-off-road-crossover-glossy-123336018.jpg",
    },
    {
      id: "15",
      title: "MG ZX Excite",
      model: "Sport",
      fuel: "90",
      price: "$74.00",
      img: "https://thumbs.dreamstime.com/b/copper-generic-suv-car-white-background-side-view-isolated-path-copper-generic-suv-car-off-road-crossover-glossy-123336083.jpg",
    },
    {
      id: "16",
      title: "New MG ZS",
      model: "SUV",
      fuel: "80",
      price: "$80.00",
      img: "https://thumbs.dreamstime.com/b/khaki-generic-suv-car-white-background-side-view-isolated-path-khaki-generic-suv-car-off-road-crossover-glossy-123336018.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <Main />
      <SelectLocation />
      <PopularCars />
      <CarsList car={Carsdata} />
      <Footer />
    </>
  );
}

export default App;
