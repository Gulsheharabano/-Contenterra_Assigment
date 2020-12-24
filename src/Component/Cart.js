import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBMask, MDBCardImage } from 'mdbreact';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import decodeHtml from 'decode-html';


const Card = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://www.reddit.com/r/reactjs.json')
            .then(resp => {
                //console.log(resp.data.data.children)
                setPosts(resp.data.data.children)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    /*  const renderHTML = (escapedHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: escapedHTML } });
  */

    return (

        <div >
            <header>
                <MDBView className="logo">
                    <MDBMask overlay="indigo-slight" className="flex-center flex-column text-center">
                        <h2 style={{ color: 'deepskyblue' }}>Challenge Title</h2>
                    </MDBMask>
                </MDBView>
            </header>
            <br></br>
            <MDBCol >
                {posts.map((e) => (
                    <MDBCard style={{ width: "31rem" }} className="card" key={e.id}>
                        <MDBCardBody >

                            <MDBCardTitle>Title : {e.data.title}</MDBCardTitle>
                             Dscription :
                            <MDBCardImage className="img-fluid" src={e.data.selftext_html} waves ></MDBCardImage>
                            {/* <MDBCardText>Dscription :{e.data.selftext_html}</MDBCardText> */}
                            <MDBCardText>URL : <a className="a" href={e.data.url} target="_blank">{e.data.url}<br></br></a> </MDBCardText>
                            <MDBCardText>Score : {e.data.score}</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                ))}
                <br></br>
            </MDBCol>
        </div>
    )
}

export default Card;
