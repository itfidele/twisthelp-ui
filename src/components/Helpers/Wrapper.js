const Wrapper = props=>{
    const {className} = props;
    return <div className={className}>
        { props.children }
    </div>;
}

export default Wrapper;