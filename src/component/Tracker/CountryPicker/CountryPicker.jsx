import React, { useState, useEffect, useRef } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../../services/api";

function CountryPicker({ handleCountryChange }) {
    const isCancelled = useRef(false);//prevent memory leaks performs only api calls when component is loaded to dom
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        if (!isCancelled.current)
            fetchAPI();
        return () => {
            isCancelled.current = true;
        }
    }, [setFetchedCountries]);

    // console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect default="" onChange={(e) => { handleCountryChange(e.target.value) }}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    );
}

export default CountryPicker;