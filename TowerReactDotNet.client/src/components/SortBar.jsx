import React from 'react';
import '../assets/scss/components/SortBar.scss'
import { AppState } from '../AppState.js';

export default function SortBar() {
    let sortByOptions = {
        'All': '',
        'Concert': 'concert',
        'Convention': 'convention',
        'Sport': 'sport',
        'Digital': 'digital',
        'Misc.': 'misc.',
    }

    function setFilterActive(filter) {
        AppState.activeFilter = filter
    }

    function handleFilterClick(filter) {
        return () => {
            setFilterActive(filter)
        }
    }
    function getClassName(value) {
        const baseClassName = "text-center fancy-hover fancy-text fs-4 align-items-center p-3 bottom-border-hover";
        const isActive = AppState.activeFilter === value;
        return isActive ? `${baseClassName} active` : baseClassName;
    }

    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sbo => {
            let value = sortByOptions[sbo]
            return (
                <div
                    key={value}
                    className='col-6 col-md-2'
                    onClick={handleFilterClick(value)}>
                    <div className={getClassName(value)}>
                        {sbo}
                    </div>
                </div >
            )
        })
    }
    return (
        <div className="container-fluid bg-secondary tower-box-shadow">
            <div className="row">
                {renderSortByOptions()}
            </div>
        </div>
    )

}