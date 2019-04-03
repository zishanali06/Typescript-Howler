import * as React from 'react';
import { RouteComponentProps } from 'react-router';

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
        console.log(name[this.props.match.params.id].username);
        this.setState({
            user: name[this.props.match.params.id].username,
            chirp: name[this.props.match.params.id].chirp
        })
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
                <section className="col-4"></section>
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