import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'

const Links = ({ title }) => {
    const links = [
        {
            title: 'East Coast Railway Website',
            url: 'https://eastcoastrail.indianrailways.gov.in/'
        },
        {
            title: 'Ministry of Railways',
            url: 'https://indianrailways.gov.in/'
        },
        {
            title: 'Railway Board Circulars',
            url: 'https://railwayrule.com/railway-board-circulars'
        },
        {
            title: 'ECOR establishment circulars',
            url: 'https://eastcoastrail.indianrailways.gov.in/view_section.jsp?lang=0&id=0,1,291,912,1554'
        },
        {
            title: 'Pay commission Directorates',
            url: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?id=0,1,304,366,531'
        },
        {
            title: 'NFIR Website',
            url: 'https://www.nfirindia.com/'
        },
        {
            title: 'Find Shortest Path',
            url: 'https://rbs.indianrail.gov.in/ShortPath/ShortPath.jsp'
        },
        {
            title: 'PNR Status',
            url: 'https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=enF'
        },
        {
            title: 'CGHS at a glance',
            url: 'https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml'
        },
        {
            title: 'Indian Railways Website',
            url: 'https://indianrailways.gov.in/'
        },
        {
            title: 'HRMS Login',
            url: 'https://hrms.indianrail.gov.in/HRMS/login'
        },
        {
            title: 'UMID Login',
            url: 'https://umid.digitalir.in/1_modules_dashboard/0_login'
        },
        {
            title: 'Train Enquiry',
            url: 'https://enquiry.indianrail.gov.in/ntes/'
        },
        {
            title: 'Income Tax',
            url: 'http://irtsa.net/IncomeTax.html'
        },
        {
            title: 'Railway Board Directory',
            url: 'http://dir.railnet.gov.in/'
        },
        {
            title: 'Government Websites',
            url: 'https://www.irtsa.net/Government_Websites.html'
        },
        {
            title: 'IRCTC login Website for E-Pass/PTO reservation',
            url: 'https://www.irctc.co.in/nget/train-search'
        },
        {
            title: 'Online RTI website',
            url: 'https://rtionline.gov.in/index.php'
        },
        {
            title: 'Ecor portal login',
            url: 'https://ecorportal.in/'
        }
    ]

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