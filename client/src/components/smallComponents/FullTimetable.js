import React from 'react'
import {Table} from './Table' 
import { Text,Box,Card,Button,Heading} from 'rebass'
export default function FullTimetable() {
    const DAYS = ["MONDAY"]
    return (
        <div>
            <Table
                                    
                                    columns={9}
                                    data={[
                                      "Day",
                                        "8AM",
                                        "9AM",
                                        "10AM",
                                        "11:30AM",
                                        "12:30PM",
                                        "2PM",
                                        "3PM",
                                        "4PM"
                                    ]}
                                    />
                                
        </div>
    )
}
