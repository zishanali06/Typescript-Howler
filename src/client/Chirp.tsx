import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Chirps extends React.Component<IChirpProps, IChirpState> {
    constructor(props: IChirpProps) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        let user = this.props.chirp.user;
        let chirptext = this.props.chirp.chirp;
        console.log(user);
        console.log(chirptext);
        return (
            <div className="text-left">
                <p className="border border-secondary rounded"><img src="http://joshi-ma.net/wp-content/uploads/e034.gif" alt="" />{`  ${user}: ${chirptext}`}</p>
            </div>
        )
    }
}

export interface IChirpProps {
    chirp: {
        user: string,
        chirp: string
    }
}

export interface IChirpState {
    user: string,
    chirptext: string
}