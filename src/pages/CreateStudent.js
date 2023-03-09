import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from 'reactstrap';

export default function CreateStudent() {
    const [allTeacher, setAllTeacher] = useState([])
    const [student, setStudent] = useState("")
    const [teacherId, setTeacherId] = useState("")

    useEffect(()=>{
        const url = `http://localhost:1337/api/teachers`
        const getTeacher = async () =>{
            const response = await fetch (url)
            const data = await response.json()
            //console.log(data.data)
            const gotedTeacher = data.data.map(eachData => ({id:eachData.id, name: eachData.attributes.name}))
            setAllTeacher([...gotedTeacher])
            //console.log(gotedTeacher)
        }
         getTeacher()
    },[])

    const onStudentInput = e =>{
        setStudent(e.target.value)
    }
    const onTeacherInput = e =>{
        setTeacherId(e.target.value)
    }

    const onSubmitName = async e =>{
        e.preventDefault()
        const url = `http://localhost:1337/api/students`
        const payload = {
            "data": {
              "Name":student ,
              "teachers": [parseInt(teacherId)]
            }
        }
        const options = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(payload)
        }

        const response = await fetch(url, options)
        //console.log(data)
        if (response.ok === true){
            alert(`${student} is Added successfuly to Students list`)
        }
        else{
            alert("Ivalid credentials or method")
        }
        //console.log(payload)
    }
    //console.log(allTeacher)
    //console.log(teacherId)
    return(
        <Form onSubmit={onSubmitName} className='pt-5'>
            <Form.Group className="mb-3" controlId="studentName">
                <Form.Label>Student Name</Form.Label>
                <Input value={student} onChange={onStudentInput} type="text" placeholder="Enter Student Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="teacherName">
                <Form.Label>Teacher Name</Form.Label>
                <Input onChange={onTeacherInput} type="select" placeholder="Please Select Teacher Name">
                    {
                        allTeacher.map((cv, idx)=>{
                            return <option key={idx} value = {cv.id} >{cv.name}</option>
                        }
                        )
                    }   
                </Input>
            </Form.Group>
            <Button  variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
    
}

