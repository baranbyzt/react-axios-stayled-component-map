
import { 
    DivWrapper,
    İmg,
    DivSection,
    P1,DivPİnner,
    DivFooter,DivGeneralWrapper
 } from "../StayledComponents/MainCardComponentStayled"
import image from '../asset/images.png'


const MainCardComponents = () => {
return (
<DivGeneralWrapper>

<DivWrapper>

<DivSection>
<İmg src={image}></İmg>
<DivPİnner>
<div>
<P1>ALŞSDKFJKLASDF</P1>
<P1>ALŞSDKFJKLASDF</P1>
</div>
</DivPİnner>
</DivSection>

<DivSection>

        <DivPİnner>
    <div>
    <P1>ALŞSDKFJKLASDF</P1>
<P1>ALŞSDKFJKLASDF</P1>
<P1>ALŞSDKFJKLASDF</P1>
<P1>ALŞSDKFJKLASDF</P1>
    </div>
        </DivPİnner>

        <DivPİnner>
<div>
<P1>ALŞSDKFJKLASDF</P1>
<P1>ALŞSDKFJKLASDF</P1>
</div>
        </DivPİnner>
</DivSection>

<DivFooter>
<P1>LAKSDJFLKASDF</P1>
<P1>LAKSDJFLKASDF</P1>
<P1>LAKSDJFLKASDF</P1>
<P1>LAKSDJFLKASDF</P1>
</DivFooter>

</DivWrapper>

</DivGeneralWrapper>
)
}

export default MainCardComponents
