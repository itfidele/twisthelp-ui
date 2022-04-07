import Grid from '../Helpers/Grid'
import Wrapper from '../Helpers/Wrapper'
import CategoryItem from './CategoryItem'
import GuideImg from '../../img/guide.webp'
import FeatureImg from '../../img/features.webp'
import TurboImg from '../../img/turbo.webp'
import CoinImg from '../../img/coin.webp'
import ItemImg from '../../img/items.webp'
const Categories=()=>{
    const category = [
        {
            title:'getting started',
            img:TurboImg
        },
        {
            title:'features',
            img:FeatureImg
        },
        {
            title:'guide',
            img:GuideImg
        },
        {
            title:'billing',
            img:CoinImg
        },
        {
            title:'intergrations',
            img:ItemImg
        },
    ]

    return <Wrapper className='w-9/12 mx-auto p-4 my-6'>
        <Grid className='grid-cols-5 gap-6 place-items-center place-content-center'>
            { category.map((cat)=><CategoryItem title={cat.title}>
                <img src={cat.img} width={56} alt={cat.title}/>
                
            </CategoryItem>)}
        </Grid>
    </Wrapper>
}

export default Categories