import Grid from './Helpers/Grid'
import Flex from './Helpers/Flex'

const Search=()=>{
    return <Grid className="place-items-center my-20">
                <Grid className="place-items-center">
                    <h2 className='text-3xl font-bold text-gray-800'>How can we help?</h2>
                    <Flex className={`bg-gray-200 p-2 my-6 group shadow-gray-200 shadow-inner rounded-lg justify-center items-center`}>
                        <div className='px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-gray-400 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input className='bg-gray-200 w-[500px] outline-none text-md px-2 py-1' placeholder='Search'/>
                    </Flex>
                </Grid>

                <Flex className="text-sm gap-2">
                    <div>Common Topics</div>
                    <Flex className="space-x-1 text-sm text-blue-500">
                        <a href='#'>channels</a>,
                        <a href='#'>threads</a>,
                        <a href='#'>messages</a>
                    </Flex>
                </Flex>
            </Grid>

}

export default Search;