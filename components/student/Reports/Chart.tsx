import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { RootState, useAppSelector } from '../../../store'
import moment from 'moment'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Chart = () => {
    const { studentQuizzes, studentLifeTimeReports } = useAppSelector(
        (state: RootState) => state.studentReports
    )
    const quizzes = studentQuizzes?.map((item: any) => item.students.quizzes)
    const Labels = quizzes[0]?.map((item: any) => item.obtainedMarks)
    const latestTenRecord = Labels?.slice(-10)
    const dates = quizzes[0]?.map((item: any) =>
        moment(item.quizzes.submitDate).format('Do MMM ')
    )
    const marks = studentLifeTimeReports[0]?.students?.quizzes?.map(
        (ele: any) => ele?.obtainedMarks
    )
    const lifeTimeDates = studentLifeTimeReports[0]?.students?.quizzes?.map(
        (ele: any) => moment(ele?.quizzes?.submitDate).format('Do MMM ')
    )

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    }

    const labels = dates === undefined ? lifeTimeDates : dates

    const data = {
        borderWidth: 0,
        borderSkipped: true,
        labels,
        datasets: [
            {
                label: 'Student Quizzes',
                data: latestTenRecord === undefined ? marks : latestTenRecord,
                backgroundColor: '#FBEAC0',
            },
        ],
    }

    return <Bar options={options} data={data} />
}

export default Chart
