import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Chirps extends React.Component<IChirpProps, IChirpState> {
    constructor(props: IChirpProps) {
        super(props)
    }

    render() {
        return (
            <div className="text-left">
                {/* <p className="border border-secondary rounded"><img src="http://joshi-ma.net/wp-content/uploads/e034.gif" alt="" />{`  ${user}: ${chirptext}`}</p> */}
            </div>
        )
    }
}

export interface IChirpProps extends RouteComponentProps<{chirp: string}> {

}

export interface IChirpState {
    user: string,
    chirptext: string
}