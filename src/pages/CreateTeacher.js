import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from 'reactstrap';

export default function CreateTeacher() {
    const [teacherName, setTeacherName] = useState("")

    const onTeacherInput = e =>{
        setTeacherName(e.target.value)
        console.log(teacherName)
    }

    const onSubmitName = async e =>{
        e.preventDefault()
        const data ={
                        "data": {"name": teacherName}
                    }

        const options = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        }

        const response = await fetch(`http://localhost:1337/api/teachers`, options)
        if (response.ok === true){
            alert("Teacher created successfully")
            setTeacherName("")
        }
        else{
            alert("Invalid Method or End point")
        }
    }

    return (
        <Form onSubmit={onSubmitName} className='pt-5'>
            <Form.Group className="mb-3" controlId="teacherName">
                <Form.Label>Teacher Name</Form.Label>
                <Input onChange={onTeacherInput} value={teacherName} type="text" placeholder="Enter Teacher Name" />
            </Form.Group>
            <Button  variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
