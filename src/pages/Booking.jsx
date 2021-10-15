import React from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowBackRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { InnerLayout, MainLayout } from '../components/Layouts';
import ServiceSection from '../components/ServiceSection';
import LocationSection from '../components/LocationSection';
import CargoSection from '../components/CargoSection';
import AdditionalSection from '../components/AdditionalSection';


const Booking = () => {
    return (
        <div>
            <Header />
            <MainLayout>
                <div className="booking_head">
                    <Link to='/'>
                        <IconButton>
                            <ArrowBackRounded />
                        </IconButton>
                    </Link>
                    <div className="booking__inner">
                        <h2>New Booking</h2>
                        <p>Fill in the information below to get a quote or create a new booking</p>
                    </div>
                </div>
                <form >
                    <InnerLayout>
                        <ServiceSection />
                        <LocationSection />
                        <CargoSection />
                        <AdditionalSection />
                    </InnerLayout>
                </form>
            </MainLayout>
        </div>
    )
}

export default Booking
