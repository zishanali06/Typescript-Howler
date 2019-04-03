import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';

export default class Chirpdetail extends React.Component<IChirpdetailProps, IChirpdetailState> {
    constructor(props: IChirpdetailProps) {
        super(props)
        this.state = {
            user: "",
            chirp: ""
        }
    }
    async componentDidMount() {
        let getchirpdata = await fetch('/api/chirp');
        let name = await getchirpdata.json();
        this.setState({
            user: name[this.props.match.params.id].username,
            chirp: name[this.props.match.params.id].chirp
        })
    }

    handleDeleteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        fetch(`/api/chirp/${this.props.match.params.id}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer"
        }).then(() => {
            window.location.replace('http://localhost:3000/')
        }).catch((err) => console.log(err));
    }

    render() {
        return ( 
            <section className="row text-center">
                <section className="col-12"><h1>Chirp Detials</h1></section>
                <section className="col-4"></section>
                <section className="col-4">
                <h3>Username: {this.state.user}</h3>
                <h3>Chirp: {this.state.chirp}</h3>
                </section>
                <section className="col-4"><button className="btn btn-danger" onClick={this.handleDeleteClick}>X</button></section>
            </section>
        )
    }
}

interface IChirpdetailProps extends RouteComponentProps<{ id: string }> {

}

interface IChirpdetailState {
    user: string,
    chirp: string
}