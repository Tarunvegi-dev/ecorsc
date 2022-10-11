import React from 'react'

const Links = () => {
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
            <p className="title">Important Links</p>
            <ul>
                {links?.map((item, id) => (
                    <li className="Link" key={id}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Links