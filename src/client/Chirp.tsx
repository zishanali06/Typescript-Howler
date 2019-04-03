import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

export default class Chirps extends React.Component<IChirpProps, IChirpState> {
    constructor(props: IChirpProps) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {

        // let user = this.props.chirp.user;
        // let chirptext = this.props.chirp.chirp;
        // ABOVE IS SAME AS BELOW
        const { user, chirp } = this.props.chirp;
        return (
            <div className="text-left">
                <p className="border border-secondary rounded"><img src="http://joshi-ma.net/wp-content/uploads/e034.gif" alt="" />{`  ${user}: ${chirp}`}<Link to={`/chirp/${this.props.chirp.id}`}><button className="btn btn-secondary">Details</button></Link> </p>
            </div>
        )
    }
}

export interface IChirpProps {
    chirp: {
        id: string,
        user: string,
        chirp: string
    }
}

export interface IChirpState {
    user: string,
    chirptext: string
}