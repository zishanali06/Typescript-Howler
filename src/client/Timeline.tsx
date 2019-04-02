import * as React from 'react';
import Chirps from './Chirp';

export default class Timeline extends React.Component<ITimelineProps, ITimelineState> {

    constructor(props: ITimelineProps) {
        super(props);
        this.state = {
            chirpArray: []
        }
    }

    async componentDidMount() {
        let getchirpdata = await fetch('/api/chirp');
        let name = await getchirpdata.json();
        let newchirparray = Object.keys(name).map(id => {
            return {
                id,
                user: name[id].username,
                chirp: name[id].chirp
            }
        });
        newchirparray.pop();
        this.setState({ chirpArray: newchirparray });
    }

    render() {
        return (
            <React.Fragment>
                <section className="row">
                    <section className="col-4"></section>
                    <section className="col-4"><h3 className="text-center">Timeline</h3></section>
                    <section className="col-4"></section>
                </section>
                <section className="row">
                    <section className="col-4"></section>
                    <section className="col-4">
                    {this.state.chirpArray.map((chirp: Object, index) => {
                        return <Chirps chirp={chirp} key={index} />
                    })}
                    </section>
                    <section className="col-4"></section>
                </section>
            </React.Fragment>
        )
    }
}

interface ITimelineProps {

}

interface ITimelineState {
    chirpArray: Array<any>
}
