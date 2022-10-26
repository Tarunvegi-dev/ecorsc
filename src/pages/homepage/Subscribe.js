import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { firestore } from '../../firebase/firebase-utils'
import { useForm } from "react-hook-form";

const Subscribe = () => {
    const [subscriptions, setsubscriptions] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {
        firestore.collection('subscriptions').get()
            .then((querySnapshot) => {
                let items = querySnapshot.docs.map((doc) => {
                    return {
                        ...doc.data()
                    }
                })
                setsubscriptions(items)
            })
    }, []);

    const Subscribe = (data) => {
        let index = subscriptions.findIndex((i) => i.mobile === data.phone)
        if (index !== -1) {
            alert('You are already subscribed')
            return;
        }
        firestore.collection('subscriptions').doc().set(data).then(() => {
            alert("Subscribed successfully")
            window.location.reload(true)
        })
    }

    return (
        <div className="Subscribe">
            <h3 className="title">Subscribe</h3>
            <p className="mute">Fill the form and get notifications of ECoRSC updates via mobile SMS</p>
            <Form onSubmit={handleSubmit(Subscribe)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Your Full Name" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select {...register("divison", { required: true })}>
                        <option>-- Select Divison --</option>
                        <option>Waltair</option>
                        <option>Khurda</option>
                        <option>Sambalpur</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select {...register("branch", { required: true })}>
                        <option>-- Select Branch --</option>
                        <option>Waltair</option>
                        <option>Khurda</option>
                        <option>Sambalpur</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="tel" placeholder="Enter your mobile number" {...register("phone", { required: true })} />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                    <br /><Form.Text className="text-muted" style={{ fontSize: '12px' }}>
                        By clicking submit, I agree to the Terms of Service and Privacy Policy.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" style={{ background: '#5B8D29', color: '#FFF', fontWeight: '700' }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Subscribe