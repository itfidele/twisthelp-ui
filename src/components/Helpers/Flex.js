
const Flex = props=>{
    const className='flex '+props.className;
    return <div className={className}>
        { props.children }
    </div>
}

export default Flex;