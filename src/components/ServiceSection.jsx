import React from 'react'
import { SectionLayout } from './Layouts'
import ServiceCard from './ServiceCard'
import Title from './Title';
import { AirplanemodeActive, LocalShipping, DirectionsBoat, Person } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core'
import CardChecked from './checked/CardChecked';

const ServiceSection = () => {
    return (
        <div className='services'>
            <SectionLayout>
                <Title title='Select a service' />
                <div className="service_cards">
                    <Checkbox
                        icon={<ServiceCard title='Air Freight' icon={<AirplanemodeActive />} />}
                        checkedIcon={<CardChecked title='Air Freight' icon={<AirplanemodeActive />} />}
                        style={{margin:'0'}}
                    />
                    <Checkbox
                        icon={<ServiceCard title='Sea Freight' icon={<DirectionsBoat />} />}
                        checkedIcon={<CardChecked title='Sea Freight' icon={<DirectionsBoat />} />}
                    />
                    <Checkbox
                        icon={<ServiceCard title='Inland (Truck & Barge)' icon={<LocalShipping />} />}
                        checkedIcon={<CardChecked title='Inland (Truck & Barge)' icon={<LocalShipping />} />}
                    />
                    <Checkbox
                        icon={<ServiceCard title='Customs Clearance' icon={<Person />} />}
                        checkedIcon={<CardChecked title='Customs Clearance' icon={<Person />} />}
                    />
                </div>
            </SectionLayout>
        </div>
    )
}

export default ServiceSection
