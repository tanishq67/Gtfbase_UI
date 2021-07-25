import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './SpeciesPicker.module.css';
species = [
    "Pan_troglodytes",
    "Gorilla_gorilla",
    "Macaca_mulatta",
]

const SpeciesPicker = ({ handleSpeciesChange }) => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">None</option>
                {species.map((specie, i) => <option key={i} value={specie}>{specie}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default SpeciesPicker;