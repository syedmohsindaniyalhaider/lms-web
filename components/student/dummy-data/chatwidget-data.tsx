import ChatProfile1 from '/assets/images/Profile1.svg'
import ChatProfile2 from '/assets/images/Profile2.svg'
import ChatProfile3 from '/assets/images/Profile3.svg'

export type chatwidget_types = {
    id: number
    img: string
    title: string
    description: string
}

export type mychat_types = {
    id: number
    img: string
    name: string
    task: string
    time: string
    icon: number
    online: boolean
}

export const CHATWIDGET: chatwidget_types[] = [
    {
        id: 0,
        img: ChatProfile1,
        title: 'Khawaja Adeel',
        description: '(Math’s Teacher)',
    },
    {
        id: 1,
        img: ChatProfile2,
        title: 'Asif Gafoor',
        description: '(Coding Teacher)',
    },
    {
        id: 2,
        img: ChatProfile2,
        title: 'Asif Gafoor',
        description: '(Coding Teacher)',
    },
    {
        id: 3,
        img: ChatProfile2,
        title: 'Asif Gafoor',
        description: '(Coding Teacher)',
    },
    {
        id: 4,
        img: ChatProfile3,
        title: 'Zubair Aziz',
        description: '(English Teacher)',
    },
]
export const CHAT_DATA: mychat_types[] = [
    {
        id: 0,
        img: ChatProfile1,
        name: 'Khawaja Adeel',
        task: 'You have to apply that formul ...',
        time: '7:39 pm',
        icon: 2,
        online: true,
    },
    {
        id: 1,
        img: ChatProfile2,
        name: 'Zubair Aziz',
        task: 'You: Thank you for guiding me.',
        time: 'yesterday',
        icon: 0,
        online: false,
    },
    {
        id: 2,
        img: ChatProfile2,
        name: 'Zubair Aziz',
        task: 'You: Thank you for guiding me.',
        time: 'yesterday',
        icon: 0,
        online: false,
    },
    {
        id: 3,
        img: ChatProfile1,
        name: 'Ali',
        task: 'You have to apply that formul ...',
        time: '7:39 pm',
        icon: 2,
        online: true,
    },
    {
        id: 4,
        img: ChatProfile2,
        name: 'Zubair Aziz',
        task: 'You: Thank you for guiding me.',
        time: 'yesterday',
        icon: 0,
        online: false,
    },
    {
        id: 5,
        img: ChatProfile2,
        name: 'Zubair Aziz',
        task: 'You: Thank you for guiding me.',
        time: 'yesterday',
        icon: 0,
        online: false,
    },
    {
        id: 6,
        img: ChatProfile2,
        name: 'Zubair Aziz',
        task: 'You: Thank you for guiding me.',
        time: 'yesterday',
        icon: 0,
        online: false,
    },
    {
        id: 7,
        img: ChatProfile2,
        name: 'Zubair Aziz',
        task: 'You: Thank you for guiding me.',
        time: 'yesterday',
        icon: 0,
        online: false,
    },
    {
        id: 8,
        img: ChatProfile2,
        name: 'Zubair Aziz',
        task: 'You: Thank you for guiding me.',
        time: 'yesterday',
        icon: 0,
        online: false,
    },
]
