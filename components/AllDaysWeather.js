import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text} from 'react-native';

const AllDaysWeather = ({allDays}) => {
    
    const sixteenDays = allDays.temp;

    return (
        <ScrollView>
            <FlatList>
                {sixteenDays}
            </FlatList>
        </ScrollView>
    )
}

export default AllDaysWeather

