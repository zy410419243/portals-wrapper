import React, { Component } from 'react';
import moment from 'moment';

export interface CurrentTimeState {
  time: string;
}

export default class CurrentTime extends Component<any, CurrentTimeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      time: moment().format('HH:mm:ss'),
    };
  }

  componentDidMount = () => {
    this.getCurrentTime();
  };

  getCurrentTime = () => {
    setInterval(() => {
      this.setState({ time: moment().format('HH:mm:ss') });
    }, 1000);
  };

  render = () => {
    const { time } = this.state;

    return <div className="CurrentTime">{time}</div>;
  };
}
