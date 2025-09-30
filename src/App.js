import React from "react";
import { Button, Container } from "react-bootstrap";

class App extends React.Component {
    state = {
        person: {
            fullName: 'Jean Aristide',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et mauris in magna cursus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce interdum eget libero et finibus. Nullam eget libero lectus. Nunc pharetra lobortis magna non aliquam. Phasellus ultricies nunc at elit auctor pellentesque. Cras congue posuere sapien at cursus. Pellentesque ac lacus sapien. Suspendisse commodo aliquet sem, convallis dictum ante sollicitudin in. Integer eleifend augue non rhoncus pharetra. Integer vitae ante ultricies ex pretium euismod vitae id dui. Nam sodales nunc vel dui hendrerit, sed pellentesque magna tincidunt. ',
            imgSrc: 'https://placehold.co/200',
            profession: 'Developer'
        },
        show: true,
        mountedTime: 0
    }

    interval = null;

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                mountedTime: this.state.mountedTime + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <>
                <Container style={{marginTop: 10}}>
                    { this.state.show && (<div style={{marginBottom: 12, display: "flex", gap: 10}}>
                        <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
                        <div>
                            <h4>{this.state.person.fullName}</h4>
                            <h6>{this.state.person.profession}</h6>
                            <p style={{fontStyle: 'oblique', marginTop: 8}}>{this.state.person.bio}</p>
                        </div>
                    </div>)}
                    <Button style={{float: "right"}} variant="primary" onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Profile</Button>

                    <h4>Time since mounted: {this.state.mountedTime} seconds</h4>
                </Container>
            </>
        )
    }
}

export default App