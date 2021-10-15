import React from 'react'
import AdditionalCard from './AdditionalCard'
import { SectionLayout } from './Layouts'
import Title from './Title'

const AdditionalSection = () => {
    return (
            <div className='addtional__services'>
            <SectionLayout>
                <Title title='Addtional Services' />
                <div className="additional__wrapper">
                    <AdditionalCard title='Export Forwarding' content='We handle customs clearance and documentation.' />
                    <AdditionalCard title='Import Customs Clearance' content='We handle import customs and regulatory requirements.' />
                    <AdditionalCard title='Cargo Insurance' content='Protect your cargo from logistics risk up to its full value.' />
                    <AdditionalCard title='Travel / Delivery' content='We deliver the cargo to your door step from the ports.' />
                </div>
            </SectionLayout>
        </div>
    )
}

export default AdditionalSection
