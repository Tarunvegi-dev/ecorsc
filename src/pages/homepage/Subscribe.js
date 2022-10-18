import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { firestore } from '../../firebase/firebase-utils'

const Subscribe = () => {
    const [subscriptions, setsubscriptions] = useState([]);
    const [subscription, setsubscription] = useState({
        name: "",
        divison: "",
        branch: "",
        mobile: ""
    });

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

    const Subscribe = (e) => {
        e.preventDefault()
        let index = subscriptions.findIndex((i) => i.mobile === subscription.mobile)
        if (subscription.name === '' || subscription.divison === '' || subscription.branch === '' || subscription.mobile === '') {
            alert('Please fill all the fields')
            return;
        }
        if (index !== -1) {
            alert('You are already subscribed')
            return;
        }
        firestore.collection('subscriptions').doc().set(subscription).then(() => {
            alert("Subscribed successfully")
            window.location.reload(true)
        })
    }

    return (
        <div className="Subscribe">
            <h3 className="title">Subscribe</h3>
            <p className="mute">Fill the form and get notifications of ECoRSC updates via mobile SMS</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Your Full Name" onChange={(e) => setsubscription({ ...subscription, name: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select onChange={(e) => setsubscription({ ...subscription, divison: e.target.value })}>
                        <option>-- Select Divison --</option>
                        <option>Waltair</option>
                        <option>Khurda</option>
                        <option>Sambalpur</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select onChange={(e) => setsubscription({ ...subscription, branch: e.target.value })}>
                        <option>-- Select Branch --</option>
                        <option>Waltair</option>
                        <option>Khurda</option>
                        <option>Sambalpur</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="tel" placeholder="Enter your mobile number" onChange={(e) => setsubscription({ ...subscription, mobile: e.target.value })} />
                    <br /><Form.Text className="text-muted" style={{ fontSize: '12px' }}>
                        By clicking submit, I agree to the Terms of Service and Privacy Policy.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e) => Subscribe(e)} style={{ background: '#5B8D29', color: '#FFF', fontWeight: '700' }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Subscribe