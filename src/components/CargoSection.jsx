import React from 'react'
import AdditionalCard from './AdditionalCard';
import CargoSelect from './CargoSelect';
import Title from './Title';
import CargoInput from './CargoInput';
import { SectionLayout } from './Layouts';

const CargoSection = () => {
    return (
        <div className='cargo'>
            <SectionLayout>
                <Title title='Cargo Details' />

                <div className="cargo__wrapper">
                    <div className="cargo__left">
                        <div className="cargo__leftTop">
                            <CargoSelect />
                        </div>
                        <div className="cargo__leftBottom">
                            <CargoInput label='Total Volume' unit='cbm' />
                            <CargoInput label='Total Weight' unit='kg' />
                        </div>
                    </div>
                    <div className="cargo__right">
                        <div className="cargo__rightItem">
                            <AdditionalCard />
                            <p>Dangerous Cargo (ex. Chemicals, Battery)</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default CargoSection
