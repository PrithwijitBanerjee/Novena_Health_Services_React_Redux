import React from 'react'
import { Link } from 'react-router-dom';
const DashBoardPanel = () => {
    const dashPanel = [
        {
            id: 1,
            title: 'Doctors',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias.',
            link: '/doctors'
        },
        {
            id: 2,
            title: 'Patients',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias.',
            link: '/patients'
        },
        {
            id: 3,
            title: 'Departments',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias.',
            link: '/departments'
        },
        {
            id: 4,
            title: 'Guest Users',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias.',
            link: '/users'
        }
    ];
    return (
        <>
            <div className='container-fluid' style={{margin:'20px', padding:'20px'}}>
                <div className='row'>
                    {
                        dashPanel.map((panelItm, index) => {
                            const { title, desc, link } = panelItm;
                            return (
                                <>
                                    <div className='col-10 col-md-3'>
                                        <div  key={index.toString()} className="card" style={{ width: '18rem', borderRadius:'20px', boxShadow:'20px 20px 30px', padding:'30px'}}>
                                            <div className="card-body">
                                                <h5 className="card-title text-danger">{title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
                                                <p className="card-text">{desc}</p>
                                                <Link to={link} className="card-link btn btn-outline-danger">Visit {title}</Link>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DashBoardPanel