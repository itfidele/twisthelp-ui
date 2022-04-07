
const CategoryItem=(props)=>{
    const {children,title}=props
    return <a href='/' className="focus:ring-2 w-full hover:shadow-md h-[150px] flex-col gap-4 rounded-md cursor-pointer py-6 items-center justify-center flex border-2 border-gray-200">
            { children }
            <h3 className="capitalize text-gray-">{ title }</h3>
        </a>
    

}


export default CategoryItem