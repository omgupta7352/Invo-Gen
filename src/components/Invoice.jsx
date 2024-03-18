import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete, AiFillEye } from 'react-icons/ai'
import moment from 'moment/moment'
import { Button } from 'react-bootstrap'

const Invoice = ({ item, view, edit, remove }) => {
    return (
        <div className="p-4 mt-3 card rounded-7 d-flex shadow-lg p-3 mb-5 " style={{borderRadius:'14px'}}>
        <div className='d-flex justify-content-between row'>
            <div className='flex-fill mb-2 mb-sm-0 col-sm-7 d-flex justify-content-center align-items-start flex-column'>
                <p className='fw-bold fs-4 mb-4 pb-1'>INVOICE NO : <span className='lh-base mb-4 pb-1 fw-bold' style={{ color: 'orange' }}>#{item.invoiceNumber}</span></p>
                <p className='lh-base mb-2 pb-1 fw-bold' style={{ fontSize: '15px', color: 'blue' }}>INVOICE FOR:</p>

                <div className="">
                    <h4 className='lh-base mb-1 pb-1 fw-bold' style={{ fontSize: '18px' , color:'#50727B' }}>{item.billTo}</h4>
                    <h5 className="fw-bold my-2" style={{ fontSize: '14px' , color: 'purple' }}>{item.billToEmail}</h5>
                    <p className='fw-bold my-2' style={{ fontSize: '14px' , color: '#9ADE7B' }}>{item.billToAddress}</p>
                </div>
                <div className="" />
                <p className='text-break mt-3' style={{ fontSize: '12px' }} >
                    <span className='lh-base mb-1 pb-1 fw-bold' style={{ fontSize: '15px', color: 'hotpink' }}>FROM:&nbsp;</span>
                    <span className='lh-base mb-1 pb-1 fw-bold' style={{ fontSize: '18px' , color:'#50727B' }}>{item.billFrom}</span>
                </p>
            </div>
            <div className='flex-fill col-sm-3 p-4 shadow-lg p-1 mb-1 rounded ' style={{ borderRadius: '15px' }}>
                <div className='w-auto m-w-200'>
                    <p className='text-secondary mb-2 fw-bold fs-9' style={{ fontSize: '14px' }}>AMOUNT DUE</p>
                    <p className='mb-1 fs-2'>
                        <span className='text-muted d-inline-block mr-2 mb-1' style={{ marginRight: '3px' }}>{item.currency}</span>
                        {item.total.toFixed(2)}
                    </p>
                    <p className='mb-0 text-muted fw-bolder'>
                        <span className='d-inline-block rounded-circle bg-danger me-2' style={{ fontSize: '14px' , padding: '5px' }}></span>
                        {moment(item.dateOfIssue).format('ll')}
                    </p>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-end mt-2 ml-4">
            <Button onClick={view} type='button' variant='outline-secondary' className='me-2 fs--1 px-2 ml-6' style={{ borderRadius: '7px' , marginLeft:'10px' }}>
                <span>VIEW</span>
                <AiFillEye
                    height={40}
                    width={30}
                    alt="view button"
                />
            </Button>
            <Button onClick={edit} type='button' variant='primary' className='me-2 fs--1 px-2 ml-6' style={{ borderRadius: '7px' , marginLeft:'10px' }}>
                <span>EDIT</span>
                <BiEdit
                    height={40}
                    width={30}
                    alt="edit button"
                />
            </Button>
            <Button onClick={remove} type='button' variant='danger' className='me-2 fs--1 px-2 ml-6' style={{ borderRadius: '7px',  marginLeft:'10px' }}>
                <span>DELETE</span>
                <AiFillDelete
                    height={40}
                    width={30}
                    alt="delete button"
                />
            </Button>
        </div>
    </div>
    )
}

export default Invoice