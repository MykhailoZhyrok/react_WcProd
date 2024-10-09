import React from 'react'
import './Vacation.css'
export default function VacationSection() {
    return (
        <section style={{ display: 'flex', height: '90vh', alignItems: 'center'}}>
            <div style={{ display: 'flex', padding: 40, flexWrap: 'wrap'}}>
                <div style={{minWidth: 210}}>
                    <h2>
                        Ready to join the PetProd?
                    </h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', minWidth: 210 }}>
                    <table style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ backgroundColor: 'black', color: 'white', }}>
                            <tr>
                                <th style={{ padding: 5 }} colSpan={2}>
                                    <h4 style={{ margin: 0 }}>Vacancies</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: 35, cursor: 'pointer' }}>
                            <tr>
                                <td onClick={() => window.open('https://github.com/MykhailoZhyrok', '_blank')}>
                                    <h4 style={{ margin: 0 }}>Junior Affiliate Manager</h4>
                                </td>
                            </tr>
                            <tr>
                                <td onClick={() => window.open('https://github.com/MykhailoZhyrok', '_blank')}>
                                    <h4 style={{ margin: 0 }}>Junior Business Development Manager</h4>
                                </td>
                            </tr>
                        </tbody>



                    </table>
                </div>
            </div>


        </section>

    )
}
