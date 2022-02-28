
import { 
    DivWrapper,
    İmg,
    DivSection,
    Button,
    P1,DivPİnner,
    DivFooter,DivGeneralWrapper
 } from "../StayledComponents/MainCardComponentStayled"
import image from '../asset/images.png'


const MainCardComponents = ({content}) => {
    

const btn = () => {
alert(`id --> ${content.id}`)
}

return (
<DivGeneralWrapper> 

<DivWrapper>
<DivSection>
<İmg src={image}></İmg>
<DivPİnner>
<div>
<P1>name: {content?.name}</P1>
<P1>username: {content?.username}</P1>
</div>
</DivPİnner>
</DivSection>

<DivSection>

        <DivPİnner>
    <div>
        <h4>ADRESS</h4>
    <P1>street: {content.address.street}</P1>
<P1>suite:  {content.address.suite}</P1>
<P1>city: {content.address.city}</P1>
<P1>zipcode: {content.address.zipcode}</P1>
    </div>
        </DivPİnner>

        <DivPİnner>
<div>
<P1>lat: {content.address.geo.lat}</P1>
<P1>lng: {content.address.geo.lng}</P1>
</div>
        </DivPİnner>
</DivSection>

<DivFooter>
    <h4>conaction</h4>
<P1> email: {content.email}</P1>
<P1>phone: {content.phone}</P1>
<P1>website: {content.website}</P1>

</DivFooter>
<Button onClick={btn}>company detail</Button>
</DivWrapper>
</DivGeneralWrapper>
)
}

export default MainCardComponents
