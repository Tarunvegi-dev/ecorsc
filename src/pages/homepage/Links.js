import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'

const Links = ({ title }) => {
    const links = [
        {
            title: 'Central Railway Website',
            url: 'https://wcrms.com/'
        },
        {
            title: 'Ministry of Electronics & Information Technology',
            url: 'http://meity.gov.in/'
        },
        {
            title: 'UIDAI',
            url: 'http://www.uidai.gov.in/'
        },
        {
            title: 'NTIPRIT',
            url: 'https://www.ntiprit.gov.in/'
        },
        {
            title: 'Bharat Broadband Network Limited',
            url: 'http://www.bbnl.nic.in/'
        },
    ];
    return (
        <div className="Links">
            <p className="title">{title}</p>
            <ul>
                {links.map((item, id) => (
                    <li className="Link" key={id}>
                        <FiChevronsRight style={{ color: 'gray' }} />&nbsp;<a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Links