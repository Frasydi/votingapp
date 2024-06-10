import useFetch from "../../hooks/useFetch"
import React, { useEffect, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    
);

export const options = {

};

export default function RealCount() {
    const [data, loading, error, refetch] = useFetch<{
        nama: string,
        nomor: number,
        jumlah: number
    }[]>("/api/rekap")

    const labels = useMemo(() => {
        if (data == null) return []
        return data.map(el => el.nama)
    }, [data])

    // useEffect(() => {
    //     const intervals = setInterval(() => {
    //         refetch()
    //     }, 1000)

    //     return () => {
    //         clearInterval(intervals)
    //     }
    // }, [])


    // const data2 = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Dataset 1',
    //             data: labels.map(() => 50),
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //         },
    //         {
    //             label: 'Dataset 2',
    //             data: labels.map(() => 50),
    //             backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //         },
    //     ],
    // };

    return (
        <div>
            <h1>Rekap Suara</h1>

            {
                data != null && <>
                    <Bar options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top' as const,
                            },
                            title: {
                                display: true,
                                text: 'RealCount Pemilih',
                            },
                            

                        },
                        
                        scales : {
                            y : {
                                ticks: {
                                    // Only show integer values on the y-axis
                                    callback: function(value) {
                                        if (Number.isInteger(value)) {
                                            return value;
                                        }
                                    },
                                    stepSize: 1, // Ensure step size of 1 for integer ticks
                                },
                            },
                            x : {
                                afterFit : (scale) => {
                                    scale.width = 2; // sets the width to 100px
                                }
                            }
                        }

                      

                    }} data={{
                        labels: labels,
                        datasets: [
                            {
                                label: "Pemilihan",
                                borderWidth: 1,
                                data: data.map(el => el.jumlah),
                                backgroundColor: [
                                    "#B34D4D",
                                    "#91A6FF",
                                    "#FF6F61",
                                    "#FFABAB",
                                    "#FFDAC1",
                                    "#E2F0CB",
                                    "#FF8C94",
                                    "#FFAAA6",
                                    "#FFD3B6",
                                    "#FFB7B2",
                                    "#A8E6CF",
                                    "#DCEDC1",
                                    "#FFD3B6",
                                    "#FF8C94"
                                ],
                                
                            }
                        ],

                    }} />;
                </>
            }


        </div>
    )
}