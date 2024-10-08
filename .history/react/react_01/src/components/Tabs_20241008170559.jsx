export default function Tabs({children,buttons,ButtonsContainer}){
    // const Buttons
    return(
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
    );

}