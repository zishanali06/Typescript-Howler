import * as React from 'react';
import Chirps from './Chirp';

export default class Timeline extends React.Component<ITimelineProps, ITimelineState> {

    constructor(props: ITimelineProps) {
        super(props);
        
        this.state = {
            chirpArray: [],
            user: "",
            chirptext: "",
            count: 1001
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
        this.setState({ 
            chirpArray: newchirparray,
            count: name.nextid
         });
    }

    handleonClick = (e: React.MouseEvent) => {
        e.preventDefault();
        let chirp = {
            username: this.state.user,
            chirp: this.state.chirptext
        };

        fetch('/api/chirp', {
            method: "POST", 
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", 
            referrer: "no-referrer", 
            body: JSON.stringify(chirp) // body data type must match "Content-Type" header
        }).then(() => {
            let chirptoaddinarray = {
                id: this.state.count.toString(),
                user: chirp.username,
                chirp: chirp.chirp
            }
            this.setState({
                chirpArray: [ ...this.state.chirpArray, chirptoaddinarray],
                user: "",
                chirptext: "",
                count: this.state.count + 1
            })
        }).catch((err) => console.log(err));
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
                    <section className="col-4">
                        <form className="form-group p-3 border border-info rounded col-md-12">
                            <input
                                type="text"
                                placeholder="Type Chirp Here"
                                className="my-3 form-control"
                                value={this.state.chirptext}
                                onChange={e => this.setState({ chirptext: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Type Username Here"
                                className="my-3 form-control"
                                value={this.state.user}
                                onChange={e => this.setState({ user: e.target.value })} />
                            <br />
                            <button className="btn btn-outline-primary btn-sm" onClick={this.handleonClick}>Click to Add <img src="http://joshi-ma.net/wp-content/uploads/e034.gif" alt="" /></button>
                        </form>
                    </section>
                    <section className="col-4">
                        {this.state.chirpArray.map((chirp) => {
                            return <Chirps chirp={chirp} key={chirp.id} />
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
    chirpArray: {
        id: string,
        user: string,
        chirp: string
    }[];
    user: string;
    chirptext: string;
    count: number;
}
