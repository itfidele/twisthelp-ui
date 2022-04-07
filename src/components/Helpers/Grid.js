
const Grid=props=>{
    const {cols=1,className=''}=props
    return <div className={`grid ${className}`}>
        {props.children}
    </div>
}

export default Grid