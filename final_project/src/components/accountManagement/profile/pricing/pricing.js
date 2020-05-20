import React from 'react';
import {ScrollView} from 'react-native';
import {PricingCard} from 'react-native-elements';
import  {color} from '../../../global/constant';

const Pricing = () => {
    return (
        <ScrollView>
            <PricingCard price={'19$'}
                         color={color.LIGHT_BLUE}
                         title={'Primary'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Monthly', 'Courses, paths and skill assessments']}
            />
            <PricingCard price={'49$'}
                         color={color.LIGHT_GREEN}
                         title={'High'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Quarterly', 'Save 14%', 'Courses, paths and skill assessments']}
            />
            <PricingCard price={'119$'}
                         color={color.LIGHT_RED}
                         title={'Premium'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Yearly', 'Save 48%', 'Courses, paths and skill assessments']}
            />
        </ScrollView>
    );
};
export default Pricing;
