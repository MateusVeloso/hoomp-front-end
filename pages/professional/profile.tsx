import NavBar from 'components/navbar';
import Header from 'components/professional/profile/header';

function Profile() {



    return (
        <div style={{ overflowX: "hidden" }}>
            <NavBar />
            <Header />
            {/* <Container fluid style={{ "maxWidth": "1200px", "marginBottom": "250px" }}>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container> */}
            <style jsx global>
                {`
                    body {
                        background: rgba(0,0,0,0.04) !important;
                    }
                `}
            </style>
        </div>
    )
}


export default Profile;