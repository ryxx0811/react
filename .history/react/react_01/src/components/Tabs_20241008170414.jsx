export default function Tabs({children,buttons,ButtonsContainer}){
    ´
    return(
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
    );

}