
const Grid=props=>{
    const {className=''}=props
    return <div className={`grid ${className}`}>
        {props.children}
    </div>
}

export default Grid