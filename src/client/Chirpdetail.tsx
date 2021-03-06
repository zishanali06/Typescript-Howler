import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

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
            this.props.history.goBack();
        }).catch((err) => console.log(err));
    }

    render() {
        let chirp = {
            username: this.state.user,
            chirp: this.state.chirp
        };
        return ( 
            <section className="row text-center">
                <section className="col-12"><h1>Chirp Detials</h1></section>
                <section className="col-2"></section>
                <section className="col-8">
                <h3>Username: {this.state.user}</h3>
                <h3>Chirp: {this.state.chirp}</h3>
                <Link to={`/chirp/${this.props.match.params.id}/edit`} className="btn btn-dark">Change Chirp</Link>
                </section>
                <section className="col-2"><button className="btn btn-danger" onClick={this.handleDeleteClick}>X</button></section>
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