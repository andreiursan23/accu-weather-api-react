import "./App.css";

import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import Error from "./components/Error/Error";
import Forecast from "./components/Forecast/Forecast";
import Loader from "./components/Loader/Loader";

import { useForecast } from "./hooks/useForecast";

import "./App.css";

function App() {
  const { error, isPending, submitRequest, forecast } = useForecast();

  const submitSearch = (location) => {
    submitRequest(location);
  };

  console.log(forecast);

  return (
    <div>
      <Header />
      {!forecast && (
        <section className="box position-relative">
          {!isPending && (
            <SearchForm submitSearch={submitSearch} isPending={isPending} />
          )}
          {error && <Error message={error} />}
          {isPending && <Loader />}
        </section>
      )}

      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
