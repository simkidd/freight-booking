import React from 'react'
import { CalendarToday, LocationOn, ArrowDropDown } from '@material-ui/icons'
import { SectionLayout } from './Layouts'
import Title from './Title';


const LocationSection = () => {

    return (
        <div className='location'>
            <SectionLayout>
                <Title title='&#128712;' />
                <div className="location__wrapper">
                    <div className="top">
                        <div className="radio">
                            <input type="radio" name="port" id="import" />
                            <label htmlFor="import">Import</label>
                            <input type="radio" name="port" id="export" />
                            <label htmlFor="export">Export</label>
                        </div>

                        <div className="input__container">
                            <div className='inner'>
                                <LocationOn />
                                <span>From</span>
                                <input type="text" placeholder='City or port' />
                            </div>
                        </div>
                        <div className="input__container">
                            <div className='inner'>
                                <LocationOn />
                                <span>To</span>
                                <input type="text" placeholder='City or port' />
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="input__container">
                            <div className="inner">
                                <CalendarToday />
                                <input type="text" placeholder='Ready Date' />
                            </div>
                        </div>
                        <div className="input__container">
                            <div className="inner__select">
                                <select>
                                    <option disabled selected>Incoterms</option>
                                    <option >Option 1</option>
                                    <option >Option 2</option>
                                </select>
                                <ArrowDropDown />
                            </div>
                        </div>
                        <div className="input__container">
                            <div className="inner">
                                <input type="text" placeholder='Total Cargo Value' />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default LocationSection
