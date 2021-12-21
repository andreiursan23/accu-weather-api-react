import { useState } from "react";

import { useIpLocation } from "../../hooks/useIpLocation";

import styles from "../SearchForm/SearchForm.module.css";

function SearchForm({ submitSearch }) {
  const [location, setLocation] = useState("");
  const { getCurrentLocation } = useIpLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location || location.length !== 0) {
      submitSearch(location);
    } 
  };

  const handleSubmitCurrent = async (e) => {
    e.preventDefault();

    const currentLocation = await getCurrentLocation();

    submitSearch(currentLocation);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className={styles.button}
          onClick={handleSubmitCurrent}
        >
          Current location
        </button>

        <input
          aria-label="location"
          type="text"
          className={`${styles.input} form-control`}
          placeholder="Search for location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit" className={styles.button} onClick={handleSubmit}>
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
