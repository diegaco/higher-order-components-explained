import React from 'react';

const withData = WrappedComponent => {
  class WithData extends React.Component {
    state = {
      data: [],
    };

    componentDidMount() {
      setTimeout(async () => {
        const res = await fetch(this.props.dataSource);
        const data = await res.json();
        this.setState({data: data.slice(0, 3)});
      }, 1500);
    }

    render() {
      const {dataSource, ...otherProps} = this.props;

      return this.state.data.length < 1 ? (
        <h1>LOADING</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      );
    }
  }

  return WithData;
};

export default withData;
