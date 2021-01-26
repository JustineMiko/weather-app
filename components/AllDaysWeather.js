import React from 'react';
import { FlatList, ScrollView, Text} from 'react-native';

const AllDaysWeather(allDays) {
    
    const sixteenDays = allDays.daily.temp;

    return (
        <ScrollView>
            <FlatList>
                {sixteenDays}
            </FlatList>
        </ScrollView>
    )
}

export default AllDaysWeather;
