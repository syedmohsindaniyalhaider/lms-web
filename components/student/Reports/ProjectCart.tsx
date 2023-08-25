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

const ProjectCart = () => {
    const { studentProjects, studentLifeTimeReports } = useAppSelector(
        (state: RootState) => state.studentReports
    )

    const projects = studentProjects?.map((item: any) => item.students.projects)
    const Labels = projects[0]?.map((item: any) => item.obtainedMarks)
    const dates = projects[0]?.map((item: any) =>
        moment(item.projects.startDate).format('Do MMM ')
    )
    const latestTenRecord = Labels?.slice(-10)
    const marks = studentLifeTimeReports[0]?.students?.projects?.map(
        (ele: any) => ele?.obtainedMarks
    )
    const lifeTimeDates = studentLifeTimeReports[0]?.students?.projects?.map(
        (ele: any) => moment(ele?.projects?.startDate).format('Do MMM ')
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
                label: 'Student Projects',
                data: latestTenRecord === undefined ? marks : latestTenRecord,
                backgroundColor: '#C3D5D1',
            },
        ],
    }
    return <Bar options={options} data={data} />
}

export default ProjectCart
