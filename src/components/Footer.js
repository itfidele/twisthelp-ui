import Wrapper from "./Helpers/Wrapper"
import Flex from './Helpers/Flex'
const Footer=()=>{
    return <Wrapper className='w-full bg-gray-100'>
        <Flex className='w-10/12 gap-6 flex-col mx-auto py-10'>
            <div>
                <h1 className="text-4xl font-bold text-gray-800">
                Still lost?<br/>We‘re here for you.
                </h1>
            </div>
            <div>
                <button className="capitalize bg-blue-600/80 p-2 hover:bg-blue-600/90 rounded py-1 text-white">
                    contact us
                </button>
            </div>
        </Flex>
    </Wrapper>
}


export default Footer